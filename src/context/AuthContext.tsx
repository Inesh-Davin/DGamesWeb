import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  lastLogin: string;
  isVerified: boolean;
  provider?: 'email' | 'google';
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

// Storage keys
const STORAGE_KEYS = {
  USER: 'dgames_user',
  SESSION: 'dgames_session',
  USERS_DB: 'dgames_users_db'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state on mount
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
      const sessionToken = localStorage.getItem(STORAGE_KEYS.SESSION);
      
      if (savedUser && sessionToken) {
        const userData = JSON.parse(savedUser);
        const tokenData = JSON.parse(atob(sessionToken));
        
        // Check if session is still valid (7 days)
        if (tokenData.expires > Date.now()) {
          // Update last login
          userData.lastLogin = new Date().toISOString();
          updateUserInDatabase(userData);
          setUser(userData);
        } else {
          // Session expired, clear storage
          clearAuthStorage();
        }
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      clearAuthStorage();
    } finally {
      setLoading(false);
    }
  };

  const clearAuthStorage = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    setUser(null);
  };

  const createSession = (userData: User) => {
    const sessionToken = btoa(JSON.stringify({
      userId: userData.id,
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    }));
    
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    localStorage.setItem(STORAGE_KEYS.SESSION, sessionToken);
    setUser(userData);
  };

  const getUsersDatabase = (): User[] => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_DB) || '[]');
    } catch {
      return [];
    }
  };

  const saveUsersDatabase = (users: User[]) => {
    localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(users));
  };

  const updateUserInDatabase = (updatedUser: User) => {
    const users = getUsersDatabase();
    const userIndex = users.findIndex(u => u.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      saveUsersDatabase(users);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return { isValid: errors.length === 0, errors };
  };

  const signUp = async (email: string, password: string, name: string): Promise<void> => {
    setLoading(true);
    
    try {
      // Validate inputs
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedName = name.trim();

      if (!trimmedEmail) {
        throw new Error('Email is required');
      }
      if (!validateEmail(trimmedEmail)) {
        throw new Error('Please enter a valid email address');
      }
      if (!trimmedName) {
        throw new Error('Name is required');
      }
      if (trimmedName.length < 2) {
        throw new Error('Name must be at least 2 characters long');
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        throw new Error(passwordValidation.errors[0]);
      }

      // Check if user already exists
      const existingUsers = getUsersDatabase();
      const existingUser = existingUsers.find(u => u.email === trimmedEmail);
      
      if (existingUser) {
        throw new Error('An account with this email already exists');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create new user
      const newUser: User = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        email: trimmedEmail,
        name: trimmedName,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        isVerified: true, // Auto-verify for demo
        provider: 'email'
      };

      // Save to database
      existingUsers.push(newUser);
      saveUsersDatabase(existingUsers);

      // Create session
      createSession(newUser);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    
    try {
      const trimmedEmail = email.trim().toLowerCase();

      if (!trimmedEmail) {
        throw new Error('Email is required');
      }
      if (!validateEmail(trimmedEmail)) {
        throw new Error('Please enter a valid email address');
      }
      if (!password) {
        throw new Error('Password is required');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Find user in database
      const users = getUsersDatabase();
      const existingUser = users.find(u => u.email === trimmedEmail);

      if (!existingUser) {
        throw new Error('No account found with this email address');
      }

      // For demo purposes, accept any password with length >= 8
      // In production, you'd verify the hashed password
      if (password.length < 8) {
        throw new Error('Invalid password');
      }

      // Update last login
      const updatedUser = {
        ...existingUser,
        lastLogin: new Date().toISOString()
      };
      
      updateUserInDatabase(updatedUser);
      createSession(updatedUser);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      clearAuthStorage();
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    setLoading(true);
    
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000));

      const googleEmail = `user${Date.now()}@gmail.com`;
      const users = getUsersDatabase();
      
      // Check if Google user already exists
      let googleUser = users.find(u => u.email === googleEmail);
      
      if (!googleUser) {
        // Create new Google user
        googleUser = {
          id: `google_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          email: googleEmail,
          name: 'Google User',
          avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
          isVerified: true,
          provider: 'google'
        };
        
        users.push(googleUser);
        saveUsersDatabase(users);
      } else {
        // Update existing user's last login
        googleUser.lastLogin = new Date().toISOString();
        updateUserInDatabase(googleUser);
      }

      createSession(googleUser);
    } catch (error: any) {
      throw new Error('Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    setLoading(true);
    
    try {
      const trimmedEmail = email.trim().toLowerCase();

      if (!trimmedEmail) {
        throw new Error('Email is required');
      }
      if (!validateEmail(trimmedEmail)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if user exists
      const users = getUsersDatabase();
      const existingUser = users.find(u => u.email === trimmedEmail);

      if (!existingUser) {
        throw new Error('No account found with this email address');
      }

      // Simulate sending reset email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would send an actual email
      console.log(`Password reset email sent to: ${trimmedEmail}`);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    if (!user) {
      throw new Error('Not authenticated');
    }
    
    setLoading(true);
    
    try {
      // Validate name if provided
      if (data.name !== undefined) {
        const trimmedName = data.name.trim();
        if (!trimmedName) {
          throw new Error('Name cannot be empty');
        }
        if (trimmedName.length < 2) {
          throw new Error('Name must be at least 2 characters long');
        }
        data.name = trimmedName;
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const updatedUser = { ...user, ...data };
      updateUserInDatabase(updatedUser);
      createSession(updatedUser);
    } catch (error: any) {
      throw new Error(error.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (): Promise<void> => {
    if (!user) {
      throw new Error('Not authenticated');
    }
    
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Remove user from database
      const users = getUsersDatabase();
      const updatedUsers = users.filter(u => u.id !== user.id);
      saveUsersDatabase(updatedUsers);

      // Clear session
      clearAuthStorage();
    } catch (error: any) {
      throw new Error('Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
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
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};