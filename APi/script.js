const RandomApi = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => userApi(data.results))
}
const userApi = (user) => {
    const id = document.getElementById('users-container');
    for (const users of user) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('user')
        newDiv.innerHTML = `<h2>Name:${users.name.first}</h2>
       <h3>lastName:${users.name.last}</h3>
       <h3>email:${users.email}</h3>
       <h3>location:${users.location.city} </h3>
       <h3>country : ${users.location.country}</h3>
       `
        id.appendChild(newDiv);

    }
}
RandomApi();