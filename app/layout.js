'use client';

import { Inter } from 'next/font/google';

import './globals.css';
import AuthProvider from '@/components/auth/auth-form-provider';
import StyledComponentsRegistry from '@/libs/registry';
import MainNavigation from '@/components/layout/main-navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Funny Check',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, dialog }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <StyledComponentsRegistry>
            <MainNavigation />
            {children}
          </StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
