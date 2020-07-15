import Link from "next/link";
import { redirect } from "../utils/redirect";

const Index = () => {
  return (
    <>
      <h1>NextJs Redirect</h1>
      <p>
        Este ejemplo realiza la redirección si un usuario esta autenticado o no
        .
      </p>

      <ul>
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/signin"}>SignIn</Link>
        </li>
        <li>
          <Link href={"/"}>/</Link>
        </li>
      </ul>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const user = redirect(ctx, false);
  return {
    props: {
      user,
    },
  };
};

export default Index;
