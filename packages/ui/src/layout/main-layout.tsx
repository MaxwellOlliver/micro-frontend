import React from "react";

interface MainLayoutProps {
  sidebar: React.ReactNode;
  navbar: React.ReactNode;
  children: React.ReactNode;
}

export function MainLayout({ sidebar, navbar, children }: MainLayoutProps) {
  return (
    <div className="layout w-screen h-dvh">
      {sidebar}
      {navbar}
      <div className="content">{children}</div>
    </div>
  );
}
