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
        <div className="relative flex h-full mx-8 z-10">
          <div className="text-left my-auto">
            <p className="text-gold-gradient text-6xl py-4">
              GruChangThai Antique
            </p>
            <p className="text-gold-gradient text-6xl py-4">Gold Jewelry</p>
            <p className="text-white mt-4 text-xl">
              The Perfect Jewels for you
            </p>
            <div className="mt-8">
              <button className="button-gold-gradient text-xl">
                Explore More
              </button>
            </div>
            <p className="text-white mt-32 text-xl">Call: 084-8047253</p>
          </div>
        </div>
        <div className="">
          <Image
            className="object-contain z-20 absolute bottom-0 right-8 h-full w-auto"
            alt="image_presenter"
            src={imagePresenter}
          />
        </div>
      </div>
    </>
  );
}
export default BannerHome;
