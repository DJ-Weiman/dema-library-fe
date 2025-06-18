import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
import React from 'react'


const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <BookOverview {...sampleBooks[0]} />

      <div className='mt-8'>
        <BookList
          title='Latest Books'
          books={sampleBooks} />
      </div>
    </div>
  )
}

export default Home
