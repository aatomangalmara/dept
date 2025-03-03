// URL se ID fetch karna
const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get("id");

if (targetId) {
  if (targetId.startsWith("did_") || targetId.startsWith("did/")) {
    window.location.href = `dept/dept_did/did.html?id=${targetId}`;
  } else if (targetId.startsWith("doe_") || targetId.startsWith("doe/")) {
    window.location.href = `dept/dept_deo/doe.html?id=${targetId}`;
  } else {
    console.error("Invalid ID format.");
    window.location.href = "error.html"; // Invalid ID ke liye error page
  }
} else {
  console.log("No ID found in URL.");
}
