const container = document.getElementById("container");
const btn = document.getElementById("btn");
let ArrayImg = [];
let ElementImg = [];

const GetImgUrl = (e) => {
  let value = e.target.classList.contains("img");
  if (value) {
    let url_img = e.target.getAttribute("src");
    ArrayImg.push(url_img);
    ElementImg.push(e.target);
    ElementImg[0].classList.add("border_img");
  }
};

const ChangeImg = () => {
  if (ArrayImg.length > 1) {
    ElementImg[0].setAttribute("src", ArrayImg[1]);
    ElementImg[1].setAttribute("src", ArrayImg[0]);
    ElementImg[0].classList.remove("border_img");
    ElementImg = [];
    ArrayImg = [];
  }
};

const ramdon = () => {
  for (let index = container.children.length; index >= 0; index--) {
    container.appendChild(container.children[(Math.random() * index) | 0]);
  }
};

container.addEventListener("click", (e) => {
  GetImgUrl(e);
  ChangeImg();
});

btn.addEventListener("click", () => {
  ramdon();
});
