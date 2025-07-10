import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Chrome, Eye, EyeOff, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup' | 'reset';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  const { signIn, signUp, signInWithGoogle, resetPassword, loading } = useAuth();

  // Reset form when modal opens/closes or mode changes
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: '', password: '', name: '' });
      setError('');
      setSuccess('');
      setFieldErrors({});
      setShowPassword(false);
    }
  }, [isOpen, mode]);

  // Update mode when initialMode changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    // Password validation (for signin and signup)
    if (mode !== 'reset') {
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (mode === 'signup') {
        if (formData.password.length < 8) {
          errors.password = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
          errors.password = 'Password must contain an uppercase letter';
        } else if (!/[a-z]/.test(formData.password)) {
          errors.password = 'Password must contain a lowercase letter';
        } else if (!/\d/.test(formData.password)) {
          errors.password = 'Password must contain a number';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
          errors.password = 'Password must contain a special character';
        }
      }
    }

    // Name validation (for signup)
    if (mode === 'signup') {
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    try {
      if (mode === 'signup') {
        await signUp(formData.email, formData.password, formData.name);
        setSuccess('Account created successfully! Welcome to DGames Studio!');
        setTimeout(() => onClose(), 2000);
      } else if (mode === 'signin') {
        await signIn(formData.email, formData.password);
        setSuccess('Welcome back!');
        setTimeout(() => onClose(), 1500);
      } else if (mode === 'reset') {
        await resetPassword(formData.email);
        setSuccess('Password reset email sent! Check your inbox.');
        setTimeout(() => setMode('signin'), 3000);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setSuccess('');
    
    try {
      await signInWithGoogle();
      setSuccess('Signed in with Google!');
      setTimeout(() => onClose(), 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'signup': return 'Join DGames Studio';
      case 'reset': return 'Reset Password';
      default: return 'Welcome Back';
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case 'signup': return 'Create your gaming account';
      case 'reset': return 'Enter your email to reset password';
      default: return 'Sign in to your account';
    }
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    const checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ];
    
    strength = checks.filter(Boolean).length;
    
    if (strength <= 2) return { level: 'weak', color: 'bg-red-500', text: 'Weak' };
    if (strength <= 3) return { level: 'medium', color: 'bg-yellow-500', text: 'Medium' };
    if (strength <= 4) return { level: 'good', color: 'bg-blue-500', text: 'Good' };
    return { level: 'strong', color: 'bg-green-500', text: 'Strong' };
  };

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
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{getTitle()}</h2>
              <p className="text-gray-400">{getSubtitle()}</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6 flex items-center space-x-2"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 mb-6 flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">{success}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition-colors ${
                        fieldErrors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-700 focus:border-purple-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {fieldErrors.name && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition-colors ${
                      fieldErrors.email 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-gray-700 focus:border-purple-500'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {mode !== 'reset' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition-colors ${
                        fieldErrors.password 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-700 focus:border-purple-500'
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {fieldErrors.password && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.password}</p>
                  )}
                  
                  {mode === 'signup' && formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">Password strength:</span>
                        <span className={`text-xs font-medium ${
                          getPasswordStrength(formData.password).level === 'weak' ? 'text-red-400' :
                          getPasswordStrength(formData.password).level === 'medium' ? 'text-yellow-400' :
                          getPasswordStrength(formData.password).level === 'good' ? 'text-blue-400' :
                          'text-green-400'
                        }`}>
                          {getPasswordStrength(formData.password).text}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrength(formData.password).color}`}
                          style={{ width: `${(getPasswordStrength(formData.password).level === 'weak' ? 20 : 
                                                getPasswordStrength(formData.password).level === 'medium' ? 40 :
                                                getPasswordStrength(formData.password).level === 'good' ? 70 : 100)}%` }}
                        />
                      </div>
                      <div className="space-y-1">
                        {[
                          { test: formData.password.length >= 8, text: 'At least 8 characters' },
                          { test: /[A-Z]/.test(formData.password), text: 'One uppercase letter' },
                          { test: /[a-z]/.test(formData.password), text: 'One lowercase letter' },
                          { test: /\d/.test(formData.password), text: 'One number' },
                          { test: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password), text: 'One special character' }
                        ].map((requirement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${requirement.test ? 'bg-green-500' : 'bg-gray-600'}`} />
                            <span className={`text-xs ${requirement.test ? 'text-green-400' : 'text-gray-400'}`}>
                              {requirement.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    {mode === 'signin' && 'Sign In'}
                    {mode === 'signup' && 'Create Account'}
                    {mode === 'reset' && 'Send Reset Email'}
                  </>
                )}
              </button>
            </form>

            {mode !== 'reset' && (
              <>
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                >
                  <Chrome className="w-5 h-5" />
                  <span>Google</span>
                </button>
              </>
            )}

            <div className="text-center space-y-2">
              {mode === 'signin' && (
                <>
                  <p className="text-gray-400 text-sm">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setMode('signup')}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                  <p className="text-gray-400 text-sm">
                    Forgot your password?{' '}
                    <button
                      onClick={() => setMode('reset')}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      Reset it
                    </button>
                  </p>
                </>
              )}
              {mode === 'signup' && (
                <p className="text-gray-400 text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
              {mode === 'reset' && (
                <p className="text-gray-400 text-sm">
                  Remember your password?{' '}
                  <button
                    onClick={() => setMode('signin')}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;