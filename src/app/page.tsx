import type { Metadata } from "next";
import { CardProductItem } from "@/core/presentation/ui/components/CardProductItem";
import { MiniCard } from "@/core/presentation/ui/components/MiniCard";
import MainBanner from "@/core/presentation/ui/components/MainBanner";
import MainPageImg from "@/app/images/main-page-img1.jpg"
import MainPageImg2 from "@/app/images/main-page-img2.jpeg"
import MainPageImg3 from "@/app/images/main-page-img3.webp"
import MainPageImg4 from "@/app/images/main-page-img4.jpg"
import MainPageImg5 from "@/app/images/main-page-img5.webp"
import { RefreshCcw, Truck, Headset } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Home description",
};

export default function Home() {
  return (
    <div className="flex-grow">
      <MainBanner />

      <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-8">
        Some of our products
      </h1>

      <div className="flex-row grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-4 w-full h-full gap-5 justify-center">
        <CardProductItem
          productId={1}
          title="Toys"
          address="Toys Inc."
          isProductInCart={false}
          image={MainPageImg4}
          isDemo={true}
        />
        <CardProductItem
          productId={2}
          title="Jewerly"
          address="Jewerly Inc"
          isProductInCart={false}
          image={MainPageImg2}
          isDemo={true}
        />
        <CardProductItem
          productId={1}
          title="kitchen utensils"
          address="utensils"
          image={MainPageImg3}
          isProductInCart={false}
          isDemo={true}
        />
        <CardProductItem
          productId={1}
          title="Tech Gadgetss"
          address="Great tech Gadgetss"
          isProductInCart={false}
          isDemo={true}
          image={MainPageImg}
        />
        <CardProductItem
          productId={1}
          title="Shoess"
          address="best shoes"
          isProductInCart={false}
          image={MainPageImg5}
          isDemo={true}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-8">Benefits</h1>

      <div className="flex flex-wrap flex-row w-full h-full gap-5 justify-center">
        <MiniCard
          icon={Truck}
          text="Free Shipping"
          description="On order over $100"
        />
        <MiniCard
          icon={RefreshCcw}
          text="Easy Returns"
          description="30-day return policy"
        />
        <MiniCard
          icon={Headset}
          text="24/7 Support"
          description="Here to help anytime"
        />
      </div>
    </div>
  );
}
