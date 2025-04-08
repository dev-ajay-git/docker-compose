fetch('http://backend:3000/api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('api-response').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('api-response').textContent = 'Failed to fetch data';
  });
