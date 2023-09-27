import React from 'react'
import mainimg from './mainimg.jpg'
import './App.css';

const Mainpage = () => {
    return (
        <>
            <div className='h-screen'
                style={{
                    backgroundImage: `url(${mainimg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <div className='flex justify-between fixed top-0 p-10 w-full h-8 z-50 transition-all bg-black opacity-80'>
                    <div className='w-14 h-6 '>
                        <img
                            className="fixed top-3 left-0 object-contain max-w-full h-16 cursor-pointer ml-5"
                            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                            alt=""
                        />
                    </div>
                    <div className='flex justify-center items-center space-x-10 mt-2'>
                        <div>
                            <select name="" id="" className='hidden sm:block p-1 mx-2 border-white bg-gray-600 text-white font-semibold rounded-md border-none px-4 py-2'>
                                <option value="English">English</option>
                                <option value="English">Hindi</option>
                                <option value="English">Tamil</option>
                                <option value="English">Malyaliyam</option>
                                <option value="English">Kannada</option>
                                <option value="English">Telugu</option>
                                <option value="English">Bengali</option>
                            </select>
                        </div>
                        <div>
                            <button className='bg-red-600 p-2 px-4 rounded-md mx-2 text-white font-semibold'>Sign In</button>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center h-screen banner_fadeBottom  '>
                    <h1 className='text-white font-bold md:text-3xl my-1 text-xl mx-5 text-center'>Unlimited movies, Tv shows and more</h1>
                    <h3 className='text-white font-medium md:text-xl my-1 text-md'>Watch anywhere. Cancel anytime</h3>
                    <div className='flex md:flex-row flex-col w-full h-15 justify-center items-center '>
                        <input type="email" className='w-3/4 md:w-1/2 xl:w-1/3 lg:w-1/4  text-white p-2 m-2 md:py-3 rounded-md bg-gray-600 border-none border-white' placeholder='Email address' />
                        <button className='w-3/4 md:w-1/5 xl:w-1/12 lg:w-1/6 mx-4 bg-red-600 px-4 rounded-md  text-white py-3 '>Get started</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Mainpage
