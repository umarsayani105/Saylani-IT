// // Collect user information using prompt()

// const fullName = prompt("Enter your Full Name:");
// const age = prompt("Enter your Age:");
// const city = prompt("Enter your City:");
// const profession = prompt("Enter your Profession:");
// const email = prompt("Enter your Email:");
// const phoneNumber = prompt("Enter your Phone Number:");

// // Create an object

// const user = {
//     fullName,
//     age,
//     city,
//     profession,
//     email,
//     phoneNumber
// };

// // Get existing users from localStorage

// let users = JSON.parse(localStorage.getItem("users")) || [];

// // Store object inside array

// users.push(user);

// // Save array into localStorage

// localStorage.setItem("users", JSON.stringify(users));

// // Access the div

// const userDataDiv = document.getElementById("userData");

// // Display users using forEach()

// users.forEach(function(user) {
//     userDataDiv.innerHTML += `
//         <div class="user-card">
//             <h2>${user.fullName}</h2>
//             <p><strong>Age:</strong> ${user.age}</p>
//             <p><strong>City:</strong> ${user.city}</p>
//             <p><strong>Profession:</strong> ${user.profession}</p>
//             <p><strong>Email:</strong> ${user.email}</p>
//             <p><strong>Phone:</strong> ${user.phoneNumber}</p>
//         </div>
//     `;
// });