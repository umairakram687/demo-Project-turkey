"use client";
import { Sidebar } from "@/components/organisms/sidebar";
import { Header } from "@/components/organisms/header";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpended] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar isExpanded={isExpanded} setIsExpended={setIsExpended} />
      <main className="flex-1 flex flex-col min-w-0">
        <Header setIsExpended={setIsExpended} />
        <div className="flex-1 overflow-auto">
          <div className="py-2 px-4 max-w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
