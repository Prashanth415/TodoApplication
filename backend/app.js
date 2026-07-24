const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Todo Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});