import Image from "next/image";
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";

export default function Shop() {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Image
                    src="/shop1.png"
                    width={1440}
                    height={360}
                    alt="furniture image"
                    className="w-full h-auto"
                />
                <Image
                    src="/Group 63.png"
                    width={1340}
                    height={100}
                    alt="furniture image"
                    className="w-full h-auto mt-4"
                />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12 px-4 md:px-10">
                {/* First Row */}
                <a href="/cafechair1">
                    <Image
                        src="/Featured Products1.png"
                        width={381}
                        height={480}
                        alt="img1"
                        className="w-full h-auto"
                    />
                </a>
                <a href="/cafechair2">
                    <Image
                        src="/Featured Products2.png"
                        width={381}
                        height={480}
                        alt="img2"
                        className="w-full h-auto"
                    />
                </a>
                <a href="/bigsofa">
                    <Image
                        src="/Featured Products (3).png"
                        width={381}
                        height={480}
                        alt="img3"
                        className="w-full h-auto"
                    />
                </a>

                <a href="/outdoortable">

                <Image
                    src="/Featured Products (4).png"
                    width={381}
                    height={480}
                    alt="img4"
                    className="w-full h-auto"
                /></a>

                {/* Additional Rows */}
                {[
                    "/Featured Products1.png",
                    "/Featured Products (12).png",
                    "/Featured Products (3).png",
                    "/Featured Products (4).png",

                    "/Featured Products1.png",
                    "/Featured Products (12).png",
                    "/Featured Products (3).png",
                    "/Featured Products (4).png",

                    "/Featured Products1.png",
                    "/Featured Products (12).png",
                    "/Featured Products (3).png",
                    "/Featured Products (4).png",
                ].map((src, idx) => (
                    <Image
                        key={idx}
                        src={src}
                        width={381}
                        height={480}
                        alt={`img${idx + 5}`}
                        className="w-full h-auto"
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex gap-4 justify-center items-center text-center mt-10">
                <a
                    href="/singleproduct"
                    className="w-[40px] h-[40px] bg-[#B88E2F] flex items-center justify-center rounded-md"
                >
                    1
                </a>
                <a
                    href="/product-comperison"
                    className="w-[40px] h-[40px] bg-[#F9F1E7] flex items-center justify-center rounded-md text-gray-600"
                >
                    2
                </a>
                <a
                    href="/cart-sidebar"
                    className="w-[40px] h-[40px] bg-[#F9F1E7] flex items-center justify-center rounded-md text-gray-600"
                >
                    3
                </a>
                <div className="w-[40px] h-[40px] bg-[#F9F1E7] flex items-center justify-center rounded-md text-gray-600">
                    Next
                </div>
            </div>


           {/* Features Section */}
            <div className="flex flex-wrap justify-around items-center bg-[#F6F1E7] p-6 gap-6 mt-20">
                <div className="flex items-center gap-4">
                    <SlTrophy className="w-[50px] h-[50px]" />
                    <div>
                        <h2 className="text-lg font-semibold">High Quality</h2>
                        <p className="text-gray-500">Crafted from top materials</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <SiTicktick className="w-[50px] h-[50px]" />
                    <div>
                        <h2 className="text-lg font-semibold">Warranty Protection</h2>
                        <p className="text-gray-500">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        src="/shipping.png"
                        alt="Free Shipping"
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px]"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Free Shipping</h2>
                        <p className="text-gray-500">Order Over $150</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        src="/customer-support.png"
                        alt="24/7 Support"
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px]"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">24/7 Support</h2>
                        <p className="text-gray-500">Dedicated support</p>
                    </div>
                </div>
            </div>

            <hr className="mt-10" />
        </div>
    )
}
Shop();
































