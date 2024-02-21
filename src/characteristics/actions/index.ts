"use server";

import { namePath } from "@/app/constants";
import prisma from "@/lib/prisma";
import { characteristics } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { characteristicZodType } from "../schemas";

export const updateStateAction = async (
  id: number,
  active: boolean
): Promise<characteristics> => {
  const data = await prisma.characteristics.findFirst({ where: { id } });
  if (!data) throw `The characteristic with [id:${id}] not found`;

  const result = await prisma.characteristics.update({
    where: { id },
    data: { active },
  });

  revalidatePath(namePath.pathCharacteristics);
  return result;
};

export const createCharacteristicAction = async (
  data: characteristicZodType
): Promise<characteristics> => {
  const result = await prisma.characteristics.create({
    data,
  });

  revalidatePath(namePath.pathCharacteristics);
  return result;
};

export const removeCharacteristicAction = async (): Promise<string> => {
  const result = await prisma.characteristics.deleteMany({
    where: { active: false },
  });

  revalidatePath(namePath.pathCharacteristics);
  return `characteristics delete ${result.count}`;
};