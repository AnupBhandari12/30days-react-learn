import { createCustomer } from "../app/actions";

export default function CustomerForm() {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Add Customer
      </h2>

      <form action={createCustomer} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Customer name"
            required
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
            placeholder="customer@example.com"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add Customer
        </button>
      </form>
    </section>
  );
}