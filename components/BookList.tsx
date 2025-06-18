import { Book } from '@/lib/definitions'
import React from 'react'
import BookItem from './BookItem'

type Props = {
  title: string,
  books: Book[],
}

const BookList = ({ title, books }: Props) => {
  return (
    <section>
      <h2 className='font-bebas-neue text-4xl '>Popular books</h2>
      <div className='mt-8 flex gap-4 flex-wrap'>
        {
          books.map(book =>
            <BookItem
              key={book.id}
              coverUrl={book.cover}
              title={book.title}
              genre={book.genre} />
          )
        }
      </div>
    </section>
  )
}

export default BookList