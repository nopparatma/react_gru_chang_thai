import BannerHome from "@/components/BannerHome";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import { mockContentItems } from "@/mocks/mock";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <BannerHome />
      <div className="mt-8 flex flex-col">
        <h1 className="mx-auto text-gold-gradient text-[52px]">
          {t("homePage")}
        </h1>

        <div className="mx-8 sm:mx-20 mt-8 gap-10 grid grid-cols-1 sm:grid-cols-3">
          {mockContentItems.map((a, index) => (
            <ProductItem key={index} name={a.name} imageUrl={a.imageUrl} />
          ))}
        </div>

        <div className="mt-10 mx-8 sm:mx-20">
          <Pagination
            totalEntries={mockContentItems.length}
            entriesPerPage={6}
          />
        </div>
      </div>
    </main>
  );
}
