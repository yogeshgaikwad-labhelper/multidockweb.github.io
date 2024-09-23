const downloadButtons = document.querySelectorAll('.download-button');
const downloadCountFile = "downloads/download_count.txt";

function incrementDownloadCount(button) {
  fetch(downloadCountFile)
    .then(response => response.text())
    .then(count => {
      const newCount = parseInt(count, 10) + 1;
      return fetch(downloadCountFile, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: newCount.toString()
      });
    })
    .then(response => {
      console.log(`Download count for ${button.textContent} updated successfully!`);
    })
    .catch(error => {
      console.error("Error updating download count:", error);
    });
}

downloadButtons.forEach(button => {
  button.addEventListener("click", () => incrementDownloadCount(button));
});