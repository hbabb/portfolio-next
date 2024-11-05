
export default function Skills() {
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

          <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-sunflower">
            Acquired Skill Sets
          </h1>
        <div className="text-lcars-text font-lcars space-y-8 border-b-8 border-lcars-gray m-6 pb-3">

            <div>
              <h2 className=" font-lcars-bold mb-6 text-lcars-butterscotch pt-5">
                Technical Skills
              </h2>

              <h3 className="font-lcars-bold text-md mb-2 text-lcars-yellow underline">
                Web Development & Programming
              </h3>
              <ul className="list-disc list-inside text-xs">

                <li>
                  <strong className="text-lcars-pink">
                    Frontend:
                  </strong> HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Backend:
                  </strong> Node.js, Express, StrapiCMS
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Databases:
                  </strong> MongoDB, Xata, Neon, PostgreSQL, MySQL
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Version Control:
                  </strong> Git, GitHub
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Cloud Services:
                  </strong> DigitalOcean, AWS S3, Netligy, Vercel, Heroku, Hostinger
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Operating Systems:
                  </strong> Linux (Ubuntu), macOS, Windows
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Design Tools:
                  </strong> Figma, Affinity Systems, Adobe Creative Cloud, Open-Source Solutions
                </li>

              </ul>

              <h3 className="font-lcars-bold text-md mb-2 text-lcars-yellow underline">
                Geospatial Technologies & Software
              </h3>
              <ul className="list-disc list-inside text-xs">

                <li>
                  <strong className="text-lcars-pink">
                    CAD Software: 
                  </strong> AutoCAD, Civil 3D, Trimble Business Center, Carlson
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    3D Modeling:
                  </strong> Blender, SketchUp, Revit, InfraWorks, Solidworks, Inventor, Terramodel
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Data Processing:
                  </strong> DJI Terra, TerraSolid, TerraScan, Pix4D, TBC
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Estimating & Scheduling:
                  </strong> Bid2Win, P6 Scheduling, Excel, Microsoft Projects
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Project Management:
                  </strong> Agile Methodologies, Scrum, Asana, Jira, Trello, Notion, Microsoft Office Suite
                </li>
                <li>
                  <strong className="text-lcars-pink">
                    Survey Equipment:
                  </strong> GNSS (Trimble & Carlson), Robotic Total Stations (Trimble, Carlson, & Lieca), Terrestrial LiDAR, UAS LiDAR and Photogrammetry Sensors
                </li>

              </ul>


            </div>

            <div>

              <h2 className=" font-lcars-bold mb-6 text-lcars-butterscotch pt-5">
                Professional Skills
              </h2>

              <h3 className="font-lcars-bold text-md mb-2 text-lcars-yellow underline">
                Project Management
              </h3>
              <ul className="list-disc list-inside text-xs">
                <li>
                  Agile Methodologies
                </li>
                <li>
                  Project Planning and Execution
                </li>
                <li>
                  Timeline Management
                </li>
                <li>
                  Budget Oversight
                </li>
                <li>
                  Risk Assessment
                </li>
                <li>
                  Quality Control
                </li>
              </ul>

              <h3 className="font-lcars-bold text-md mb-2 text-lcars-yellow underline">
                Leadership & Communication
              </h3>
              <ul className="list-disc list-inside text-xs">
                <li>
                  Strategic Planning & Team Leadership
                </li>
                <li>
                  Workflow Optimization & Technical Documentation
                </li>
                <li>
                  Training & Resource Allocation
                </li>
                <li>
                  Technical Consulting & Problem Solving
                </li>
                <li>
                  Process Optimization & Service Delivery
                </li>
                <li>
                  Stakeholder Management & Collaboration
                </li>
              </ul>


            </div>

          </div>
          <div className="flex flex-col items-center justify-center w-full">
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
  )
}