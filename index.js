
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        name, email
      })
    })
    
    .then(resp => resp.json())
    .then(json => {
      document.body.innerHTML = json.id;
    })
    .catch(error => {
        document.body.innerHTML = error.message;
      });
    
};

 