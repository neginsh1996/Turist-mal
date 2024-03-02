const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuIcon.classList.toggle('active');
});






/* وقتی روی هر دکمه از منو کلیک شد باعث بسته شدن پنجره میشود */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      navbar.classList.remove("show");
      menuIcon.classList.remove('active');

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      let position = element.offsetTop - 62;

      window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
      });
  });
});
/* end ---*/