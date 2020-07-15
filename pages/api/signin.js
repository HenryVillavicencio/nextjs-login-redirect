export default (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    res.setHeader("Content-Type", "application/json");
    if (email === "hola@hola.com" && password === "123456") {
      res.statusCode = 200;
      res.end(JSON.stringify({ user: { email, token: "XXXXXXX@#$W@SSXS" } }));
    } else {
      res.statusCode = 401;
      res.end(JSON.stringify({ error: "Usuario o contraseña incorrectos" }));
    }
  }
};
