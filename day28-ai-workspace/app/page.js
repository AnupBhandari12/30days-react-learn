import prisma from "../lib/prisma";

export default async function Home() {
  const userCount = await prisma.user.count();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        AI Workspace
      </h1>

      <p className="mt-4">
        Users in database: {userCount}
      </p>
    </main>
  );
}