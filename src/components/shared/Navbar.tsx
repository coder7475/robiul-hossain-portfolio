import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-light bg-primary sticky top-0 z-10">
      <div className="container p-5 max-w-[1000px] mx-auto ">
        {/* <a className="flex title-font font-medium items-center justify-center text-light mb-4 md:mb-0">
          <span className="text-[22px]">Portofolio</span>
        </a> */}
        <nav className="flex text-sm items-center md:text-base justify-between">
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
