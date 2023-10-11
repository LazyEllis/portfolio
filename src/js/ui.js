const deactivateNavLink = () => {
  const activeNavLink = document.querySelector('.nav-link.active');
  activeNavLink.classList.remove('active');
};

const updateNavLink = () => {
  const scrollPosition = window.scrollY;
  const navLinks = document.querySelectorAll('.nav-link');
  const navLinkSections = document.querySelectorAll('.section');

  navLinkSections.forEach((section, i) => {
    const isLastSection = i === navLinkSections.length - 1;

    if (
      (isLastSection &&
        window.innerHeight + scrollPosition >= document.body.offsetHeight) ||
      (section.offsetTop <= scrollPosition &&
        (!isLastSection ||
          window.innerHeight + scrollPosition < document.body.offsetHeight))
    ) {
      deactivateNavLink();
      navLinks[i].classList.add('active');
    }
  });
};

export default updateNavLink;
