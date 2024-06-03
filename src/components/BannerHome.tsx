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
          className="brightness-50 object-cover h-full absolute z-0"
          alt="main_background"
          src={mainBackground}
        />
        <div className="relative flex flex-col h-full mx-8 z-10 justify-between">
          <div className="sm:text-left text-center sm:my-auto my-[80px]">
            <p className="text-gold-gradient sm:text-6xl text-3xl py-4">
              GruChangThai Antique
            </p>
            <p className="text-gold-gradient sm:text-6xl text-3xl py-4">
              Gold Jewelry
            </p>
            <p className="text-white mt-4 text-xl">
              The Perfect Jewels for you
            </p>
            <div className="mt-8">
              <button className="button-gold-gradient text-xl">
                Explore More
              </button>
            </div>
            <p className="text-white sm:mt-32 mt-16 text-xl">
              Call: 084-8047253
            </p>
          </div>
          <div>
            <Image
              className="object-contain sm:z-20 sm:absolute sm:bottom-0 sm:right-8 h-full w-auto"
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
