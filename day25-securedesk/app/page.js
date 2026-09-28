import TicketForm from "../components/TicketForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl p-6">
        <h1 className="text-3xl font-bold">
          SecureDesk
        </h1>

        <p className="mt-2 text-gray-600">
          Submit a support ticket
        </p>

        <div className="mt-8">
          <TicketForm />
        </div>
      </div>
    </main>
  );
}