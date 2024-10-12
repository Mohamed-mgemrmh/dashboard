document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-shape");
  const mainHeadingP = document.querySelector(".small");
  const mainHeadingH = document.querySelector(".large");
  const nameContainer = document.querySelector(".name");
  const menu = document.querySelector(".side-menu");
  const boxesContainer = document.querySelector(".responsive-container");
  const mainText = document.querySelector(".main-text");
  const userInfo = document.querySelector(".user-info");
  const menuImg = document.querySelector(".opened");
  const contentContainer = document.querySelectorAll(".content");
  const arrows = document.querySelectorAll(".arrow");
  const menuItems = document.querySelectorAll(".menu-item");

  if (window.innerWidth < 767) {
    setTimeout(() => {
      const table = document.querySelector("div.dataTables_wrapper");
      menu.classList.toggle("open");
      boxesContainer.classList.toggle("open-box");
      mainText.classList.toggle("open-box");
      mainText.classList.toggle("remove-margin-text");
      mainText.classList.toggle("main-text-table");
      userInfo.classList.toggle("visible");
      menuImg.classList.toggle("closed");
      nameContainer.classList.toggle("name-clicked");
      mainHeadingP.classList.toggle("small-clicked");
      mainHeadingH.classList.toggle("large-clicked");
      if (table) {
        table.classList.toggle("closed");
      }
      contentContainer.forEach((container) => {
        container.classList.toggle("remove-justify");
      });
      arrows.forEach((arrow) => {
        arrow.classList.toggle("visible");
      });
      menuItems.forEach((item) => {
        item.classList.toggle("visible");
      });
    }, 0);
  }
  menuBtn.onclick = () => {
    const table = document.querySelector("div.dataTables_wrapper");
    menu.classList.toggle("open");
    boxesContainer.classList.toggle("open-box");
    mainText.classList.toggle("open-box");
    mainText.classList.toggle("remove-margin-text");
    mainText.classList.toggle("main-text-table");
    userInfo.classList.toggle("visible");
    menuImg.classList.toggle("closed");
    nameContainer.classList.toggle("name-clicked");
    mainHeadingP.classList.toggle("small-clicked");
    mainHeadingH.classList.toggle("large-clicked");
    if (table) {
      table.classList.toggle("closed");
    }
    contentContainer.forEach((container) => {
      container.classList.toggle("remove-justify");
    });
    arrows.forEach((arrow) => {
      arrow.classList.toggle("visible");
    });
    menuItems.forEach((item) => {
      item.classList.toggle("visible");
    });
  };

  const preloader = document.querySelector(".preloader");
  preloader.classList.add("none");

  const user = document.querySelector(".user");
  const logoutPage = document.querySelector(".logout");

  user.onclick = () => {
    logoutPage.classList.toggle("visible");
  };

  const listContainers = document.querySelectorAll(".container-link");
  let openContainer = null;

  listContainers.forEach((container) => {
    container.addEventListener("click", (click) => {
      const clickedElement = click.currentTarget;
      const arrowStyle = clickedElement.querySelector(".arrow").style;

      if (openContainer && openContainer !== clickedElement) {
        openContainer.querySelectorAll(".drop-down-li").forEach((li) => {
          li.classList.remove("clicked");
        });
        openContainer.querySelector(".arrow").style.transform = "rotate(0deg)";
      }

      const dropDownItems = clickedElement.querySelectorAll(".drop-down-li");
      if (menu.classList.contains("open")) {
        dropDownItems.forEach((li) => {
          li.classList.toggle("clicked");
        });
      }

      arrowStyle.transform = dropDownItems[0].classList.contains("clicked")
        ? "rotate(90deg)"
        : "rotate(0deg)";

      openContainer = dropDownItems[0].classList.contains("clicked")
        ? clickedElement
        : null;
    });
  });

});
