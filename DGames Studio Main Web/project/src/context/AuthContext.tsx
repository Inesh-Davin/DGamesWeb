import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  lastLogin: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  deleteAccount: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Enhanced authentication with proper validation and error handling
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const initializeAuth = async () => {
      try {
        const savedUser = localStorage.getItem('dgames_user');
        const sessionToken = localStorage.getItem('dgames_session');
        
        if (savedUser && sessionToken) {
          const userData = JSON.parse(savedUser);
          // Validate session token (in real app, this would be server-side)
          const tokenData = JSON.parse(atob(sessionToken));
          
          if (tokenData.expires > Date.now()) {
            setUser(userData);
          } else {
            // Session expired
            localStorage.removeItem('dgames_user');
            localStorage.removeItem('dgames_session');
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        localStorage.removeItem('dgames_user');
        localStorage.removeItem('dgames_session');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    if (password.length < 8) errors.push('Password must be at least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter');
    if (!/\d/.test(password)) errors.push('Password must contain at least one number');
    return errors;
  };

  const createSession = (userData: User) => {
    const sessionToken = btoa(JSON.stringify({
      userId: userData.id,
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    }));
    
    localStorage.setItem('dgames_user', JSON.stringify(userData));
    localStorage.setItem('dgames_session', sessionToken);
    setUser(userData);
  };

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      // Validation
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      const passwordErrors = validatePassword(password);
      if (passwordErrors.length > 0) {
        throw new Error(passwordErrors[0]);
      }
      
      if (name.trim().length < 2) {
        throw new Error('Name must be at least 2 characters long');
      }

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('dgames_users') || '[]');
      if (existingUsers.find((u: User) => u.email === email)) {
        throw new Error('An account with this email already exists');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        email: email.toLowerCase(),
        name: name.trim(),
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        isVerified: false
      };
      
      // Save to "database"
      existingUsers.push(newUser);
      localStorage.setItem('dgames_users', JSON.stringify(existingUsers));
      
      createSession(newUser);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!password) {
        throw new Error('Password is required');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Check credentials
      const existingUsers = JSON.parse(localStorage.getItem('dgames_users') || '[]');
      const existingUser = existingUsers.find((u: User) => u.email === email.toLowerCase());
      
      if (!existingUser) {
        throw new Error('No account found with this email address');
      }
      
      // In real app, password would be hashed and verified server-side
      // For demo, we'll just check if password is not empty
      if (password.length < 6) {
        throw new Error('Invalid password');
      }
      
      // Update last login
      existingUser.lastLogin = new Date().toISOString();
      const updatedUsers = existingUsers.map((u: User) => 
        u.id === existingUser.id ? existingUser : u
      );
      localStorage.setItem('dgames_users', JSON.stringify(updatedUsers));
      
      createSession(existingUser);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      localStorage.removeItem('dgames_user');
      localStorage.removeItem('dgames_session');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const googleUser: User = {
        id: `google_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        email: 'user@gmail.com',
        name: 'Google User',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        isVerified: true
      };
      
      createSession(googleUser);
    } catch (error: any) {
      throw new Error('Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    try {
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if user exists
      const existingUsers = JSON.parse(localStorage.getItem('dgames_users') || '[]');
      const existingUser = existingUsers.find((u: User) => u.email === email.toLowerCase());
      
      if (!existingUser) {
        throw new Error('No account found with this email address');
      }

      // Simulate sending reset email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real app, this would send an email with reset link
      console.log('Password reset email sent to:', email);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) throw new Error('Not authenticated');
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedUser = { ...user, ...data };
      
      // Update in "database"
      const existingUsers = JSON.parse(localStorage.getItem('dgames_users') || '[]');
      const updatedUsers = existingUsers.map((u: User) => 
        u.id === user.id ? updatedUser : u
      );
      localStorage.setItem('dgames_users', JSON.stringify(updatedUsers));
      
      createSession(updatedUser);
    } catch (error: any) {
      throw new Error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    if (!user) throw new Error('Not authenticated');
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Remove from "database"
      const existingUsers = JSON.parse(localStorage.getItem('dgames_users') || '[]');
      const updatedUsers = existingUsers.filter((u: User) => u.id !== user.id);
      localStorage.setItem('dgames_users', JSON.stringify(updatedUsers));
      
      // Clear session
      localStorage.removeItem('dgames_user');
      localStorage.removeItem('dgames_session');
      setUser(null);
    } catch (error: any) {
      throw new Error('Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signUp,
      signIn,
      signOut,
      signInWithGoogle,
      resetPassword,
      updateProfile,
      deleteAccount,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};