
export default function Experience() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <main className="flex flex-col items-center justify-center my-auto rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg">
 

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
        <div>
          <h1 className="text-4xl font-lcars-bold mb-6 text-lcars-gold text-left underline">
            Non Professional Experience
          </h1>

          <div className="flex flex-col items-center justify-center w-full text-lcars-text pr-6">
            <div className="w-full border-b-8 border-lcars-gray">
              <h2 className="text-2xl font-lcars font-bold text-lcars-sunflower pt-5 text-center">
                Additional Technical Experience
              </h2>
            </div>
            <ul className="flex flex-col font-lcars text-justify">

            <li className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl text-lcars-butterscotch underline">
                    B&B Repair
                  </h3>
                  <div className="flex justify-between w-full">
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
                  <h3 className="font-lcars-bold text-xl text-lcars-butterscotch underline">
                    Babb Family Farm
                  </h3>
                  <div className="flex justify-between w-full">
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
          </div>

          <div className="flex flex-col items-center justify-center w-full text-lcars-text pr-6">
            <div className="w-full border-b-8 border-lcars-gray">
              <h2 className="text-2xl font-lcars font-bold text-lcars-sunflower pt-5 text-center">
                Volunteer & Community Service
              </h2>
            </div>
            <ul className="flex flex-col font-lcars text-justify space-y-6">
              
              <li className="flex flex-col pb-6 border-b border-lcars-gray">
                  <h3 className="font-lcars-bold text-xl text-lcars-butterscotch underline">
                    Motlow Creek Baptist Church
                  </h3>
                  <div className="flex justify-between w-full">
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
          </div>

        </div>
          <div className="flex flex-col items-center justify-center w-full border-b-2 border-lcars-gray mb-3 mt-3">
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