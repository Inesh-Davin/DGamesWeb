import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'collectibles', name: 'Collectibles' }
  ];

  const products = [
    {
      id: 1,
      name: 'DGames Studio Hoodie',
      price: 49.99,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'clothing',
      rating: 4.8,
      reviews: 124,
      colors: ['Black', 'Purple', 'Pink'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Gaming Wristband Set',
      price: 19.99,
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'accessories',
      rating: 4.6,
      reviews: 89,
      colors: ['Purple', 'Pink', 'Black'],
      sizes: ['One Size']
    },
    {
      id: 3,
      name: 'DGames Logo T-Shirt',
      price: 24.99,
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'clothing',
      rating: 4.7,
      reviews: 156,
      colors: ['Black', 'White', 'Purple'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 4,
      name: 'Gaming Cap',
      price: 29.99,
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'accessories',
      rating: 4.5,
      reviews: 67,
      colors: ['Black', 'Purple'],
      sizes: ['One Size']
    },
    {
      id: 5,
      name: 'Limited Edition Poster',
      price: 15.99,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'collectibles',
      rating: 4.9,
      reviews: 203,
      colors: ['Standard'],
      sizes: ['24x36']
    },
    {
      id: 6,
      name: 'DGames Zip-Up Jacket',
      price: 69.99,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'clothing',
      rating: 4.8,
      reviews: 92,
      colors: ['Black', 'Purple'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingCart className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DGames Store
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Exclusive gaming merchandise and collectibles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      to={`/store/${product.id}`}
                      className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500 transition-colors flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;