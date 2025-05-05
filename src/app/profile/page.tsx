import { signIn, signOut, auth } from "@/auth";
import Image from "next/image";

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;
  return user ? (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  ) : (
    <div
      className="min-h-screen flex items-center justify-center bg-violet-200 bg-cover bg-center   "
      style={{
        backgroundImage: "url('/university.jpg')",
      }}
    >
      <div className="bg-violet-100 p-8 rounded-lg max-w-md flex flex-col items-center">
        <Image
          src="/UniversityLogo.png"
          alt="Google Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-600 text-zinc-100 py-3 px-10 rounded-md transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Image
              src="/google.svg.png"
              alt="Google Logo"
              width={30}
              height={30}
            />
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
}
