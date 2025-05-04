"use client";

import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedIn = true;
  const name = "User"; // Define the 'name' variable as a string

  return (
    <main>
      <h1 className="title extra-large">
        Collect customer feedback to build better products
      </h1>
      <div className="title extra-large">
        Create a feeedback board in minutes, prioritize features, and build
        products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      <p>Hey:{name}</p>
    </main>
  );
}
