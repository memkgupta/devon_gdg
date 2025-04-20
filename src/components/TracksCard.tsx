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
  HeartHandshake,
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
  HeartHandshake,
};
export function TracksCard({ icon, name, description }: any) {
  const Icon = iconsMap[icon as keyof typeof iconsMap];
  return (
    <CardSpotlight className="w-96">
      <div className="flex flex-col items-start justify-center">
        <Icon className="z-20 text-neutral-300" />
        <p className="text-xl font-bold relative z-20 mt-2 text-rose-400">{name}</p>

        <p className="text-neutral-300 mt-2 relative z-20 text-sm">
          {description}
        </p>
      </div>
    </CardSpotlight>
  );
}
