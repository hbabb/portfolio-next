import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <main className="flex flex-col items-center justify-center my-auto rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg pr-6">

        <div className="flex flex-col items-center justify-center w-full border-b-2 border-lcars-gray mb-3 ">
          <div className="w-full">
            <h3 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-gold border-b-2 border-lcars-gold">
            SERVICE RECORD
          </h3>
          </div>
          
          <nav className="flex-1 flex items-center justify-center w-full mb-3">
            <a href="/system-mainframe/personnel-database/service-record/assignments" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                ASSIGNMENTS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/auxiliary-duties" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                AUXILIARY DUTIES
            </a>
            <a href="/system-mainframe/personnel-database/service-record/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                QUALIFICATIONS
            </a>
            <a href="/system-mainframe/personnel-database/service-record/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TRAINING RECORDS
            </a>
          </nav>
        </div>

        <div className="self-start">
          <div className="border-4 border-lcars-blue rounded-full p-1">
            <Image
            src="/ai-profile-corporate.jpg"
            width={200}
            height={200}
            alt="Heath Babb Profile Picture"
            className="rounded-full"
          />
          </div>
        </div>

        <div className="flex flex-col text-lcars-text text-justify mt-10 w-full">
          <div className="border-3 border-solid border-tron w-full">
            <h1 className="text-4xl font-lcars-bold font-bold mb-1 text-lcars-yellow text-left border-b-2 border-lcars-yellow">
              Personnel File: Heath Babb
            </h1>
          </div>
          <h2 className="text-2xl font-lcars font-bold mb-6 text-lcars-bluey">
            Web Developer | Full-Stack Engineer | Technical Innovator
          </h2>
          <p className="font-lcars">
            Three fundamental influences have shaped my life&apos;s journey: my Christian faith, upbringing on our family farm in Campobello, SC, and my passion for technology. As a Baptist church member, my relationship with Jesus Christ has been the cornerstone of my personal and professional development, guiding my decisions and inspiring my desire to serve others through my work.
            <br />
            <br />
            Growing up on a family farm, I worked alongside my father from the age of six, learning not just about agriculture but about stewardship of the land and the importance of community. This experience, combined with my faith, instilled a deep appreciation for family farms challenges and a desire to help preserve this vital way of life. Through daily work with complex farm equipment and systems, I developed both technical skills and an understanding of the practical needs of agricultural communities and their insights that continue to inform my approach to technology solutions today.
            <br />
            <br />
            My formal education path at Spartanburg Community College, where I completed Machine Tool Technology and Civil Engineering Technology programs, built upon this foundation. This technical background and my hands-on farming experience led me to geospatial technology. I spent two decades developing expertise in precision mapping and data management as a Land Survey CAD Technician and CAD Manager.
            <br />
            <br />
            The evolution of my career into web development was guided by both practical needs and a vision for using technology to serve communities. While managing complex surveying projects and implementing technical solutions, I discovered the potential of web technologies to transform traditional industries. I&apos;m expanding my expertise through comprehensive full-stack development training with Codecademy and freeCodeCamp while actively building applications that address real-world challenges.
            <br />
            <br />
            My technical toolkit has grown to include modern web development technologies such as React, Next.js, and TypeScript, complemented by Node.js and Express for backend solutions. I&apos;ve become proficient with contemporary styling frameworks, including Tailwind CSS and Shadcn/UI. However, what truly drives me is not the technology itself but its potential to support and strengthen communities.
            <br />
            <br />
            One of my primary focuses is developing technological solutions for agricultural communities, particularly family-owned farms. I&apos;m passionate about creating tools and applications to help these farms thrive in the modern era while promoting environmental stewardship. This includes systems for resource management, crop monitoring, and sustainable farming practices that combine traditional agricultural wisdom with modern technology.
            <br />
            <br />
            Equally important to me is my commitment to serving church communities through technology. As a long-time technical consultant for my local Baptist church, I&apos;ve experienced firsthand how modern technical solutions can enhance ministry and community outreach. From managing audio-visual systems for services to developing a web presence and digital tools for congregation engagement, I&apos;m dedicated to helping churches leverage technology effectively in their mission.
            <br />
            <br />
            My unique perspective, formed by the intersection of faith, farming experience, and technical expertise, allows me to bridge the gap between traditional practices and modern solutions. I approach each project with both technical precision and a deep understanding of community needs, always striving to create solutions that are both innovative and accessible.
          </p>
            <div className="my-6">
              <div className="pb-2">
                I&apos;m actively seeking opportunities to collaborate on projects that align with these values, particularly those that:
              </div>
              <ul className="list-disc list-inside text-sm pl-10">
                <li>
                  Support and modernize family farming operations
                </li>
                <li>
                  Promote environmental sustainability in agriculture
                </li>
                <li>
                  Enhance church and community ministry through technology
                </li>
                <li>
                  Bridge the digital divide in rural and agricultural communities
                </li>
                <li>
                  Foster connection and resource sharing among faith based organizations
                </li>
              </ul>
            </div>
            
          <p className="font-lcars">
            Beyond my professional work, I remain actively involved in church and agricultural communities, sharing knowledge and providing technical support. This hands-on community engagement keeps me grounded and informed about the real-world impact of technological solutions.
            <br />
            <br />
            My commitment to excellence in web development matches my dedication to creating meaningful changes through technology. Whether it&apos;s helping a family farm implement new management systems, assisting a church with its digital presence, or developing solutions for environmental monitoring, I approach each project as an opportunity to serve both God and the community.
            <br />
            <br />
            I bring technical expertise and a deep understanding of rural and faith-based community needs to each new challenge, combining modern development practices with respect for traditional values. I&apos;m always eager to discuss new opportunities for collaboration, particularly those that align with my mission to support agricultural and church communities through technology.
            <br />
            <br />
            This unique combination of faith, agricultural background, and technical expertise shapes my approach to every project, driving me to create solutions that meet technical requirements and serve a greater purpose in supporting and strengthening our communities.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center w-full">
          <nav className="flex-1 flex items-center justify-center w-full">
            <a href="/system-mainframe/personnel-database/assignments" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-red text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                ASSIGNMENTS
            </a>
            <a href="/system-mainframe/personnel-database/auxiliary-duties" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-yellow text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                AUXILIARY DUTIES
            </a>
            <a href="/system-mainframe/personnel-database/qualifications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                QUALIFICATIONS
            </a>
            <a href="/system-mainframe/personnel-database/training-records" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                TRAINING RECORDS
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
}