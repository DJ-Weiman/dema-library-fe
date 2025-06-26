import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { getBooks } from '@/lib/books'
import React from 'react'


const Home = async () => {

  const booksData = await getBooks()

  return (
    <div className='flex flex-col items-center'>
      <BookOverview {...booksData[0]} />

      <div className='mt-8'>
        <BookList
          title='Latest Books'
          books={booksData} />
      </div>
    </div>
  )
}

export default Home
