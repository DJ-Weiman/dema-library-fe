import Image from 'next/image'
import React from 'react'

type Props = {
  coverUrl: string,
  title: string,
  genre: string
}

function Book({ coverUrl, title, genre }: Props) {
  return (
    <div className='max-'>
      <Image
        src={coverUrl}
        alt="Book Cover"
        height={150}
        width={250}
        className='rounded-sm object-cover'
      />

      <div className='flex flex-col gap-2 mt-2'>
        <p className='text-sm font-bold'>{title}</p>
        <p className='text-xs font-light text-slate-400'>{genre}</p>
      </div>
    </div>
  )
}

export default Book