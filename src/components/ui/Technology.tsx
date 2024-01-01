import Image from 'next/image';

const Technology = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center min-h-screen bg-secondary my-10">
      <h1 className="font-bold text-center md:text-3xl lg:text-4xl mb-10">My Technologies</h1>
      <p>
      
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=html,css,javascript,react,redux,nodejs,expressjs,mongodb,nextjs" width="1000" height="1000" alt="core"/>
        </a>
      </p>
      <hr/>
      <h1 className="font-bold text-center md:text-3xl lg:text-4xl my-10">My Tools</h1>
      <p>
        <a href="https://skillicons.dev">
          <Image src="https://skillicons.dev/icons?i=vscode,vite,git,github,postman" width="500" height="500" alt="tech"/>
        </a>
      </p>


    </section>
  );
};

export default Technology;
