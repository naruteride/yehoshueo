import './globals.css'
import localFont from 'next/font/local'
import logo from '@/public/logo.svg'

const seoulNamsanFont = localFont({
    src: [
        {
            path: './fonts/SeoulNamsanL.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/SeoulNamsanM.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/SeoulNamsanB.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/SeoulNamsanEB.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-seoul-namsan',
})

/**
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={`bg-gray-50 ${seoulNamsanFont.className}`}>
                <header className="relative">
                    <svg viewBox="0 0 1140 34" fill="none" class="absolute bottom-[-16px] left-1/2 ml-[-570px] w-[1140px]"><g opacity=".6" filter="url(#:R5l6:-a)"><path fill="url(#:R5l6:-b)" d="M6 6h1128v22H6z"></path><path fill="url(#:R5l6:-c)" d="M6 6h1128v22H6z"></path></g><defs><radialGradient id=":R5l6:-c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -22 1128 0 563 28)"><stop offset=".273" stop-color="#f9fafb"></stop><stop offset="1" stop-color="#f9fafb" stop-opacity="0"></stop></radialGradient><linearGradient id=":R5l6:-b" x1="6" y1="6" x2="1134" y2="6" gradientUnits="userSpaceOnUse"><stop stop-color="#A78BFA" stop-opacity="0"></stop><stop offset=".323" stop-color="#A78BFA"></stop><stop offset=".672" stop-color="#EC4899" stop-opacity=".3"></stop><stop offset="1" stop-color="#EC4899" stop-opacity="0"></stop></linearGradient><filter id=":R5l6:-a" x="0" y="0" width="1140" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_311_43535"></feGaussianBlur></filter></defs></svg>
                    <div className='pointer-events-auto relative bg-gray_50 pb-0 shadow-[0_1px_3px_rgba(15,23,42,0.08)]'>
                        <nav className="container bg-gray-50 mx-auto flex justify-between items-center p-4">
                            <img className="w-10" src={logo.src} alt="" />
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto py-8">
                    {children}
                </main>
                <footer className="bg-gray-800 text-white p-4 mt-8">
                    <div className="container mx-auto text-center">
                        &copy; 2024 여호수어. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    )
}