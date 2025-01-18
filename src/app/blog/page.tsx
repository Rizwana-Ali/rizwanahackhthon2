import Image from "next/image"
import { IoMdPerson } from "react-icons/io";
import { CgGift } from "react-icons/cg";
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";



export default function Blog() {
  return (
    <div className="bg-white">
      <div>
        <Image
          src="/Group 78 (2).png"
          width={1440}
          height={360}
          alt="furniture image"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Blog Post 1 */}
              <div>
                <Image
                  src="/Rectangle 68.png"
                  alt="Blog 1"
                  width={817}
                  height={500}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
                    <span>Admin</span>
                    <span><IoMdPerson /></span>
                    <span>14 Oct 2022</span>
                    <span><CgGift /></span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-black hover:underline mt-4 inline-block">
                    Read more
                  </a>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div>
                <Image
                  src="/Rectangle 68 (2).png"
                  alt="Blog 2"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
                    <span>Admin</span>
                    <span><IoMdPerson /></span>
                    <span>14 Oct 2022</span>
                    <span><CgGift /></span>
                    <span>Handmade</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    Exploring new ways of decorating
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-black underline mt-4 inline-block">
                    Read more
                  </a>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div>
                <Image
                  src="/Rectangle 68 (1).png"
                  alt="Blog 3"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2">
                    <span>Admin</span>
                    <span><IoMdPerson /></span>
                    <span>14 Oct 2022</span>
                    <span><CgGift /></span>
                    <span>Wood</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mt-2">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-black underline mt-4 inline-block">
                    Read more
                  </a>

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

                </div>
              </div>
            </div>

            {/* Sidebar */}

            
    {/* <div className="flex items-center justify-center py-4"> */}
      <div className="relative w-full max-w-md">
        
        <input 
          type="text"
          placeholder="Search "
          
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
       
       />

            <div className="space-y-32">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 ">
                <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
                <ul className="mt-4 space-y-14">
                  <li className="flex justify-between items-center">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      Crafts
                    </a>
                    <span className="text-sm text-gray-500">2</span>
                  </li>
              
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Design
                  </a>
                  <span className="text-sm text-gray-500">8</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Handmade
                  </a>
                  <span className="text-sm text-gray-500">7</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Interior
                  </a>
                  <span className="text-sm text-gray-500">1</span>
                </li>
                <li className="flex justify-between items-center">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Wood
                  </a>
                  <span className="text-sm text-gray-500">6</span>
                </li>
              </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-52">
                <h3 className="text-lg font-semibold text-gray-800">Recent Posts</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center space-x-4">
                    <Image
                      src="/Rectangle 69.png"
                      alt="Recent 1"
                      width={60}
                      height={60}
                      className="w-16 h-auto object-cover rounded-md"
                    />
                    <div>
                      <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                        Going all-in with millennial design
                      </a>
                      <p className="text-sm text-gray-500">03 Aug 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                 <Image
                    src="/Rectangle 69 (1).png"
                     alt="Recent 2"
                     width={60}
                     height={60}
                     className="w-16 h-16 object-cover rounded-md"
                   />
                   <div>
                     <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                       Exploring new ways of decorating
                     </a>
                     <p className="text-sm text-gray-500">03 Aug 2022</p>
                   </div>
                 </li>
                 <li className="flex items-center space-x-4">
                           <Image
                    src="/Rectangle 69 (5).png"
                    alt="Recent 2"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                   <div>
                     <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                       Handmade pieces that took time to make
                     </a>
                     <p className="text-sm text-gray-500">03 Aug 2022</p>
                   </div>
                 </li>
                 <li className="flex items-center space-x-4">
                   <Image
                     src="/Rectangle 69 (3).png"
                     alt="Recent 3"
                     width={60}
                     height={60}
                     className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Modern Home in Milan
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>


                <li className="flex items-center space-x-4">
                  <Image
                    src="/Rectangle 69 (4).png"
                    alt="Recent 3"
                    width={60}
                    height={60}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-500">
                      Colour office redesign
                    </a>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </li>


                </ul>
              </div>
            </div>
          </div>
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
    </div>
    <hr/>
     </div>
  );
}
Blog();
