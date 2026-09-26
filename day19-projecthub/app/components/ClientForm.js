import { createClient } from "../actions";

export default function ClientForm() {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Add Client
      </h2>

      <form action={createClient} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Client name"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Company
          </label>

          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="client@example.com"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            placeholder="98XXXXXXXX"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add Client
        </button>
      </form>
    </section>
  );
}