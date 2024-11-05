import React from 'react';
import '@/styles/LcarsColors.css';
import '@/styles/LcarsUltraClassic.css';
import { MatrixRain } from '@/components/animations/MatrixRain';
import {
  StardateDisplay,
  UTCClock,
  LocalClock
} from '@/components/layout/StardateCalc';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-5xl mx-auto bg-lcars-black/60 back" id="column-3">
      <MatrixRain className="opacity-50" />
      <div className="flex mx-auto pl-[5px] pr-[10px] overflow-hidden border-r-5 border-l-5 border-lcars-gray">
        {/* <div className="block">
          <a id="scroll-top" href="" className="hidden w-[200px] h-[150px] fixed bottom-0 no-underline uppercase text-right border-t-[5px] border-b-[5px] border-black pt-5 pr-[10px] bg-lcars-africanViolet text-[0.9rem] font-bold text-black">
            <span className="hop">screen</span> top
          </a>
        </div> */}
        <div className="w-[200px] text-right text-[0.8rem] font-bold text-black bg-lcars-bluey rounded-bl-[140px]">
          <div className="border-b-[5px] border-black">
            <a href="https://www.thelcars.com" className="block bg-lcars-africanViolet pt-[82px] pr-[10px] pb-[15px] no-underline text-black select-none">
              LCARS.com
            </a>
          </div>
          <div className="pt-[15px] pr-[10px]">
            CURRENT EARTH DATE:
            <UTCClock />
            <LocalClock />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="flex pb-[25px] pl-[5px] text-right uppercase leading-[1.1] text-lcars-orange">
            <div className='flex flex-col text-left w-full'>
            <div className='text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                LCARS SYSTEM MAINFRAME: <span className='blink'>ACTIVE</span>
              </div>
              <div className='flex text-sm md:text-base lg:text-lg'>
                CURRENT STARDATE: <StardateDisplay className='ml-4' />
              </div>
            </div>      
          </div>
              <div className="flex justify-end pl-[2vw]">
                <div className="flex-1 pr-[15px]">
                  {/* LCARS Data Cascade Window */}
                <div className="data-cascade" id="default">
                  <div className="row-1"><div className="dc1">101</div><div className="dc2">7109</div><div className="dc3">1966</div><div className="dc44">36</div><div className="dc55">880</div><div className="dc6">11.03</div><div className="dc77">1954</div><div className="dc8">03</div><div className="dc99">6.08</div><div className="dc100">241</div><div className="dc11">309</div><div className="dc12">7.08</div><div className="dc13">1935</div><div className="dc14">12.20</div><div className="dc150">53</div><div className="dc150">1961</div><div className="dc150">2.16</div></div><div className="row-2"><div className="dc1">102</div><div className="dc2">8102</div><div className="dc3">1987</div><div className="dc44">044</div><div className="dc55">0051</div><div className="dc6">1968</div><div className="dc77">704</div><div className="dc8">10.31</div><div className="dc99">1984</div><div className="dc100">1954</div><div className="dc11">764</div><div className="dc12">1940</div><div className="dc13">9.9</div><div className="dc14">1972</div><div className="dc150">815</div><div className="dc150">4.12</div><div className="dc150">2023</div></div><div className="row-3"><div className="dc1">103</div><div className="dc2">714</div><div className="dc3">1993</div><div className="dc44">0222</div><div className="dc55">4.4</div><div className="dc6">1969</div><div className="dc77">2450</div><div className="dc8">91</div><div className="dc99">56</div><div className="dc100">21</div><div className="dc11">716</div><div className="dc12">801</div><div className="dc13">417</div><div className="dc14">602</div><div className="dc150">5618</div><div className="dc150">238</div><div className="dc150">1443</div></div><div className="row-4"><div className="dc1">104</div><div className="dc2">6104</div><div className="dc3">1995</div><div className="dc44">3.22</div><div className="dc55">1931</div><div className="dc6">0.0</div><div className="dc77">0000</div><div className="dc8">1701</div><div className="dc99">1984</div><div className="dc100">218</div><div className="dc11">908</div><div className="dc12">10</div><div className="dc13">85</div><div className="dc14">1888</div><div className="dc150">27</div><div className="dc150">2879</div><div className="dc150">213</div></div><div className="row-5"><div className="dc1">105</div><div className="dc2">08</div><div className="dc3">2001</div><div className="dc44">713</div><div className="dc55">079</div><div className="dc6">1977</div><div className="dc77">LV</div><div className="dc8">426</div><div className="dc99">105</div><div className="dc100">10</div><div className="dc11">1642</div><div className="dc12">1979</div><div className="dc13">402</div><div className="dc14">795</div><div className="dc150">361</div><div className="dc150">0852</div><div className="dc150">984</div></div><div className="row-6"><div className="dc1">106</div><div className="dc2">31</div><div className="dc3">2017</div><div className="dc44">429</div><div className="dc55">65</div><div className="dc6">871</div><div className="dc77">24</div><div className="dc8">541</div><div className="dc99">656</div><div className="dc100">M</div><div className="dc11">113</div><div className="dc12">12.6</div><div className="dc13">27</div><div className="dc14">05</div><div className="dc150">85</div><div className="dc150">12.25</div><div className="dc150">7884</div></div><div className="row-7"><div className="dc1">107</div><div className="dc2">5</div><div className="dc3">2022</div><div className="dc44">784</div><div className="dc55">3304</div><div className="dc6">42</div><div className="dc77">733</div><div className="dc8">1224</div><div className="dc99">5801</div><div className="dc100">23</div><div className="dc11">1015</div><div className="dc12">84</div><div className="dc13">36</div><div className="dc14">029</div><div className="dc150">24</div><div className="dc150">318</div><div className="dc150">12.24</div></div><div className="row-8"><div className="dc1">108</div><div className="dc2">23</div><div className="dc3">174</div><div className="dc44">91</div><div className="dc55">947</div><div className="dc6">28</div><div className="dc77">527</div><div className="dc8">04</div><div className="dc99">0469</div><div className="dc100">2200</div><div className="dc11">88</div><div className="dc12">1985</div><div className="dc13">540</div><div className="dc14">3121</div><div className="dc150">308</div><div className="dc150">9571</div><div className="dc150">404</div></div>
              </div>
            </div>
            <nav id="nav-standard" className="flex flex-wrap max-w-[450px] justify-end"> 
              <a href="/system-mainframe" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-gold hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                HOME
              </a>
              <a href="/system-mainframe/communications" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-sunflower hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                COMMS
              </a>
              <a href="/system-mainframe/personnel-database" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-bluey hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                PERSONNEL
              </a>
              <a href="/system-mainframe/mission-logs" className="block w-[210px] h-[72px] m-[5px] pt-[30px] pr-[25px] rounded-[100vmax] bg-lcars-green hover:bg-lcars-blue text-right !leading-normal no-underline text-[0.9rem] font-bold uppercase text-black select-none">
                MISSIONS
              </a>
            </nav>
          </div>
          <div className="flex h-[22px] mt-[25px]">
            <div className="w-[433px] h-[22px] bg-lcars-bluey border-r-[5px] border-black transition-[width] duration-1000"></div>
            <div className="w-[40px] h-[22px] bg-lcars-orange border-r-[5px] border-black"></div>
            <div className="w-[200px] h-[22px] bg-lcars-africanViolet border-r-[5px] border-black"></div>
            <div className="flex-1 h-[22px] bg-lcars-africanViolet border-r-[5px] border-black"></div>
            <div className="w-[50px] h-[22px] bg-lcars-red"></div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto pl-[5px] pr-[10px] overflow-hidden mt-[10px]" id="gap">
        <div className="flex flex-col justify-between pt-[90px] w-[200px] min-w-[200px] text-right text-[0.8rem] font-bold text-black bg-lcars-ice rounded-tl-[140px]">
          <div>
            <div className="pt-[15px] pb-[15px] pr-[10px] border-b-[5px] border-black">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                className='text-lcars-black hover:text-lcars-raC69 hover:underline text-lcars-bold text-2xl'
              >
                Log Out
              </a>
            </div>
            <div className="pt-[180px] pb-[15px] pr-[10px] bg-lcars-red border-b-[5px] border-black">
              04<span className="hop">-041969</span>
            </div>
            <div className="py-[25px] pr-[10px] bg-lcars-orange border-b-[5px] border-black">
              05<span className="hop">-1701D</span>
            </div>
            <div className="pt-[230px] pb-[15px] pr-[10px] bg-lcars-almond border-b-[5px] border-black">06<span className="hop">-071984</span></div>
            <div className="pt-[15px] pb-[300px] pr-[10px] bg-lcars-bluey border-b-[5px] border-black">07<span className="hop">-081940</span></div>
            <div className="pt-[15px] pb-[110px] pr-[10px] bg-lcars-almond border-b-[5px] border-black">08<span className="hop">-47148</span></div>
            <div className="pt-[15px] pb-[170px] pr-[10px] bg-lcars-red">09<span className="hop">-081966</span></div>
          </div>
          <div>
            <div className="pt-[15px] pr-[10px] pb-[300px] bg-lcars-orange border-t-[5px] border-black">10<span className="hop">-31</span></div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="flex h-[22px]">
            <div className="w-[433px] h-[22px] bg-lcars-red border-r-[5px] border-black transition-[width] duration-1000"></div>
            <div className="w-[40px] h-[22px] bg-lcars-almond border-r-[5px] border-black"></div>
            <div className="w-[200px] h-[11px] bg-lcars-red border-r-[5px] border-black"></div>
            <div className="flex-1 h-[22px] bg-lcars-africanViolet border-r-[5px] border-black"></div>
            <div className="w-[50px] h-[22px] bg-lcars-almond"></div>
          </div>
          <main>

            {children}

            <footer>
              <div className="flex-1 bg-black rounded-r-[20px] p-1 z-2">
                <div className="flex flex-col items-center justify-center text-center text-sm">
                  <p>
                    Content Copyright &copy; {new Date().getFullYear()} www.heath-babb.tech
                  </p>
                  <p> {/* This paragraph is required - DO NOT REMOVE */}
                    LCARS Inspired Website Template by <a href="https://www.thelcars.com">www.TheLCARS.com</a>
                  </p>
                </div>
              </div>
              <div className="w-[12%] max-w-[130px] h-[100px] m-auto pt-[10px] pl-[0.4rem] bg-lcars-almond border-t-[5px] border-b-[5px] border-black text-[0.8rem] font-bold text-black"><span className="hop">22</span>47</div>
            </footer>
          </main>
        </div>
      </div>
    </section>	
  );
};

export default Layout;
