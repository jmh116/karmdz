window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('list');
    console.log(name);

    var arr = name.split("\n");

    function getRandomElements(list) {
    return [...list].sort(() => Math.random() > 0.5 ? 1 : -1)
    }

        var list = document.createElement("ol");
        for (let i of getRandomElements(arr)) {
            let item = document.createElement("li");
            item.innerHTML = i;
            list.appendChild(item);
        }

        document.getElementById("demoA").appendChild(list);
})

function random(){
    window.location.reload()
}