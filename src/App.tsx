import React, { useState } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'} shadow-lg`}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">AMAN VISHWAKARMA</h1>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>+91-9977959918</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>aman031298@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>Jabalpur, Madhya Pradesh</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/aman-vishwakarmaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/aman031298" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-600 transition-colors duration-200"
            >
              <Github size={16} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </header>

        {/* Education */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Shri Ram Institute of Science and Technology Jabalpur</h3>
              <p className="text-sm">Bachelor of Technology in Computer Science and Engineering</p>
              <p className="text-sm">July 2020 – June 2024</p>
              <p className="text-sm">8.67 C.G.P.A.</p>
            </div>
            <div>
              <h3 className="font-semibold">Gurukul High Secondary School</h3>
              <p className="text-sm">12th - 80%</p>
            </div>
            <div>
              <h3 className="font-semibold">Maharashtra High Secondary School</h3>
              <p className="text-sm">10th - 68.66%</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Persistent System</h3>
              <p className="text-sm italic">Software Engineer (Intern) | June 2023 - August 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li className="text-sm">Engineered an improved user interface for the internal website by creating responsive landing pages with HTML, CSS, and JavaScript; the enhancements led to a 25% reduction in page load time.</li>
                <li className="text-sm">Enhanced website performance in collaboration with the team, achieving a 20% faster load time for key pages.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Future Ready Talent (Microsoft)</h3>
              <p className="text-sm italic">Front-End Developer (Intern) | April 2023 – June 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li className="text-sm">Designed and launched a fully functional medical website leveraging HTML, CSS, JavaScript, and Bootstrap, resulting in a 30% increase in user retention.</li>
                <li className="text-sm">Integrated and configured Azure Chatbot for real-time health consultation and advice, reducing user response time by 30%.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Swift Cart</h3>
              <p className="text-sm italic">March 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li className="text-sm">Designed and developed "Swift Cart," a feature-rich e-commerce platform leveraging HTML, CSS, JavaScript, Bootstrap, Java Advanced, and MySQL.</li>
                <li className="text-sm">Implemented key functionalities including user authentication, product browsing, add-to-cart, and checkout workflows.</li>
                <li className="text-sm">Developed a responsive and intuitive front-end interface using HTML, CSS, JavaScript, and Bootstrap.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Client Magnet – Customer Relationship Management System</h3>
              <p className="text-sm italic">April 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li className="text-sm">Engineered a robust application software using Java to streamline sales team workflows.</li>
                <li className="text-sm">Devised and integrated Oracle SQL solutions for secure and efficient database management.</li>
                <li className="text-sm">Established distinct user roles with tailored privileges, optimizing system security and functionality.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="text-sm">C++, Core Java, J2EE</p>
            </div>
            <div>
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-sm">HTML, CSS, JavaScript</p>
            </div>
            <div>
              <h3 className="font-semibold">Technologies/Frameworks</h3>
              <p className="text-sm">Bootstrap, Spring Framework, Spring Boot</p>
            </div>
            <div>
              <h3 className="font-semibold">Databases</h3>
              <p className="text-sm">SQL, MySQL, SQLite</p>
            </div>
            <div>
              <h3 className="font-semibold">General</h3>
              <p className="text-sm">Data Structures, Object Oriented Programming</p>
            </div>
            <div>
              <h3 className="font-semibold">Other</h3>
              <p className="text-sm">Git, GitHub, REST APIs, Hibernate, Basic Cloud</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-sm">First runner-up in a National Level Software Development Championship (Hackathon) at St. Aloysius College (Autonomous), Jabalpur.</li>
            <li className="text-sm">Participated in NETATHON2023, tackled an e-commerce problem statement, and gained hands-on development experience.</li>
            <li className="text-sm">Volunteered in the 36-hour The Grate India Hackathon, contributing to the event's success through organizational support.</li>
            <li className="text-sm">Earned SQL certifications from the University of Michigan and Hackerrank.</li>
            <li className="text-sm">Awarded NCC 'A' Certificate by 4 MPCTR (Indian Army).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;