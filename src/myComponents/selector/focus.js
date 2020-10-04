export default {
  bind(el) {
    const selectorInput = el.querySelector(".selector-input"),
      input = selectorInput.querySelector(".input"),
      placeHolder = selectorInput.querySelector(".placeholder"),
      icon = selectorInput.querySelector("use");

    const selectMenu = el.querySelector(".selector-menu");

    input.addEventListener("focus", function() {
      placeHolder.style.display = "none";
      icon.setAttribute("xlink:href", "#search");
      selectMenu.style.display = "block";
    });

    input.addEventListener("blur", function() {
      icon.setAttribute("xlink:href", "#down");

      setTimeout(() => {
        if (this.value.length === 0) {
          placeHolder.style.display = "block";
        }
        selectMenu.style.display = "none";
      }, 100);
    });
  },
};

export const itemData = [
  { id: 1, value: "vue2", text: "Vue2.x" },
  { id: 2, value: "vue3", text: "Vue3.0" },
  { id: 3, value: "react", text: "ReactJS" },
  { id: 4, value: "react-hooks", text: "React Hooks" },
];
