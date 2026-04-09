import React from 'react'

interface PlayProps { isPlaying: boolean }

function PlayButton({ isPlaying }: PlayProps) {
  return (
    <svg width="78" height="78" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="43.0912" cy="43.0912" r="43.0912" fill="#9D4BAD"/>
      {isPlaying ? (
        /* PAUSE ICON PATH */
        <g transform="translate(30, 28)">
          <rect width="8" height="30" rx="2" fill="#FCF7FF" />
          <rect x="18" width="8" height="30" rx="2" fill="#FCF7FF" />
        </g>
      ) : (
        /* YOUR ORIGINAL PLAY PATH */
        <path d="M59.0819 40.3378C60.8589 41.3637 60.8589 43.9285 59.0819 44.9545L37.7585 57.2656C35.9815 58.2915 33.7603 57.0091 33.7603 54.9572V30.335C33.7603 28.2832 35.9815 27.0008 37.7585 28.0267L59.0819 40.3378Z" fill="#FCF7FF"/>
      )}
    </svg>
  )
}

export default PlayButton