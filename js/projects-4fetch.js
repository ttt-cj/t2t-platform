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
    // Handle the JSON data here
  })
  .catch(error => {
    console.error(error);
    // Handle errors here (e.g., display an error message).
  });

console.log('hooo hooo');