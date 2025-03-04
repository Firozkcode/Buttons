const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// API to get project folders inside the "Projects" directory
app.get("/projects", (req, res) => {
    const projectsPath = path.join(__dirname, "Projects");

    fs.readdir(projectsPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Error reading Projects directory" });
        }

        const projects = files
            .filter(file => file.isDirectory()) // Get only directories
            .map(file => file.name); // Extract folder names

        res.json(projects);
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
