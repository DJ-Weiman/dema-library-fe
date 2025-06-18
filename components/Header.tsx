'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    const pathName: string = usePathname()
    return (
        <header className='my-10 flex justify-between gap-5'>
            <Link href="/" className='flex items-center'>
                <Image src="/icons/logo.svg" alt='Dema Logo Image' width={40} height={40} className='invert'/>
                <p className='text-2xl text-white ml-2 font-semibold'>DemaLibrary</p>  
            </Link>

            <ul className='flex flex-row items-center gap-8'>
                <li>
                    <Link href="/library"
                        className={cn('text-black cursor-pointer capitalize', pathName === "/library" ? "text-slate-800" : null)}>
                        Library
                    </Link>
                </li>
            </ul>

        </header>
    )
}

export default Header