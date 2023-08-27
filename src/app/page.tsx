"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image'


const DynamicComponent = dynamic(() => import('./lazycomponent'))

export default function Home() {
  return (
    <main >
      <Image 
      src="/river.png"
      width={300}
      height={300}
      alt="target measurement image"
      />
      <DynamicComponent />
    </main>
  )
}
