"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCustomer(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return;
  }

  await prisma.customer.create({
    data: {
      name,
      email,
    },
  });

  revalidatePath("/");
}