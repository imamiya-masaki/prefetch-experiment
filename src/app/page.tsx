"use client"

import dynamic from 'next/dynamic';
import Image from 'next/image'

// import DynamicComponent from './lazycomponent'

const DynamicComponent = dynamic(() => import('./lazycomponent'))

export default function Home() {
  return (
    <main >
      <Image 
      src="/river.png"
      width={1000}
      height={1000}
      alt="target measurement image"
      />
      <DynamicComponent />
    </main>
  )
}
