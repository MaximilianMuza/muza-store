import Navigation from './Navigation';
import { ReactNode } from 'react'; // Import ReactNode for typing

// Define the type for the Layout component's props
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>© 2025 My Website</footer>
    </>
  );
}
