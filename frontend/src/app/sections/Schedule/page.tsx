import { Schedule } from '@/app/types/Schedule'
import { cabinetExtraBold, cabinetLight, cabinetRegular } from '@/app/utils/fonts';
import React from 'react'

const ScheduleSection = () => {
    const Schedule: Schedule[] = [
        {
            date: "9th May | Pre-event ",
            events: [
                {
                    time: "11:00 AM",
                    title: "Welcome Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "12:30 PM",
                    title: "SecurityPal Special Orientation Session",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "01:30 PM",
                    title: "Ice Breaker Game",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "02:30 PM",
                    title: "Team Formation & Registration",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "03:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "03:30 PM",
                    title: "Team Bonding Game",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "05:00 PM",
                    title: "Closing Off",
                    venue: "Sagarmatha Hall",
                },
            ]
        },
        {
            date: "10th May | Day 1", 
            events: [
                {
                    time: "02:00 PM",
                    title: "Check-in Teams",
                    venue: "DWIT Complex",
                },
                {
                    time: "03:00 PM",
                    title: "Opening Ceremony",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "04:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "05:30 PM",
                    title: "Coding Session Starts",
                    venue: "Coding Rooms",
                },
                {
                    time: "07:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
                {
                    time: "10:00 PM",
                    title: "Fun Game 01",
                    venue: "Coding Rooms",
                },
            ]
        },
        {
            date: "11th May | Day 2", 
            events: [
                {
                    time: "08:00 AM",
                    title: "Breakfast",
                    venue: "Cafeteria",
                },
                {
                    time: "11:00 AM",
                    title: "Github Education Workshop",
                    venue: "Room 101 , Building 13",
                },
                {
                    time: "12:30 AM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "03:00 PM",
                    title: "Fun Game 02",
                    venue: "Courtyard",
                },
                {
                    time: "04:00 PM",
                    title: "Snacks and Drinks",
                    venue: "Cafeteria",
                },
                {
                    time: "06:00 PM",
                    title: "Workshop 02",
                    venue: "Room 101 , Building 13",
                },
                {
                    time: "07:00 PM",
                    title: "Dinner",
                    venue: "Cafeteria",
                },
            ]
        },
        {
            date: "12th May | Day 3",
            events: [
                {
                    time: "06:30 AM",
                    title: "Check Out | Teams",
                    venue: "DWIT Complex",
                },
                {
                    time: "08:00 AM",
                    title: "Breakfast",
                    venue: "Cafeteria",
                },
                {
                    time: "09:30 AM",
                    title: "First Stage Judgement",
                    venue: "Coding Rooms",
                },
                {
                    time: "12:00 PM",
                    title: "Lunch",
                    venue: "Cafeteria",
                },
                {
                    time: "01:30 PM",
                    title: "Pitching Sessions",
                    venue: "Sagarmatha Hall",
                },
                {
                    time: "04:00 PM",
                    title: "Winner Announcement & Closing Ceremony",
                    venue: "Sagarmatha Hall",
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
                <div className=' md:p-[3.625rem] mt-10 md:mt-0 grid lg:grid-rows-4 lg:grid-flow-col grid-col-1 gap-y-10 gap-x-32'>
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