import Link from "next/link";

export const SocialIcon = ({ href, icon }:any) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl text-rose-400  hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:motion-safe:animate-bounce"
    >
      {icon}
    </Link>
  );