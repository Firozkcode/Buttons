document.addEventListener("DOMContentLoaded", async () => {
    const projectContainer = document.querySelector(".project-container");

    try {
        const response = await fetch("/projects"); // Fetch project folders from the backend
        const projects = await response.json(); // Parse folder names

        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";

            // Create title
            const title = document.createElement("h2");
            title.className = "title";
            title.textContent = project;

            // Create image
            const img = document.createElement("img");
            img.src = `Projects/${project}/image.png`;
            img.alt = "Project demo";

            // If image not found, use default demo.png
            img.onerror = () => {
                img.src = "demo.png";
            };

            // Create link
            const link = document.createElement("a");
            link.href = `Projects/${project}/index.html`;
            link.innerHTML = `<ion-icon name="link-outline"></ion-icon>`;

            // Append elements
            projectCard.appendChild(title);
            projectCard.appendChild(img);
            projectCard.appendChild(link);
            projectContainer.appendChild(projectCard);
        });

    } catch (error) {
        console.error("Error fetching projects:", error);
    }
});
