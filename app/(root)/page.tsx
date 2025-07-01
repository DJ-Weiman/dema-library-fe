import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { getBooks } from '@/lib/books'
import React from 'react'


const Home = async (props: { searchParams?: Promise<{ page?: string }> }) => {
  const searchParams = await props.searchParams
  const currentPage = Number(searchParams?.page) || 1;
  const { books, numberOfPages } = await getBooks(currentPage, 10)

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
