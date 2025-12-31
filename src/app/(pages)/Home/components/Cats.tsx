import { cats } from "@/app/data/cats";
import { useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import Image from "next/image";

function Cats() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div
      className="min-h-[120vh]  flex flex-col justify-center items-center max-sm:max-md:mb-[10vh]  w-screen relative "
      id="cats"
    >
      <h1 className="text-5xl text-[var(--text)] mb-5">اقسامنا</h1>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {cats.map((cat, i) => {
          const isActive = active === i

          return (
            <div
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
            >
              <Image width={600} height={600}
                src={cat.catImages[1]}
                alt={cat.catName}
                className="size-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div
                className={`
                  absolute inset-0 flex flex-col justify-end p-4
                  bg-black/50 text-white transition-opacity duration-300
                  opacity-0
                  group-hover:opacity-100
                  md:group-hover:opacity-100
                  ${isActive ? "opacity-100" : ""}
                `}
              >
                <h1 className="text-4xl text-right">{cat.catName}</h1>

                <a className="flex items-center gap-1 text-sm text-white/70 justify-end">
                  عرض القسم
                  <IoArrowRedoSharp />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cats
