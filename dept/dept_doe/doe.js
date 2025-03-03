// Function to get ID from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get asset ID from URL
const assetId = getQueryParam("id");

if (assetId) {
  // Find asset in DOE asset list
  const asset = doe_ast.find((item) => item.id === parseInt(assetId));

  if (asset) {
    document.getElementById("ast_name").innerHTML = `Name: ${asset.name}`;
    document.getElementById("ast_price").innerHTML = `Price: ${asset.price}`;
  } else {
    document.getElementById("ast_name").innerHTML = "Asset not found";
    document.getElementById("ast_price").innerHTML = "";
  }
} else {
  document.getElementById("ast_name").innerHTML = "No ID provided";
  document.getElementById("ast_price").innerHTML = "";
}

