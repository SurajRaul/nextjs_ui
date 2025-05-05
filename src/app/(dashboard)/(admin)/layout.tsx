import { auth } from "@/auth";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({
  information,
  screen,
}: Readonly<{
  information: React.ReactNode;
  screen: React.ReactNode;
}>) {
  const session = await auth();
  //   if (session) {
  //     throw new Error("No session Info Available");
  //   }

  return (
    <div className="flex">
      {screen}
      {information}
    </div>
  );
}
