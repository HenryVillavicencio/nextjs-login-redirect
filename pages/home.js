import { useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "../utils/redirect";
import cookie from "js-cookie";

const Home = ({ user }) => {
  const router = useRouter();

  const handleSignout = async () => {
    cookie.remove("user");
    router.push("/");
  };

  return (
    <div>
      <h1>Hola perrito!🐶</h1>
      <p>Bienvenido {user.email} !</p>
      <button onClick={handleSignout}>Salir</button>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const user = redirect(ctx, true);
  return {
    props: {
      user,
    },
  };
};

export default Home;
