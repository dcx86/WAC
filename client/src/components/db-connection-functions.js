import fetch from 'node-fetch';



export const postUsers = (testObj) => {
  fetch("http://localhost:9000/users/", {
    method: 'POST',
    body: JSON.stringify(testObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    // .then(res => res.text())
    // .then(response => console.log(JSON.stringify(response, " <<<<<<<<<<<<<<<<<<<<")))
}

export const postData = (data) => {
  fetch("http://localhost:9000/postdata/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const callUsers = (setUsers) => {
  fetch("http://localhost:9000/users/")
    .then(res => res.text())
    .then(res => setUsers({ users: res }));
}

