import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar session={session} />
      <main
        className="dashboard-main flex-1 p-6 relative" // Add "relative" here
        style={{
          backgroundImage: "url('/spirala.svg')",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          animationTimingFunction: "ease-in",
        }}
      >
        {children}
      </main>
    </div>
  );
}
