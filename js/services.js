document.addEventListener('DOMContentLoaded', function() {
  // Portfolio images data
  const portfolioItems = [
    { 
      id: 1, 
      category: 'web', 
      title: 'E-commerce Platform', 
      description: 'Custom online store with payment integration',
      image: 'web-ecommerce'
    },
    { 
      id: 2, 
      category: 'mobile', 
      title: 'Fitness App', 
      description: 'Cross-platform workout tracking application',
      image: 'mobile-fitness'
    },
    { 
      id: 3, 
      category: 'cloud', 
      title: 'Enterprise Migration', 
      description: 'Legacy system to cloud infrastructure',
      image: 'cloud-migration'
    },
    { 
      id: 4, 
      category: 'ai', 
      title: 'Chatbot Solution', 
      description: 'AI-powered customer support automation',
      image: 'ai-chatbot'
    },
    { 
      id: 5, 
      category: 'web', 
      title: 'Corporate Website', 
      description: 'Responsive redesign for global brand',
      image: 'web-corporate'
    },
    { 
      id: 6, 
      category: 'mobile', 
      title: 'Banking App', 
      description: 'Secure mobile banking experience',
      image: 'mobile-banking'
    },
    { 
      id: 7, 
      category: 'cloud', 
      title: 'Data Warehouse', 
      description: 'Scalable analytics infrastructure',
      image: 'cloud-data'
    },
    { 
      id: 8, 
      category: 'ai', 
      title: 'Predictive Analytics', 
      description: 'Machine learning for sales forecasting',
      image: 'ai-analytics'
    },
    { 
      id: 9, 
      category: 'web', 
      title: 'CMS Implementation', 
      description: 'Headless content management system',
      image: 'web-cms'
    },
    { 
      id: 10, 
      category: 'mobile', 
      title: 'Social Network', 
      description: 'Community building platform',
      image: 'mobile-social'
    },
    { 
      id: 11, 
      category: 'cloud', 
      title: 'Serverless Architecture', 
      description: 'Cost-optimized cloud solution',
      image: 'cloud-serverless'
    },
    { 
      id: 12, 
      category: 'ai', 
      title: 'Image Recognition', 
      description: 'Computer vision for retail analytics',
      image: 'ai-vision'
    }
  ];

  // Render portfolio items
  const portfolioGrid = document.querySelector('.portfolio-grid');
  
  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = `portfolio-item ${item.category}`;
    portfolioItem.dataset.category = item.category;
    
    portfolioItem.innerHTML = `
      <img src="https://source.unsplash.com/random/600x400/?${item.image}" alt="${item.title}">
      <div class="portfolio-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    
    portfolioGrid.appendChild(portfolioItem);
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.dataset.filter;
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});