import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </div>
  );
}