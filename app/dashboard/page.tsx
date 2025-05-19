// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const user = session.user;
  const nameInitial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <Avatar className="mx-auto mb-2 w-20 h-20">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user.name ?? "User"} />
            ) : (
              <AvatarFallback>{nameInitial}</AvatarFallback>
            )}
          </Avatar>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name} 👋</h1>
          <p className="text-sm text-muted-foreground">
            You're logged in and ready to manage the site.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
