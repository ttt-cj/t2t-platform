const projectList = document.querySelector('.project-list');

fetch(API_URL + '?action=get-4projects')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      // If the response is not JSON, handle it as needed (e.g., display an error message).
      throw new Error('Response is not JSON');
    }
  })
  .then(data => {
    // Clear the project list before adding new cards
    projectList.innerHTML = '';

    // Loop through each project and create a card for each one
    data.records.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');

      // Create project title
      const title = document.createElement('h3');
      title.classList.add('project-title');
      title.textContent = project.Title;
      card.appendChild(title);

      // Create project details
      const details = document.createElement('div');
      details.classList.add('project-details');

      // Create project detail items
      const detailItems = [
        { icon: 'fas fa-building', label: 'Company', value: project.Company },
        { icon: 'fas fa-bullseye', label: 'Goal', value: project.Goal },
        { icon: 'fas fa-users', label: 'Minimum Team', value: project.Minimum_Team },
        { icon: 'far fa-clock', label: 'Duration', value: project.Duration }
      ];

      // Loop through each detail item and create a span element
      detailItems.forEach(item => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = `<i class="${item.icon}"></i>&nbsp; ${item.label}:`;
        div.appendChild(span);

        const value = document.createElement('p');
        value.innerHTML = item.value;
        div.appendChild(value);
        details.appendChild(div);
      });

      card.appendChild(details);

      // Create bid button
      const bidButton = document.createElement('button');
      bidButton.classList.add('header-button');
      bidButton.textContent = 'Apply for the project';
      card.appendChild(bidButton);

      // Add the card to the project list
      projectList.appendChild(card);
    });
  })
  .catch(error => {
    console.error(error);
    // Handle errors here (e.g., display an error message).
  });
console.log("test2");
