import React from "react";
import Link from "next/link";
export default function Register() {
  return (
    <section className="z-0 mt-20 flex flex-col gap-3	">
      <section className="body-font relative  text-gray-600 dark:text-white">
        <div className="py-10">
          <div className="flex h-screen items-center justify-center overflow-y-scroll bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat px-4 md:px-0 lg:px-0">
            {/* Main content  */}
            <div className="animate-slide-up mx-4 my-8 flex w-full max-w-[440px] flex-col justify-end gap-6 rounded-xl bg-white px-4 md:mx-0 lg:mx-0">
              {/* register in with social icons */}

              <div className="mx-auto flex w-full max-w-[400px] -translate-y-4 flex-col items-center justify-center gap-7 rounded-lg bg-pink-600 pb-12 pt-5">
                <span className="text-xl font-bold text-white">
                  Register with
                </span>
                <div className="flex items-center gap-7">
                  {/* facebook icon  */}
                  <svg
                    className="h-5 w-5 cursor-pointer fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                  {/* github icon  */}
                  <svg
                    className="h-5 w-5 cursor-pointer fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  {/* google icon  */}
                  <svg
                    className="h-5 w-5 cursor-pointer fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </div>
              </div>
              <div className="px-2">
                {/* Your form elements go here  */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4 w-full">
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-2 focus:border-red-500 focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    />
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 z-[1] px-2 text-xs text-gray-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400 peer-disabled:before:bg-transparent"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-4 w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-2 focus:border-red-500 focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    />
                    <label
                      htmlFor="email"
                      className="absolute -top-2 left-2 z-[1] px-2 text-xs text-gray-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400 peer-disabled:before:bg-transparent"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative mb-4 w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-2 focus:border-red-500 focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    />
                    <label
                      htmlFor="password"
                      className="absolute -top-2 left-2 z-[1] px-2 text-xs text-gray-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400 peer-disabled:before:bg-transparent"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative mb-4 w-full">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      id="conf-password"
                      className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-2 focus:border-red-500 focus:outline-none invalid:focus:border-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    />
                    <label
                      htmlFor="conf-password"
                      className="absolute -top-2 left-2 z-[1] px-2 text-xs text-gray-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400 peer-disabled:before:bg-transparent"
                    >
                      Confirm Password
                    </label>
                  </div>

                  {/* toffle icons/ for remember password  */}
                  <div className="mr-auto flex cursor-pointer items-center gap-1">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      className="h-4 w-4 cursor-pointer rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                    <div className="whitespace-nowrap text-center text-xs text-gray-500 md:text-sm lg:text-sm">
                      I agree the{" "}
                      <span className="cursor-pointer font-bold text-pink-500">
                        <Link href="/terms&condition">
                          {" "}
                          Terms and condition
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="mt-9 w-full rounded-lg border-none bg-pink-600 py-2.5 text-xs font-bold text-white">
                    SIGN UP
                  </button>
                </div>
              </div>

              <div className="mb-8 whitespace-nowrap text-center text-xs text-gray-500 md:text-sm lg:text-sm">
                Already have an account?
                <span className="cursor-pointer font-bold text-pink-500">
                  <Link href="/login"> Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
