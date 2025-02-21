import { useState } from "react";
import SliderImage from "../SliderImage";

export default function Home() {
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const imagesCarousel = ["/images/11.jpg", "/images/12.jpg", "/images/13.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="home_root my-[56px] pt-48 flex justify-between mx-36 gap-6">
      <div className="text-box basis-1/2">
        <h1
          className="text-gray-200 font-bold leading-tight text-nowrap"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
        >
          Belajar Bersama, Berkontribusi &
        </h1>
        <h1
          className="text-gray-200 font-bold text-4xl"
          style={{ fontSize: "clamp(3rem, 4.1vw, 4.7rem)" }}
        >
          Dapatkan Pekerjaan!
        </h1>
        <p
          className="xl:w-[90%]  text-[23px] mt-8 text-justify"
          style={{ fontSize: "clamp(1rem, 2vw, 23px)" }}
        >
          SocialVit adalah platform social media learning yang membantumu
          mendapatkan pengalaman kerja melalui kontribusi di proyek nyata,
          belajar bersama komunitas, mendapatkan mentoring, sampai mendapatkan
          pekerjaan. Bergaransi loh!
        </p>
      </div>

      <div className="invited-box basis-1/2 flex flex-col gap-24">
        <div className="button-box relative pt-4 ml-auto">
          <button
            className="px-12 py-2 rounded-md text-white text-xl font-semibold 
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                 cursor-pointer relative"
            onClick={() => (window.location.href = "https://example.com")}
          >
            Gabung Sekarang
            <span
              className="absolute bg-red-500 px-8 py-1 rounded-sm text-white font-medium 
                    left-3/4 bottom-0 translate-x-[-50%] translate-y-[75%]"
            >
              Gratis
            </span>
          </button>
        </div>
        <div className="flex items-center justify-end">
          {images.map((src, index) => (
            <div
              key={index}
              className={`member-box ${index !== 0 ? "-ml-2" : ""}`}
            >
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                <img
                  src={src}
                  alt={`Member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
          <div className="member-count flex flex-col ml-4">
            <span className="text-2xl font-semibold">133K</span>
            <span className="text-base">Members</span>
          </div>
        </div>
      </div>
    </main>
  );
}
