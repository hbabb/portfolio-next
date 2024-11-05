import { MatrixRain } from "@/components/animations/MatrixRain";

export default function PortfolioProject() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-24">
      <MatrixRain className="opacity-50" />

      <main className="flex flex-col items-center justify-center my-auto max-w-7xl mx-4 p-8 rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg">
        <div className="w-full">
          <h1 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-tnggreen">
            Project Analysis: Digital Bridge Portfolio
          </h1>
          
          <div className="text-white font-lcars space-y-6 text-justify">
            <section>
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Project Vision</h2>
              <p>
                This portfolio represents more than just a showcase of technical skills—it&apos;s a bridge between 
                traditional values and modern technology. Drawing from my background in farming, surveying, 
                and faith-based service, I&apos;ve created an interface that demonstrates how cutting-edge 
                technology can be both innovative and accessible while serving real-world communities.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Portfolio Structure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lcars-tnggreen font-bold mb-2">Navigation Philosophy</h3>
                  <p>
                    The navigation system draws inspiration from Star Trek&apos;s LCARS, representing an organized journey 
                    through my professional experience. Like a starship&apos;s computer interface, it provides clear, 
                    logical access to different aspects of my work and background. This is overlaid on The Matrix&apos;s 
                    digital rain effect, symbolizing the underlying code that powers modern digital transformation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lcars-tnggreen font-bold mb-2">Core Sections</h3>
                  <ul className="space-y-4 ml-4">
                    <li>
                      <span className="text-lcars-amber font-bold">Personnel File (About)</span>
                      <p className="mt-1">
                        Structured like a detailed crew profile, this section shares my journey from farming roots 
                        to technology innovation. It emphasizes how faith, agricultural background, and technical 
                        expertise shape my approach to development.
                      </p>
                    </li>
                    
                    <li>
                      <span className="text-lcars-amber font-bold">Service Record (Resume)</span>
                      <p className="mt-1">
                        Presented as a comprehensive service history, detailing my professional evolution from 
                        traditional industries to web development. Each role is documented with key 
                        responsibilities and achievements.
                      </p>
                    </li>
                    
                    <li>
                      <span className="text-lcars-amber font-bold">Acquired Skill Sets</span>
                      <p className="mt-1">
                        A detailed inventory of technical and professional capabilities, organized like a 
                        starship&apos;s systems database. Skills are categorized by domain and proficiency, 
                        showing the breadth of my technical expertise.
                      </p>
                    </li>

                    <li>
                      <span className="text-lcars-amber font-bold">Mission Logs (Projects)</span>
                      <p className="mt-1">
                        Each project is documented like a mission log, complete with objectives, 
                        technical specifications, and outcomes. Special focus is given to projects that 
                        bridge traditional industries with modern technology.
                      </p>
                    </li>

                    <li>
                      <span className="text-lcars-amber font-bold">Educational Records</span>
                      <p className="mt-1">
                        Chronicles my learning journey through formal education and continuous professional 
                        development, emphasizing the blend of traditional engineering and modern web 
                        development skills.
                      </p>
                    </li>

                    <li>
                      <span className="text-lcars-amber font-bold">Non-Professional Experience</span>
                      <p className="mt-1">
                        Highlights valuable experience from farming, technical repair work, and community 
                        service, showing how these diverse experiences inform my approach to technology 
                        solutions.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Interactive Elements</h2>
              <div className="space-y-4">
                <p>
                  The portfolio features several interactive elements that enhance the user experience while 
                  maintaining the sci-fi theme:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Dynamic Matrix-style background animation that responds to user interaction</li>
                  <li>LCARS-inspired buttons and navigation elements with hover effects</li>
                  <li>Smooth transitions between sections mimicking computer interface responses</li>
                  <li>Responsive design that adapts to different device types while maintaining theme</li>
                  <li>Accessible navigation that works with both mouse and keyboard input</li>
                </ul>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Technical Implementation</h2>
              <div className="space-y-4">
                <p>
                  Built with modern web technologies to ensure performance and maintainability:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Next.js 15 for robust server-side rendering and routing</li>
                  <li>React 19 for efficient component management</li>
                  <li>TailwindCSS for responsive, maintainable styling</li>
                  <li>Custom animations using Framer Motion</li>
                  <li>Accessible components from shadcn/ui</li>
                </ul>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Real-World Applications</h2>
              <p>
                The technologies and design principles demonstrated in this portfolio directly translate to 
                practical applications for:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                <li>Farm management systems with intuitive, accessible interfaces</li>
                <li>Church websites and ministry management platforms</li>
                <li>Community organization digital tools</li>
                <li>Educational platforms for traditional industries</li>
                <li>Technical documentation systems for various sectors</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-lcars-bold text-lcars-amber mb-4">Future Development</h2>
              <p>
                This portfolio continues to evolve, with planned enhancements including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2">
                <li>Additional project case studies focusing on community impact</li>
                <li>Enhanced interactive elements and animations</li>
                <li>Expanded documentation of technical implementations</li>
                <li>Integration of more community-focused features</li>
                <li>Blog section for sharing technical insights and community stories</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}