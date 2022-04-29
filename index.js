const express = require("express");

const server = express();

const PORT = 3000;

server.listen(PORT, () => {
  console.log("server Listening....");
});

const students = {
  dao: {
    name: "Dao",
    interests: ["tacos", "bananas"],
    city: "Sac Town",
  },
  nikko: {
    name: "Nikko",
    interests: ["bananas"],
    city: "Detroit",
  },
  will: {
    name: "will",
    interests: ["camarro", "frontier", "wrangler"],
    city: "Detroit",
  },
  mannie: {
    name: "Mannie",
    interests: ["soccer"],
    city: "Georgia",
  },
};

server.get("/mike", (req, res) => {
  res.send("<h1>Hi Michael</h1>");
});

server.get("/students", (req, res) => {
  const { name } = req.query;
  if (name) {
    const student = students[name.toLowerCase()];
    if (student) {
      return res.send(student);
    }
    return res.status(404).send(filteredStudents);
  }
});

server.get("/students/name/:name", (req, res) => {
  const { name } = req.params;
  if (name) {
    const student = students[name.toLowerCase()];
    if (student) {
      return res.send(student);
    }
    return res.status(404).send(filteredStudents);
  }
});

server.get("/students/city/:city", (req, res) => {
  const { city } = req.params;
  console.log(city);
  const returnObj = [];
  if (city) {
    const student = Object.values(students);
    student.forEach((x) => {
      if (x.city.toLowerCase() === city.toLowerCase()) {
        returnObj.push(x);
      }
    });
    return res.send(returnObj);
  }

  return res.status(404).send(filteredStudents);
});

server.get("/students/search", (req, res) => {
  const { junk } = req.query;
  const interestArray = [];
  if (junk) {
    const student = Object.values(students);
    student.forEach((x) => {
      if (x.interests.includes(junk.toLowerCase())) {
        interestArray.push(x);
      }
    });
    if (interestArray) {
      return res.send(interestArray);
    }
    return res.status(404).send(filteredStudents);
  }
  return res.send("");
});
