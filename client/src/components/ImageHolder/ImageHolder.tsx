import React from 'react'
import './ImageHolder.css'

const ImageHolder : React.FC = ({ children }) => {
  return (
    <div className='ImageHolder'>
      {children}
    </div>
  )
}

export { ImageHolder }