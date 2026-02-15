import { cabinetExtraBold, satoshiRegular, cabinetRegular,cabinetBold } from '@/app/utils/fonts'
import React from 'react'

const page = () => {
  return (
    
    <>
    
      <div className={`${cabinetRegular.className} text-base md:text-lg`}>
        <div className="text-white px-6 md:px-24">
          <h1 className={`headings ${cabinetExtraBold.className} text-3xl md:text-5xl mb-6 md:mb-10 pt-32 md:pt-32`}>
            Selection Criteria
          </h1>
          <p className={`${satoshiRegular.className} leading-7 md:leading-9 mb-6 text-gray-300`}>
            The project is primarily marked on its creativity and uniqueness, as these elements serve as the cornerstone of innovation. How the end-result properly justifies the technologies used in the project heavily decides the marking for innovation, demonstrating not only a mastery of tools but also a deep understanding of their application to solve real-world problems. 
          </p>
        </div>
        <br></br>

        <div className="flex flex-col text-white px-6 md:px-24">
          <h2 className={`text-2xl md:text-4xl font-bold mb-6 headings ${cabinetExtraBold.className}`}>Criteria</h2>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold mb-3">Resume/CV Evaluation:</h3>
            <ul className="list-disc ml-5 md:ml-6 space-y-2">
              <li>
                <span className={`${cabinetBold.className}`}>Skills Showcase : </span> Show us what you've got! We're interested in your skills, experience, and any cool projects or achievements you've been a part of.
              </li>
              <li>
                <span className={`${cabinetBold.className}`}>Wow Factor : </span> What makes you stand out from the crowd? Whether it's your coding chops, design flair, or knack for problem-solving, we want to know!
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold mb-2">Answers to Registration Questions:</h3>
            <ul className="list-disc ml-5 md:ml-6 space-y-2">
              <li>
                <span className={`${cabinetBold.className}`}>Creative Ideas Flowing : </span> Get those creative ideas flowing and impress us with your answers to registration questions. We're looking for fresh ideas, innovative thinking, and a sprinkle of personality.
              </li>
              <li>
                <span className={`${cabinetBold.className}`}>Passion on Display : </span> Let your passion for coding, creating, and making a difference shine through. Show us why you're excited to be part of DeerHack!
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold mb-2">LinkedIn Profiles:</h3>
            <ul className="list-disc ml-5 md:ml-6 space-y-2">
              <li>
                <span className={`${cabinetBold.className}`}>Professional Snapshot : </span> Give us a snapshot of your professional journey on LinkedIn. We want to see your skills, connections, and any endorsements or recommendations that highlight your awesomeness.
              </li>
              <li>
                <span className={`${cabinetBold.className}`}>Networking Ninja : </span> Have you been making waves in your industry? Show us how you've been networking, collaborating, and making a name for yourself!
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold mb-2">GitHub Profiles:</h3>
            <ul className="list-disc ml-5 md:ml-6 space-y-2">
              <li>
                <span className={`${cabinetBold.className}`}>Code Connoisseur : </span> Your GitHub profile is like your portfolio. Show us your best work, your contributions to open-source projects, and your coding style.
              </li>
              <li>
                <span className={`${cabinetBold.className}`}>Team Player : </span> We're all about teamwork! Show us how you've collaborated with others on GitHub and what you bring to the table as a team player.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white px-6 md:px-24 mt-16 md:mt-20">
        <div className="w-full">
        <h2 className={`text-2xl md:text-4xl font-bold mb-6 headings ${cabinetExtraBold.className}`}>Selection Process</h2>
          <ul className={`list-disc ml-5 md:ml-6 mb-6 leading-7 md:leading-8 text-base md:text-xl space-y-2 mt-10 text-gray-300 ${satoshiRegular.className} `}>
            <li>A selection committee will review and evaluate all applications based on the above criteria.</li>
            <li>Each candidate will be scored and ranked based on their qualifications, experience, responses, and profiles.</li>
            <li>The top candidates who best meet the selection criteria will be selected to participate in DeerHack 2024.</li>
          </ul>
        </div>
        <br></br>
        <br></br>

        <h2 className={`text-2xl md:text-4xl font-bold mb-6 headings ${cabinetExtraBold.className}`}>Total Participants</h2>
        <p className={`${satoshiRegular.className} mb-6 text-base md:text-lg mt-10 text-gray-300`}>
          We're on a quest to find <span className="text-[#FBBF24] font-bold">75</span> amazing individuals to join us for DeerHack. Will you be one of them?
        </p>
        <br></br>
        <br></br>

        <h2 className={`text-2xl md:text-4xl font-bold mb-6 headings ${cabinetExtraBold.className}`}>Important Note</h2>
        <ul className={` ${satoshiRegular.className}  list-disc ml-5 md:ml-6  space-y-2 text-base md:text-lg mt-10 text-gray-300 pb-[6.8rem]`}>
          <li><span className={`${satoshiRegular.className}`}>Individual team size may vary from normal team sizes under special circumstances.</span></li>
          <li><span className={`${satoshiRegular.className}`}>The selection process is all about finding the right fit for DeerHack. So, be yourself, show us what you've got, and let's make magic happen together!</span></li>
        </ul>
      </div>
    </>
  )
}

export default page;