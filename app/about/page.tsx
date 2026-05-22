import Nav from "@/components/Nav";

export const metadata = { title: "FAQ – Jacob Fedrigon" };

const faqs = [
  { q: "Who are you?", a: "" },
  { q: "What do you do?", a: "" },
  { q: "What are you working on?", a: "" },
  {
    q: "How can I reach you?",
    a: (
      <>
        Email: jacobfedrigon@gmail.com — or find me on{" "}
        <a
          href="https://www.linkedin.com/in/jacob-fedrigon/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </>
    ),
  },
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-16 pb-16 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold italic mb-6">FAQ</h1>
        <Nav />
        <div className="mt-10 space-y-8">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold mb-1">{q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{a || <span className="text-gray-300 dark:text-gray-600 italic">coming soon</span>}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
