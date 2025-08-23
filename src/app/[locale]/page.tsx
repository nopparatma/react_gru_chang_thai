import BannerHome from "@/components/BannerHome";
import Categories from "@/components/Categories";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main>
      <BannerHome />
      <Products />
      <Categories />
    </main>
  );
}
