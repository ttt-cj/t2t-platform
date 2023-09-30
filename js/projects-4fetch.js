const projectList = document.querySelector('.project-list');

fetch(API_URL + '?action=get-4projects')
.then(response => response.json())
  .then(data => {

  })


console.log('hooo hooo');