
async function fetchPosts() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Loading...";
  
    try {
      const controller = new AbortController();
      const signal = controller.signal;
  
   
      const timeout = setTimeout(() => {
        controller.abort();
      }, 5000);
  
      const response = await fetch("https://dummyjson.com/posts", { signal });
      
      clearTimeout(timeout);
  
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const data = await response.json();
      resultDiv.innerHTML = data.posts
        .map(post => `<p><strong>${post.title}</strong><br>${post.body}</p>`)
        .join("");
    } catch (error) {
      if (error.name === "AbortError") {
        resultDiv.textContent = "Error: Operation timed out.";
      } else {
        resultDiv.textContent = `Error: ${error.message}`;
      }
    }
  }
  