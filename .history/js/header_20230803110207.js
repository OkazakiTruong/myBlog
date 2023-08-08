const openHeaderNav = () => {
  let headerNav = document.querySelector(".header-nav");
  let headerLayout = document.querySelector(".header-layout");

  headerNav.classList.add("js-open-header-nav");
  headerLayout.classList.add("js-open-header-nav");
};
const closeHeaderNav = () => {
  let headerNav = document.querySelector(".header-nav");
  let headerLayout = document.querySelector(".header-layout");
  headerNav.classList.remove("js-open-header-nav");
  headerLayout.classList.remove("js-open-header-nav");
};
