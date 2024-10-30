document.addEventListener("DOMContentLoaded", function() {
    const Parts = ["co", "jfscientific", "info"];
    const blob = `${Parts[2]}@${Parts[1]}.${Parts[0]}.uk`;
    document.getElementById("mrblobby").innerHTML = `<p>${blob}</p>`;
});