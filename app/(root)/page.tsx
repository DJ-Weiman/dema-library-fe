import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { getBooks } from '@/lib/books'
import React from 'react'


const Home = async () => {
  const {books, numberOfPages} = await getBooks(1, 10)

  return (
    <div className='flex flex-col items-center'>
      <BookOverview {...books[0]} />

      <div className='mt-8'>
        <BookList
          title='Latest Books'
          numberOfPages={numberOfPages}
          books={books} />
      </div>
    </div>
  )
}

export default Home
