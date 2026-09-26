import { createLead } from "../app/actions";

export default function AddLeadForm() {
  return (
    <section>
      <h2>Add New Lead</h2>

      <form action={createLead}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Customer name"
            required
          />
        </div>

        <div>
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="customer@example.com"
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="98XXXXXXXX"
          />
        </div>

        <div>
          <label>Service</label>

          <select name="service" required>
            <option value="">Select service</option>
            <option value="Website Development">
              Website Development
            </option>
            <option value="E-commerce Website">
              E-commerce Website
            </option>
            <option value="Mobile App">
              Mobile App
            </option>
            <option value="AI Automation">
              AI Automation
            </option>
            <option value="SmartLink">
              SmartLink
            </option>
          </select>
        </div>

        <div>
          <label>Budget</label>
          <input
            type="number"
            name="budget"
            placeholder="50000"
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            name="notes"
            placeholder="Customer requirement..."
          />
        </div>

        <button type="submit">
          Add Lead
        </button>
      </form>
    </section>
  );
}