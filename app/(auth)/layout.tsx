import React, { ReactNode } from 'react'

const AuthLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <main className=" min-h-screen min-w-screen bg-slate-900 text-slate-100 flex flex-col justify-center items-center">
            <div>{children}</div>
        </main>
    );
};

export default AuthLayout;