import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


export default function SingleProduct() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-10 mt-5 bg-[#F9F1E7] w-full p-5 items-center">
        <h1 className="ml-4 sm:ml-20">Home</h1>
        <IoIosArrowForward />
        <h1>Shop</h1>
        <IoIosArrowForward />
        <h1>|</h1>
        <h1>Asgaard Sofa</h1>
      </div>

      <div className="flex flex-wrap gap-5 sm:gap-10 mt-5 p-5">
        {/* Left Sidebar */}
        <div className="mt-5 sm:mt-9">
          <Image
            src="/Group 94.png"
            width={78}
            height={80}
            alt="sofa image"
            className="mt-5"
          />
          {["Group 98.png", "Group 97.png", "Group 96.png"].map((src, idx) => (
            <Image
              key={idx}
              src={`/${src}`}
              width={78}
              height={80}
              alt="sofa image"
              className="mt-5"
            />
          ))}
        </div>

        {/* Main Product Image */}
        <div className="w-full sm:w-96 sm:ml-10 mt-5 sm:mt-8">
          <Image
            src="/Group 146.png"
            width={1000}
            height={1000}
            alt="sofa image"
            className="w-full"
          />
        </div>

        {/* Product Details */}
        <div className="sm:ml-24 flex-1">
          <h1 className="text-2xl sm:text-4xl mt-6">Asgaard Sofa</h1>
          <p className="font-bold text-xl sm:text-3xl mt-3 sm:mt-5 text-gray-400">
            Rs. 250,000.00
          </p>

          {/* Rating */}
          <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-5 items-center">
            <Image
              src="/Group 88 (1).png"
              width={124}
              height={20}
              alt="star image"
            />
            <h1>|</h1>
            <h1>5 Customer Reviews</h1>
          </div>

          {/* Product Description */}
          <div className="mt-5">
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <h1 className="text-gray-400 mt-5">Size</h1>
            <div className="flex gap-4 sm:gap-8 mt-3 sm:mt-5">
              {["L", "XL", "XS"].map((size, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-8 flex justify-center items-center ${
                    size === "L" ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>

            {/* Colors */}
            <h1 className="text-gray-400 mt-5">Color</h1>
            <div className="flex gap-3 sm:gap-5 mt-3">
              {["#816DFA", "#000000", "#B88E2F"].map((color, idx) => (
                <div
                  key={idx}
                  className="rounded-full w-8 h-8"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 sm:gap-5 mt-5">
              <div className="border border-gray-400 rounded-md px-6 py-3 shadow-sm hover:shadow-md transition-shadow text-center">
                <h1>- 1 +</h1>
              </div>
              <div className="border border-black rounded-md px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
                <h1>Add To Cart</h1>
              </div>
              <div className="border border-black rounded-md px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
                <h1>+ Compare</h1>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-5">
              <hr />
              <div className="text-gray-400 mt-5">
                <h1>SKU: SSOO1</h1>
                <h1 className="mt-2">Category: Sofas</h1>
                <h1 className="mt-2">Tags: Sofa, Chair, Home, Shop</h1>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-5 items-center">
              <h1>Share:</h1>
              <FaFacebook className="text-black w-6 h-6" />
              <FaLinkedin className="text-black w-6 h-6" />
              <AiFillTwitterCircle className="text-black w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr />
        <div className="flex justify-center gap-5 mt-5 text-center">
          <h1 className="font-bold">Description</h1>
          <h1 className="text-gray-400">Additional Information</h1>
          <h1 className="text-gray-400">Reviews [5]</h1>
        </div>

        <div className="mt-5 text-gray-400 text-center sm:text-left sm:ml-20">
          <p>
            Embodying the raw, wayward spirit of rock & roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p className="mt-5">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-8 justify-around ml-9 mr-9">
        <Image
     src={"/Group 107.png"}
      width={605} 
      height={348} 
      alt="sofa image"/>

<Image
     src={"/Group 106.png"}
      width={605} 
      height={348} 
      alt="sofa image"/>
        </div>
        <div>
            <hr className="text-gray-400 mt-16" />
        </div>


      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h1 className="text-center font-bold text-2xl sm:text-4xl">
          Related Products
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5">
          {[
            "Featured Products1.png",
            "Featured Products (12).png",
            "Featured Products (3).png",
            "Featured Products (4).png",
          ].map((img, idx) => (
            <Image
              key={idx}
              src={`/${img}`}
              width={381}
              height={480}
              alt={`related product ${idx + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
      <div 
  className="flex justify-center items-center mt-5 sm:mt-8 md:mt-10"
>
  <div 
    className="border border-[#B88E2F] p-2 w-[20%] sm:w-[60%] md:w-[40%] lg:w-[20%] xl:w-[10%]"
  >
    <span className="pl-2 sm:pl-3 text-[#B88E2F]">
      <a href="/shop">Show More</a>
    </span>
  </div>
</div>

    </div>
  );
}
SingleProduct();