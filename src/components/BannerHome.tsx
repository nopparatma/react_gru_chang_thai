import { useTranslations } from "next-intl";
import Image from "next/image";
import mainBackground from "../../public/main_background.png";
import imagePresenter from "../../public/image_presenter3.png";

function BannerHome() {
  const t = useTranslations("metadata");

  return (
    <>
      <div className="h-screen">
        <Image
          className="brightness-50 object-cover h-screen absolute z-0"
          alt="main_background"
          src={mainBackground}
          priority
        />
        <div className="relative grid grid-rows-2 sm:flex sm:justify-between h-full mx-8 z-10">
          <div className="flex">
            <div className="mx-auto text-center sm:mx-0 sm:my-auto sm:text-left">
              <p className="text-gold-gradient text-2xl sm:text-6xl py-4 mt-[80px] sm:mt-0">
                GruChangThai Antique
              </p>
              <p className="text-gold-gradient text-2xl sm:text-6xl py-4">Gold Jewelry</p>
              <p className="text-white mt-4 text-xl">
                The Perfect Jewels for you
              </p>
              <button className="button-gold-gradient text-xl mt-8">
                Explore More
              </button>
              <p className="text-white mt-8 text-xl">Call: 084-8047253</p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              className="object-contain max-h-full w-auto"
              alt="image_presenter"
              src={imagePresenter}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default BannerHome;
