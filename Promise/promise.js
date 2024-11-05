
function fetchData() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Loading...";
  
 
    const fetchPosts = new Promise((resolve, reject) => {
      
      const timeout = setTimeout(() => {
        reject("Operation timed out.");
      }, 5000);
  
  
      fetch("https://dummyjson.com/posts")
        .then(response => {
          clearTimeout(timeout); 
          return response.json();
        })
        .then(data => resolve(data.posts))
        .catch(error => reject("Failed to fetch data."));
    });
  
    fetchPosts
      .then(posts => {
        resultDiv.innerHTML = posts
          .map(post => `<p><strong>${post.title}</strong><br>${post.body}</p>`)
          .join("");
      })
      .catch(error => {
        resultDiv.textContent = error;
      });
  }
  