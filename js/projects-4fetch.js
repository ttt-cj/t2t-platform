const projectList = document.querySelector(".projects-section");

// Make HTTP GET request to retrieve project data
fetch(API_URL + "?action=get-4Projects")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Check if the response contains an error message
    if (data.error) {
      console.error("Error:", data.error);
      // Handle the error appropriately, e.g., display an error message on the page.
    } else {
      projectList.innerHTML = "";
      // Loop through each project and create a list item
      data.records.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.classList.add("project-list-item");

        // Create project title
        const title = document.createElement("div");
        title.classList.add("project-title");
        title.textContent = project.Title;
        listItem.appendChild(title);

        // Create project details
        const details = document.createElement("div");
        details.classList.add("project-details");

        // Create project detail items
        const detailItems = [
          { icon: "fas fa-building", label: "Company", value: project.Company },
          { icon: "fas fa-bullseye", label: "Goal", value: project.Goal },
          { icon: "fas fa-tasks", label: "Tasks", value: project.Tasks },
          {
            icon: "fas fa-code",
            label: "Technology",
            value: project.Technology,
          },
          {
            icon: "fas fa-users",
            label: "Minimum Team",
            value: project.Minimum_Team,
          },
          {
            icon: "far fa-calendar-alt",
            label: "Date Added",
            value: project.Date_Added,
          },
          { icon: "far fa-clock", label: "Duration", value: project.Duration },
          {
            icon: "fas fa-link",
            label: "Details Link",
            value: `<a href="${project.Details_Link}">View</a>`,
          },
        ];

        // Loop through each detail item and create a span element
        detailItems.forEach((item) => {
          const div = document.createElement("div");
          const span = document.createElement("span");
          span.innerHTML = `<i class="${item.icon}"></i>&nbsp; ${item.label}:`;
          div.appendChild(span);

          const value = document.createElement("p");
          value.innerHTML = item.value;
          div.appendChild(value);
          details.appendChild(div);
        });

        listItem.appendChild(details);

        // Create bid button
        const bidButton = document.createElement("button");
        bidButton.classList.add("header-button");
        bidButton.textContent = "Apply for the project";
        listItem.appendChild(bidButton);

        // Add list item to project list
        projectList.appendChild(listItem);
      });
    }
  })
  .catch((error) => console.error(error));
