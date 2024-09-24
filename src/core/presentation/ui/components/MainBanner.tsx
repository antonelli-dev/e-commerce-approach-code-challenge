import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import React from "react";
import BannerImage from "@/app/images/banner-image.webp";

const MainBanner = () => {
  return (
    <div className="flex flex-col md:flex-row rounded-md my-5 bg-gradient-to-r from-blue-500 to-purple-600 px-10 gap-16 h-fit py-16">
      <div className="flex-1 flex flex-col align-middle justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Summer Collection
        </h1>
        <p className="mt-4 max-w-3xl text-lg sm:text-xl text-blue-100">
          Discover our latest arrivals and enjoy up to 50% off on selected
          items. Refresh your style this season!
        </p>
        <div className="mt-6 sm:mt-8 h-16">
          <Link href={"products"}>
            <Button
              buttonStyle="rounded-md bg-white text-blue-600 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-50 w-48 h-full flex flex-row items-center text-center justify-center align-middle"
              buttonTextStyle="text-black font-bold "
              text="Shop Now"
            >
              <ChevronRight
                className="ml-2 h-5 w-5"
                data-testid="chevron-right-icon"
              />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="md:min-h-96  w-full h-96 md:w-full md:max-w-full bg-white max-h-[200px] overflow-auto">
          <Image
            src={BannerImage}
            alt="banner-image"
            className="h-full w-full"
            data-testid="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
