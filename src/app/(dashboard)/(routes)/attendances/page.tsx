import QRCode from './_components/QRCode'
import QRModalButton from './_components/QRModalButton'


export default function Attendances() {
    return (
        <div className='min-h-screen w-full bg-black'>
            <div className='flex flex-col justify-center items-center text-white'>
                <h1 className='text-3xl p-4'>QR Session</h1>
                <div className='container bg-gray-900 border-gray-800 rounded-lg p-4 text-center'>
                    <QRCode />
                </div> {/* Conditional component to render the generated QR code */}
                <div className='pt-4'>
                    <QRModalButton />
                </div>
            </div>
        </div>
    )
}
