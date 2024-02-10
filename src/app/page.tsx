import { redirect } from "next/navigation";
import { namePath } from "./interfaces";

export default function HomePage() {
  redirect(namePath.pathMain);
}
