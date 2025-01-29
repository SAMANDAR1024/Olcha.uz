import React from 'react'
import img3ta from '../../assets/Image3.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
function Image3ta() {
  return (
    <div className='flex justify-self-center gap-10 my-10'>
        <img className='rounded-xl' src={img3ta} alt="" />
        <img className='rounded-xl' src={img2} alt="" />
        <img className='rounded-xl' src={img3} alt="" />
    </div>
  )
}

export default Image3ta