import { characteristics } from "@prisma/client";
import { characteristicZodType } from "../schemas";

export const updateState = async (
  id: number,
  active: boolean
): Promise<characteristics> => {
  const body = { active };
  const characteristic = await fetch(`/api/v1/characteristics/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());

  return characteristic;
};

export const createCharacteristic = async ({
  name,
  description,
}: characteristicZodType): Promise<characteristics> => {
  const body = { name, description };
  const characteristic = await fetch("/api/v1/characteristics", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());

  return characteristic;
};

export const removeCharacteristic = async (): Promise<boolean> => {
  await fetch("/api/v1/characteristics", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());

  return true;
};
