'use client'

import { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);    
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);    
  };

  return (
    <MobileMenuContext.Provider
      value={{
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
};