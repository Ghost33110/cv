$(function () {
  const span = document.getElementById("age");

  while (span.firstChild) {
    span.removeChild(span.firstChild);
  }

  const getAge = (date => {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  });

  const gestionNav = (id => {
    document.getElementById("nav" + id + "Link").addEventListener("click",(() => {
      // document.location.href = "#" + id.toLowerCase();
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById("nav" + ("Home" !== id ? id : linkList[1]) + "Item").classList.add("active");
    }));
  });

  const linkList = ["Home", "About", "Skills", "Experience", "Education", "Recommandations"];

  linkList.forEach(item => gestionNav(item));

  span.appendChild(document.createTextNode(getAge(new Date(1992, 09, 29))));
});