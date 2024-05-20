import { useTranslations } from 'next-intl';
import Image from 'next/image';
import mainBackground from '../../public/main_background.png';

function BannerHome() {
    const t = useTranslations('metadata');

    return (
        <>
            <div className='relative'>
                <div className='absolute z-10 bottom-0 mx-8'>
                    <div className='grid sm:grid-cols-12 grid-rows-2'>
                        <div className='sm:col-span-4 sm:text-start text-center'>
                            <h1 className="bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text font-bold text-[52px]">Guru-Chang Antique</h1>
                            <h1 className="bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text font-bold text-[52px]">Gold Jewelery</h1>
                            <h1 className="text-[20px] text-white mt-4">The Perfect Jewels for you</h1>
                            <h1 className="text-[20px] text-white mt-6">Explore More</h1>
                            <h1 className="text-[20px] text-white mt-6">call: 0848047253</h1>
                        </div>
                        <div className='sm:col-span-8 h-[100px] bg-white'>IMAGE BANNER</div>
                    </div>
                    {/* <div className='flex w-screen bg-red-500 h-[100px]'>
                 
                    </div> */}
                    {/* <div className="flex w-screen">
                        <div className="h-50 bg-cyan-400 text-center text-4xl">NavBar</div>
                        <div className="flex-1 bg-yellow-400 text-center text-4xl">I am the body</div>
                    </div> */}
                </div>
                <Image
                    className='brightness-50 object-cover h-[100vh]'
                    alt="main_background"
                    src={mainBackground}
                />
            </div>
        </>
    )
}

export default BannerHome