import './globals.css';
import Background from '@/components/Background';
import { ThemeProvider } from '@/components/ThemeContext';

export const metadata = {
  title: 'Nishant Yadav | Full Stack Developer',
  description: 'I help founders turn their ideas into reality',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Trigger redeployment
