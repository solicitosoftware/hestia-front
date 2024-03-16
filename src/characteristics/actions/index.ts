"use server";

import { namePath } from "@/app/constants";
import prisma from "@/lib/prisma";
import { characteristics } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { characteristicZodType } from "../schemas";

export const getCharacteristicsAction = async (): Promise<
  characteristics[]
> => {
  try {
    const result = await prisma.characteristics.findMany({
      orderBy: { name: "asc" },
    });

    return result;
  } catch (error) {
    console.error("getCharacteristicsAction", { error });
    throw new Error(
      "No fue posible obtener la información de BD, vuelve a intentarlo"
    );
  }
};

export const createCharacteristicAction = async ({
  name,
  description,
  typeId,
}: characteristicZodType): Promise<characteristics> => {
  try {
    const result = await prisma.characteristics.create({
      data: { name, description, typeId },
    });

    revalidatePath(namePath.pathCharacteristics);
    return result;
  } catch (error) {
    console.error("createCharacteristicAction", { error });
    throw new Error(
      "No fue posible crear el elemento en BD, vuelve a intentarlo"
    );
  }
};

export const updateStateAction = async (
  id: number,
  active: boolean
): Promise<characteristics> => {
  try {
    const data = await prisma.characteristics.findFirst({ where: { id } });
    if (!data) throw `The characteristic with [id:${id}] not found`;

    const result = await prisma.characteristics.update({
      where: { id },
      data: { active },
    });

    revalidatePath(namePath.pathCharacteristics);
    return result;
  } catch (error) {
    console.error("updateStateAction", { error });
    throw new Error(
      "No fue posible actualizar el elemento en BD, vuelve a intentarlo"
    );
  }
};

export const removeCharacteristicAction = async (): Promise<string> => {
  try {
    const result = await prisma.characteristics.deleteMany({
      where: { active: false },
    });

    revalidatePath(namePath.pathCharacteristics);
    return `characteristics delete ${result.count}`;
  } catch (error) {
    console.error("updateStateAction", { error });
    throw new Error(
      "No fue posible eliminar los elemento en BD, vuelve a intentarlo"
    );
  }
};
