import Image from "next/image";

const Technology = () => {
  return (
    <section className="flex flex-col gap-4 justify-start items-center lg:min-h-screen bg-secondary my-10 mx-1">
      <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl pt-4 md:pt-10 md:my-10">
        My Technologies
      </h1>
      <p>
        <a href="https://skillicons.dev" style={{ pointerEvents: "none" }}>
          <Image
            src="https://skillicons.dev/icons?i=html,css,javascript,typescript,python,react,redux,expressjs,mongodb,postgres,nextjs,jest,vitest,cypress,prisma&perline=5"
            width="500"
            height="500"
            alt="core"
          />
        </a>
      </p>
      <hr />
      <h1 className="font-bold text-center md:text-3xl lg:text-4xl md:my-10 text-2xl">
        My Tools
      </h1>
      <p>
        <a href="https://skillicons.dev" style={{ pointerEvents: "none" }}>
          <Image
            src="https://skillicons.dev/icons?i=vscode,vite,git,github,postman,linux,docker,nginx"
            width="500"
            height="500"
            alt="tools"
          />
        </a>
      </p>
    </section>
  );
};

export default Technology;
