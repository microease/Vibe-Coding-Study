"use client";

import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedIn = true;
  const name = "YankaiHu"; // Simulating a logged-in user name
  const greeting2 = `Hello,${isLoggedIn ? name : "there"}`;
  console.log(greeting2); // Using the variable to avoid the error
  const priceingFeaturesList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];
  return (
    <main>
      {/* Header */}
      <section className="bg-base-200 shadow-lg">
        <div className="flex justify-between px-8 max-w-3xl mx-auto">
          <div className="flex items-center font-bold text-xl">
            CodeFastSaas
          </div>
          <div className="space-x-4 max-md:hidden">
            <a href="" className="link link-hover">
              Pricing
            </a>
            <a href="" className="link link-hover">
              FAQs
            </a>
            <a href="" className="link link-hover">
              About
            </a>
            <a href="" className="link link-hover">
              Contact
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-base-100 px-8 text-center py-32  max-w-3xl mx-auto">
        <h1 className="title extra-large text-5xl lg:text-6xl font-bold">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-50 text-center p-4 ">
          Create a feeedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        <p>Hey:{name}</p>
      </section>
      {/* Features Section */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm text-red-500">Price</p>
          <h2 className="title extra-large text-3xl lg:text-4xl font-extrabold text-center text-primary">
            A Price that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
            <div className="flex justify-between items-center  gap-2 items-end">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="list-none space-y-4">
              {priceingFeaturesList.map((priceItem) => {
                return (
                  <li className="flex gap-2 items-center my-4" key={priceItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-green-600 size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}

              <ButtonLogin
                isLoggedIn={isLoggedIn}
                name={greeting2}
                extraStyle="w-full"
              />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
