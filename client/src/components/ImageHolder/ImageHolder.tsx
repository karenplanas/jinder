import clsx from 'clsx'
import React from 'react'
import './ImageHolder.css'

interface Props {
  size?: 'big' | 'medium'
}

const ImageHolder : React.FC<Props> = ({ children, size = 'medium' }) => {
  return (
    <div className={clsx('ImageHolder', `ImageHolder-${size}`)}>
      {children}
    </div>
  )
}

export { ImageHolder }