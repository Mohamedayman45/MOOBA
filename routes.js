const users = [];

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body>");
    res.write("<h1>Hi from 0xShxwy</h1>");
    res.write(
      '<form action="/createuser" method="POST">' +
        '<input type="text" name="user">' +
        "<button>Create</button>" +
        "</form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/createuser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsed = Buffer.concat(body).toString();
      const user = parsed.split("=")[1];
      users.push(user);
      console.log("New user created:", user);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
    return;
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body>");
    res.write("<h1>User List</h1>");
    res.write("<ul>");
    users.forEach((user) => res.write(`<li>${user}</li>`));
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.statusCode = 404;
  res.write("<html>");
  res.write("<head><title>404</title></head>");
  res.write("<body><h1>Page Not Found</h1></body>");
  res.write("</html>");
  return res.end();
};

module.exports = requestHandler;
