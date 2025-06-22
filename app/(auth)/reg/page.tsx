import { getQueryClient } from '@/lib/getQueryClient'
import { HydrationBoundary } from '@tanstack/react-query'
import React from 'react'
import RegistrationPage from './reg-page'

type Props = {}

const page = (props: Props) => {
    const queryClient = getQueryClient()

    

    return (
        <HydrationBoundary>
            <RegistrationPage />
        </HydrationBoundary>
    )
}

export default page