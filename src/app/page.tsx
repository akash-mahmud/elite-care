import PataientForm from "@/components/forms/PataientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex h-screen max-h-screen">
      {/* Todo: Add otp verification */}
      <section className=" remove-scrollbar container my-auto">
        <div className=" sub-container max-w-[496px] ">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo"
            height={1000}
            width={1000}
            className=" h-10 mb-12 w-fit"
          />
        </div>
        <PataientForm />
        <div className=" text-14-regular mt-20 flex justify-between">
          <p className=" justify-items-end text-dark-600 xl:text-left">
            © 2024 elite care
          </p>
          <Link href={"?admin=true"} className=" text-green-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        height={1000}
        width={1000}
        src={"/assets/images/onboarding-img.png"}
        className=" side-img max-w-[50%]"
        alt="doctor image"
      />
    </div>
  );
}
