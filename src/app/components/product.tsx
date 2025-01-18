import Image from "next/image"


export default function Product() {
  return (
    <div className="text-center mt-12">
      {/* Heading */}
      <div className="justify-items-center">
        <h1 className="font-bold text-3xl md:text-5xl">Our Product</h1>
      </div>

      {/* Product Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 px-5">
        {/* Product Images */}
        <Image
          src="/Featured Products1.png"
          width={381}
          height={480}
          alt="img1"
          className="w-full h-auto mx-auto"
        />


        <Image
          src="/Featured Products2.png"
          width={381}
          height={480}
          alt="img2"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (3).png"
          width={381}
          height={480}
          alt="img3"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (4).png"
          width={381}
          height={480}
          alt="img4"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (5).png"
          width={381}
          height={480}
          alt="img5"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (6).png"
          width={381}
          height={480}
          alt="img6"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (7).png"
          width={381}
          height={480}
          alt="img7"
          className="w-full h-auto mx-auto"
        />
        <Image
          src="/Featured Products (8).png"
          width={381}
          height={480}
          alt="img8"
          className="w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
}
Product();

















