import prisma from "../lib/prisma";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";

export default async function Home() {
  const customers = await prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Cloud Customers
          </h1>

          <p className="mt-1 text-gray-600">
            Next.js + Prisma + Supabase PostgreSQL
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <CustomerForm />

          <CustomerList customers={customers} />
        </div>
      </div>
    </main>
  );
}