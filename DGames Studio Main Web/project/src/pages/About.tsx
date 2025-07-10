import React from 'react';
import { motion } from 'framer-motion';
import { Code, TowerControl as GameController, Users, Target, Youtube, Twitch } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About DGames Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where passion for gaming meets the art of development and the power of community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-purple-400">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                DGames Studio was born from a simple passion: the love of gaming and the desire to create. 
                What started as a personal journey into game development has evolved into a thriving community 
                hub where gamers, developers, and content creators come together.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that gaming is more than just entertainment – it's a way to connect, learn, and grow. 
                Through our content, we share not just gameplay, but the stories behind the games, the development 
                process, and the community that makes it all possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl flex items-center justify-center border border-purple-500/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-4xl">D</span>
                  </div>
                  <p className="text-gray-400">Creator Image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our mission is to create, inspire, and connect through the power of gaming and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/20 text-center hover:bg-purple-900/30 transition-all"
            >
              <GameController className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Gaming</h3>
              <p className="text-gray-300">
                Sharing our passion for games through engaging content, reviews, and gameplay experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 p-8 rounded-2xl border border-pink-500/20 text-center hover:bg-pink-900/30 transition-all"
            >
              <Code className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Development</h3>
              <p className="text-gray-300">
                Building games and applications while sharing the development journey with our community
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/20 text-center hover:bg-purple-900/30 transition-all"
            >
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Community</h3>
              <p className="text-gray-300">
                Fostering a welcoming space where gamers and developers can connect, learn, and grow together
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Goals
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="bg-purple-500 p-2 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Create Quality Content</h3>
                <p className="text-gray-300">
                  Produce engaging, high-quality gaming content that entertains, educates, and inspires our audience
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="bg-pink-500 p-2 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-pink-400">Build Amazing Games</h3>
                <p className="text-gray-300">
                  Develop innovative games that push boundaries and provide unique experiences for players
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="bg-purple-500 p-2 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Grow Our Community</h3>
                <p className="text-gray-300">
                  Expand our community of passionate gamers, developers, and content creators worldwide
                </p>
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
            <h2 className="text-4xl font-bold mb-8 text-purple-400">Connect With Us</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join our community across all platforms
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.youtube.com/@DGamesStuDioOffIcial"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 p-6 rounded-full hover:bg-red-500 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              >
                <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitch.tv/dgamesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-purple-600 p-6 rounded-full hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
              >
                <Twitch className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://discord.gg/dgamesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-pink-600 p-6 rounded-full hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50"
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

export default About;