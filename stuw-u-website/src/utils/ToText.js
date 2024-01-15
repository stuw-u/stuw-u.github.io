export default function ToText(str) {
    let elem = document.createElement("div");
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.innerHTML = str;
    return elem.innerText;
}