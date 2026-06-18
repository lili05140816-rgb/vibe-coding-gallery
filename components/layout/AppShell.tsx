import { DesktopTopNav } from "@/components/layout/DesktopTopNav";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f7fa_0,#f8fafc_30rem)] text-slate-950">
      <DesktopTopNav />
      <main className="min-h-screen pb-24 md:pb-0 md:pt-20">{children}</main>
      <MobileBottomNav />
    </div>
  );
}
