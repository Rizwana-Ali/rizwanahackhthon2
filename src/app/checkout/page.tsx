
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";

export default function Checkout() {
  return (
    <div>
      {/* Header Image */}
      <div className="w-full">
        <Image
          src="/Group 78 (7).png"
          width={1440}
          height={360}
          alt="image"
          className="w-full h-auto"
        />
      </div>

      {/* Billing Details */}
      <div className="p-6 sm:p-10 flex flex-col lg:flex-row min-h-screen">
        {/* Billing Form */}
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 flex-1">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
            Billing Details
          </h1>

          <form>
            {/* First Name and Last Name */}
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
                />
              </div>
            </div>

            {/* Other Form Fields */}
            <div className="mb-4 px-3">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
              />
            </div>

            <div className="mb-4 px-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
              >
                <option value="">Sri Lanka</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* More Inputs */}
            {[
              { label: "Street Address", id: "street-address" },
              { label: "Town/City", id: "city" },
              { label: "Province", id: "province" },
              { label: "ZIP Code", id: "zip-code" },
              { label: "Phone", id: "phone" },
              { label: "Email Address", id: "email", type: "email" },
            ].map(({ label, id, type = "text" }) => (
              <div key={id} className="mb-4 px-3">
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
                />
              </div>
            ))}

            {/* Additional Information */}
            <div className="mb-4 px-3">
              <input
                type="text"
                placeholder="Additional Information"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}

        <div className="w-full lg:w-[320px] h-auto bg-gray-50 shadow-md rounded-lg p-6">
          <h1 className="font-bold text-lg mb-4">Product Summary</h1>
          <p className="flex justify-between mb-2">
            <span>Asgaard Sofa x 1</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </p>
          <p className="flex justify-between mb-4">
            <span className="font-bold">Total</span>
            <span className="text-[#B88E2F] font-bold text-lg">
              Rs. 250,000.00
            </span>
          </p>
          <hr className="my-4" />
          <h2 className="text-md font-bold mb-2">Direct Bank Transfer</h2>
          <p className="text-sm text-gray-600 mb-4">
          
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.<br/><br/>
          Direct Bank Transfer<br/><br/>
          Cash On Delivery
          </p>

          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p><br/>
          <button className="w-full border border-black text-black py-2 rounded-md shadow-sm ">
            Place Order
          </button>
        </div>
      </div>


       
      {/* Features Section */}
      <div className="bg-[#F6F1E7] py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[
          {
            icon: <SlTrophy className="w-10 h-10" />,
            title: "High Quality",
            desc: "Crafted from top materials",
          },
          {
            icon: <SiTicktick className="w-10 h-10" />,
            title: "Warranty Protection",
            desc: "Over 2 years",
          },
          {
            icon: (
              <Image src="/shipping.png" alt="Shipping" width={40} height={40} />
            ),
            title: "Free Shipping",
            desc: "Order Over $150",
          },
          {
            icon: (
              <Image
                src="/customer-support.png"
                alt="Support"
                width={40}
                height={40}
              />
            ),
            title: "24/7 Support",
            desc: "Dedicated support",
          },
        ].map(({ icon, title, desc }, i) => (
          <div key={i} className="flex items-center gap-4">
            {icon}
            <div>
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Checkout();
