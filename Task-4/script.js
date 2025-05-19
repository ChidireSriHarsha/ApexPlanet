// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior:'smooth'});
  });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple cart handler
function addToCart(item){
  alert(`${item} added to cart!`);
}

// Fake email send (demo)
function sendEmail(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks, ${name}! We'll get back to you soon.`);
  e.target.reset();
}
