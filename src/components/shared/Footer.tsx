const Footer = () => {
  return (
    <footer className="text-gray bg-primary">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Robiul Hossain</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Portofolio —
          <a
            href="https://github.com/coder7475"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @coder7475
          </a>
        </p>       
      </div>
    </footer>
  );
};

export default Footer;
