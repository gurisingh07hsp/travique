import React from 'react'

const GetStartContainer = () => {
  return (
    <div className='my-20'>
      <div className='max-w-7xl mx-auto relative flex justify-center items-center'>
        <img src="/container.png" alt="container" />
        <div className='absolute top-[15%] w-3xl text-primary text-center space-y-10'>
            <h2 className='font-medium'>OUR SERVICE</h2>
            <h2 className='text-5xl font-bold text-center'>Click to Secure Your Travique Experience Now!</h2>
            <p>Fermentum luctus convallis non lectus. Aliquam at ut viverra noniqu arcu massa laoreet commodo ac. Fermentum luctus convallis. Aliquam at ut</p>
            <button className='px-5 py-2 bg-white text-blue-600 font-bold rounded-3xl'>Get Started Now</button>
        </div>
      </div>
    </div>
  )
}

export default GetStartContainer
