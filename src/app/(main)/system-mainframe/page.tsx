
export default function MainComputerInterface() {
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2">

      <main className="flex flex-col items-center justify-center my-auto max-w-7xl mx-4 p-8 rounded-lg backdrop-blur-md bg-lcars-black border-4 border-lcars-gray shadow-lg">
        <div className="w-full">
          {/* <div className="border-b-2 border-lcars-amber pb-4 mb-6">
            <h1 className="text-4xl font-lcars-bold font-bold text-lcars-tnggreen">
              LCARS INITIALIZATION SEQUENCE // ACTIVE
            </h1>
            <div className="text-lcars-amber mt-2 font-mono space-y-1">
              <p>STARDATE: {currentStardate}</p>
              <p className="text-sm text-lcars-gray">EARTH TIME: {earthDate}</p>
            </div>
          </div> */}
          
          <div className="text-lcars-text font-lcars space-y-8 text-justify">
            <section>
              <h2 className="text-3xl font-bold text-lcars-orange mb-4 underline">
                  Prime Directives
              </h2>
              <p className=" mb-4">
                  As established by core operating protocols, all operations within this system are governed by the following Prime Directives:
              </p>
              <table>
                <tbody>
                  <tr>
                    <th className="w-1/5 align-top text-lcars-red font-bold text-lg">
                      PRIME DIRECTIVE I:
                    </th>
                    <td className="text-lcars-yellow">
                      Utilize technology to preserve and enhance agricultural communities while maintaining their traditional values and practices.
                    </td>
                  </tr>
                  <tr>
                    <th className="w-1/5 align-top text-lcars-red font-bold text-lg">
                      PRIME DIRECTIVE II:
                    </th>
                    <td className="text-lcars-yellow">
                      Support faith-based organizations through technological advancement while respecting their spiritual mission and community focus.
                    </td>
                  </tr>
                  <tr>
                    <th className="w-1/5 align-top text-lcars-red font-bold text-lg">
                      PRIME DIRECTIVE III:
                    </th>
                    <td className="text-lcars-yellow">
                      Create bridges between traditional practices and modern solutions, ensuring technological integration enhances rather than replaces established wisdom.
                    </td>
                  </tr>
                  <tr>
                    <th className="w-1/5 align-top text-lcars-red font-bold text-lg">
                      PRIME DIRECTIVE IV:
                    </th>
                    <td className="text-lcars-yellow">
                      Maintain highest standards of technical excellence while ensuring solutions remain accessible and beneficial to all community members.
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-lcars-orange mb-4 underline">
                Computer Core Database Structure
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="border-l-4 border-lcars-bluey pl-4">
                  <h3 className="text-lcars-blue font-bold mb-2">Personnel Database</h3>
                  <p className="text-sm">
                    Primary biographical data and operational parameters. Contains personal background, 
                    mission objectives, and core value analysis.
                  </p>
                </div>

                {/* <div className="border-l-4 border-lcars-tngblue pl-4">
                  <h3 className="text-lcars-tngblue font-bold mb-2">Service Record</h3>
                  <p className="text-sm">
                    Chronological documentation of assignments, auxiliary duties, qualification matrix, 
                    and training records. Includes performance metrics and achievement logs.
                  </p>
                </div> */}

                <div className="border-l-4 border-lcars-red pl-4">
                  <h3 className="text-lcars-mars font-bold mb-2">Mission Logs</h3>
                  <p className="text-sm">
                    Detailed records of completed and ongoing missions. Each log contains mission 
                    parameters, technical specifications, and after-action reports with supplemental 
                    documentation where available.
                  </p>
                </div>

                <div className="border-l-4 border-lcars-sunflower pl-4">
                  <h3 className="text-lcars-yellow font-bold mb-2">Communications</h3>
                  <p className="text-sm">
                    Secured channels for establishing direct communication with Starfleet command.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-lcars-orange mb-4 underline">
                Interface Protocols
              </h2>
              <p className="text-sm border-l-4 border-lcars-gold pl-4">
                This system utilizes an advanced fusion of LCARS accessibility standards and Matrix 
                visualization protocols. All interface elements maintain consistent positioning and 
                respond to both touch and traditional input methods. Security protocols active and 
                maintaining system integrity.
              </p>
              <p className="text-lcars-yellow border-t-2 border-lcars-gold pt-4">
                Let&apos;s explore the final digital frontier and boldly go where no developer has gon before!
                <br />
                Use the navigation buttons at the top of the screen to get started.
              </p>
            </section>

            <section className="mt-8 text-center">
              <p className="text-lcars-amber text-sm font-mono">
                LCARS INTERFACE FULLY OPERATIONAL - AWAITING USER INPUT
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}