import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShoppingBag, Users, Calendar, Youtube, Twitch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-black"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/50">
              <span className="text-white font-bold text-6xl">D</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DGames Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Gaming • Development • Community
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/youtube"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-white flex items-center space-x-2 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <Play className="w-5 h-5" />
              <span>Watch Now</span>
            </Link>
            <Link
              to="/store"
              className="group bg-transparent border-2 border-purple-400 px-8 py-4 rounded-full font-semibold text-purple-400 flex items-center space-x-2 hover:bg-purple-400 hover:text-white transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Shop Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Content
            </h2>
            <p className="text-xl text-gray-300">
              Check out our newest gaming adventures
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          >
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/zjawi3brm9c"
                title="DGames Studio Latest Stream"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About DGames Studio
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Welcome to DGames Studio, where gaming meets development and community. 
                We create engaging content, build amazing games, and foster a vibrant 
                community of gamers and developers.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span className="font-semibold">Learn More</span>
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
                <Users className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-400">Growing gaming community</p>
              </div>
              <div className="bg-pink-900/20 p-6 rounded-xl border border-pink-500/20">
                <Calendar className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="font-semibold mb-2">Events</h3>
                <p className="text-sm text-gray-400">Regular livestreams</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
                <ShoppingBag className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold mb-2">Merch</h3>
                <p className="text-sm text-gray-400">Exclusive gaming gear</p>
              </div>
              <div className="bg-pink-900/20 p-6 rounded-xl border border-pink-500/20">
                <Twitch className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="font-semibold mb-2">Content</h3>
                <p className="text-sm text-gray-400">Gaming & development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Follow the Journey
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.youtube.com/@DGamesStuDioOffIcial"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 p-4 rounded-full hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              >
                <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitch.tv/dgamesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-purple-600 p-4 rounded-full hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
              >
                <Twitch className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://discord.gg/dgamesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-pink-600 p-4 rounded-full hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50"
              >
                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;