"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createClient(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company");

    if (!name) {
        return;
    }

    await prisma.client.create({
        data: {
            name,
            email: email || null,
            phone: phone || null,
            company: company || null,
        },
    });

    revalidatePath("/");
}

export async function createProject(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const budget = formData.get("budget");
  const clientId = formData.get("clientId");

  if (!title || !clientId) {
    return;
  }

  await prisma.project.create({
    data: {
      title,
      description: description || null,
      budget: budget ? Number(budget) : null,
      clientId: Number(clientId),
    },
  });

  revalidatePath("/");
}