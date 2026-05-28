import Nav from "@/components/Nav";

export const metadata = { title: "Reading - Jacob Fedrigon" };

type BookHighlight = {
  title: string;
  author: string;
  rating: string;
  review: string;
};

type BookList = {
  industry?: string[];
  fiction?: string[];
  nonFiction?: string[];
};

function HighlightsTable({ books }: { books: BookHighlight[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="border-collapse text-sm w-full">
        <thead>
          <tr>
            {["Title", "Author", "Rating", "Review"].map((h) => (
              <th
                key={h}
                className="border border-gray-800 dark:border-gray-500 px-3 py-2 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.title}>
              <td className="border border-gray-800 dark:border-gray-500 px-3 py-2 align-top max-w-[150px]">{b.title}</td>
              <td className="border border-gray-800 dark:border-gray-500 px-3 py-2 align-top max-w-[150px]">{b.author}</td>
              <td className="border border-gray-800 dark:border-gray-500 px-3 py-2 align-top whitespace-nowrap">{b.rating}</td>
              <td className="border border-gray-800 dark:border-gray-500 px-3 py-2 align-top max-w-[300px] text-gray-600 dark:text-gray-400">{b.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BookListSection({ books }: { books: BookList }) {
  return (
    <div className="my-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      {books.industry && (
        <>
          <p className="font-semibold">Industry</p>
          {books.industry.map((b) => <p key={b}>{b}</p>)}
        </>
      )}
      {books.fiction && (
        <>
          <p className="font-semibold mt-2">Fiction</p>
          {books.fiction.map((b) => <p key={b}>{b}</p>)}
        </>
      )}
      {books.nonFiction && (
        <>
          <p className="font-semibold mt-2">Non-Fiction</p>
          {books.nonFiction.map((b) => <p key={b}>{b}</p>)}
        </>
      )}
    </div>
  );
}

export default function Reading() {
  return (
    <main className="min-h-screen pb-16">
      <div className="ml-[12%] max-w-2xl pt-10">
        <h1 className="text-4xl font-bold italic mb-6">Reading</h1>
        <Nav />

        {/* 2025 */}
        <h2 className="text-xl font-bold italic mt-10 mb-2">2025: Book List</h2>
        <BookListSection
          books={{
            fiction: [
              "Frankenstein - Mary Shelley",
              "Norwegian Wood - Haruki Murakami",
              "The Grapes Of Wrath - John Steinbeck",
              "The Plague - Albert Camus",
              "Wind And Truth - Brandon Sanderson",
              "The Poppy War - R.F. Kuang",
              "Project Hail Mary - Andy Weir",
            ],
            nonFiction: [
              "Kitchen Confidential - Anthony Bourdain",
              "Letters From Japan - Marie Kondo",
              "On Writing - Stephen King",
            ],
          }}
        />

        {/* 2024 highlights */}
        <h2 className="text-xl font-bold italic mt-10 mb-2">2024: Book Highlights</h2>
        <HighlightsTable
          books={[
            {
              title: "Letters to a Young Poet",
              author: "Ranier Maria Rilke",
              rating: "4/5",
              review:
                '"If you will stay close to nature, to its simplicity, to the small things hardly noticeable, those things can become great and immeasurable." / "You are so young; you stand before beginnings... Try to love the questions themselves,"',
            },
            {
              title: "The Dispossessed",
              author: "Ursula K. Le Guin",
              rating: "4.75/5",
              review: "",
            },
            {
              title: "The Woman Destroyed",
              author: "Simone de Beauvoir",
              rating: "4/5",
              review:
                "Three short stories, each crushing in their own way. This book was emotionally taxing, infinitely relatable in its sorrow, and insightful to the woman's experience.",
            },
          ]}
        />

        {/* 2024 list */}
        <h2 className="text-xl font-bold italic mt-10 mb-2">2024: Book List</h2>
        <BookListSection
          books={{
            industry: ["Effective C++ - Scott Meyers"],
            fiction: [
              "Dune - Frank Herbert",
              "Pride and Prejudice - Jane Austen",
              "The Narrow Road Between Desires - Patrick Rothfuss",
              "A Room of One's Own - Virginia Woolf",
            ],
            nonFiction: [
              "Although of Course You End Up Becoming Yourself - David Lipsky",
              "Maus I : A Survivor's Tale. My Father Bleeds History - Art Spiegelman",
              "Maus II : A Survivor's Tale. And Here My Trouble Began - Art Spiegelman",
              "Shop Class as Soulcraft - Matthew B. Crawford",
              "How to Do Nothing - Jenny Odell",
              "Letters to a Young Poet - Ranier Maria Rilke",
            ],
          }}
        />

        {/* 2023 highlights */}
        <h2 className="text-xl font-bold italic mt-10 mb-2">2023: Book Highlights</h2>
        <HighlightsTable
          books={[
            { title: "Another Country", author: "James Baldwin", rating: "5/5", review: "" },
            { title: "Parable Of The Sower", author: "Octavia E. Butler", rating: "4.5/5", review: "" },
            { title: "Consider the Lobster", author: "David Foster Wallace", rating: "4.5/5", review: "" },
          ]}
        />

        {/* 2023 list */}
        <h2 className="text-xl font-bold italic mt-10 mb-2">2023: Book List</h2>
        <BookListSection
          books={{
            industry: ["The Rust Programming Language - Steve Klabnik, Carol Nichols"],
            fiction: [
              "Foundation - Isaac Asimov",
              "Where the Crawdads Sing - Delia Owens",
              "Parable of the Sower - Octavia E. Butler",
              "Edgedancer - Brandon Sanderson",
              "The Song of Achilles - Madeline Miller",
              "Monstrous Regiment - Terry Pratchett",
            ],
            nonFiction: [
              "Zen and the Art of Motorcycle Maintenance - Robert M. Pirsig",
              "The Chaos Machine - Max Fischer",
              "Consider the Lobster - David Foster Wallace",
              "Notes On A Nervous Planet - Matt Haig",
              "Dopamine Nation - Anna Lembke",
              "Into Thin Air - Jon Krakauer",
              "Into The Wild - Jon Krakauer",
              "Waking Up - Sam Harris",
              "Ten Arguments for Deleting your Social Media Accounts Right Now - Jaron Lanier",
            ],
          }}
        />
      </div>
    </main>
  );
}
