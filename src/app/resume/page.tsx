import { redirect } from "next/navigation";
export const metadata = { title: "Résumé" };
export default function ResumePage() {
  redirect("/downloads/Abdalrahman_ElGazzawi_General_CV.pdf");
}
