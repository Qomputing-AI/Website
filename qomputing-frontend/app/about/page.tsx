import { aboutusContent } from "@/utils/constants/aboutus";
export default function AboutPage() {
  return (
    <main>
      <h1>{aboutusContent.title}</h1>
      <p>
        {aboutusContent.para1}
      </p>
      <p>
        {aboutusContent.para2}
      </p>
    </main>
  );
}
