import { Outlet } from 'react-router'

export default function CenteredLayout() {
    return (
        <main className='font-kode-mono bg-brown flex min-h-screen items-center justify-center p-7'>
            <Outlet />
        </main>
    )
}