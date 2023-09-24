const form = document.querySelector(".add-project-form");
const hiddenSection = document.querySelector(".hidden-section");
const submitButton = form.querySelector(".submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    // Disable submit button
    submitButton.disabled = true;
  // Get form data
  const formData = new FormData(form);

  // Convert form data to JSON
  const json = JSON.stringify(Object.fromEntries(formData.entries()));
  console.log(json);

  // Make HTTP POST request to save project
  fetch(
    "https://script.google.com/macros/s/AKfycbz3B7T_MbVn8-ouQaieSRQ3jeSfGxajJ6nqRdw_zMxXFCBgMTQPmp9UvNzOF6uQEpsq/exec?action=add-project",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: json,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Project saved:", data);
      hiddenSection.style.display = "block";
    })
    .catch((error) => {
      console.error("Error saving project:", error);
      // TODO: Handle error
    })
    .finally(() => {
      // Re-enable submit button
      submitButton.disabled = false;
    });
});
