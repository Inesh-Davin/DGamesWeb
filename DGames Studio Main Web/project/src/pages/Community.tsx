import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, MessageCircle, Upload, Star, Filter } from 'lucide-react';

const Community = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Posts' },
    { id: 'merch', name: 'Merch Photos' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'fanart', name: 'Fan Art' }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'GameMaster2024',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Just got my DGames hoodie! Love the quality and design 🔥',
      likes: 234,
      comments: 18,
      category: 'merch',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'PixelArtist',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Created some fan art for DGames Studio! What do you think?',
      likes: 189,
      comments: 34,
      category: 'fanart',
      timestamp: '1 day ago'
    },
    {
      id: 3,
      author: 'StreamViewer',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Epic gaming session last night! Thanks for the amazing stream 🎮',
      likes: 156,
      comments: 12,
      category: 'gaming',
      timestamp: '3 days ago'
    },
    {
      id: 4,
      author: 'MerchCollector',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'My DGames merch collection is growing! Can\'t wait for new drops',
      likes: 203,
      comments: 25,
      category: 'merch',
      timestamp: '1 week ago'
    }
  ];

  const featuredMembers = [
    {
      id: 1,
      name: 'GameMaster2024',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      posts: 45,
      level: 'Elite Member'
    },
    {
      id: 2,
      name: 'PixelArtist',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      posts: 38,
      level: 'Creative Member'
    },
    {
      id: 3,
      name: 'StreamViewer',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      posts: 32,
      level: 'Active Member'
    }
  ];

  const filteredPosts = selectedFilter === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.category === selectedFilter);

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
            <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Share your gaming moments, merch photos, and connect with fellow gamers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-purple-400">15.2K</div>
              <div className="text-gray-400">Members</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-pink-400">3.8K</div>
              <div className="text-gray-400">Posts</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-purple-400">12.5K</div>
              <div className="text-gray-400">Likes</div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-pink-400">1.2K</div>
              <div className="text-gray-400">Comments</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Share your gaming moment or merch photo..."
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-full border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>Upload Photo</span>
                </button>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition-colors">
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Community Posts */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all"
              >
                <div className="aspect-square">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-white">{post.author}</h3>
                      <p className="text-gray-400 text-sm">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Featured Members</h2>
            <p className="text-xl text-gray-300">Our most active community members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.level}</p>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4" />
                  <span>{member.posts} posts</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-400">Join Our Discord</h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with fellow gamers in real-time chat
            </p>
            <a
              href="https://discord.gg/dgamesstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all inline-flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Discord Server</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;