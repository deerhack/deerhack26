import { cabinetExtraBold, cabinetRegular, satoshiRegular } from "@/app/utils/fonts"
import judgingCriteriaData from "@/app/sections/judgesCriteriaSection/judging-criteria.json"

interface JudgingSection {
  title: string
  paragraphs: string[]
}

interface JudgingCriteriaData {
  title: string
  sections: JudgingSection[]
}

const page = () => {
  const data: JudgingCriteriaData = judgingCriteriaData as JudgingCriteriaData

  return (
    <div className={`${cabinetRegular.className} text-lg`}>
      <br /><br /><br />
      <h1 className={`headings ${cabinetExtraBold.className} lg:text-[3.5rem] mb-24 pt-32`}>
        {data.title}
      </h1>
      
      <div className={`${satoshiRegular.className} flex flex-col text-white md:px-24 px-10 text-justify text-wrap font-[400]`}>
        {data.sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <h2 className={`lg:text-[2.25rem] headings ${cabinetExtraBold.className} mb-10`}>
              {section.title}
            </h2>
            
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p 
                key={paragraphIndex}
                className={`leading-[155%] lg:text-[1.5rem] ${
                  paragraphIndex === section.paragraphs.length - 1 ? 'mb-10' : 'mb-3'
                }`}
              >
                {paragraph}
              </p>
            ))}
            
            {sectionIndex < data.sections.length - 1 && (
              <><br /><br /><br /></>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
