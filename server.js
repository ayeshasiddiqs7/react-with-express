const express = require("express");

const app = express();

app.get("/express_backend", (req, res) => {
  const usersFromExpress = [
    { id: 1, firstName: "John", lastName: "Doe", profile: "🧑🏻" },
    { id: 2, firstName: "David", lastName: "Pattinson", profile: "👨🏻" },
    { id: 3, firstName: "Kate", lastName: "Swanson", profile: "👩🏻" },
    { id: 4, firstName: "Bella", lastName: "Dove", profile: "👩🏻‍🦱" },
  ];

  res.send(usersFromExpress);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
