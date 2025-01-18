import Image from "next/image"

import React from 'react';

function Shopping () {
  return (
    <div className="fixed top-0 right-0 w-96 h- bg-white shadow-lg overflow-y-auto">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
          <Image src={"/Group 146.png"} width={108} height={105} alt="sidebar image" />
          
          </div>
          <div>
          <p className="font-medium">Asgaard Sofa</p>
          <p className="text-gray-600 text-sm">1 x <span className="text-[#B88E2F]"> Rs. 250,000.00</span></p>
          
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <Image src={"/Group 146 (1).png"} width={108} height={105} alt="shopping image" />
          </div> 
          <div>
          <p className="font-medium">Casaliving Wood</p>
          <p className="text-gray-600 text-sm">1 x <span className="text-[#B88E2F]">Rs. 270,000.00</span></p>
          
          
          </div>
        </div>
      </div>

      {/* Subtotal */}

        <div className="flex justify-between mb-4">
          <span className="font-medium ml-8">Subtotal</span>
          <span className="font-bold mr-8 text-[#B88E2F]">Rs. 520,000.00</span>
        </div>
      <div className="p-6 border-t">

        <div className="flex gap-6">
         <div className="border border-gray-400 rounded-full p-1 px-6 ">
         <a href="/cart">Cart</a></div>
         
         <div className="border border-gray-400 rounded-full p-2  ">
         <a href="/check-out">Check out</a> </div>
         
         <div className="border border-gray-400 rounded-full p-2  ">
          <a href="/product-comperison">Comperison</a></div>

</div>
   </div>
  </div>
    
  
  )
}

export default Shopping;
