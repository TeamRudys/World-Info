function copyText(btn) {
  const text = document.getElementById("copyText").innerText;

  navigator.clipboard.writeText(text).then(() => {
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 2000);
  });
}