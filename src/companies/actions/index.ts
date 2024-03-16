"use server";

import prisma from "@/lib/prisma";
import { companiesZodType } from "../schemas";
import { revalidatePath } from "next/cache";
import { namePath } from "@/app/constants";
import { companies } from "@prisma/client";

export const getCompaniesAction = async (): Promise<companies[]> => {
  try {
    const result = await prisma.companies.findMany({
      orderBy: { name: "asc" },
    });

    return result;
  } catch (error) {
    console.error("getCompaniesAction", { error });
    throw new Error(
      "No fue posible obtener la información de BD, vuelve a intentarlo"
    );
  }
};

export const getCompanyAction = async (
  id: string
): Promise<companies | null> => {
  try {
    const result = await prisma.companies.findUnique({
      where: { id: Number(id) },
    });

    return result;
  } catch (error) {
    console.error("getCompaniesAction", { error });
    throw new Error(
      "No fue posible obtener la información de BD, vuelve a intentarlo"
    );
  }
};

export const createCompanyAction = async (
  data: companiesZodType
): Promise<companiesZodType> => {
  try {
    const result = await prisma.companies.create({
      data: { ...data, phone: Number(data.phone) },
    });

    revalidatePath(namePath.pathCompanies);
    const phone = Number(result.phone) !== 0 ? result.phone!.toString() : null;
    return { ...result, phone };
  } catch (error) {
    console.error("createCompanyAction", { error });
    throw new Error(
      "No fue posible crear el elemento en BD, vuelve a intentarlo"
    );
  }
};

export const updateCompanyAction = async (
  id: number,
  values: companiesZodType
): Promise<companiesZodType> => {
  try {
    const data = await prisma.companies.findFirst({ where: { id } });
    if (!data) throw `The company with [id:${id}] not found`;

    const result = await prisma.companies.update({
      where: { id },
      data: { ...values, phone: Number(values.phone) },
    });

    revalidatePath(namePath.pathCompanies);
    const phone = Number(result.phone) !== 0 ? result.phone!.toString() : null;
    return { ...result, phone };
  } catch (error) {
    console.error("updateCompanyAction", { error });
    throw new Error(
      "No fue posible actualizar el elemento en BD, vuelve a intentarlo"
    );
  }
};

export const removeCompanyAction = async (id: number): Promise<string> => {
  try {
    const result = await prisma.companies.deleteMany({
      where: { id },
    });

    revalidatePath(namePath.pathCompanies);
    return `company delete ${result.count}`;
  } catch (error) {
    console.error("removeCompanyAction", { error });
    throw new Error(
      "No fue posible eliminar los elemento en BD, vuelve a intentarlo"
    );
  }
};
