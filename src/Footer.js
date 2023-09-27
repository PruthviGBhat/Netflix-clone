import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col justify-center bg-black text-white md:flex-row md:space-x-20 lg:space-x-40 xl:space-x-80'>
                <div className='mt-5 ml-3'>
                    <select name="" id="" className='hidden sm:block p-1  border-white bg-gray-600 text-white font-semibold rounded-md border-none px-4 py-2 '>
                        <option value="English">English</option>
                        <option value="English">Hindi</option>
                        <option value="English">Tamil</option>
                        <option value="English">Malyaliyam</option>
                        <option value="English">Kannada</option>
                        <option value="English">Telugu</option>
                        <option value="English">Bengali</option>
                    </select>
                    <h2 className='ml-2 mt-3'>Netflix India</h2>
                    <h2 className='ml-2 mt-3'>Call 000-800-919-1694</h2>
                </div>
                <div className='flex flex-col ml-5 mt-5 space-y-3'>
                    <a href="#">FAQ</a>
                    <a href="#">Media Centre</a>
                    <a href="#">Ways to Watch</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Speed Test</a>

                </div>
                <div className='flex flex-col ml-5 mt-5 space-y-3'>
                    <a href="">Help Centre</a>
                    <a href="">Investor Relations</a>
                    <a href="">Terms of Use</a>
                    <a href="">Corporate Information</a>
                    <a href="">Legal Notices</a>

                </div>
                <div className='flex flex-col ml-5 mt-5 space-y-3'>
                    <a href="">Account</a>
                    <a href="">Jobs</a>
                    <a href="">Privacy</a>
                    <a href="">Contact Us</a>
                    <a href="">Only on Netflix</a>
                </div>

            </div>
        </>
    )
}

export default Footer
