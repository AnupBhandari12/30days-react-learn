import { updateLead } from "../app/actions";

export default function EditLeadForm({ lead }) {
  return (
    <form action={updateLead}>
      <input type="hidden" name="id" value={lead.id} />

      <input
        type="text"
        name="name"
        defaultValue={lead.name}
        required
      />

      <input
        type="text"
        name="company"
        defaultValue={lead.company || ""}
      />

      <input
        type="email"
        name="email"
        defaultValue={lead.email || ""}
      />

      <input
        type="text"
        name="phone"
        defaultValue={lead.phone || ""}
      />

      <input
        type="text"
        name="service"
        defaultValue={lead.service}
        required
      />

      <input
        type="number"
        name="budget"
        defaultValue={lead.budget || ""}
      />

      <select name="status" defaultValue={lead.status}>
        <option value="NEW">NEW</option>
        <option value="CONTACTED">CONTACTED</option>
        <option value="NEGOTIATION">NEGOTIATION</option>
        <option value="WON">WON</option>
        <option value="LOST">LOST</option>
      </select>

      <textarea
        name="notes"
        defaultValue={lead.notes || ""}
      />

      <button type="submit">
        Update Lead
      </button>
    </form>
  );
}