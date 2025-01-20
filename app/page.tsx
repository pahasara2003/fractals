import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { P5jsContainer } from "@/components/P5jsContainer";
import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <section className="w-[1200px] h-[750px]">
      <Canvas />
    </section>
  );
}
