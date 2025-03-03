const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get("id");

if (targetId) {
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof did_ast !== "undefined") {
      const foundItem = did_ast.find((item) => item.id === targetId);

      if (foundItem) {
        // document.querySelector('#img').innerHTML =
        document.querySelector("#img").innerHTML = foundItem.assets_src;
        document.querySelector("#ast_name").innerHTML = foundItem.name;
        document.querySelector("#ast_price").innerHTML = foundItem.price;
      } else {
        console.log(`Item with ID ${targetId} not found.`);
      }
    } else {
      console.error("did_ast is not defined. Make sure did_ast.js is loaded.");
    }
  });
  
} else {
  console.log("No ID found in URL.");
}
