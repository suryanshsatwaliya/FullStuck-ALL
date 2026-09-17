const students = [
    { id: 1, name: "John" , address: "123 Main St"},
    { id: 2, name: "Jane" , address: "456 Oak Ave"},
    { id: 3, name: "Bob" , address: "789 Pine Rd"},
    { id: 4, name: "Alice" , address: "101 Elm St"},
    { id: 5, name: "Charlie" , address: "202 Maple Dr"},
];


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is a home page");
});

app.get("/api/student", (req, res) => {

    if(!students) {
        return res.status(404).json({ message: "Students not found" });
    }
    res.status(200).json(students); 
});

app.get("/api/student/:id", (req, res) => {

    const {id} = req.params;
    const student = students.find((std) => {
        return std.id == id;
    });

    if(!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

app.post("/api/student", (req, res) => {
    res.send("Student Created");
});

app.put("/api/student", (req, res) => {
    res.send("Student Updated");
});

app.delete("/api/student", (req, res) => {
    res.send("Student Deleted");

    const {id} = req.params;
    const student = students.filter((std) => {
        return std.id == id;
    });

    


});

app.listen(3000, () => {
    console.log("Server is running");
});