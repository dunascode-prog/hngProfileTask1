const app = require("express")();
const dotenv = require("dotenv");
const morgan = require("morgan");
const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

app.use(morgan("dev"));
dotenv.config(".env");
app.get("/me", async (req, res) => {
  const response = await fetch(process.env.API);
  const data = await response.json();
  if (!response.ok) {
    return res.status(500).json({
      status: "error",
    });
  }
  res.status(200).json({
    status: "success",
    user: {
      email: "dunamiseyi2019@gmail.com",
      name: "Omodara Seyitan Dunamis",
      stack: "Nodejs/Express",
    },
    timestamp: new Date().toISOString(),
    fact: data.fact,
  });
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000....");
});
