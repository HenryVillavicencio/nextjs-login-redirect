import { redirect } from "../utils/redirect";
import { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Auth = (props) => {
  const [field, setFields] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const router = useRouter();

  const signin = async (email, password) => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return { error };
    }
  };

  const onClick = async (e) => {
    e.preventDefault();
    const { user, error } = await signin(field.email, field.password);
    if (error) {
      setError(error);
      return;
    }
    cookie.set("user", user);
    if (user) router.push("/home");
  };

  return (
    <>
      <h1> 🛑 Alto ahí....!</h1>
      <h2>Primero debes iniciar sesión</h2>
      {error && <p>{error}</p>}
      <p>
        Credenciales de prueba 🔑
        <br />
        <strong>Usurio: </strong> hola@hola.com
        <br />
        <strong>Contraseña: </strong> 123456
      </p>
      <form>
        <input
          placeholder="Correo"
          onChange={(event) => {
            event.preventDefault();
            setFields({ ...field, email: event.target.value });
          }}
        />
        <input
          placeholder="Contraseña"
          type="password"
          onChange={(event) => {
            event.preventDefault();
            setFields({ ...field, password: event.target.value });
          }}
        />
        <button onClick={onClick}>Entar</button>
      </form>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const user = redirect(ctx);
  return {
    props: {
      user,
    },
  };
};

export default Auth;
