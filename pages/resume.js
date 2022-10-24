import Head from "next/head"
import Link from "next/link"
import {MdLocationOn} from "react-icons/md"
import {MdPhoneIphone} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Harris Crews Resume</title>
        <meta name="description" content="My resume" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/tailwind.output.css"/>
      </Head>

      <main className="min-h-screen font-serif bg-gray-700">
        <section className="bg-resumeTitle md:px-20 lg:px-40">
            <div className="pt-7 pb-5 pl-5 text-2xl text-white flex justify-between">
                <p className="m-2 lg:mt-3">Harris Crews</p>
                <div className="flex items-center mr-3">
                    <a href="Resume.png" download="Resume.png" title="Resume">
                        <div className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 m-2 px-2 py-1 text-sm rounded-md lg:mr-12 lg:text-lg lg:py-2 lg:px-6">Download</div>
                    </a>
                    <Link href="/"><a><div className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 m-2 ml-4 px-2 py-1 text-sm rounded-md lg:mr-6 lg:text-lg lg:py-2 lg:px-6">
                       Home
                    </div></a></Link>
                </div>
            </div>
        </section>
        <section className="min-h-screen flex flex-row md:mx-20 lg:mx-40">
            <div className="min-h-screen px-2 py-3 bg-contact flex-1  basis-1/4 lg:basis-1/12 lg:pb-20">
                <div className="my-1 mx-1">
                    <h1 className="mb-2 font-medium text-gray-200 text-md md:text-2xl lg:text-2xl">Contact</h1>
                    <ul>
                        <li className="flex flex-row mb-2">
                            <MdLocationOn className="text-gray-300 text-s mr-2 md:text-xl lg:text-xl"/>
                            <span className="text-gray-300 text-xs md:text-base lg:text-base">Atlanta, GA 30328</span>
                        </li>
                        <li className="flex flex-row mb-2">
                            <MdPhoneIphone className="text-gray-300 text-s mr-2 md:text-xl lg:text-xl"/>
                            <span className="text-gray-300 text-xs md:text-base lg:text-base">(205) 478-8824</span>
                        </li>
                        <li className="flex flex-row mb-2">
                            <AiOutlineMail className="text-gray-300 text-s mr-2 md:text-xl lg:text-xl"/>
                            <span className="text-gray-300 text-xs md:text-base lg:text-base">whcrews1998@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <hr className="my-3 mx-1 h-px bg-gray-300 border-0"/>
                <div className="my-1 mx-1">
                    <h1 className="mb-2 font-medium text-gray-200 text-md md:text-2xl lg:text-2xl">Accomplishments</h1>
                    <ul className="ml-3">
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">University of Alabama President's List, 2019</li>
                    </ul>
                </div>
                <hr className="my-3 mx-1 h-px bg-gray-300 border-0"/>
                <div className="my-1 mx-1">
                    <h1 className="mb-2 font-medium text-gray-200 text-md md:text-2xl lg:text-2xl">Skills</h1>
                    <ul className="ml-3 list-disc">
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">CSS</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">HTML/HTML5</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">JavaScript</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">React</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">React Native</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">Java</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">Python</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">C/C++</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">Agile Development</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">Git</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">Github</li>
                        <li className="text-gray-300 text-xs md:text-base lg:text-base">SQL</li>
                    </ul>
                </div>
                <hr className="my-3 mx-1 h-px bg-gray-300 border-0"/>
                <div className="my-1 mx-1">
                    <h1 className="mb-2 font-medium text-gray-200 text-md md:text-2xl lg:text-2xl">Certifications</h1>
                    <ul className="ml-3">
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">WISE Financial Literacy Certification</li>
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">Career and Technical Education Certification</li>
                    </ul>
                </div>
                <hr className="my-3 mx-1 h-px bg-gray-300 border-0"/>
                <div className="my-1 mx-1">
                    <h1 className="mb-2 font-medium text-gray-200 text-md md:text-2xl lg:text-2xl">Volunteer</h1>
                    <ul className="ml-3">
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">Volunteer Habitat for Humanity, Birmingham, AL</li>
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">Volunteer Tuscaloosa Humane Shelter</li>
                        <li className="text-gray-300 text-xs list-disc md:text-base lg:text-base">Volunteer Community Kitchens of Birmingham</li>
                    </ul>
                </div>
                
            </div>
            <div className="min-h-screen  bg-white  flex-1 basis-3/4 p-3 lg:basis-3/6 lg:px-10 lg:pr-28 lg:py-5">
                <p className=" text-xxs md:text-base lg:text-lg">
                    Skilled multitasker with a superior work ethic and excellent
                    communication skills. Motivated by solving or improving existing
                    workplace standards. Reliable and dedicated team player with a
                    hardworking and resourceful approach.
                </p>
                <hr className="my-3 h-px bg-gray-600 border-0"/>
                <h1 className="md:text-lg lg:text-2xl">Work History</h1>
                <div className="mt-1 lg:pr-32">
                    <div className="my-1 ">
                        <p className="text-xs md:text-base lg:text-lg">July 2022 to Today</p>
                        <p className="text-xxs font-bold md:text-xs lg:text-base">
                            Software Developer, 
                            <span className="italic text-xxs font-medium md:text-xs lg:text-base"> Amdocs, </span>
                            <span className="text-xxs font-light md:text-xs lg:text-base">Atlanta, GA</span>
                        </p>
                        <ul className="text-xxs md:text-xs lg:text-base list-disc ml-5 mt-1">
                            <li>Revised, modularized, and updated old code bases to modern development standards, reducing operating costs and improving functionality.</li>
                            <li>Collaborated on stages of system development lifecycle from requirement gathering to production releases.</li>
                            <li>Participated in software field testing to verify the performance of developed projects.</li>
                        </ul>
                    </div>
                    <div className="my-1">
                        <p className="text-xs md:text-base lg:text-lg">May 2019 to August 2019</p>
                        <p className="text-xxs font-bold md:text-xs lg:text-base">
                            Intern for Health Services Information Services (HSIS), 
                            <span className="italic text-xxs font-medium md:text-xs lg:text-base"> UAB Medicine, </span>
                            <span className="text-xxs font-light md:text-xs lg:text-base">Birmingham, AL</span>
                        </p>
                        <ul className="text-xxs md:text-xs lg:text-base list-disc ml-5 mt-1">
                            <li>Assisted with IT-related issues.</li>
                            <li>Attended daily SCRUM meetings.</li>
                            <li>Provided feedback on hospital work-related items.</li>
                            <li>Participated in cyber security upgrades and oversight.</li>
                        </ul>
                    </div>
                    <div className="my-1">
                        <p className="text-xs md:text-base lg:text-lg">May 2018 to August 2018</p>
                        <p className="text-xxs font-black md:text-xs lg:text-base">Intern for CEO 
                            <span className="italic text-xxs font-medium md:text-xs lg:text-base"> Golomb Development, </span>
                            <span className="text-xxs font-medium md:text-xs lg:text-base"> Montgomery, AL</span>
                        </p>
                        
                        <ul className="text-xxs list-disc ml-5 mt-1 md:text-xs lg:text-base">
                            <li>Took meeting notes and compiled necessary documents to support leases and acquisitions.</li>
                            <li>Collaborated with team to optimize workflow and implement logistical solutions.</li>
                        </ul>
                    </div>
                    <div className="my-1">
                        <p className="text-xs md:text-base lg:text-lg">May 2017 to August 2017</p>
                        <p className="text-xxs font-black md:text-xs lg:text-base">
                            Warehouse/Sales Assistant 
                            <span className="italic font-light md:text-xs lg:text-base"> Construction Materials, </span> 
                            <span className="font-light md:text-xs lg:text-base">Montgomery, AL</span>
                        </p>
                        <ul className="text-xxs list-disc ml-5 mt-1 md:text-xs lg:text-base">
                            <li>Entered, coded, and processed vendor invoices and provided input on growth and sales revenue.</li>
                            <li>Optimized and improved information gathering through a new customer database.</li>
                            <li>Created a presentation for the implementation of a more efficient filing system.</li>
                        </ul>
                    </div>
                    <div className="my-1">
                        <p className="text-xs md:text-base lg:text-lg">May 2016 to August 2017</p>
                        <p className="text-xxs font-black md:text-xs lg:text-base">
                            COOP Incubator Program 
                            <span className="italic font-light"> Icebox Coffee, </span> 
                            <span className="font-light">Birmingham, AL</span>
                        </p>
                        <ul className="text-xxs list-disc ml-5 mt-1 md:text-xs lg:text-base">
                            <li>Monitored supply levels and maintained customer areas to meet typical demands.</li>
                            <li>Required to memorize recipes for various blends of coffee.</li>
                            <li>Responsible for end-of-shift cleaning and organization of assembly floor.</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-3 h-px bg-gray-600 border-0"/>
                <div className="my-3">
                    <h1 className="md:text-lg lg:text-2xl">Education</h1>
                    <p className="text-xs md:text-base lg:text-lg">May 2022,</p>
                    <p className="text-xxs font-black md:text-xs lg:text-base">Bachelor of Science, Computer Science</p>
                    <p className="text-xxs md:text-1xl md:text-xs lg:text-base"> <span className="font-xxbold">The University of Alabama</span>, Tuscaloosa, AL</p>
                </div>
                
                
            </div>
        </section>
      </main>

    </div>
  )
}
