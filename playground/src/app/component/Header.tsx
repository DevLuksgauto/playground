import React from 'react'

export const Header = () => {
    return (
        <div className={'flex flex-col items-center gap-y-2 mt-10 '}>
            <h1 className={'text-white font-bold text-4xl'}>Luks Playground</h1>
            <p className={'font-bold text-xs'}>Playing with React Hook Form + Zod</p>
        </div>
    )
}
