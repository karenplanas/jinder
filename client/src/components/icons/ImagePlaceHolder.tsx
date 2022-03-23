import React from 'react'

interface Props {
  width?: number;
  height?: number;
}

const ImagePlaceHolder: React.FC<Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 10C17.8807 10 19 8.88071 19 7.5C19 6.11929 17.8807 5 16.5 5C15.1193 5 14 6.11929 14 7.5C14 8.88071 15.1193 10 16.5 10Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 3V2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.318 4.31799L12.964 3.96399" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7.5H11.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.318 10.682L12.964 11.036" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 12V12.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.682 10.682L20.036 11.036" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 7.5H21.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.682 4.31799L20.036 3.96399" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2.5C0.5 1.39543 1.39543 0.5 2.5 0.5H21.5C22.6046 0.5 23.5 1.39543 23.5 2.5V21.5C23.5 22.6046 22.6046 23.5 21.5 23.5H2.5C1.39543 23.5 0.5 22.6046 0.5 21.5V2.5Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.30701 15.9C4.48407 14.1709 7.35315 13.579 10.0368 14.3053C12.7204 15.0317 14.8993 16.9899 15.907 19.581" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.548 17.241C15.5342 16.3415 16.8532 15.8983 18.1824 16.0199C19.5116 16.1414 20.7284 16.8165 21.535 17.88" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
} 

export { ImagePlaceHolder }