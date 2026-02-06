const apiUrl = "https://newsdata.io/api/1/latest?apikey=pub_7c21229030f5421ca09d64e1ab91aded&country=in&language=en";

const newsContainer = document.getElementById("news-container");

fetch(apiUrl)
.then(response => response.json())
.then(data => {
if (!data.results || data.results.length === 0) {
newsContainer.innerHTML = "<p>No news available</p>";
return;
}

data.results.forEach(news => {
const card = document.createElement("div");
card.className = "news-card";

card.innerHTML = `
<img src="${news.image_url || 'https://via.placeholder.com/400x200'}" alt="News Image">
<div class="news-content">
<h3>${news.title}</h3>
<p>${news.description || "No description available."}</p>
<div class="news-meta">
<span>${news.source_id || "Unknown Source"}</span> |
<span>${news.pubDate || ""}</span>
</div>
</div>
`;

newsContainer.appendChild(card);
});
})
.catch(error => {
console.error("Error fetching news:", error);
newsContainer.innerHTML = "<p>Failed to load news.</p>";
});
