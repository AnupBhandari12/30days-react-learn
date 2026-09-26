import { createProject } from "../actions";

export default function ProjectForm({ clients }) {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Add Project
      </h2>

      <form action={createProject} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Project Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="School Website"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Client
          </label>

          <select
            name="clientId"
            required
            className="w-full rounded-lg border px-3 py-2"
          >
            <option value="">
              Select client
            </option>

            {clients.map((client) => (
              <option
                key={client.id}
                value={client.id}
              >
                {client.name}
                {client.company
                  ? ` - ${client.company}`
                  : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Budget
          </label>

          <input
            type="number"
            name="budget"
            placeholder="50000"
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Description
          </label>

          <textarea
            name="description"
            placeholder="Project details..."
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add Project
        </button>
      </form>
    </section>
  );
}