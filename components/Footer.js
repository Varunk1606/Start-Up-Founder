import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='flex justify-center items-center bg-blue-950 text-white h-16 px-10'>
      <div className='text-lg'>Copyright &copy; {year} StartUp Funder | All Rights Reserved!</div>
    </footer>
  )
}

export default Footer
