import Link from "next/link";
import { deleteLead } from "../app/actions";

export default function LeadList({ leads }) {
  if (leads.length === 0) {
    return <p>No leads found.</p>;
  }

  return (
    <section>
      <h2>All Leads</h2>

      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>

          <p>Company: {lead.company || "N/A"}</p>
          <p>Email: {lead.email || "N/A"}</p>
          <p>Phone: {lead.phone || "N/A"}</p>
          <p>Service: {lead.service}</p>

          <p>
            Budget:{" "}
            {lead.budget
              ? `Rs. ${lead.budget.toLocaleString()}`
              : "Not specified"}
          </p>

          <p>Status: {lead.status}</p>
          <p>Notes: {lead.notes || "No notes"}</p>

          <Link href={`/leads/${lead.id}`}>
            View / Edit
          </Link>

          <form action={deleteLead}>
            <input
              type="hidden"
              name="id"
              value={lead.id}
            />

            <button type="submit">
              Delete
            </button>
          </form>

          <hr />
        </div>
      ))}
    </section>
  );
}