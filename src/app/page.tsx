import { Poppins } from "next/font/google";
import HomePage from "@/components/HomePage/HomePage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const revalidate = 86400 // revalidate at most every day

export default async function Home() {

  return (
    <main className={poppins.className}>
      <HomePage />
    </main>
  );
}
