
export default function Education() {
  const education = [
    {
      school: "Codecademy",
      program: "Full-Stack Engineer",
      status: "In Progress",
      location: "Online",
      description: "Pursuing comprehensive full-stack development education with focus on modern web technologies. The curriculum covers front-end development with HTML, CSS, JavaScript, and React, as well as back-end technologies including Node.js, Express, and SQL/NoSQL databases. Projects emphasize real-world applications, test-driven development, and industry best practices. Currently building portfolio projects that demonstrate proficiency in full-stack development while learning advanced concepts in web security, API design, and cloud deployment."
    },
    {
      school: "freeCodeCamp",
      program: "Web Design/Development Certification",
      status: "In Progress",
      location: "Online",
      description: "Engaging in practical web development training through project-based learning. Completing certification tracks in Responsive Web Design and JavaScript Algorithms & Data Structures. Building responsive layouts using HTML5, CSS3, and JavaScript while adhering to accessibility standards and modern design principles. Projects focus on real-world scenarios and include creating responsive portfolios, technical documentation pages, and interactive web applications."
    },
    {
      school: "Greenville Technical College",
      program: "Aircraft Maintenance Certificate",
      years: "2012 - 2014",
      location: "Greenville, SC",
      description: "Completed intensive training in aircraft systems maintenance and repair, developing strong analytical and problem-solving skills. The program covered complex mechanical, electrical, and avionics systems, emphasizing precision, safety, and regulatory compliance. Coursework included detailed study of aircraft structures, propulsion systems, and maintenance procedures, providing a strong foundation in technical systems thinking and troubleshooting methodologies."
    },
    {
      school: "Spartanburg Community College",
      program: "Civil Engineering Technology Certificate",
      years: "2007 - 2008",
      location: "Spartanburg, SC",
      description: "Focused on civil engineering principles and technical applications, including CAD design, surveying, and construction materials testing. The program provided comprehensive understanding of engineering drawings, specifications, and construction methods. Coursework emphasized practical applications of mathematics and physics in civil engineering projects, developing strong technical documentation and analytical skills."
    },
    {
      school: "Spartanburg Community College",
      program: "Associate of Technology - Machine Tool Technology",
      years: "2005 - 2007",
      location: "Spartanburg, SC",
      description: "Mastered precision manufacturing techniques and CNC programming, developing expertise in technical specifications and quality control. The program covered advanced manufacturing processes, blueprint reading, and mechanical design principles. Gained hands-on experience with various machining techniques, developing strong attention to detail and process optimization skills that continue to benefit technical problem-solving approaches."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center my-auto rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg">

        <div className="flex flex-col items-center justify-center w-full border-b-2 border-lcars-gray mb-3 mr-8">
          <div className="w-full">
            <h3 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-gold border-b-2 border-lcars-gold">
            SERVICE RECORD
          </h3>
          </div>
          
          <nav className="flex-1 flex items-center justify-center w-full mb-3">
            <a href="/system-mainframe/personnel-database/service-record/assignments" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                ASSIGNMENTS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/auxiliary-duties" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                AUXILIARY DUTIES
            </a>
            <a href="/system-mainframe/personnel-database/service-record/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                QUALIFICATIONS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TRAINING RECORDS
            </a>
            <a href="/system-mainframe/personnel-database" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-bluey text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                PERSONNEL
            </a>
          </nav>
        </div>
          <div className="flex flex-col items-center justify-center w-full pr-8 text-lcars-text">
            <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-sunflower">
              Education
            </h1>

            <ul className="flex flex-col font-lcars text-justify space-y-6">
              {education.map((edu, index) => (
                <li key={index} className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl font-extrabold text-lcars-yellow mb-2 underline">
                    {edu.school}
                  </h3>
                  <div className="flex justify-between w-full pb-6 text-lcars-yellow">
                    <p className="text-left">
                      {edu.program}
                    </p>
                    <p className="text-right">
                      {edu.status || edu.years}
                    </p>
                  </div>
                  <p className="0">
                    {edu.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-8 mr-8">
            {/* <div className="w-full">
              <h3 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-gold border-b-2 border-lcars-gold">
              SERVICE RECORD
              </h3>
            </div> */}
          
          <nav className="flex-1 flex items-center justify-center w-full mb-3">
            <a href="/system-mainframe/personnel-database/service-record/assignments" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                ASSIGNMENTS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/auxiliary-duties" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                AUXILIARY DUTIES
            </a>
            <a href="/system-mainframe/personnel-database/service-record/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                QUALIFICATIONS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TRAINING RECORDS
            </a>
            <a href="/system-mainframe/personnel-database" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-bluey text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                PERSONNEL
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}