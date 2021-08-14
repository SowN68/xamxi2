const header = document.querySelector("header");
const sectionOne = document.querySelector("#Home");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
const sectionTwo = document.querySelector("#About");

const sectionOneOptions2 = {
      rootMargin: "-200px 0px 0px 0px"
    };
const sectionTwoObserver = new IntersectionObserver(function(
      entriess,
      sectionTwoObserver
    ) {
      entriess.forEach(entrys => {
        if (!entrys.isIntersecting) {
          header.classList.add("nav-scrolled-contact");
        } else {
          header.classList.remove("nav-scrolled-contact");
        }
      });
    },
    sectionOneOptions2);
sectionTwoObserver.observe(sectionTwo);