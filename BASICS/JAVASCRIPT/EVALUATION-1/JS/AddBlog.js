const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const blogs = JSON.parse(localStorage.getItem("blogs"));

function CheckLogin() {
  if (!loggedInUser) {
    window.location.href = "Login.html";
  }
}

function AddBlog(event) {
  const title = document.getElementById("title").value.trim();
  const image = document.getElementById("image").files[0];
  const content = document.getElementById("content").value.trim();
  const error = document.getElementById("error-message");

  const blogLength = blogs ? blogs.length + 1 : 1;

  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
    const newBlog = {
      id: blogLength,
      title: title,
      image: reader.result,
      content: content,
      comments: [],
    };

    if (!blogs) {
      localStorage.setItem("blogs", JSON.stringify([newBlog]));
    } else {
      blogs.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
    window.location.href = "Dashboard.html";
  });

}

CheckLogin();

document.getElementById("add-blog-form").addEventListener("submit", (event) => {
  event.preventDefault();
  AddBlog();
});
