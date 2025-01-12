import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='text-center text-sm text-muted-foreground py-2'>
     {year} &copy;  Dr. Sadaf. All rights reserved.
    </footer>
  )
}

export default Footer
