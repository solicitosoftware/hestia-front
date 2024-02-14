import { redirect } from "next/navigation";
import { namePath } from "./constants";

export default function HomePage() {
  redirect(namePath.pathMain);
}
