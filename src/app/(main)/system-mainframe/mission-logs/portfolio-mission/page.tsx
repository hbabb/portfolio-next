'use client';
import { DateConverter } from "@/components/layout/StardateCalc";

export default function PortfolioProject() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2 w-full">
      <main className="flex flex-col items-center justify-center p-8 rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-lilac shadow-lg text-sm">

      <div className="flex flex-col items-center justify-center w-full border-b-2 border-lcars-gray mb-3">
          {/* <div className="w-full">
            <h3 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-gold border-b-2 border-lcars-gold">
            SERVICE RECORD
          </h3>
          </div> */}
          
          <nav className="flex-1 flex items-center justify-center w-full mb-3">
            <a href="/system-mainframe/mission-logs/portfolio-mission" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                PORTFOLIO MISSION
            </a>
            <a href="/system-mainframe/mission-logs/portfolio-mission/technical-appendix" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TECHNICAL APPENDIX
            </a>
            {/* <a href="/system-mainframe/personnel-database/service-record/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                QUALIFICATIONS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TRAINING RECORDS
            </a> */}
          </nav>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-gold underline text-center">
            After Action Report: Digital Bridge Portfolio
          </h1>
          <DateConverter date={"2024-11-04"} className="text-lcars-tomato text-lg" />

          <div className="text-lcars-violetCreme font-lcars space-y-6 text-justify">
            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Mission Vision</h2>
              <p>
                This portfolio serves as a vital bridge between traditional values and modern technology. It is designed 
                to showcase not only technical prowess but also the influence of my background in farming, surveying, 
                and faith-based service, demonstrating how advanced technology can innovate while remaining accessible to 
                real-world communities.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Mission Structure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lcars-almondCreme text-lg font-lcars-bold mb-2">Navigational Philosophy</h3>
                  <p>
                    The navigation system is inspired by Starfleet&apos;s LCARS interface, offering a structured journey 
                    through my professional experiences. Mirroring a starship&apos;s computer, it ensures logical access to 
                    various aspects of my work, enhanced by a Matrix-style digital rain effect that symbolizes the code 
                    driving our technological advancements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lcars-almondCreme text-lg font-lcars-bold mb-2">Core Sections</h3>
                  <ul className="space-y-4 ml-4 list-disc">
                    <li className="list-none">
                      <span className="text-lcars-peach font-lcars-bold text-md underline">Personnel File (Personal Bio)</span>
                      <p className="mt-1">
                        This section provides a detailed profile, tracing my evolution from agrarian roots to technology 
                        innovation, showcasing how faith, agriculture, and technical knowledge inform my development 
                        philosophy.
                      </p>
                    </li>

                        <li className="ml-8">
                          <span className="text-lcars-red">Assignments (Resume)</span>
                          <p className="mt-1">
                            Documenting my career trajectory as a service history, this section details my journey through 
                            traditional industries into web development, highlighting key responsibilities and achievements.
                          </p>
                        </li>

                        <li className="ml-8">
                          <span className="text-lcars-red">Auxiliary Duties (Non-Professional Experience)</span>
                          <p className="mt-1">
                            Here, I highlight valuable experiences from farming, technical repair, and community service, 
                            illustrating how these diverse backgrounds inform my technological solutions.
                          </p>
                        </li>

                        <li className="ml-8">
                          <span className="text-lcars-red">Qualifications (Acquired Skills)</span>
                          <p className="mt-1">
                            An inventory of my technical and professional abilities, organized akin to a starship’s systems 
                            database, categorizing skills by domain and proficiency, illustrating my technical breadth.
                          </p>
                        </li>

                        <li className="ml-8">
                          <span className="text-lcars-red">Training Records (Education)</span>
                          <p className="mt-1">
                            This section chronicles my learning journey, showcasing a blend of traditional engineering with 
                            contemporary web development skills.
                          </p>
                        </li>
                    
                    <li className="list-none">
                      <span className="text-lcars-peach font-lcars-bold text-md underline">Mission Logs (Project Descriptions)</span>
                      <p className="mt-1">
                        Each project is chronicled like a mission log, detailing objectives, specifications, and outcomes, 
                        with a focus on initiatives that connect traditional sectors with modern technology.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Interactive Elements</h2>
              <div className="space-y-4">
                <p>
                  The portfolio incorporates interactive elements to enhance the user experience while maintaining 
                  the sci-fi theme:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Dynamic Matrix-style background animation</li>
                  <li>LCARS-inspired buttons and navigation elements with engaging hover effects</li>
                  <li>Smooth transitions between sections, simulating a computer interface</li>
                  <li>Responsive design that adapts to various devices while preserving thematic elements</li>
                  <li>Accessible navigation for both mouse and keyboard users</li>
                </ul>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Technical Implementation</h2>
              <div className="space-y-4">
                <p>
                  Developed with cutting-edge web technologies to ensure performance and maintainability:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Next.js 15 for robust server-side rendering and efficient routing</li>
                  <li>React 19 for effective component management</li>
                  <li>TailwindCSS for responsive, maintainable styling</li>
                  <li>Custom animations using Framer Motion</li>
                  <li>Accessible components provided by shadcn/ui</li>
                </ul>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Real-World Applications</h2>
              <p>
                The principles and technologies showcased in this portfolio translate into practical applications, 
                including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                <li>Farm management systems with intuitive interfaces</li>
                <li>Websites for churches and ministry management platforms</li>
                <li>Digital tools for community organizations</li>
                <li>Educational platforms tailored for traditional industries</li>
                <li>Technical documentation systems across sectors</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-sunflower mb-4 underline">Future Developments</h2>
              <p>
                The evolution of this portfolio is ongoing, with enhancements planned, including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                <li>Additional case studies emphasizing community impact</li>
                <li>Enhanced interactive features and animations</li>
                <li>Expanded documentation of technical implementations</li>
                <li>Integration of community-focused functionalities</li>
                <li>A blog section for sharing insights and stories from the field</li>
              </ul>
            </section>

            <div className="flex flex-col items-center justify-center w-full border-t-2 border-lcars-gray mt-3">
              {/* <div className="w-full">
                <h3 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-gold border-b-2 border-lcars-gold">
                SERVICE RECORD
              </h3>
              </div> */}
              
              <nav className="flex-1 flex items-center justify-center w-full mt-3">
                <a href="/system-mainframe/mission-logs/portfolio-mission" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                    PORTFOLIO MISSION
                </a>
                <a href="/system-mainframe/mission-logs/portfolio-mission/technical-appendix" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                    TECHNICAL APPENDIX
                </a>
                {/* <a href="/system-mainframe/personnel-database/service-record/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                    QUALIFICATIONS
                </a>
                <a href="/system-mainframe/personnel-database/service-record/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                    TRAINING RECORDS
                </a> */}
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
