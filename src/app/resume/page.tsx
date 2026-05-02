import { redirect } from "next/navigation";
export const metadata = { title: "Résumé" };
export default function ResumePage() {
  redirect("/downloads/Abdalrahman_ElGazzawi_Resume_2026.pdf");
}
