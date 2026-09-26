import AddLeadForm from "../components/AddLeadForm";
import prisma from "../lib/prisma";
import LeadList from "../components/LeadList";


export default async function Home() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>LeadFlow CRM</h1>

      <p>Total Leads: {leads.length}</p>

      <hr/>

      <AddLeadForm/>

      <hr />

      <LeadList  leads={leads}/>
    </main>
  );
}