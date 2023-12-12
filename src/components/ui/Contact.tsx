import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-secondary py-4 pt-10">
      <h1 className="text-4xl text-center font-bold text-gray">Contact</h1>
      <div className="text-center text-gray py-5 pt-10">
        <div className="text-xl font-semibold">
          Message me via:{" "}
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://wa.me/8801774757227?text=I%20am%20interested%20in%20working%20with%20you%20!"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gray hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <Image
                src="/image/whatUp.png"
                alt="whatsApp"
                width="100"
                height="100"
              />
            </Link>
          </span>
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://m.me/rhfahadchy/"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gray hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <Image
                src="/image/messanger.png"
                alt="messanger"
                width={50}
                height={50}
              />
            </Link>
          </span>
          <span className="flex justify-center gap-2 items-center mt-4">

          <Link href="mailto:robiulhossain7475@gmail.com">
              <Image
                src="https://img.shields.io/badge/Google-white?style=for-the-badge&logo=google&logoColor=whit
e"
                alt="Google Badge"
                width={200}
                height={100}

              />
            </Link>
        </span>
        </div>
        <div className="text-center text-gray py-5 pt-10">
          Find more about me on:
          <span className="flex justify-center gap-2 items-center mt-4">

         
            <a href="https://www.linkedin.com/in/robiul-hossain-298298265/">
              <Image
                src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor
=white"
                width={200}
                alt="LinkedIn Badge"
                height={100}

              />
            </a>

            
            <a href="https://www.facebook.com/rhfahadchy">
              <Image
                src="https://img.shields.io/badge/Facebook-blue?style=for-the-badge&logo=facebook&logoColor
=white"
                alt="Facebook Badge"
                width={200}
                height={100}
              />
            </a>
            </span>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
