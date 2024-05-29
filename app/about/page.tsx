import { TeamList } from "@/components/about";
import { title } from "@/components/common/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>
        <TeamList/>
      </h1>
    </div>
  );
}
