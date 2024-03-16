import { roles } from "@prisma/client";

export interface users {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isActive: boolean;
  roles: roles[];
}

export interface usersPagination {
  users: users[];
  currentPage: number;
  totalPage: number;
}
