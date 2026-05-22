"use client";

import { useEffect } from "react";

export default function Clock() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//w.24timezones.com/l.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <span>Current time in New York City:</span>
      <a
        href="//24timezones.com/New_York/time"
        style={{ textDecoration: "none" }}
        className="clock24"
        id="tz24-1706134678-c1417-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMCIsInNob3dzZWNvbmRzIjoiMCIsInNob3d0aW1lem9uZSI6IjEiLCJ0eXBlIjoiZCIsImxhbmciOiJlbiJ9"
        title="New York City clock"
        target="_blank"
        rel="nofollow noreferrer"
      />
    </span>
  );
}
