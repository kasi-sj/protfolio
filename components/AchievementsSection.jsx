"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumber = dynamic(() => import('react-animated-numbers'), { ssr: false })  

const achievements = [
    {
        metric:"Projects",
        value:3,
        postfix:"+"
    },
    {
        metric:"Symposiums",
        value:5,
        postfix:"+"
    },
    {
        metric:"LeetCode",
        value:900,
        postfix:"+"
    },
    {
        metric:"CodeChef",
        value:3,
        postfix:"★"
    },
    {
        metric:"Hackerrank",
        value:5,
        postfix:"★"
    }
]

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-[16] sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-[17] flex flex-row flex-wrap items-center justify-between'>
                {achievements.map((achievement, index) => (
                    <div key={index} className='flex flex-col justify-center items-center gap-4 mx-5'>
                        <h5 className='text-3xl font-bold text-white flex pt-3'>
                            <AnimatedNumber
                            includeComma
                            animateToNumber={achievement.value}
                            locale="en-IN"
                            className="text-white text-4xl font-bold"
                            configs={
                                (_,index)=>{
                                    return {
                                        mass:1,
                                        friction:100,
                                        tension:140*(index+1)
                                    }
                                }
                            }
                        />{achievement.postfix}
                        </h5>
                        <p className='text-[#ADB7BE] text-base '>{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AchievementsSection
