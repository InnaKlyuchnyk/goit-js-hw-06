const itemsEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", itemsEl.length);
itemsEl.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  const listLength = element.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", listLength);
});
