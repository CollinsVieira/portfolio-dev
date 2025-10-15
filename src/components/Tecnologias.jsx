import LogoLoop from '../utils/logoLoop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDjango, SiDocker } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function Tecnologias() {
  return (
    <div className="flex flex-col">
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor=""
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default Tecnologias;