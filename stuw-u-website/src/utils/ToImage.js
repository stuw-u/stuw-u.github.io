export default function ToImage(str) {
    let elem = document.createElement("div");
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.innerHTML = str;
    var imgQuery = elem.querySelector('img');
    var output = '';
    if(imgQuery) {
        output = imgQuery.src
    }
    document.body.removeChild(elem);
        return output;
}