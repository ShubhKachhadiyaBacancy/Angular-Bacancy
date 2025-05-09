const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const blogs = JSON.parse(localStorage.getItem("blogs"));

function CheckLogin() {
  if (!loggedInUser) {
    window.location.href = "Login.html";
  }
}

function DisplayUserName() {
  document.getElementById("username").innerText = loggedInUser.username;
}

function DisplayBlogs() {
  const blogList = document.getElementById("blog-list");

  if (!blogs) {
    blogList.innerHTML = "<h1>No Blogs Found.</h1>";
    return;
  } else {
    blogs.forEach((blog) => {
      const blogElement = document.createElement("div");
      blogElement.className = "blog";
      blogElement.innerHTML = `
          <h2>${blog.title}</h2>
          <img src="${blog.image}" alt="${blog.title}">
          <p>${blog.content}</p>  
          <div class="comment-count">Comments: ${blog.comments.length}</div>
          <div class="add-comment">
            <textarea placeholder="Add your comment..." rows="5"></textarea>
            <button onclick="AddComment(event, ${
              blog.id
            })">Post Comment</button>
          </div>
          <div class="comments">
            <h3>Comments</h3>
            ${blog.comments
              .map(
                (c, index) =>
                  `<p>
                    <span class="blog-username">${c.username}:</span> 
                    <span class="comment-content">${c.content}</span>
                    <button class="edit-btn" onclick="EditComment(event, ${blog.id}, ${index})">Edit</button>
                    <button class="delete-btn" onclick="DeleteComment(${blog.id}, ${index})">Delete</button>
                  </p>`
              )
              .join("")}
          </div>
        `;
      blogList.appendChild(blogElement);
    });
  }
}

function AddComment(event, blogId) {
  const commentText = event.target.previousElementSibling.value.trim();
  if (!commentText) {
    alert("Comment cannot be empty!");
    return;
  }

  const blog = blogs.find((b) => b.id === blogId);
  blog.comments.push({ username: loggedInUser.username, content: commentText });

  localStorage.setItem("blogs", JSON.stringify(blogs));
  window.location.reload();
}

function EditComment(event, blogId, commentIndex) {
  const commentElement = event.target.parentElement;
  const contentSpan = commentElement.querySelector(".comment-content");
  const editButton = event.target;

  if (editButton.textContent === "Edit") {
    const input = document.createElement("input");
    input.type = "text";
    input.value = contentSpan.textContent;
    input.classList.add("edit-input");
    contentSpan.replaceWith(input);
    editButton.textContent = "Update";
  } else {
    const input = commentElement.querySelector(".edit-input");
    const updatedText = input.value.trim();
    if (!updatedText) {
      alert("Comment cannot be empty!");
      return;
    }
    const blog = blogs.find((b) => b.id === blogId);
    blog.comments[commentIndex].content = updatedText;

    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.reload();
  }
}

function DeleteComment(blogId, commentIndex) {
  console.log(blogId,commentIndex);
  blogs[blogId-1].comments.splice(commentIndex,1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  window.location.reload();
}

function Logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "Login.html";
}

CheckLogin();
DisplayUserName();
DisplayBlogs();

document.getElementById("logout-btn").addEventListener("click", (event) => {
  event.preventDefault();
  Logout();
});

document.getElementById("add-blog").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "AddBlog.html";
});
