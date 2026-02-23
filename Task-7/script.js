function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("user-container");
        container.innerHTML = "";

        data.forEach(user => {
            const div = document.createElement("div");
            div.className = "user-card";
            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => {
        alert("Error fetching data!");
    });
}

fetchUsers();
