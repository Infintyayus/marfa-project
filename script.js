// script.js
const posts = [
    { title: "Understanding JavaScript", category: "tech" },
    { title: "10 Tips for a Healthy Lifestyle", category: "lifestyle" },
    { title: "Starting Your Own Business", category: "business" },
    { title: "React vs Angular: A Comparison", category: "tech" },
    { title: "Work-Life Balance Tips", category: "lifestyle" }
];

function filterResults() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const filterValue = document.getElementById("filter").value;

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery);
        const matchesFilter = filterValue === "all" || post.category === filterValue;
        return matchesSearch && matchesFilter;
    });

    displayResults(filteredPosts);
}

function displayResults(posts) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = posts.length 
        ? posts.map(post => `
            <div class="result-item">
                <h3>${post.title}</h3>
                <p>Category: ${post.category}</p>
            </div>
        `).join("")
        : "<p>No results found.</p>";
}

// Initialize with all results
displayResults(posts);
