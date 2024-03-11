import Image from "next/image";
import { users } from "../schemas";
import style from "../styles/User.module.css";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
  users: users[];
  title: string[];
}

const UserTable = ({ users, title }: Props) => {
  const colorRole = (role: string) => {
    switch (role) {
      case "Administrador":
        return "bg-blue-50 text-complement";
      case "Compañia":
        return "bg-gray-100 text-gray-500";
      case "Propietario":
        return "bg-indigo-50 text-indigo-500";
      case "Residente":
        return "bg-green-50 text-green-500";
      case "Invitado":
        return "bg-red-50 text-error-200";
      default:
        return "bg-cyan-50 text-primary";
    }
  };

  return (
    <div className={style["table-space"]}>
      <table className={style.table}>
        <thead className={style.head}>
          <tr>
            {title.map((item) => (
              <th key={item} scope="col" className={style.title}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.body}>
          {users.map((user) => (
            <tr key={user.id} className={style.selected}>
              <th className={style.items}>
                <div className={style["container-image"]}>
                  <Image
                    className={style.image}
                    src={user?.image ?? "/hestiaLogo.png"}
                    alt="Avatar user"
                    placeholder="empty"
                    priority
                    width={40}
                    height={40}
                  />
                  <span
                    className={`${style["state-image"]} ${
                      user.isActive ? "bg-green-500" : "bg-error-200"
                    }`}
                  />
                </div>
                <div className="text-sm">
                  <div className={style.name}>{user.name}</div>
                  <div className={style.email}>{user.email}</div>
                </div>
              </th>
              <td className={style.space}>
                <span
                  className={`${style["container-state"]} ${
                    user.isActive
                      ? "text-green-500 bg-green-50"
                      : "text-error-200 bg-red-50"
                  }`}
                >
                  <span
                    className={`${style.state} ${
                      user.isActive ? "bg-green-500" : "bg-error-200"
                    }`}
                  ></span>
                  {user.isActive ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className={style.space}>
                <div className="flex gap-2">
                  {user.roles.map((role) => (
                    <span
                      key={role.id}
                      className={`${style.role} ${colorRole(role.name)}`}
                    >
                      {role.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className={style.space}>
                <div className={style.actions}>
                  <GoPencil className="cursor-pointer" size={20} />
                  <AiOutlineDelete
                    className="cursor-pointer"
                    color="#D44421"
                    size={20}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
