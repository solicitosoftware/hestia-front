"use server";

import prisma from "@/lib/prisma";
import { types } from "@prisma/client";

export const getTypesAction = async (): Promise<types[]> => {
  const result = await prisma.types.findMany({
    orderBy: { name: "asc" },
  });

  return result;
};
