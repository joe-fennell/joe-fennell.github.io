// Function to reorder articles based on the query parameter and provided order
function reorderArticles() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromLink = urlParams.get('from'); // Get the 'from' query parameter

  // Define the order of article IDs based on the link used
  const orders = {
    'productdevelopment': ['pd_art', 'au_art', 'tra_art', 'ss_art'], // Default order for link 1
    'spacesector': ['ss_art', 'pd_art', 'au_art', 'tra_art'], // Custom order for link 2
    'training': ['tra_art', 'pd_art', 'ss_art', 'au_art'],  // Custom order for link 3
    'aerialuav': ['au_art', 'pd_art', 'ss_art', 'tra_art']  // Custom order for link 3
  };

  // Get the articles container
  const articlesContainer = document.querySelector('.articles');
  // Get the appropriate order or fallback to default
  const articleOrder = orders[fromLink] || orders['productdevelopment'];

  // Reorder the articles based on the provided order
  articleOrder.forEach(articleId => {
    const article = document.querySelector(`.article-fixed#${articleId}`);
    if (article) {
      articlesContainer.appendChild(article);
      // articlesContainer.appendChild('<br>');
    }
  });
}

window.onload = reorderArticles;
