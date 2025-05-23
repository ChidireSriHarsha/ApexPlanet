// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with Modern JavaScript",
    date: "May 10, 2025",
    excerpt: "Learn the basics of modern JavaScript, including ES6+ features and best practices.",
    content: `<p>JavaScript has evolved tremendously over the years. In this post, we'll explore modern features like arrow functions, promises, async/await, and modules.</p>
              <p>Understanding these concepts will help you write cleaner and more efficient code.</p>`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    title: "How to Build Responsive Websites",
    date: "April 28, 2025",
    excerpt: "Responsive design is key to ensuring your site looks great on any device.",
    content: `<p>We'll cover CSS media queries, flexible grid layouts, and techniques to make your site adapt seamlessly to different screen sizes.</p>`,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    title: "Tips for Effective CSS Animations",
    date: "March 15, 2025",
    excerpt: "Make your UI lively with smooth and engaging CSS animations.",
    content: `<p>Animations can greatly improve user experience when used wisely. Learn keyframe animations, transitions, and performance tips.</p>`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
  }
];

// DOM elements
const postsContainer = document.getElementById('posts');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

// Function to create post cards
function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'post-card';
  card.tabIndex = 0; // make focusable

  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="post-image" />
    <div class="post-content">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-date">${post.date}</p>
      <p class="post-excerpt">${post.excerpt}</p>
      <button class="read-more" aria-label="Read more about ${post.title}">Read More</button>
    </div>
  `;

  // Open modal on click or keyboard
  card.querySelector('.read-more').addEventListener('click', () => openModal(post));
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') openModal(post);
  });

  return card;
}

// Load posts dynamically
function loadPosts() {
  posts.forEach(post => {
    const postCard = createPostCard(post);
    postsContainer.appendChild(postCard);
  });
}

// Open modal with post content
function openModal(post) {
  modalTitle.textContent = post.title;
  modalImg.src = post.image;
  modalImg.alt = post.title;
  modalBody.innerHTML = post.content;
  modal.classList.add('visible');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // disable background scroll
}

// Close modal
function closeModal() {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // enable scroll
}

// Modal close button
modalClose.addEventListener('click', closeModal);

// Close modal on clicking outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || window.pageYOffset;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= scrollPos + 100 &&
      section.offsetTop + section.offsetHeight > scrollPos + 100
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Initialize
loadPosts();
