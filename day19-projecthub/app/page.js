import prisma from "../lib/prisma";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import ProjectForm from "./components/ProjectForm";

export default async function Home() {
  const clients = await prisma.client.findMany({
    include: {
      projects: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const projects = await prisma.project.findMany({
    include: {
      client: true,
    },
  });

  console.log(projects);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            ProjectHub
          </h1>

          <p className="mt-1 text-gray-600">
            Manage clients and their projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ClientForm />

          <ProjectForm clients={clients} />
        </div>

        <div className="mt-8">
          <ClientList clients={clients} />
        </div>

      </div>
    </main>
  );
}