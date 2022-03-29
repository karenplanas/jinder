import clsx from 'clsx'
import React from 'react'
import './ImageHolder.css'

interface Props {
  size?: 'big' | 'medium'
  onClick?: () => void
  className?: string
}

const ImageHolder : React.FC<Props> = ({ children, size = 'medium', onClick, className }) => {
  return (
    <div className={clsx('ImageHolder', `ImageHolder-${size}`, className)} onClick={onClick}>
      {children}
    </div>
  )
}

export { ImageHolder }