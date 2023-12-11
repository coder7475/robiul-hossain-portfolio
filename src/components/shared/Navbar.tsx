import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-light bg-primary ">
      <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center max-w-4xl">
        <a className="flex title-font font-medium items-center justify-center text-light mb-4 md:mb-0">
          <span className="text-xl">Portofolio</span>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray " href="#about">About Me</Link>
          <Link className="mr-5 hover:text-gray" href="#projects">Projects</Link>
          <Link className="mr-5 hover:text-gray" href="#contact">Contact</Link>
          <Link className="mr-5 hover:text-gray" href="#education">Education</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
