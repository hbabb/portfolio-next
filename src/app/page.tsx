import { MatrixRain } from "@/components/animations/MatrixRain";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MatrixRain className="opacity-50" />
      <main className="flex flex-col items-center justify-center my-auto">
          <div className="max-w-2xl mx-4 p-8 rounded-lg backdrop-blur-md bg-lcars-black/30 border-4 border-lcars-beige shadow-lg">
            
            <h1 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-orange">Welcome</h1>
            
            <p className="font-lcars text-lg mb-8 text-lcars-text leading-relaxed text-justify">
              I&apos;m Heath Babb, a Web Developer charting a new course from Land Surveying and Civil Engineering into the digital frontier. With decades of precision-driven expertise in geospatial technology, I now craft elegant web solutions that bridge the gap between technical excellence and user experience. 
              <br />
              <br />
              Come learn more about this awesome theme and what I&apos;ve been up to.
              <br />
              <br />
              Click the button below to get started.
            </p>
            <nav>
              <a href="/system-mainframe" className="block w-[210px] h-[72px] m-[5px] pt-5 pr-[25px] rounded-[100vmax] bg-lcars-gold text-right no-underline text-2xl font-bold uppercase text-black select-none">
                Login
              </a>
            </nav>        
          </div>
      </main>
    </div>
  );
}
