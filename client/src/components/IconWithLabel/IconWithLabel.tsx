import React from 'react'
import './IconWithLabel.css'

interface Props {
  label: string
  icon: React.ReactNode
}

const IconWithLabel: React.FC<Props> = ({label, icon}) => {
  return (
    <div className='IconWithLabel-container'>
      {icon}
      {label}
    </div>
  )
}

export { IconWithLabel }