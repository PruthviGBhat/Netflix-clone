import React from 'react'
import tv from '../Images/tv.png'
import mobiimg from '../Images/mobile-0819.jpg'
import tvmobi from '../Images/tvmobi.png'
import child from '../Images/child.png'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center items-center my-3 bg-black'>
                <div className='lg:w-1/2'>
                    <img src={tv} alt="" className='object-contain mb-8' />
                </div>
                <div className='flex justify-center items-center flex-col text-white lg:w-1/2'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Enjoy on your TV</h1>
                    <span className='mt-5 text-md text-center my-5 md:text-xl '>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center my-3 bg-black'>
                <div className='lg:w-1/2'>
                    <img src={mobiimg} alt="" className='object-contain mb-8' />
                </div>
                <div className='flex justify-center items-center flex-col text-center text-white lg:w-1/2'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Download your shows to watch offline</h1>
                    <span className='mt-5 text-md text-center my-5 md:text-xl '>Save your favourites easily and always have something to watch.</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center my-3 bg-black'>
                <div className='lg:w-1/2'>
                    <img src={tvmobi} alt="" className='object-contain mb-8' />
                </div>
                <div className='flex justify-center items-center flex-col text-center text-white lg:w-1/2'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Watch everywhere</h1>
                    <span className='mt-5 text-md text-center my-5 md:text-xl '>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center my-3 bg-black'>
                <div className='lg:w-1/2'>
                    <img src={child} alt="" className='object-contain mb-8' />
                </div>
                <div className='flex justify-center items-center flex-col text-center text-white lg:w-1/2'>
                    <h1 className='text-2xl font-bold md:text-4xl'>Create profiles for kids</h1>
                    <span className='mt-5 text-md text-center my-5 md:text-xl '>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                </div>
            </div>

        </>
    )
}

export default Hero
