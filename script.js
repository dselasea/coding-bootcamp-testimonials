const img = document.querySelector(".profile-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const desc = document.getElementById("desc");
const name = document.querySelector(".name");
const role = document.querySelector(".role");

const testimonial = [
  {
    img: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    description: `"I’ve been interested in coding for a while but never taken the
        jump, until now. I couldn’t recommend this course enough. I’m now in
        the job of my dreams and so excited about the future."`,
  },
  {
    img: "./images/image-john.jpg",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    description: `"If you want to lay the best
    foundation possible I’d recommend taking this course. The depth the
    instructors go into is incredible. I now feel so confident about starting up
    as a professional developer."`,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  let currentItem = 0;

  function showPerson(item) {
    let person = testimonial[currentItem];
    img.src = person.img;
    desc.textContent = person.description;
    name.textContent = person.name;
    role.textContent = person.role;
  }

  prev.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = testimonial.length - 1;
    }
    showPerson(currentItem);
  });
  next.addEventListener("click", () => {
    currentItem++;
    if (currentItem > testimonial.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
});
