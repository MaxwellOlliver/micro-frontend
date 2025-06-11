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
      <div className="content p-2">
        {navbar}
        <div className="main overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
