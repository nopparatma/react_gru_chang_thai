import { useTranslations } from 'next-intl';
import Image from 'next/image';
import mainBackground from '../../public/main_background.png';
import imagePresenter from '../../public/image_presenter3.png';

function BannerHome() {
    const t = useTranslations('metadata');

    return (
        <>
            <div className="h-screen">
                <Image
                    className='absolute inset-0 w-full h-full brightness-50 object-cover z-0'
                    alt="main_background"
                    src={mainBackground}
                />
                <div className='flex flex-col relative pt-[80px] sm:flex-row h-full justify-between mx-8 z-10'>
                    <div className='flex-none flex flex-col text-center sm:text-left sm:justify-center'>
                        <p className="text-gold-gradient">Guru-Chang Antique</p>
                        <p className="text-gold-gradient">Gold Jewelry</p>
                        <p className='text-white mt-4 text-[20px]'>The Perfect Jewels for you</p>
                        <div className='mt-8'>
                            <button className='button-gold-gradient'>
                                Explore More
                            </button>
                        </div>
                        <p className='text-white sm:mt-32 mt-16 text-[20px]'>Call: 084-8047253</p>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Image
                            className='max-h-full object-contain'
                            alt="image_presenter"
                            src={imagePresenter}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerHome