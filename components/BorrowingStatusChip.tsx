import { BorrowingState } from '@/lib/definitions'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    state: BorrowingState
}

const BorrowingStatusChip = ({state}: Props) => {
    
    const chipStyle = cn(
        'text-sm rounded-2xl px-2 py-1 w-fit',
        state === "Current" ? 'bg-green-600' : null,
        state === "Returned" ? 'bg-yellow-600' : null,
        state === "Late" ? 'bg-red-600' : null,
        state === "unknown" ? 'invisible' : null
    )
  
    return (
    <div className={chipStyle}>{state}</div>
  )
}

export default BorrowingStatusChip