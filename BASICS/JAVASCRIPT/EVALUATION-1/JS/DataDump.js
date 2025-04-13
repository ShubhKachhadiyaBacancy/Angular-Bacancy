document.getElementById("add-data-btn").addEventListener("click", (event) => {
  const usersData = [
    {
      id: 1,
      username: "Shubh Kachhadiya",
      email: "shubhkachhadiya04@gmail.com",
      password: "Shubh@423",
    },
    {
      id: 2,
      username: "Vasu Kansagara",
      email: "vasu@gmail.com",
      password: "Vasu@123",
    },
  ];

  const blogsData = [
    {
      id: 1,
      title: "Mastering JavaScript",
      image: "../ASSETS/photo1.jpg",
      content:
        "Learn the advanced concepts of JavaScript to become a pro developer.",
      comments: [
        {
          username: "Shubh Kachhadiya",
          content: "This article is really insightful. Thanks for sharing!",
        },
        {
          username: "Vasu Kansagara",
          content: "Loved the explanation on promises and async/await.",
        },
      ],
    },
    {
      id: 2,
      title: "The Beauty of CSS Grid",
      image: "../ASSETS/photo2.jpg",
      content:
        "Explore the power of CSS Grid for building responsive layouts effortlessly.",
      comments: [
        {
          username: "Shubh Kachhadiya",
          content: "CSS Grid is indeed a game-changer for layout design.",
        },
        {
          username: "Vasu Kansagara",
          content: "Great examples. Made it very easy to understand.",
        },
      ],
    },
    {
      id: 3,
      title: "The Beauty of CSS Grid",
      image: "../ASSETS/photo2.jpg",
      content:
        "Explore the power of CSS Grid for building responsive layouts effortlessly.",
      comments: [
        {
          username: "Shubh Kachhadiya",
          content: "CSS Grid is indeed a game-changer for layout design.",
        },
      ],
    },
  ];

  if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify(usersData));
  }

  if(!localStorage.getItem("blogs")){
    localStorage.setItem("blogs", JSON.stringify(blogsData));
  }

  alert("Dummy Data Added.");
});
