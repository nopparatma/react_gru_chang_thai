import { aboutUsPage } from "@/constants/constants";
import { useTranslations } from "next-intl";

function AboutUsPage() {
  const t = useTranslations();

  return (
    <div className="content mt-8 flex flex-col">
      <h1 className="mx-auto text-gold-gradient text-[52px]">
        {t(aboutUsPage)}
      </h1>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default AboutUsPage;
