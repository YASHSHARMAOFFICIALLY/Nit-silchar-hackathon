import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-12 h-12">{/* Image here */}</div>
      <span className="text-xl font-semibold tracking-tight">Yashhhh</span>
    </Link>
  );
};