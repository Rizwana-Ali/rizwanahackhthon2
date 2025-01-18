import Image from "next/image"
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";


export default function Cart() {
  return (
 
     <div>
      <div>
        <Image
          src={"/Group 78 (6).png"}
          width={1440}
          height={360}
          alt="cart image"
          className="w-full h-auto"
        />
        <div className="flex flex-col lg:flex-row mt-10 justify-around">
          <div className="flex gap-5 md:gap-10 justify-center items-center text-lg md:text-2xl p-3 md:p-5 w-full lg:w-[900px] h-auto lg:h-[55px] ml-2 md:ml-10 bg-[#F9F1E7]">
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>

          <div className="bg-[#F9F1E7] w-full lg:w-[280px] h-auto lg:h-[280px] flex flex-col items-center pt-5 px-4">
            <h1 className="text-xl">Cart Totals</h1>
            <p className="py-6">
              Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
            </p>
            <p>
              Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#B88E2F]"> Rs. 250,000.00</span>
            </p>
            <div className="border border-gray-400 rounded-md p-2 px-8 mt-5 lg:mt-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <a href="/checkout">Check out</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 ml-5 md:ml-20 mt-10">
          <Image
            src={"/Group 146.png"}
            width={108}
            height={105}
            alt="cart image"
            className="w-[80px] md:w-[108px] h-auto"
          />
          <h1 className="text-base md:text-xl">Asgaard sofa</h1>
          <h1 className="text-base md:text-xl">Rs. 250,000.00</h1>
          <h1 className="text-base md:text-xl">1</h1>
          <h1 className="text-base md:text-xl">Rs. 250,000.00</h1>
          <div>
            <Image
              src={"/ant-design_delete-filled.png"}
              width={28}
              height={28}
              alt="trash"
              className="w-[20px] md:w-[28px] h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-[#F6F1E7] w-full md:w-[1350px] h-auto md:h-[100px] mt-20 gap-5 md:gap-14 px-5 md:pl-10 py-5">
          <div className="flex items-center gap-3">
            <SlTrophy className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]" />
            <div>
              <h2 className="text-base md:text-lg">High Quality</h2>
              <p className="text-sm md:text-base">Crafted from top materials</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SiTicktick className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]" />
            <div>
              <h2 className="text-base md:text-lg">Warranty Protection</h2>
              <p className="text-sm md:text-base">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/shipping.png"
              alt="Shipping"
              width={40}
              height={40}
              className="w-[30px] md:w-[60px] h-auto"
            />
            <div>
              <h2 className="text-base md:text-lg">Free Shipping</h2>
              <p className="text-sm md:text-base">Order Over 150 $</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/customer-support.png"
              alt="Support"
              width={40}
              height={40}
              className="w-[30px] md:w-[60px] h-auto"
            />
            <div>
              <h2 className="text-base md:text-lg">24/7 Support</h2>
              <p className="text-sm md:text-base">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
