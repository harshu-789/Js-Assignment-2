
let button, outputDiv;

document.addEventListener("DOMContentLoaded", function(){
    button = document.getElementById("callbackButton");
    outputDiv = document.getElementById("output"); 


    button.addEventListener("click", function(){
        outputDiv.textContent = "Waiting for 5 sec..";
        executeCallBack();
    });
});

function executeCallBack(){
    fetch("https://dummyjson.com/posts")
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(post => {
            const postElement = document.createElement("p");
            postElement.textContent = post.title;
            outputDiv.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
   });
}