import { HydrationBoundary } from '@tanstack/react-query'
import React from 'react'
import RegistrationPage from './reg-page'

function page() {
    return (
        <HydrationBoundary>
            <RegistrationPage />
        </HydrationBoundary>
    )
}

export default page