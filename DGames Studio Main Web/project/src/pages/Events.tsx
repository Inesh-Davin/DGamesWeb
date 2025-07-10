import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Play, Twitch, Youtube } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Gaming Stream',
      date: '2024-01-15',
      time: '8:00 PM EST',
      platform: 'Twitch',
      description: 'Join us for our weekly gaming session with the community!',
      attendees: 234,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Game Development Tutorial',
      date: '2024-01-18',
      time: '3:00 PM EST',
      platform: 'YouTube',
      description: 'Learn how to create your first game with Unity!',
      attendees: 156,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Community Q&A Session',
      date: '2024-01-20',
      time: '7:00 PM EST',
      platform: 'Discord',
      description: 'Ask questions and chat with fellow gamers!',
      attendees: 89,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'New Year Gaming Marathon',
      date: '2024-01-01',
      time: '12:00 PM EST',
      platform: 'Twitch',
      description: 'Epic 24-hour gaming marathon to celebrate the new year!',
      attendees: 1204,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Game Review Discussion',
      date: '2023-12-28',
      time: '6:00 PM EST',
      platform: 'YouTube',
      description: 'Discussion about the best games of 2023!',
      attendees: 567,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'
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
            <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Events & Streams
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Join our live streams, tutorials, and community events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Upcoming Events</h2>
            <p className="text-xl text-gray-300">Don't miss out on our latest streams and events!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all group"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.platform}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Join Event</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} interested
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-500 transition-colors font-semibold">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Weekly Schedule</h2>
            <p className="text-xl text-gray-300">Regular streaming schedule</p>
          </motion.div>

          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="text-center">
                  <h3 className="font-semibold text-white mb-4">{day}</h3>
                  <div className="space-y-2">
                    {index === 0 && (
                      <div className="bg-purple-600 p-2 rounded text-sm">
                        <div className="font-medium">8:00 PM</div>
                        <div className="text-xs">Gaming Stream</div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="bg-pink-600 p-2 rounded text-sm">
                        <div className="font-medium">3:00 PM</div>
                        <div className="text-xs">Dev Tutorial</div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="bg-purple-600 p-2 rounded text-sm">
                        <div className="font-medium">7:00 PM</div>
                        <div className="text-xs">Community Q&A</div>
                      </div>
                    )}
                    {index === 6 && (
                      <div className="bg-pink-600 p-2 rounded text-sm">
                        <div className="font-medium">2:00 PM</div>
                        <div className="text-xs">Weekend Stream</div>
                      </div>
                    )}
                    {![0, 2, 4, 6].includes(index) && (
                      <div className="text-gray-500 text-sm">No events</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Past Events</h2>
            <p className="text-xl text-gray-300">Missed an event? Check out the highlights!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all group"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.platform}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Watch Replay</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attended
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Links */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-purple-400">Follow Us Live</h2>
            <p className="text-xl text-gray-300 mb-12">
              Never miss a stream or event
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://twitch.tv/dgamesstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-purple-600 p-6 rounded-full hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
              >
                <Twitch className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@DGamesStuDioOffIcial"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 p-6 rounded-full hover:bg-red-500 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              >
                <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
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

export default Events;