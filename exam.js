let form = document.forms.form
let arr = JSON.parse(localStorage.getItem("names")) || [];
let ul = document.getElementById('ul')

form.add.onclick = function (e){
    e.preventDefault()

let split = form.input.value.split("=");
let li = document.createElement("li");
li.innerText = split[0] + '=' + split[1]

ul.appendChild(li);
document.body.append(ul);

    arr.push({name: split[0], value: split[1]});
    localStorage.setItem("names", JSON.stringify(arr));

    form.input.value = ''

    }

form.sortName.onclick = function (e) {
    e.preventDefault()
    ul.innerText = ''
    arr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        if (a.name === b.name) {
            return 0;
        }
    })
    for (let arrElement of arr) {
        let li = document.createElement("li");
        li.innerText = arrElement.name + '=' + arrElement.value
        ul.appendChild(li);
    }
}


form.sortValue.onclick = function (e) {
    e.preventDefault()
    ul.innerText = ''
    arr.sort((a, b) => {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        if (a.value === b.value) {
            return 0;
        }
    })
    for (let arrElement of arr) {
        let li = document.createElement("li");
        li.innerText = arrElement.name + '=' + arrElement.value
        ul.appendChild(li);
    }
}

form.delete.onclick = function (e){
    e.preventDefault()
    localStorage.clear()
    ul.innerText = ''
}
for (let arrElement of arr) {
    let li = document.createElement("li");
    li.innerText = arrElement.name + '=' + arrElement.value
    ul.appendChild(li);
}














