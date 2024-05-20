import BannerHome from "@/components/BannerHome";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className='flex flex-col text-center'>
        <BannerHome />
        <h1 className="bg-gradient-to-r from-amber-200 to-yellow-500 inline-block text-transparent bg-clip-text font-bold text-[52px]">{t('homePage')}</h1>

        {/* temporary space */}
        <div className='h-[1000px]'></div>
      </div>
    </main>
  );
}
