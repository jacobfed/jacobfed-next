import Nav from "@/components/Nav";

export const metadata = { title: "Resume – Jacob Fedrigon" };

const RESUME_PDF =
  "https://drive.google.com/file/d/1FNfAkvAMsv0bqTqd9WchzbnR2e4IwjK9/view?usp=sharing";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700 pb-1 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Job({
  company,
  title,
  period,
  bullets,
}: {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 mb-2">
        <div>
          <span className="font-semibold">{company}</span>
          <span className="text-gray-500 dark:text-gray-400"> · {title}</span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">{period}</span>
      </div>
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Project({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-4">
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{description}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen pb-20">
      <div className="max-w-2xl mx-auto px-6 pt-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold italic">Jacob Fedrigon</h1>
            <div className="mt-2 space-y-0.5 text-sm text-gray-500 dark:text-gray-400">
              <p>(231) 313-5184</p>
              <p>jacobfedrigon@gmail.com</p>
              <p>jacobfedrigon.com</p>
            </div>
          </div>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm border border-gray-300 dark:border-gray-600 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors shrink-0 self-start"
          >
            ↓ Download PDF
          </a>
        </div>

        <Nav />

        {/* Objective */}
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Software engineer with more than 5 years of experience in full-stack web development
          and enterprise software. Specializes in C#/.NET, cloud services (Azure/AWS), CI/CD,
          and test-driven development. Focused on crafting concise designs, writing
          high-performance code, and delivering reliable production support by enhancing
          observability practices.
        </p>

        {/* Experience */}
        <Section title="Experience">
          <Job
            company="Hagerty"
            title="Software Engineer"
            period="2024 – present"
            bullets={[
              "Implemented C#/.NET8 web services to facilitate data exchange between external clients and internal systems.",
              "Automated deployments across multiple environments via CI/CD pipelines and Infrastructure as Code (IaC).",
              "Engineered a customer digital account conversion solution, prioritizing performance and test-driven development.",
              "Resolved production incidents through on-call support, deploying swift .NET and SQL fixes to minimize downtime.",
              "Mentored junior engineers on object-oriented design, test-driven development (TDD), and observability.",
            ]}
          />
          <Job
            company="Planned Career Sabbatical"
            title="Family Relocation, Bicycle Travel & Professional Development"
            period="2023 (4 months)"
            bullets={[
              "Toured by bicycle across Europe and the American Northeast and Midwest.",
              "Consistently volunteered at the Playhouse Square Performing Arts Center in Cleveland, Ohio.",
              "Completed courses in C++, Swift, and Rust and engaged in personal projects to refine development skills.",
            ]}
          />
          <Job
            company="Epic Systems"
            title="Software Developer, Value-Based Analytics"
            period="2021 – 2023"
            bullets={[
              "Designed and developed scheduled tasks for Azure-to-Azure communication and data transfer using C#, multiple Azure SDKs, and blob storage accounts.",
              "Implemented analytics dashboard updates, collaborated with customers on features, and improved performance by 2x.",
              "Led the release of the Value-Based Performance Management product — developed a unit-testable release structure, performance tested the product, and coordinated with division managers for a smooth rollout.",
              "Developed critical fixes for bugs impacting hospitals worldwide using M, C#, .NET, and SQL.",
              "Reviewed over 130 projects, focusing on performance, code coverage, and security.",
            ]}
          />
          <Job
            company="USAA Real Estate"
            title="Software Development Intern, Business Applications"
            period="2019 – 2020"
            bullets={[
              "Developed an app facilitating charitable donations and automated debit of accounts using an Angular front-end and a Web API backend with .NET Core.",
              "Organized and led meetings with 5 departments to develop requirements for dataflow, security, and the user interface.",
              "Integrated the application with Microsoft Azure as the first project on the new platform for the corporation.",
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 mb-2">
              <div>
                <span className="font-semibold">University of Michigan</span>
                <span className="text-gray-500 dark:text-gray-400"> · Ann Arbor, MI</span>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">2016 – 2020</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bachelor of Science in Computer Science, Minor in Philosophy
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 leading-relaxed">
              EECS 482 Operating Systems · EECS 485 Web Databases & Information Systems ·
              EECS 492 Artificial Intelligence · EECS 445 Machine Learning ·
              EECS 376 Foundations of Computer Science · EECS 370 Computer Organization ·
              EECS 281/280 Data Structures & Algorithms · EECS 203 Discrete Mathematics ·
              MATH 214 Linear Algebra · STATS 250 Statistics ·
              PHIL 361 Ethics · PHIL 340 Minds and Machines · EECS 494 Game Design
            </p>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Project
            title="Network File Server"
            description="Implemented a multi-threaded, secure network file server in C++ using socket programming to create and maintain a secure file system between client and server."
          />
          <Project
            title="3D Strategy Fishing Game"
            description="Created a fully-featured strategy fishing game in C# using Unity with real-world boat movement, a robust fishing mechanic, and dynamic object interaction."
          />
          <Project
            title="MapReduce Server"
            description="Coded a multi-process, multi-thread MapReduce server capable of executing any user-submitted job with an arbitrary number of workers using UDP and TCP for heartbeat messages and worker orders."
          />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-500 w-24 shrink-0">Technical</span>
              <span className="text-gray-600 dark:text-gray-400">
                C#, C++, Python, C, Terraform, AWS, Rust, SQL, Swift, Unity, HTML, LaTeX, Flask, Angular, TypeScript, MUMPS
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-500 w-24 shrink-0">Hobbies</span>
              <span className="text-gray-600 dark:text-gray-400">
                Cyclist, Bikepacker, Musician, Photographer, Diver, Surfer, Hand Sewing
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-400 dark:text-gray-500 w-24 shrink-0">Volunteer</span>
              <span className="text-gray-600 dark:text-gray-400">
                Playhouse Square Performing Arts Center
              </span>
            </div>
          </div>
        </Section>

      </div>
    </main>
  );
}
