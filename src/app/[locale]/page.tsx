import BannerHome from "@/components/BannerHome";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import { useTranslations } from "next-intl";

type MainCategory = {
  image: string;
  name: string;
};

export default function Home() {
  const t = useTranslations();

  const contentItems: MainCategory[] = [
    { name: "PO-101", image: "https://via.placeholder.com/400" },
    { name: "PO-102", image: "https://via.placeholder.com/400" },
    { name: "PO-103", image: "https://via.placeholder.com/400" },
    { name: "PO-104", image: "https://via.placeholder.com/400" },
    { name: "PO-105", image: "https://via.placeholder.com/400" },
    { name: "PO-106", image: "https://via.placeholder.com/400" },
  ];

  return (
    <main>
      <BannerHome />
      <div className="mt-8 flex flex-col">
        <h1 className="mx-auto text-gold-gradient text-[52px]">
          {t("homePage")}
        </h1>

        <div className="mx-8 sm:mx-20 mt-8 gap-10 grid grid-cols-1 sm:grid-cols-3">
          {contentItems.map((a) => (
            <ProductItem name={a.name} image={a.image} />
          ))}
        </div>

        <div className="mt-10 mx-8 sm:mx-20">
          <Pagination totalEntries={contentItems.length} entriesPerPage={6} />
        </div>
      </div>
    </main>
  );
}
