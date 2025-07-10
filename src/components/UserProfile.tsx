import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, LogOut, Trash2, Edit3, Save, X, Shield, Calendar, Mail, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { user, signOut, updateProfile, deleteAccount, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSaveProfile = async () => {
    if (!editName.trim()) {
      setError('Name cannot be empty');
      return;
    }
    
    setUpdateLoading(true);
    setError('');
    setSuccess('');
    
    try {
      await updateProfile({ name: editName.trim() });
      setIsEditing(false);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleteLoading(true);
    setError('');
    
    try {
      await deleteAccount();
      onClose();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      onClose();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getProviderIcon = (provider?: string) => {
    switch (provider) {
      case 'google':
        return '🔗 Google';
      case 'email':
        return '📧 Email';
      default:
        return '📧 Email';
    }
  };

  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-gray-900 rounded-2xl p-8 w-full max-w-md border border-purple-500/20 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-white font-bold text-2xl">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white text-center"
                    placeholder="Enter your name"
                    maxLength={50}
                  />
                  <div className="flex space-x-2 justify-center">
                    <button
                      onClick={handleSaveProfile}
                      disabled={updateLoading || !editName.trim()}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors disabled:opacity-50 flex items-center space-x-1"
                    >
                      {updateLoading ? (
                        <Loader className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setEditName(user.name);
                        setError('');
                      }}
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-1"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h2 className="text-xl font-bold text-white">{user.name}</h2>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </p>
                </div>
              )}
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-4 text-green-400 text-sm"
              >
                {success}
              </motion.div>
            )}

            <div className="space-y-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Account Information</span>
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Account Type:</span>
                    <span className="text-white flex items-center space-x-1">
                      <span>{getProviderIcon(user.provider)}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Member since:</span>
                    <span className="text-white flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(user.createdAt)}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last login:</span>
                    <span className="text-white">
                      {formatDate(user.lastLogin)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className={`flex items-center space-x-1 ${user.isVerified ? 'text-green-400' : 'text-yellow-400'}`}>
                      <Shield className="w-4 h-4" />
                      <span>{user.isVerified ? 'Verified' : 'Unverified'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <LogOut className="w-5 h-5" />
                )}
                <span>Sign Out</span>
              </button>

              {!showDeleteConfirm ? (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full bg-red-600/20 text-red-400 py-3 rounded-lg font-semibold hover:bg-red-600/30 transition-colors flex items-center justify-center space-x-2 border border-red-600/30"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete Account</span>
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3">
                    <p className="text-red-400 text-sm text-center mb-3">
                      ⚠️ This action cannot be undone. All your data will be permanently deleted.
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleDeleteAccount}
                        disabled={deleteLoading}
                        className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors disabled:opacity-50 flex items-center justify-center space-x-1"
                      >
                        {deleteLoading ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                        <span>Yes, Delete</span>
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(false)}
                        className="flex-1 bg-gray-700 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UserProfile;