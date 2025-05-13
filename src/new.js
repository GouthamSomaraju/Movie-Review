const userEmail = "a@gmail.com";

// Find the user's like/dislike object
const userData = data.find(obj => obj[userEmail])?.[userEmail] || {};

// Separate movie titles
const likedTitles = [];
const dislikedTitles = [];

for (const [id, status] of Object.entries(userData)) {
  const movie = movies.find(m => m.id === parseInt(id));
  if (movie) {
    if (status === "like") likedTitles.push(movie.title);
    else if (status === "dislike") dislikedTitles.push(movie.title);
  }
}

console.log("Liked Titles:", likedTitles);
console.log("Disliked Titles:", dislikedTitles);