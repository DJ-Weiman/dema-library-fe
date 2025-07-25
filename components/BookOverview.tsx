import { BookType } from '@/lib/definitions'
import Image from 'next/image'
import React from 'react'
import BorrowBookButton from './BorrowBookButton'

type Props = BookType

function BookOverview({id, title, author, genre, rating, total_copies, available_copies, summary, coverUrl }: Props) {
    return (
        <section className=' text-slate-50 max-w-4xl'>
            <div className='flex flex-1 flex-col'>
                <div className='flex'>
                    <div className='flex flex-wrap gap-x-8 gap-y-4 my-4 grow-3 basis-1'>
                        <h1 className='text-4xl font-semibold block'>{title}</h1>

                        <div className='flex flex-wrap gap-x-8 gap-y-4 my-4'>
                            <p className=''>
                                By <span className='font-semibold text-overview-yellow'>{author}</span>
                            </p>

                            <p>
                                Category: <span className='font-semibold text-overview-yellow'>{genre}</span>
                            </p>

                            <div className='flex flex-row gap-1'>
                                <Image src="/icons/star.svg" alt='star Image' width={22} height={22} />
                                <p>
                                    <span className='text-overview-yellow'>{rating}</span>/5
                                </p>
                            </div>

                            <p>
                                Total books: <span className='text-overview-yellow'>{total_copies}</span>
                            </p>

                            <p>
                                Total books: <span className='text-overview-yellow'>{available_copies}</span>
                            </p>

                            <p className='book-description'>{summary}</p>

                            <BorrowBookButton bookID={id} />
                        </div>
                    </div>

                    <div className='ml-10 basis-1 grow-2 flex justify-center items-center'>
                        <Image
                            src={coverUrl ? coverUrl : '/icons/book.svg'}
                            alt="Book Cover"
                            height={300}
                            width={200}
                            className='rounded-md'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BookOverview