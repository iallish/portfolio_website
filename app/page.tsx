import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="Ian-Allish.jpg"
              width={0}
              height={0}
              alt="Picture of the author"
              unoptimized={true}
              style={{ height: "400px", width: "auto" }}
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ian Allish</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate developer building digital experiences that matter.
          </p>
          <a
            href="/projects"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About/Skills Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          I specialize in building clean, responsive, and user-friendly web
          applications. I love solving complex problems with elegant code and
          learning new technologies daily.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-300 dark:bg-gray-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 border-b pb-2">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A potfolio website created to increase my familiarity with
                tailwindcss and Next.JS.
              </p>
              <a
                href="https://github.com/iallish/portfolio_website"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View Project &rarr;
              </a>
            </div>
            {/* Project Card 2 */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Project Two</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Filler words for now
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project &rarr;
              </a>
            </div>
            {/* Project Card 3 */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Project Three</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Filler Words
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="py-12 px-6 text-center border-t">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          I'm currently open to new opportunities and collaborations.
        </p>
        <div className="flex justify-center space-x-6 text-lg md:text-2xl text-gray-500 dark:text-gray-300">
          <a
            href="https://github.com/iallish"
            target="_blank"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a href="#" target="_blank" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white">
            <IoIosMail />
          </a>
        </div>
      </footer>
    </main>
  );
}
