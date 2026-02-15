"use client"
import MentorReviewSVG from "@/app/assets/images/MentorReview"
import VolunteerReviewSVG from "@/app/assets/images/VolunteerReview"
import MainExpCard from "@/app/components/TheDeerHackExp/MainExpCard"
import type { ReactElement } from "react"

type Testimonial = {
  id: number
  description: string
  bottomText: string
  finBottomText: string
  svg: ReactElement
}

export default function ExperienceCard({ activeIndex = 0 }) {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      description:
        "Everything was pretty smooth. For the students to be able to organize something as amazing as this is pretty remarkable. So, take your time and pat yourself on the back maybe.",
      bottomText: "Mentor",
      finBottomText: "DeerHack 2024",
      svg: <MentorReviewSVG />,
    },
    {
      id: 2,
      description:
        "Nice learning experience. Workshops were mind refreshing. Had fun communicating with participants and mentors, was a great learning and networking experience.",
      bottomText: "Volunteer",
      finBottomText: "DeerHack 2024",
      svg: <VolunteerReviewSVG />,
    },
    {
      id: 3,
      description:
        "Everything was as well managed as it could be! From amazing coffee and food to the awesome group of motivating mentors and super helpful volunteers and the organizers. Thank you for an amazing experience!",
      bottomText: "Participant",
      finBottomText: "DeerHack 2024",
      svg: <MentorReviewSVG />,
    },
  ]

  return (
    <div className="flex flex-row gap-6 snap-x snap-mandatory">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="flex justify-center snap-center min-w-full lg:min-w-[400px]">
          <MainExpCard
            description={testimonial.description}
            bottomText={testimonial.bottomText}
            finBottomText={testimonial.finBottomText}
            svg={testimonial.svg}
          />
        </div>
      ))}
    </div>
  )
}