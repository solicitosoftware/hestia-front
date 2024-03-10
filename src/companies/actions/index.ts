"use server";

import prisma from "@/lib/prisma";
import { companiesZodType } from "../schemas";
import { revalidatePath } from "next/cache";
import { namePath } from "@/app/constants";

export const createCompanyAction = async (
  data: companiesZodType
): Promise<companiesZodType> => {
  const result = await prisma.companies.create({
    data: { ...data, phone: Number(data.phone) },
  });

  revalidatePath(namePath.pathCompanies);
  const phone = Number(result.phone) !== 0 ? result.phone!.toString() : null;
  return { ...result, phone };
};

export const updateCompanyAction = async (
  id: number,
  values: companiesZodType
): Promise<companiesZodType> => {
  const data = await prisma.companies.findFirst({ where: { id } });
  if (!data) throw `The company with [id:${id}] not found`;

  const result = await prisma.companies.update({
    where: { id },
    data: { ...values, phone: Number(values.phone) },
  });

  revalidatePath(namePath.pathCompanies);
  const phone = Number(result.phone) !== 0 ? result.phone!.toString() : null;
  return { ...result, phone };
};

export const removeCompanyAction = async (id: number): Promise<string> => {
  const result = await prisma.companies.deleteMany({
    where: { id },
  });

  revalidatePath(namePath.pathCompanies);
  return `company delete ${result.count}`;
};
