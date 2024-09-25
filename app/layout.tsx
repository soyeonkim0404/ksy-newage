import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { ThemeProvider } from '@/config/material-tailwind-theme-provider';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import StartLoading from '@/components/StartLoading/page';
import Sidebar from '@/components/Sidebar/page';

export const metadata: Metadata = {
  title: 'NEW AGE KIM SO YEON',
  description: 'NEW AGE KIM SO YEON'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <StartLoading>
            <div className="myPortfolio">
              <div className="inner">
                <div className="contents">
                  {/*<Header />*/}
                  <Sidebar />
                  <div className="right-area">{children}</div>
                </div>
              </div>
            </div>
          </StartLoading>
        </body>
      </html>
    </ThemeProvider>
  );
}
