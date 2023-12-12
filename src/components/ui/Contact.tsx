import Image  from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-secondary py-4">
      <h1 className="text-4xl text-center font-bold text-gray">Contact</h1>
      <div class="text-center text-gray py-5 pt-10">
        <p className="text-xl font-semibold">
          Message me via:{" "}
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://wa.me/8801774757227?text=I%20am%20interested%20in%20working%20with%20you%20!"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gray hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <Image src="/image/whatUp.png" alt="whatsApp" width="100"  height="100" />
            </Link>
            </span>
          <span className="flex justify-center gap-2 items-center mt-4">
           
            <Link
              href="https://m.me/rhfahadchy/"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gray hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <Image src="/image/messanger.png" alt="messanger" width={50}  height={50} />
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
