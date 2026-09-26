"use server"

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createLead(formData) {
    const name = formData.get("name");
    const company = formData.get("company");
    const email= formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const budget = formData.get("budget");
    const notes = formData.get("notes");

    if(!name || !service){
        return;
    }

    await prisma.lead.create({
        data : {
            name, 
            company: company || null,
            email : email || null,
            phone : phone || null,
            service,
            budget : budget ? Number(budget) : null,
            notes : notes || null,
        },
    });

    revalidatePath("/");
}

export async function updateLead(formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const company = formData.get("company");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const budget = formData.get("budget");
  const status = formData.get("status");
  const notes = formData.get("notes");

  if (!id || !name || !service) {
    return;
  }

  await prisma.lead.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      company: company || null,
      email: email || null,
      phone: phone || null,
      service,
      budget: budget ? Number(budget) : null,
      status,
      notes: notes || null,
    },
  });

  revalidatePath("/");
}

export async function deleteLead(formData) {
  const id = formData.get("id");

  if (!id) {
    return;
  }

  await prisma.lead.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/");
}