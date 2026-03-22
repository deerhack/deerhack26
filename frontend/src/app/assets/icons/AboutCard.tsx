import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { details } from './data';
import ImprovizedButton from '@/app/assets/icons/ImprovizedButton';
import CoffeCup from '@/app/assets/icons/CoffeeCup';
import Laptop from '@/app/assets/icons/Laptop';
import Guitar from '@/app/assets/icons/Guitar';

const AboutCard = function() {
    const [active, setActive] = useState(0);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.killTweensOf(".detail-content");
        gsap.set(".detail-content", {
            display: "none",
            opacity: 0,
            y: 20
        });

        gsap.to(`.detail-${active}`, {
            display: "block",
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.1
        });

    }, {dependencies: [active], scope: container});

    return (
        <div ref={container} className='about-card-container h-max w-full md:w-200 xl:w-[76.688rem] md:h-150.5 bg-[linear-gradient(245deg,#6633CC_0%,#F5C144_100%)] rounded-[20px] p-[4px] flex justify-center items-center relative'>
            <div className='w-full h-full bg-[#130a2c] rounded-2xl p-10 2xl:p-15 flex flex-col justify-center items-start relative'>
                {details.map((item, index) => (
                    <div key={item.id} className={`detail-content detail-${index} 2xl:pr-20`}>
                        <div className='text-[24px] md:text-[32px] lg:text-[48px] font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,#6633CC_0%,#F5C144_100%)] mb-2 sm:mb-5 lg:mb-10'>
                            {item.title}
                        </div>
                        <div className='mb-5 text-[14px] sm:text-[24px] 2xl:text-[28px] text-white leading-relaxed 2xl:pr-15 sm:mb-0'>
                            {item.desc}
                        </div>
                    </div>
                ))}

                <div className='flex 2xl:hidden absolute bottom-5 left-0 w-full justify-center gap-3'>
                    {details.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setActive(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === index ? 'bg-white scale-125' : 'bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>

            <div>
                <ImprovizedButton 
                    setActive={setActive} 
                    active={active}
                    className='interactive-btn-anim absolute top-[15%] -right-[16.5%] -rotate-3.56 origin-center z-20 w-max hidden 2xl:flex'
                />
            </div>
            
            <CoffeCup className='hidden 2xl:flex event-icon absolute -left-[28%] bottom-[15%]' />
            <Laptop className='hidden 2xl:flex event-icon absolute -left-[29%] -bottom-[50%]' />
            <Guitar className='hidden 2xl:flex event-icon absolute -left-[5%] -bottom-[60%]' />
        </div>
    );
};

export default AboutCard;