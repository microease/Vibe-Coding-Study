import Link from "next/link";

interface ButtonLoginProps {
  isLoggedIn: boolean;
  name: string; // Added the missing 'name' property
}

const ButtonLogin = (props: ButtonLoginProps) => {
  const { isLoggedIn, name } = props;
  const personal = { name: "YankaiHu", age: 30 };

  if (props.isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome Back,{props.name}
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
