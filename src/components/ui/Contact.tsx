import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-secondary py-4 pt-10">
      <h1 className="text-4xl text-center font-bold text-gray">Contact Me</h1>
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
            <Link href="https://www.linkedin.com/in/robiul-hossain-298298265/">
              <Image
                src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor
=white"
                width={200}
                alt="LinkedIn Badge"
                height={100}
              />
            </Link>

            <Link href="https://www.facebook.com/rhfahadchy">
              <Image
                src="https://img.shields.io/badge/Facebook-blue?style=for-the-badge&logo=facebook&logoColor
=white"
                alt="Facebook Badge"
                width={200}
                height={100}
              />
            </Link>
          </span>
          <span className="flex justify-center gap-2 items-center mt-4">
            <Link
              href="https://leetcode.com/robiul_hossain/"
              className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-gray hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                width="80"
                height="30"
                viewBox="0 0 95 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-auto max-w-none"
              >
                <path
                  d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                  fill="#FFA116"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                  fill="#B3B3B3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
