import { Schedule } from '@/app/types/Schedule'
import { cabinetExtraBold, cabinetLight, cabinetRegular } from '@/app/utils/fonts';
import React from 'react'

const ScheduleSection = () => {
    const Schedule: Schedule[] = [
        {
            date: "11th June | Pre-event ",
            events: [
                {
                    time: "11:00 AM",
                    title: "Participants arrival & Registration",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:00 PM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:15 PM",
                    title: "Rules and Regulation Orientation",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:45 PM",
                    title: "Organizing Committee Speech",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "1:15 PM",
                    title: "Session by Mala Deep Upadhaya",
                    venue: "Cafeteria",
                },
                {
                    time: "2:15 PM",
                    title: "Icebreaking Session with Members",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "3:00 PM",
                    title: "Tea Break/ Coffee Visit",
                    venue: "Cafeteria & Courtyard",
                },
                {
                    time: "3:30 PM",
                    title: "Networking",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "6:00 PM",
                    title: "Departure",
                    venue: "Sagarmatha Hall",
                },
            ]
        },
        {
            date: "12th June | Day 1", 
            events: [
                {
                    time: "10:00 AM",
                    title: "Arrival & Registration",
                    venue: "DWIT Complex",
                },
                {
                    time: "12:00 PM",
                    title: "Orientation and Opening Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "1:00 PM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "2:00 PM",
                    title: "Photo Session I/T-shirt Distribution",
                    venue: "Cortyard | Half of participants",
                },
                {
                    time: "3:00 PM",
                    title: "Coding Session-I",
                    venue: "Coding space",
                },
                {
                    time: "5:00 PM",
                    title: "Photo Session-II/T-Shirt Distribution",
                    venue: "Cortyard | Remaining Participants",
                },
                {
                    time: "6:00 PM",
                    title: "Coding Session-II",
                    venue: "Coding Space",
                },
                {
                    time: "8:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
            ]
        },
        {
            date: "13th June | Day 2", 
            events: [
                {
                    time: "8:00 AM",
                    title: "Breakfast",
                    venue: "Cafeteria",
                },
                {
                    time: "9:00 AM",
                    title: "Coding Session-I",
                    venue: "Coding Space",
                },
                {
                    time: "11:00 AM",
                    title: "Workshop",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:00 PM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "1:30 PM",
                    title: "Coding Session-II",
                    venue: "Coding Space | Mentor's Assistance",
                },
                {
                    time: "4:30 PM",
                    title: "Snacks",
                    venue: "Cafeteria",
                },
                {
                    time: "6:00 PM",
                    title: "Live Music",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "8:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
            ]
        },
        {
            date: "14th June | Day 3",
            events: [
                {
                    time: "00:45 AM",
                    title: "WorldCup Screening",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "7:00 AM",
                    title: "Project Submission",
                    venue: "DWIT",
                },
                {
                    time: "8:00 AM",
                    title: "Breakfast",
                    venue: "Courtyard",
                },
                {
                    time: "9:00 AM",
                    title: "Judging Session",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "11:30 PM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "12:30 PM",
                    title: "Project Pitching",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "3:00 PM",
                    title: "Winner Announcement & Closing Ceremony",
                    venue: "Cortyard",
                },
                {
                    time: "4:00 PM",
                    title: "Photoshoot & Logistical Arrangement",
                    venue: "Cortyard",
                },
            ]
        }
    ];
  return (
    <div className='flex flex-col'>
        <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>Event Schedule</h1>
        {Schedule.map((day:Schedule)=>(
            <div key ={day.date} className='w-[80%] mx-auto text-white '>
                <div  className={`${cabinetExtraBold.className} md:text-3xl text-2xl primary-gradient-background p-0.5 rounded-md`}>
                    <div className='bg-violet rounded-md py-5'>
                        <span className='headings text-xl p-4 sm:text-3xl md:px-14 '>
                        {day.date}    
                        </span>
                    </div>
                </div>
                <div className='md:p-[3.625rem] mt-10 md:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-32'>
                    {day.events.map((event,index)=>(
                        <div key = {index} className={`flex flex-row flex-nowrap items-start justify-start sm:justify-center xl:justify-normal gap-16 mb-5`}>
                            <div className={`${cabinetExtraBold.className} xl2:text-3xl text-xl md:text-2xl w-5 sm:w-24 md:w-32 `}>
                                {event.time}
                            </div>
                            <div className='flex flex-col sm:w-[150px] md:w-[250px]'>
                                {/* w-32 md:w-[80%] */}
                                <p className={`${cabinetExtraBold.className} xl2:text-3xl text-xl md:text-2xl mb-1`}>{event.title}</p>
                                <p className={`${cabinetLight.className} xl2:text-xl md:text-base text-sm font-medium text-[#FCF7FF] `}>Venue: {event.venue}</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        ))}

    </div>
  )
}

export default ScheduleSection