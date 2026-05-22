import Nav from "@/components/Nav";

export const metadata = { title: "Contact – Jacob Fedrigon" };

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-16 pb-16 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold italic mb-6">Contact</h1>
        <Nav />
        <div className="mt-10 space-y-3 text-gray-700 dark:text-gray-300">
          <p>Please feel free to reach out to me by email or LinkedIn.</p>
          <p>Email: jacobfedrigon@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jacob-fedrigon/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jacob Fedrigon
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
