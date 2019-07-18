import fetch from 'node-fetch';



export const postUsers = (data) => {
  fetch("http://localhost:9000/users/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  // .then(res => res.text())
  // .then(response => console.log(JSON.stringify(response, " <<<<<<<<<<<<<<<<<<<<")))
}

export const getWeather = (data, id, setWeather) => {
  fetch("http://localhost:9000/postdata/", {
    method: 'POST',
    body: JSON.stringify({ ...data, ...id }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => setWeather(res));
}

// export const getWeather = (setWeather) => {
//   fetch("http://localhost:9000/postdata/")
//     .then(res => res.json())
//     .then(res => setWeather(res));
// }

