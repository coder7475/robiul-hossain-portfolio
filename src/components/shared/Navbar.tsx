import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Portofolio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="#about">About Me</Link>
          <Link className="mr-5 hover:text-gray-900" href="#projects">Projects</Link>
          <Link className="mr-5 hover:text-gray-900" href="#contact">Contact</Link>
          <Link className="mr-5 hover:text-gray-900" href="#education">Education</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
