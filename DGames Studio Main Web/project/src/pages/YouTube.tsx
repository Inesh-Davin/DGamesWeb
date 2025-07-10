import React from 'react';
import { motion } from 'framer-motion';
import { Play, ThumbsUp, Share2, Bell, Youtube, Clock } from 'lucide-react';

const YouTube = () => {
  // Mock video data
  const videos = [
    {
      id: 1,
      title: "Epic Gaming Moments - Best Highlights",
      thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "12:45",
      views: "45K",
      uploadDate: "2 days ago"
    },
    {
      id: 2,
      title: "Game Development Behind the Scenes",
      thumbnail: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "18:30",
      views: "32K",
      uploadDate: "1 week ago"
    },
    {
      id: 3,
      title: "Community Livestream Highlights",
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "25:15",
      views: "28K",
      uploadDate: "2 weeks ago"
    },
    {
      id: 4,
      title: "New Game Review & First Impressions",
      thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "15:20",
      views: "67K",
      uploadDate: "3 weeks ago"
    }
  ];

  const playlists = [
    {
      id: 1,
      title: "Gaming Tutorials",
      videoCount: 15,
      thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Game Development",
      videoCount: 8,
      thumbnail: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Livestream Archives",
      videoCount: 23,
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

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
            <Youtube className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YouTube Channel
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Subscribe for the latest gaming content, tutorials, and community highlights
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.youtube.com/@DGamesStuDioOffIcial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-8 py-4 rounded-full font-semibold text-white flex items-center space-x-2 hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30"
              >
                <Bell className="w-5 h-5" />
                <span>Subscribe</span>
              </a>
              <button className="bg-purple-600 px-8 py-4 rounded-full font-semibold text-white flex items-center space-x-2 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Featured Video</h2>
            <p className="text-xl text-gray-300">Our latest and greatest content</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <iframe
                  src="https://www.youtube.com/embed/zjawi3brm9c"
                  title="DGames Studio Latest Stream"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">DGames Studio Live Stream</h3>
                <p className="text-gray-300 mb-4">
                  Join us for our latest live gaming session! Experience epic gameplay, 
                  community interaction, and behind-the-scenes content from DGames Studio.
                </p>
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span>Live Stream</span>
                  <span>•</span>
                  <span>DGames Studio</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-500 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Videos */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Recent Videos</h2>
            <p className="text-xl text-gray-300">Catch up on our latest content</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Playlists</h2>
            <p className="text-xl text-gray-300">Organized content for easy viewing</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                    {playlist.videoCount} videos
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white text-lg">{playlist.title}</h3>
                  <p className="text-gray-400 text-sm">{playlist.videoCount} videos</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTube;