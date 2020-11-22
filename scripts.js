const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");
const image = document.querySelector("#phone-image");

const getStyle = (element, style) => 
  window
    .getComputedStyle(element)
      .getPropertyValue(style);

const lightMode = {
  bg: getStyle(html, "--bg"),
  bgSecundary: getStyle(html, "--bg-secundary"),
  bgGroup: getStyle(html, "bg-group"),
  borderColor: getStyle(html, "border-color"),
  colorLinks: getStyle(html, "color-links"),
  colorTextButton: getStyle(html, "color-text-button"),
  colorTexts: getStyle(html, "color-text"),
};

const darkMode = {
  bg: "#333333",
  bgSecundary: "#BDC3C7",
  bgGroup: "#434343",
  borderColor: "#7f8C8D",
  colorLinks: "#3664FF",
  colorTextButton: "#95A5A6",
  colorTexts: "#B5B5B5",
};

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map(key => {
    html.style.setProperty(transformKey(key), colors[key]);
  });
};

const phoneLight = "./images/instagram-phone.png";
const phoneDark = "./images/instagram-phone-dark.png";

const changePhone = (phoneMode) => {
  image.setAttribute("src", phoneMode);
};

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode);
    changePhone(phoneDark);
  } else {
    changeColors(lightMode);
    changePhone(phoneLight);
  }
});