import prisma from "@/lib/prisma";
import { companiesZodType } from "../schemas";
import { revalidatePath } from "next/cache";
import { namePath } from "@/app/constants";

export const createCompanyAction = async (
  data: companiesZodType
): Promise<companiesZodType> => {
  const result = await prisma.companies.create({
    data,
  });

  revalidatePath(namePath.pathCompanies);
  return result;
};
