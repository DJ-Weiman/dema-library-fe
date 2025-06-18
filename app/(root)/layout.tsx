import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='root-container text-slate-100 bg-[url(/images/pattern.webp)]'>
            <div className='mx-auto max-w-7xl'>
                <Header />
                <div className='mt-20 pb-20'>{children}</div>
            </div>
        </main>
    )
}

export default layout