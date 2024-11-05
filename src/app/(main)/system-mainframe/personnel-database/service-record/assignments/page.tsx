
export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <main className="flex flex-col items-center justify-center my-auto rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg pr-6">

        <div className="flex flex-col items-center justify-center w-full border-b-2 border-lcars-gray mb-3">
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

          <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-gold text-left underline">
            Resume
          </h1>

          <div>
            <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-sunflower">
              Professional Work Experience
            </h2>
            <ul className="flex flex-col text-lcars-text font-lcars text-justify space-y-2">

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  HB Consultants, LLC
                </h3>
                <div className="flex justify-between w-full">
                <p className="text-left">
                  Owner | Inman, South Carolina
                </p>
                <p className="text-right">
                  April 2024 - Present
                </p>
                </div>
                <p>
                As the founder of HB Consultants, I specialize in creating modern, innovative web solutions across diverse industries. I design and develop custom web applications that combine sophisticated functionality with intuitive user experiences, leveraging cutting-edge technologies including React.js, Node.js, Express.js, and TailwindCSS. My comprehensive development services span the entire software lifecycle, from initial concept through deployment and maintenance. I architect and implement full-stack solutions that include responsive front-end interfaces, robust backend systems, and efficient database structures using technologies such as MongoDB, PostgreSQL, and MySQL. Each project benefits from my meticulous attention to detail, ensuring optimal performance, security, and SEO best practices. Through effective project management and clear communication, I guide clients through every phase of development, from requirements gathering to final deployment. My technical background in geospatial and surveying technologies provides additional expertise when developing specialized data visualization and mapping solutions. I focus on delivering scalable, user-friendly applications that drive business efficiency and enhance user engagement across all sectors. 
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  Civil &amp; Environmental Consultants, Inc (CEC)
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    Sr. CAD Technician | Greenville, South Carolina
                  </p>
                  <p className="text-right">
                    November 2022 - August 2024
                  </p>
                </div>
                <p>
                In my role as Senior CAD Technician, I coordinated the performance and timely completion of land survey drawings and reports for the Greenville, SC profit center. I conducted sophisticated data analysis on field data, including network analysis (least squares), and processed LiDAR and photogrammetric data with precision. My expertise in QGIS and ArcGIS was instrumental in data mapping and survey planning, while I utilized advanced tools such as Civil 3D, Trimble Business Center, DJI Terra, and Terra Solid for comprehensive survey data processing. A key achievement was providing technical expertise for company training programs, collaborating with corporate survey groups to produce technical documentation and how-to guides for various software applications and survey techniques.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  EAS Professionals, Inc.
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    CAD Manager | Greenville, South Carolina
                  </p>
                  <p className="text-right">
                    December 2017 - November 2022
                  </p>
                </div>
                <p>
                As CAD Manager, I spearheaded the implementation of CAD software and provided comprehensive training and support to CAD technicians and field surveyors. I worked closely with the survey manager to support field technicians and integrate advanced technology, including UAS sensors, terrestrial LiDAR scanners, and GNSS receivers across survey and environmental services departments. My innovative approach to survey workflows and solutions helped address complex surveying challenges while optimizing data processing and project completion efficiency.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  GE Power
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    CNC Machinist A | Greenville, South Carolina
                  </p>
                  <p className="text-right">
                    May 2016 - December 2017
                  </p>
                </div>
                <p>
                At GE Power, I operated sophisticated CNC broach machines to manufacture turbine wheels for gas-fired power plants globally. This role required exceptional precision and attention to detail, as I conducted machine setup, operation, and maintenance while adhering to strict quality standards. The position demanded a thorough understanding of complex manufacturing processes and the ability to maintain consistent precision in high-stakes industrial production.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  Azimuth Control, Inc.
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    CAD Specialist & Machine Control Modeler | Greenville, South Carolina
                  </p>
                  <p className="text-right">
                    May 2013 - May 2016
                  </p>
                </div>
                <p>
                In this dual role, I developed new workflows for a small land surveying business while managing comprehensive IT responsibilities. I handled the company&apos;s technical infrastructure, including website content management, network support, and help desk services. My expertise in GNSS and robotic total station equipment was crucial for assisting field crews with site layout, boundary, and topographic surveys. I specialized in building machine control models using Trimble Business Center and Civil 3D for local grading contractors, while providing technical support for these models and equipment.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  Morgan Corp.
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    Estimator & Survey Technician | Spartanburg, South Carolina
                  </p>
                  <p className="text-right">
                    February 2007 - May 2013
                  </p>
                </div>
                <p>
                As an Estimator and Survey Technician, I conducted detailed take-off reports for upcoming bids using specialized software including Agtek, Civil 3D, Terramodel, and Bid2Win. I maintained crucial databases and performed manual calculations from paper plans to ensure precise project estimates. My role included supporting the surveying department through machine control model creation and final survey drafting, while providing valuable technical support across all departments.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  SEW Eurodrive
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    CNC Machinist Intern | Lyman, South Carolina
                  </p>
                  <p className="text-right">
                    June 2006 - February 2007
                  </p>
                </div>
                <p>
                  As a manufacturing intern, I gained hands-on experience across multiple departments including deburr, QA/QC, heat treat, and packaging. I obtained a forklift certification and contributed to various manufacturing processes, maintaining high production quality standards while developing practical industrial experience.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  A. Burger
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    CNC Machinist | Spartanburg, South Carolina
                  </p>
                  <p className="text-right">
                    June 2005 - June 2006
                  </p>
                </div>
                <p>
                  Operating multiple multi-axis CNC machines during second shift, I maintained precise component specifications while collaborating with machinist and engineers to optimize production efficiency. This role required meticulous attention to detail and strong problem solving skills to ensure consistent quality output.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  Denny&apos;s Corporate
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    Assets Protection & Risk Management Associate | Spartanburg, South Carolina
                  </p>
                  <p className="text-right">
                    June 2004 - June 2005
                  </p>
                </div>
                <p>
                  In this corporate security role, I managed building security, assets protection, and risk management operations during the off hours shifts. I provided technical support for company-wide camera and POS systems while conducting investigations on missing assets. My responsibilities included handling customer complaints and processing incident reports from store managers, requiring strong analytical and communication skills.
                </p>
              </li>

              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                <h3 className="font-lcars-bold text-xl underline text-lcars-almondCreme mb-[-8px]">
                  Spartan Security
                </h3>
                <div className="flex justify-between w-full">
                  <p className="text-left">
                    Unarmed Security Guard | Lyman, South Carolina
                  </p>
                  <p className="text-right">
                    June 2003 - June 2004
                  </p>
                </div>
                <p>
                  Assigned to Springs Industry&apos;s Lyman Plant, I maintained facility security on off hour shifts, through front gate access control, regular security rounds, and back gate monitoring. This position developed my attention to detail and procedural discipline while ensuring facility safety and security. This position also allowed me to develop my communication and problem solving skills.
                </p>
              </li>

            </ul>
          </div>


          {/* <div>
            <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-purple pt-5">
              Additional Technical Experience
            </h2>
            <ul className="flex flex-col text-white font-lcars text-justify space-y-6">
              
              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl font-extrabold mb-2 underline">
                    B&B Repair
                  </h3>
                  <div className="flex justify-between w-full pb-6">
                    <p className="text-left">
                      Technical Assistant | Campobello, South Carolina
                    </p>
                    <p className="text-right">
                      May 2003 - December 2006
                    </p>
                  </div>
                  <p>
                  At this family-owned repair business, I developed strong technical fundamentals working with electrical, mechanical, and control systems. I assisted with electrical installations and repairs across commercial, industrial, and residential applications, while implementing preventive maintenance programs that improved equipment reliability and reduced operating costs. This experience provided valuable insights into troubleshooting complex systems and maintaining technical infrastructure.
                  </p>
                </li>

                <li className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl font-extrabold mb-2 underline">
                    Babb Family Farm
                  </h3>
                  <div className="flex justify-between w-full pb-6">
                    <p className="text-left">
                      Technical Operations & Maintenance | Campobello, South Carolina
                      <br />
                      <em>Early hands-on experience from 1990 - 1998</em>
                    </p>
                    <p className="text-right">
                      January 1998 - December 2017
                    </p>
                  </div>
                  <p>
                    Growing up on our family farm, I was immersed in agricultural operations from an early age, helping my father from around age 6 and officially taking on responsibilities during high school. This lifelong exposure to farming operations provided invaluable experience in equipment operation and maintenance. During my official tenure, I managed diverse agricultural operations including automated irrigation systems, mechanical equipment maintenance, and implementation of technology solutions for farm operations. This unique combination of early learning and later technical responsibility enhanced my problem-solving abilities and mechanical aptitude while working with complex systems.
                  </p>
                </li>
              
            </ul>
          </div> */}


          {/* <div>
            <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-purple pt-5">
              Volunteer & Community Service
            </h2>
            <ul className="flex flex-col text-white font-lcars text-justify space-y-6">
              
              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl font-extrabold mb-2 underline">
                    Motlow Creek Baptist Church
                  </h3>
                  <div className="flex justify-between w-full pb-6">
                    <p className="text-left">
                      Technical Consultant | Campobello, South Carolina
                    </p>
                    <p className="text-right">
                      January 2011 - Present
                    </p>
                  </div>
                  <p>
                  As a dedicated technical consultant for Motlow Creek Baptist Church, I manage the complete technical infrastructure that supports the church&apos;s operations and community outreach. I serve as the primary sound engineer during services, ensuring high-quality audio production for both in-person and online audiences. My responsibilities include maintaining and optimizing the church&apos;s digital presence, managing their computer network infrastructure, and providing technical support to staff and congregation members. This ongoing volunteer role demonstrates my commitment to using technical skills to benefit the community while maintaining complex audio-visual and IT systems in a live production environment.
                  </p>
                </li>
              
            </ul>
          </div> */}

          {/* <div className="flex flex-row text-white font-lcars border-b-2 border-lcars-gray pb-4">

            <div className="w-2/3 border-r-2 border-lcars-gray">
              <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-purple pt-5">
                Technical Skills
              </h2>

              <h3 className="font-lcars-bold text-md font-extrabold mb-2 text-lcars-tnggreen underline">
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

              <h3 className="font-lcars-bold text-md font-extrabold mb-2 text-lcars-tnggreen underline pt-4">
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

            <div className="w-1/3 ml-4">

              <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-purple pt-5">
                Professional Skills
              </h2>

              <h3 className="font-lcars-bold text-md font-extrabold mb-2 text-lcars-tnggreen underline">
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

              <h3 className="font-lcars-bold text-md font-extrabold mb-2 text-lcars-tnggreen underline">
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

          </div> */}

          <div className="flex flex-col items-center justify-center w-full mt-3">
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