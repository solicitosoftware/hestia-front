"use server";

import { getuserSesion } from "@/app/api/auth/[...nextauth]/actions";
import prisma from "@/lib/prisma";
import { users, usersPagination } from "../interfaces";

export const getUsersAction = async (): Promise<users[]> => {
  try {
    const user = await getuserSesion();

    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
      include: { roles: true },
    });

    const usersFilter = users?.filter((x) => x.id != user?.id);

    return usersFilter;
  } catch (error) {
    console.error("getUsersAction", { error });
    throw new Error(
      "No fue posible obtener la información de BD, vuelve a intentarlo"
    );
  }
};

interface PropsPagination {
  take?: number;
  page?: number;
}

export const getUsersTakeAction = async ({
  take = 5,
  page = 1,
}: PropsPagination): Promise<usersPagination> => {
  try {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    const user = await getuserSesion();

    const usersPromise = prisma.user.findMany({
      where: {
        NOT: {
          id: {
            equals: user?.id,
          },
        },
      },
      take,
      skip: (page - 1) * take,
      orderBy: { name: "asc" },
      include: { roles: true },
    });

    const totalUsersPromise = prisma.user.count({});

    const [users, totalUsers] = await Promise.all([
      usersPromise,
      totalUsersPromise,
    ]);

    const totalPage = Math.ceil((totalUsers - 1) / take);

    return {
      users,
      currentPage: page,
      totalPage,
    };
  } catch (error) {
    console.error("getUsersAction", { error });
    throw new Error(
      "No fue posible obtener la información de BD, vuelve a intentarlo"
    );
  }
};
