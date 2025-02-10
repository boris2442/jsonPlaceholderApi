const fetchUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    let container = document.querySelector(".user-container");
    container.innerHTML = "";

    users.forEach(user => {
        let div = document.createElement("div");
        div.classList.add("user-card")
        div.innerHTML = `
<h1 class="text-class">id: ${user.id}</h1>
<p class="text-class">name: ${user.name}</p>
<p class="text-class">email: ${user.email}</p>
<p class="text-class">adress: ${user.address.city}</p>
<p class="text-class">phone:${user.phone}</p>
<p class="text-class">geolocalisation:latitude:${user.address.geo.lat}</p>
<p class="text-class">geolocalisation:longitude:${user.address.geo.lng}</p>
<p class="text-class">website:${user.website}</p>`
        container.appendChild(div)

    })

}
fetchUser()