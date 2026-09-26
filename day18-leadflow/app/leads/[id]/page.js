import prisma from "../../../lib/prisma";
import EditLeadForm from "../../../components/EditLeadForm";
import { notFound } from "next/navigation";

export default async function LeadDetailsPage({ params }) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!lead) {
    notFound();
  }

  return (
    <main>
      <h1>Lead Details</h1>

      <p>ID: {lead.id}</p>
      <p>Name: {lead.name}</p>
      <p>Company: {lead.company || "N/A"}</p>
      <p>Email: {lead.email || "N/A"}</p>
      <p>Phone: {lead.phone || "N/A"}</p>
      <p>Service: {lead.service}</p>
      <p>Budget: {lead.budget || "Not specified"}</p>
      <p>Status: {lead.status}</p>

      <hr />

      <h2>Edit Lead</h2>

      <EditLeadForm lead={lead} />
    </main>
  );
}