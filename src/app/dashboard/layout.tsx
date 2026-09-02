import type { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MainNav } from '@/components/app/main-nav';
import { Header } from '@/components/app/header';
import { AuthProvider } from '@/components/app/auth-provider';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <MainNav />
        {/* Sidebar renders its own spacer that reserves the width, so this
            only needs to fill the remaining space. min-w-0 lets the grids
            inside shrink instead of overflowing. */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}
