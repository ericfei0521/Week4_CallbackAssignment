// Assignment02
function ajax(src, callback) {
    // your code here
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            callback(data);
        }
    };
    xhr.open("GET", src);
    xhr.send();
}
function render(data) {
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or
    // something alike
    for (let i = 0; i < data.length; i++) {
        var node = document.createElement('TR')

        var list = document.createElement('TD')
        var name = document.createTextNode(`${data[i].name}`)
        list.appendChild(name);

        var list2 = document.createElement('TD')
        var price = document.createTextNode(`NTD: ${data[i].price}`)
        list2.appendChild(price);

        var list3 = document.createElement('TD')
        var info = document.createTextNode(`${data[i].description}`)
        list3.appendChild(info);

        node.appendChild(list);
        node.appendChild(list2);
        node.appendChild(list3);

        document.getElementById('table').appendChild(node);
    };
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page