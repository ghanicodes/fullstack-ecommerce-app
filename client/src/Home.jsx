import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  Star,
  TrendingUp,
  Shield,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Zap,
  Award,
  Users
} from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Hero Slider Data
  const heroSlides = [
    {
      title: "Summer Collection 2026",
      subtitle: "Up to 50% Off",
      description: "Discover the latest trends in fashion",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200",
      cta: "Shop Now"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh Styles Daily",
      description: "Be the first to own the latest products",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200",
      cta: "Explore"
    },
    {
      title: "Premium Quality",
      subtitle: "Best Prices Guaranteed",
      description: "Shop with confidence and style",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",
      cta: "View Deals"
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      rating: 4.8,
      reviews: 234,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 599.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      rating: 4.9,
      reviews: 189,
      badge: "New"
    },
    {
      id: 3,
      name: "Leather Backpack",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      rating: 4.7,
      reviews: 156,
      badge: "Hot"
    },
    {
      id: 4,
      name: "Premium Sneakers",
      price: 179.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      rating: 4.6,
      reviews: 298,
      badge: "Sale"
    },
    {
      id: 5,
      name: "Sunglasses Classic",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      rating: 4.5,
      reviews: 142,
      badge: "Trending"
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: 449.99,
      originalPrice: 599.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      rating: 4.9,
      reviews: 203,
      badge: "Premium"
    }
  ];

  // Categories
  const categories = [
    { name: "Electronics", icon: "💻", count: "1,234 items", color: "from-blue-500 to-blue-600" },
    { name: "Fashion", icon: "👗", count: "2,456 items", color: "from-pink-500 to-pink-600" },
    { name: "Home & Living", icon: "🏠", count: "876 items", color: "from-green-500 to-green-600" },
    { name: "Sports", icon: "⚽", count: "543 items", color: "from-orange-500 to-orange-600" },
    { name: "Beauty", icon: "💄", count: "1,987 items", color: "from-purple-500 to-purple-600" },
    { name: "Books", icon: "📚", count: "654 items", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========== Top Bar ========== */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Truck size={16} />
                Free Shipping on orders over $50
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-blue-200 transition-colors">Track Order</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Help</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Header / Navbar ========== */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <ShoppingCart className="text-white" size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  ShopHub
                </h1>
                <p className="text-xs text-gray-500">Your Shopping Destination</p>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Wishlist */}
              <button className="hidden md:flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 rounded-xl transition-all group">
                <Heart className="text-gray-600 group-hover:text-red-500 transition-colors" size={22} />
                <span className="text-sm font-medium text-gray-700">Wishlist</span>
              </button>

              {/* Cart */}
              <button className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                <ShoppingCart size={22} />
                <span className="hidden sm:inline text-sm font-medium">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-slideDown">
            <nav className="px-4 py-4 space-y-2">
              <a href="#" className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Categories</a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">Deals</a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">New Arrivals</a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">About Us</a>
            </nav>
          </div>
        )}
      </header>

      {/* ========== Hero Slider ========== */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white animate-fadeInUp">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2 group">
                  {slide.cta}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md hover:bg-white/50 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md hover:bg-white/50 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ========== Features Bar ========== */}
      <section className="bg-white py-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard icon={<Truck size={32} />} title="Free Shipping" desc="On orders over $50" />
            <FeatureCard icon={<Shield size={32} />} title="Secure Payment" desc="100% protected" />
            <FeatureCard icon={<Award size={32} />} title="Best Quality" desc="Premium products" />
            <FeatureCard icon={<Users size={32} />} title="24/7 Support" desc="Always here to help" />
          </div>
        </div>
      </section>

      {/* ========== Categories ========== */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of products</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-1 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 text-center">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Featured Products ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked items just for you</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
              View All
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} setCartCount={setCartCount} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== Promo Banner ========== */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
                ⚡ Limited Time Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Get Up to 70% Off
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              On selected items - Don't miss out!
            </p>
            <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-yellow-400 hover:text-indigo-900 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Shop Sale Now
            </button>
          </div>
        </div>
      </section>

      {/* ========== Newsletter ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get exclusive deals, new arrivals, and insider news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">ShopHub</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Your one-stop destination for premium quality products at unbeatable prices.
              </p>
              <div className="flex gap-4">
                <SocialIcon>f</SocialIcon>
                <SocialIcon>t</SocialIcon>
                <SocialIcon>in</SocialIcon>
                <SocialIcon>ig</SocialIcon>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <FooterLink>About Us</FooterLink>
                <FooterLink>Contact</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Blog</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <FooterLink>Help Center</FooterLink>
                <FooterLink>Track Order</FooterLink>
                <FooterLink>Returns</FooterLink>
                <FooterLink>Shipping Info</FooterLink>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>support@shophub.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>123 Shopping St, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 ShopHub. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* ========== Styles ========== */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// ========== Component Helpers ==========

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className="w-16 h-16 mb-4 text-indigo-600 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function ProductCard({ product, setCartCount }) {
  const [liked, setLiked] = useState(false);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-bold rounded-full text-white shadow-lg ${
            product.badge === "New" ? "bg-green-500" :
            product.badge === "Hot" ? "bg-red-500" :
            product.badge === "Sale" ? "bg-orange-500" :
            product.badge === "Best Seller" ? "bg-blue-500" :
            product.badge === "Trending" ? "bg-purple-500" :
            "bg-indigo-500"
          }`}>
            {product.badge}
          </span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <div className="bg-yellow-400 text-gray-900 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
              -{discount}%
            </div>
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <Heart
            className={`${liked ? "fill-red-500 text-red-500" : "text-gray-600"} transition-colors`}
            size={20}
          />
        </button>

        {/* Quick View */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer transition-all transform hover:scale-110">
      <span className="text-sm font-bold">{children}</span>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <li>
      <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
        {children}
      </a>
    </li>
  );
}

export default Home;