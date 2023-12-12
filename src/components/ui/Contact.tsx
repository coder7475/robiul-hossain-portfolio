import Image from "next/image";
import Link from "next/link";
import whatup from "/public/image/whatUp.png";

function MessageContact() {
  return (
    <div className="text-xl font-semibold">
      Message me via:{" "}
      <span className="flex justify-center gap-2 items-center mt-4 flex-col lg:flex-row">
        <Link
          href="https://wa.me/8801774757227?text=I%20am%20interested%20in%20working%20with%20you%20!"
          className="mb-2 flex gap-2 md:text-lg rounded px-6 items-center justify-center py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <h3>WhatsApp</h3>
        </Link>

        <Link
          href="https://m.me/rhfahadchy/"
          className="mb-2 items-center justify-center flex gap-2 md:text-lg rounded px-6 py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
          </svg>
          <h3>Messenger</h3>
        </Link>

        <Link
          href="mailto:robiulhossain7475@gmail.com"
          className="mb-2 flex items-center justify-center gap-2 md:text-lg rounded px-6 py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          <h3>Gmail</h3>
        </Link>
      </span>
    </div>
  );
}

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-secondary py-4 pt-10">
      <h1 className="text-4xl text-center font-bold text-gray">Contact Me</h1>
      <div className="text-center text-gray py-5 pt-10">
        <MessageContact></MessageContact>
        <div className="text-center text-gray py-5 pt-10">
          Find more about me on:
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://www.linkedin.com/in/robiul-hossain-298298265/"
              className="mb-2 flex items-center justify-center gap-2 md:text-lg rounded px-6 py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>

            <Link
              href="https://www.facebook.com/rhfahadchy"
              className="mb-2 flex items-center justify-center gap-2 md:text-lg rounded px-6 py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
          </span>
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://leetcode.com/robiul_hossain/"
              className="mb-2 flex items-center justify-center gap-2 md:text-lg rounded px-6 py-2.5 text-xs font-medium bg-primary leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                width="40"
                height="30"
                viewBox="0 0 95 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto max-w-none"
              >
                <path
                  d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                  fill="#FFA116"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                  fill="#B3B3B3"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                  fill="black"
                ></path>
              </svg>
            </Link>
          </span>
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://codeforces.com/profile/robiulhossain7475"
              className="mb-2 inline-block rounded text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <Image
                src="/image/codeforces.png"
                alt="codeforces"
                width={200}
                height={200}
              />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
