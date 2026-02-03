// export default function Home() {
//   return (
//     <div className="bg-gray-50 text-gray-900">

//       {/* ================= NAVBAR ================= */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-indigo-600">LuxStore</h1>

//           <div className="hidden md:flex gap-6 text-sm font-medium">
//             <a className="hover:text-indigo-600 cursor-pointer">Home</a>
//             <a className="hover:text-indigo-600 cursor-pointer">Shop</a>
//             <a className="hover:text-indigo-600 cursor-pointer">Categories</a>
//             <a className="hover:text-indigo-600 cursor-pointer">Contact</a>
//           </div>

//           <div className="flex gap-4">
//             <button className="text-sm font-medium">Login</button>
//             <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 transition">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ================= HERO ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-5xl font-bold leading-tight">
//             Premium Products for{" "}
//             <span className="text-indigo-600">Modern Living</span>
//           </h2>
//           <p className="mt-6 text-gray-600 text-lg">
//             Discover curated collections designed for quality, elegance, and performance.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
//               Shop Now
//             </button>
//             <button className="border px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl h-80 flex items-center justify-center">
//           <span className="text-indigo-600 font-semibold text-lg">
//             Product Showcase
//           </span>
//         </div>
//       </section>

//       {/* ================= FEATURED PRODUCTS ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <h3 className="text-3xl font-bold mb-10">Featured Products</h3>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((item) => (
//             <div
//               key={item}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4"
//             >
//               <div className="h-40 bg-gray-100 rounded-xl mb-4"></div>
//               <h4 className="font-semibold">Luxury Item</h4>
//               <p className="text-sm text-gray-500">$199</p>
//               <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CATEGORIES ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-10">Shop by Category</h3>

//           <div className="grid md:grid-cols-3 gap-6">
//             {["Electronics", "Fashion", "Lifestyle"].map((cat) => (
//               <div
//                 key={cat}
//                 className="rounded-2xl bg-gray-100 h-48 flex items-center justify-center text-xl font-semibold hover:bg-indigo-50 transition cursor-pointer"
//               >
//                 {cat}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= TRUST ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-20 text-center">
//         <h3 className="text-3xl font-bold mb-6">
//           Trusted by 50,000+ Customers
//         </h3>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Premium quality, fast delivery, and top-rated support across the globe.
//         </p>

//         <div className="mt-10 flex justify-center gap-8 text-gray-400 text-sm">
//           <span>⭐ 4.9 Rating</span>
//           <span>🚚 Fast Delivery</span>
//           <span>🔒 Secure Checkout</span>
//         </div>
//       </section>

//       {/* ================= NEWSLETTER ================= */}
//       <section className="bg-indigo-600 text-white py-20">
//         <div className="max-w-3xl mx-auto text-center px-6">
//           <h3 className="text-3xl font-bold">Get Exclusive Offers</h3>
//           <p className="mt-4 text-indigo-100">
//             Subscribe to our newsletter and never miss a deal.
//           </p>

//           <div className="mt-6 flex gap-4 justify-center flex-col sm:flex-row">
//             <input
//               className="px-4 py-3 rounded-xl text-gray-900 w-full sm:w-64 outline-none"
//               placeholder="Enter your email"
//             />
//             <button className="bg-black px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-gray-900 text-gray-400 py-12">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           <div>
//             <h4 className="text-white text-lg font-bold">LuxStore</h4>
//             <p className="mt-4 text-sm">
//               Premium e-commerce experiences built for modern customers.
//             </p>
//           </div>

//           <div>
//             <h5 className="text-white font-semibold mb-4">Links</h5>
//             <ul className="space-y-2 text-sm">
//               <li className="hover:text-white cursor-pointer">Shop</li>
//               <li className="hover:text-white cursor-pointer">About</li>
//               <li className="hover:text-white cursor-pointer">Contact</li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="text-white font-semibold mb-4">Legal</h5>
//             <ul className="space-y-2 text-sm">
//               <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//               <li className="hover:text-white cursor-pointer">Terms of Service</li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }







































export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-indigo-600">
            LuxStore
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "Shop", "Categories", "Contact"].map((item) => (
              <a
                key={item}
                className="relative group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="text-sm font-medium hover:text-indigo-600 transition">
              Login
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
        <div className="animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Elevate Your
            <span className="block text-indigo-600">Shopping Experience</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Discover premium products crafted for modern lifestyle & unmatched quality.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-indigo-600 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-xl">
              Shop Collection
            </button>
            <button className="px-7 py-4 rounded-2xl font-semibold border hover:bg-gray-100 transition">
              Explore More
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-300 blur-3xl opacity-40 group-hover:opacity-60 transition"></div>
          <div className="relative h-96 rounded-3xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center shadow-2xl hover:scale-105 transition duration-500">
            <span className="text-indigo-600 font-bold text-xl">
              Premium Product Visual
            </span>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-extrabold mb-14 text-center">
          Featured Products
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 hover:-translate-y-3"
            >
              <div className="h-44 bg-gray-100 rounded-2xl mb-5 group-hover:bg-indigo-50 transition"></div>

              <h4 className="font-bold text-lg">Luxury Item</h4>
              <p className="text-sm text-gray-500 mt-1">$199</p>

              <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold opacity-90 group-hover:opacity-100 hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold mb-14 text-center">
            Shop by Category
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {["Electronics", "Fashion", "Lifestyle"].map((cat) => (
              <div
                key={cat}
                className="relative overflow-hidden rounded-3xl h-56 cursor-pointer group shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-200 group-hover:scale-110 transition duration-500"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-2xl font-bold text-indigo-700">
                  {cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-extrabold mb-6">
          Trusted by Thousands Worldwide
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seamless shopping, premium quality, and industry-leading customer satisfaction.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {["4.9 Star Rating", "Fast Delivery", "Secure Payments"].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <p className="font-bold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="relative bg-indigo-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-90"></div>

        <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
          <h3 className="text-4xl font-extrabold">
            Join Our Premium Community
          </h3>
          <p className="mt-4 text-indigo-100">
            Get early access to deals, drops & exclusive offers.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-col sm:flex-row">
            <input
              className="px-5 py-4 rounded-2xl text-gray-900 w-full sm:w-72 outline-none"
              placeholder="Enter your email"
            />
            <button className="bg-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white text-xl font-extrabold">LuxStore</h4>
            <p className="mt-4 text-sm leading-relaxed">
              A premium e-commerce experience crafted for modern brands.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-3 text-sm">
              {["Shop", "About", "Contact"].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer transition">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-3 text-sm">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer transition">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
