"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

// functional composition that builds up the home page:
// to welcome users with an pleasant animation effect,
export default function Home() {

  // used to control the animation of the subtitle:
  const subtitle: String = "Unleashing the Future of Commodities with Blockchains"
  const delayBetweenLetters = 2000 / subtitle.length
  
  return (
    <div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-[8vw] font-medium hover:text-[var(--main-blue)] hover:scale-105 z-10">Welcome to BPTrade</p>
          <p className="text-[3vw] font-extralight text-[var(--main-blue)] z-5 loader">
            {subtitle.split('').map((letter, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * delayBetweenLetters}ms` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>

    </div>
  )
}
