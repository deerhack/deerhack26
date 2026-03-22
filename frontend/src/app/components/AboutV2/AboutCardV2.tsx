import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { details } from './data';
import ImprovizedButton from '@/app/assets/icons/ImprovizedButton';
import CoffeCup from '@/app/assets/icons/CoffeeCup';
import Laptop from '@/app/assets/icons/Laptop';
import Guitar from '@/app/assets/icons/Guitar';
import { cabinetExtraBold, satoshiRegular } from '@/app/utils/fonts';

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
        <div ref={container} className='about-card-container h-max w-full xl:w-[76.688rem] md:h-150.5 xl:h-[37.625rem] primary-aboutpage-background rounded-[20px] p-[4px] tems-center relative flex justify-center mx-4'>
            <div className='w-full h-full bg-[#130a2c] rounded-2xl p-10 2xl:p-15 flex flex-col justify-center items-start relative'>
                {details.map((item, index) => (
                    <div key={item.id} className={`detail-content detail-${index} 2xl:pr-20`}>
                        <div className="bg-dark-purple rounded-full w-12 lg:w-20 h-12 mb-5 lg:h-20 flex items-center justify-center p-0">
                            {item.svg && typeof item.svg !== 'string' ? (
                                <item.svg />
                            ) : null}
                        </div>
                        <div className={`flex  justify-start items-center text-3xl lg:text-6xl text-main-title w-fit  ${cabinetExtraBold.className} text-start`}>
                            <p className=''>{item.title}</p>
                        </div>
                        <div className={`text-magnolia text-base text-justify lg:text-[28px] ${satoshiRegular.className} leading-7 tracking-wide mt-10 pr-5`}>
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