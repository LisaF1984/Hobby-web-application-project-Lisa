`use strict`;

console.log("Hello i'm connected");

// fetch(url-to-fetch-from).then((response) => {response.json().then(data => {
//         console.log(data);
//     });
// });

fetch(`http://localhost:9082/getAll`).then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});