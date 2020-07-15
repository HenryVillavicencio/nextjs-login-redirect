import nextCookies from "next-cookies";

export const redirect = (ctx, needAuth = false) => {
  const { user = null } = nextCookies(ctx);
  if (user) {
    console.log("😊 ✅ Usuario autenticado, ");
  } else {
    console.log("🙁 🚫 Usuario no autenticado");
  }

  if (needAuth && !user) {
    console.log("Redirigiendo a la pagina de singin");
    ctx.res.setHeader("location", "/signin");
    ctx.res.statusCode = 302;
    ctx.res.end();
  }

  if (!needAuth && user) {
    console.log("Redirigiendo a la pagina de home");
    ctx.res.setHeader("location", "/home");
    ctx.res.statusCode = 302;
    ctx.res.end();
  }

  return user;
};
