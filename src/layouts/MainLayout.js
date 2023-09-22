import React, { useState } from 'react';
import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })
import Header from '../components/Header';
import { useDark } from '@/context/darkContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useDark();

  return (
    <div className={`root ${nunito.className} ${isDarkMode && 'dark-mode'}`}>
      <Header />
      <main className="main">
        {children}
      </main>
    </div>
  );
};

export default Layout;

