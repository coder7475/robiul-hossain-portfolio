import Image from 'next/image';

const Technology = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center min-h-screen bg-secondary">
      <h1 className="text-light font-bold text-center text-4xl mb-10">Technologies </h1>
      <p>
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=html,css,javascript,git" width="600" height="500" alt="tech"/>
        </a>
      </p>
      <p>
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=tailwindcss,materialui,react,github" width="600" height="500" alt="tech"/>
        </a>
      </p>

      <p>
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=firebase,express,mongodb,vite" width="600" height="500" alt="tech"/>
        </a>
      </p>

      <p>
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=nodejs,nextjs" width="300" height="300" alt="tech"/>
        </a>
      </p>
    </section>
  );
};

export default Technology;
