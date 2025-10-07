'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/lib/brand';
import { AuthService } from '@/lib/auth';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen, onClose, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = AuthService.authenticate(username, password);
      
      if (result.success) {
        onSuccess();
        onClose();
        // Redirect to main app
        window.location.href = AuthService.getMainAppUrl();
      } else {
        setError(result.error || 'Authentication failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setError('');
    setIsLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: colors.darkNavy, border: `2px solid ${colors.primary}` }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isLoading}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>
                Access <span style={{ color: colors.primary }}>SuiVerify</span>
              </h2>
              <p className="text-sm" style={{ color: colors.lightBlue }}>
                Enter your credentials to access the dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2" style={{ color: colors.lightBlue }}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: colors.darkerNavy,
                    borderColor: colors.primary + '40',
                    color: colors.white,
                    focusRingColor: colors.primary
                  }}
                  placeholder="Enter your username"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: colors.lightBlue }}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: colors.darkerNavy,
                    borderColor: colors.primary + '40',
                    color: colors.white,
                    focusRingColor: colors.primary
                  }}
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: '#fee2e2',
                    borderColor: '#fecaca',
                    color: '#dc2626'
                  }}
                >
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full font-bold px-6 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isLoading ? colors.primary + '80' : colors.primary,
                  color: colors.white,
                  border: `2px solid ${colors.primary}`
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  'Access Dashboard'
                )}
              </motion.button>
            </form>

            {/* Footer Note */}
            <div className="text-center pt-4 mt-6 border-t" style={{ borderColor: colors.primary + '40' }}>
              <p className="text-xs" style={{ color: colors.lightBlue + 'CC' }}>
                Contact the SuiVerify team if you need access credentials
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthDialog;
