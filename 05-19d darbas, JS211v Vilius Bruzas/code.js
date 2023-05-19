let arr = [];
for(let i = 1; i <32; i++){
    let item = document.getElementById("a" + i);
    arr.push(item.innerText);
    item.innerText = localStorage.getItem("ID: " + i);
}
console.log(arr);
function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
}

function drop_handler(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/plain");
    let theClone = document.getElementById(data);
    let copy = ev.target;
    let a = theClone.innerText;
    let b = copy.innerText;
    theClone.innerText = b;
    copy.innerText = a;

    arr = [];
    for(let i = 1; i <32; i++){
        let item = document.getElementById("a" + i);
        arr.push(item.innerText);
        localStorage.setItem("ID: " + i, item.innerText);
    }
}

let theTruth = [];

for (const [key, value] of Object.entries(localStorage)) {
    theTruth.push((` - ${value}`));
}

function updateClipboard() {
    navigator.clipboard.writeText(theTruth).then(() => {
    /* clipboard successfully set */
    }, () => {
    /* clipboard write failed */
    });
}
