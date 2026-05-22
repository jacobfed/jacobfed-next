"use client";

import { useEffect, useRef, useState } from "react";

const FILE_CONTENT = [
  "-- neovim config",
  "",
  "-- https://github.com/jacobfed/lazyvim",
  "",
  "-- type :q to exit",
];

type Mode = "normal" | "command";

export default function NvimEasterEgg() {
  const [nvimOpen, setNvimOpen] = useState(false);
  const [cmdBarOpen, setCmdBarOpen] = useState(false);
  const [cmdBuffer, setCmdBuffer] = useState("");
  const [cmdError, setCmdError] = useState("");
  const [mode, setMode] = useState<Mode>("normal");
  const [cursor, setCursor] = useState(0);

  // Blink cursor
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => (c === 0 ? 1 : 0)), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Don't hijack typing in inputs/textareas
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (nvimOpen) {
        // Inside nvim overlay
        if (mode === "command") {
          if (e.key === "Enter") {
            const cmd = cmdBuffer.trim();
            if (cmd === "q" || cmd === "q!" || cmd === "wq") {
              setNvimOpen(false);
              setCmdBarOpen(false);
              setCmdBuffer("");
              setCmdError("");
              setMode("normal");
            } else {
              setCmdError(`E492: Not an editor command: ${cmd}`);
              setCmdBuffer("");
              setMode("normal");
            }
          } else if (e.key === "Escape") {
            setCmdBuffer("");
            setCmdError("");
            setMode("normal");
          } else if (e.key === "Backspace") {
            setCmdBuffer((b) => {
              const next = b.slice(0, -1);
              if (next === "") setMode("normal");
              return next;
            });
          } else if (e.key.length === 1) {
            setCmdBuffer((b) => b + e.key);
          }
        } else {
          // normal mode inside nvim
          if (e.key === ":") {
            e.preventDefault();
            setMode("command");
            setCmdBuffer("");
            setCmdError("");
          } else if (e.key === "Escape") {
            setCmdError("");
          }
        }
        return;
      }

      // Global — command bar
      if (cmdBarOpen) {
        if (e.key === "Enter") {
          const cmd = cmdBuffer.trim();
          if (cmd === "wq" || cmd === "e" || cmd === "edit") {
            setNvimOpen(true);
            setCmdBarOpen(false);
            setCmdBuffer("");
            setCmdError("");
            setMode("normal");
          } else if (cmd === "q" || cmd === "q!") {
            setCmdBarOpen(false);
            setCmdBuffer("");
            setCmdError("");
          } else {
            setCmdError(`E492: Not an editor command: ${cmd}`);
            setCmdBuffer("");
            setCmdBarOpen(false);
          }
        } else if (e.key === "Escape") {
          setCmdBarOpen(false);
          setCmdBuffer("");
          setCmdError("");
        } else if (e.key === "Backspace") {
          e.preventDefault();
          setCmdBuffer((b) => {
            const next = b.slice(0, -1);
            if (next === "") setCmdBarOpen(false);
            return next;
          });
        } else if (e.key.length === 1) {
          e.preventDefault();
          setCmdBuffer((b) => b + e.key);
        }
        return;
      }

      // Idle — open command bar on :
      if (e.key === ":") {
        e.preventDefault();
        setCmdBarOpen(true);
        setCmdBuffer("");
        setCmdError("");
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nvimOpen, cmdBarOpen, cmdBuffer, mode]);

  // Clear error after a moment
  useEffect(() => {
    if (cmdError) {
      const t = setTimeout(() => setCmdError(""), 3000);
      return () => clearTimeout(t);
    }
  }, [cmdError]);

  const showCmdBar = cmdBarOpen || !!cmdError;

  return (
    <>
      {/* Global command bar — always mounted, shown on : */}
      {showCmdBar && !nvimOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-900 border-t border-neutral-700 px-4 py-1 text-sm font-[family-name:var(--font-jetbrains-mono)] flex items-center">
          {cmdError ? (
            <span className="text-[#f7768e]">{cmdError}</span>
          ) : (
            <span className="text-white">
              :{cmdBuffer}
              <span className={cursor ? "opacity-100" : "opacity-0"}>█</span>
            </span>
          )}
        </div>
      )}

      {/* Nvim overlay */}
      {nvimOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1b26] text-[#a9b1d6] font-[family-name:var(--font-jetbrains-mono)] text-sm flex flex-col">
          {/* Top bar */}
          <div className="bg-[#16161e] px-4 py-1 text-xs text-[#565f89] flex justify-between">
            <span>init.lua</span>
            <span>Jacob Fedrigon</span>
          </div>

          {/* Editor area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Line numbers */}
            <div className="px-3 pt-2 text-right text-[#565f89] select-none min-w-[3rem]">
              {FILE_CONTENT.map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>

            {/* Content */}
            <div className="pt-2 flex-1 overflow-auto">
              {FILE_CONTENT.map((line, i) => (
                <div key={i} className="leading-6 px-2 whitespace-pre">
                  <SyntaxLine line={line} />
                </div>
              ))}
            </div>
          </div>

          {/* Status line */}
          <div className="bg-[#7aa2f7] text-[#1a1b26] px-4 py-0.5 text-xs flex justify-between font-semibold">
            <span>{mode === "command" ? "COMMAND" : "NORMAL"}</span>
            <span>init.lua</span>
            <span>ln 1, col 1</span>
          </div>

          {/* Command line */}
          <div className="bg-[#1a1b26] px-4 py-1 text-xs h-6 flex items-center">
            {mode === "command" ? (
              <span className="text-white">
                :{cmdBuffer}
                <span className={cursor ? "opacity-100" : "opacity-0"}>█</span>
              </span>
            ) : cmdError ? (
              <span className="text-[#f7768e]">{cmdError}</span>
            ) : (
              <span className="text-[#565f89]">type :q to close</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function SyntaxLine({ line }: { line: string }) {
  if (line.startsWith("--")) {
    const urlMatch = line.match(/(https?:\/\/\S+)/);
    if (urlMatch) {
      const url = urlMatch[1];
      const before = line.slice(0, line.indexOf(url));
      return (
        <span className="text-[#565f89] italic">
          {before}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7aa2f7] underline underline-offset-2 hover:text-[#a9b1d6]"
          >
            {url}
          </a>
        </span>
      );
    }
    return <span className="text-[#565f89] italic">{line}</span>;
  }
  return <span>{line}</span>;
}
