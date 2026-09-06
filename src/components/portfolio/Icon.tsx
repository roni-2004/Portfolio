import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";
import { GrOracle } from "react-icons/gr";
import { DiVisualstudio } from "react-icons/di";
import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiNodedotjs,
  SiExpress,
  SiEjs,
  SiReact,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiJquery,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiNpm,
  SiMysql,
  SiFigma,
  SiSap,
  SiJirasoftware,
} from "react-icons/si";

const lucideRegistry = Lucide as unknown as Record<string, React.ComponentType<LucideProps>>;

const brandRegistry: Record<string, React.ComponentType<{ className?: string }>> = {
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: SiOpenjdk,
  C: SiC,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  EJS: SiEjs,
  "React.js": SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  MongoDB: SiMongodb,
  jQuery: SiJquery,
  Tailwind: SiTailwindcss,
  Git: SiGit,
  Postman: SiPostman,
  "Visual Studio Code": DiVisualstudio,
  NPM: SiNpm,
  "MySQL Workbench": SiMysql,
  Figma: SiFigma,
  SAP: SiSap,
  Jira: SiJirasoftware,
  Oracle: GrOracle,
};

export function Icon({
  name,
  isBrand,
  className,
  ...props
}: { name: string; isBrand?: boolean } & LucideProps) {
  if (isBrand && brandRegistry[name]) {
    const BrandCmp = brandRegistry[name];
    return <BrandCmp className={className} />;
  }
  const Cmp = lucideRegistry[name] ?? Lucide.Circle;
  return <Cmp className={className} {...props} />;
}