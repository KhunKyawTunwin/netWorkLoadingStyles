const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name_ = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `
        <img src="./mac.jpg" alt="" />
  `;

  title.innerHTML = ` How is yourself goals in 5 Years.`;
  excerpt.innerHTML = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      nesciunt natus rem quaerat`;

  profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
  `;

  name_.innerHTML = "Mr John";
  date.innerHTML = "June 08, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
