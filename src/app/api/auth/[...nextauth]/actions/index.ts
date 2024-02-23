import { userZodType } from "@/app/api/v1/schemas";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const addRolUser = async (userId: string) => {
  const rol = await prisma.roles.findUnique({
    where: { name: "Invitado" },
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      roles: {
        connect: { id: rol?.id! },
      },
    },
  });
};

export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!bcryptjs.compareSync(password, user?.password!)) return null;
  return user;
};

// export const createUser = async (values: userZodType) => {
//   const { email, password, name, image } = values;
//   const user = await prisma.user.create({
//     data: {
//       email,
//       name,
//       image,
//       password: bcryptjs.hashSync(password),
//     },
//   });

//   await addRolUser(user.id);

//   return user;
// };
