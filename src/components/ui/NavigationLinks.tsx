import Link from "next/link";

const NavigationLinks = (props: { isToggleOpen: boolean }) => {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-slate-100/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
        props.isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm"
          : "invisible opacity-0"
      }`}
    >
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#projects"
        >
          <span>Projects</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-current="page"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#education"
        >
          <span>Education</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#experience"
        >
          <span>Experience</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#about"
        >
          <span>About me</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#contact"
        >
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
