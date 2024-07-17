import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="flex min-h-screen w-full items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default Layout;
