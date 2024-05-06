import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <div className="container justify-center items-center flex-col text-center">
        <h1 className="text-[28px] font-bold md-[25px]">{t('homePage')}</h1>
        <p className="text-[gray] md-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ea, ex sapiente ipsam asperiores explicabo minima fugit accusamus
          minus cum voluptatibus sed magnam consequatur assumenda aliquid
          tempore fuga enim officia!
        </p>
        <button className="bg-[#4990f5] w-[150px] h-[45px] rounded-full text-[white] cursor-pointer">
          Learn More
        </button>
      </div>
    </main>
  );
}
