import { useTranslations } from 'next-intl';
import Image from 'next/image';
import mainBackground from '../../../public/main_background.png';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className='h-[100vh]'>
        <Image
          className='brightness-50 object-cover'
          alt="main_background"
          src={mainBackground}
          fill
        />
        <div className="flex-col text-center pt-[80px] relative">
          <h1 className="bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text font-bold text-[52px]">GruChangThai</h1>
          <p className="text-[white] md-[15px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ea, ex sapiente ipsam asperiores explicabo minima fugit accusamus
            minus cum voluptatibus sed magnam consequatur assumenda aliquid
            tempore fuga enim officia!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ea, ex sapiente ipsam asperiores explicabo minima fugit accusamus
            minus cum voluptatibus sed magnam consequatur assumenda aliquid
            tempore fuga enim officia!
          </p>
          <button className="bg-[#4990f5] w-[150px] h-[45px] rounded-full text-[white] cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className='flex-col text-center pt-8'>
        <h1 className="bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text font-bold text-[52px]">{t('homePage')}</h1>

      </div>
    </main>
  );
}
