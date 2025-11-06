import Footer from './Footer/Footer';
import { ReactNode } from 'react'; // Import ReactNode for typing

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
