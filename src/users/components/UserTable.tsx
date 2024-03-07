import Image from "next/image";
import { users } from "../schemas";
import style from "../styles/User.module.css";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
  data: users[];
  title: string[];
}

const UserTable = ({ data, title }: Props) => {
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
          {data.map((user) => (
            <tr key={user.id} className={style.selected}>
              <th className={style.items}>
                <div className={style["container-image"]}>
                  <Image
                    className={style.image}
                    src={
                      user?.image ??
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    }
                    alt="Avatar user"
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
                    <span key={role.id} className={style.role}>
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
