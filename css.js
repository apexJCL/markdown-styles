document.addEventListener("DOMContentLoaded", function (event) {
    switch (window.location.hash.substr(1)) {
        case "sugar":
            changeCSS('sugar/sugar.css');
            break;
        case "sugar-dark":
            changeCSS('sugar-dark/sugar-dark.css');
            break;
    }
});

var cssPath = "/build/";

function changeCSS(cssFile, cssLinkIndex) {
    cssFile = cssPath + cssFile;
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}