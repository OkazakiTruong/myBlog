const openHeaderNav = () => {
  let headerNav = document.querySelector(".header-nav");
  let headerLayout = document.querySelector(".header-nav");

  headerNav.classList.add("js-open-header-nav");
};
const closeHeaderNav = () => {
  let headerNav = document.querySelector(".header-nav");
  headerNav.classList.remove("js-open-header-nav");
};
