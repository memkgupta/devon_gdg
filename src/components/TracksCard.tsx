import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
  Globe,
  Smartphone,
  Brain,
  ShieldCheck,
  Shield,
  Gamepad2,
  Camera,
  ServerCog,
  Cpu,
  HeartPulse,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

const iconsMap = {
  Globe,
  Smartphone,
  Brain,
  ShieldCheck,
  Shield,
  Gamepad2,
  Camera,
  ServerCog,
  Cpu,
  HeartPulse,
  BookOpenCheck,
  Sparkles,
};
export function TracksCard({ icon, name, description }: any) {
  const Icon = iconsMap[icon as keyof typeof iconsMap];
  return (
    <CardSpotlight className=" w-96">
      <Icon />
      <p className="text-xl font-bold relative z-20 mt-2 text-rose-">{name}</p>

      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {description}
      </p>
    </CardSpotlight>
  );
}
