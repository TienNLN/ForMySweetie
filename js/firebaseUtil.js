
function increaseSayYes() {
    var countYes = getCountYes();

    console.log('countYes' + countYes);

    var newValue = countYes + 1;

    console.log('newvalue: ' + newValue);

    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayYes.json"

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // console.log(xhr.status);
            // console.log(xhr.responseText);
        }
    }

    var data = JSON.stringify({ "count": newValue });

    xhr.send(data);
}

async function getCountYes() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayYes.json"

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Accept', '*/*');

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //         console.log(xhr.status);
    //         // console.log('response: ' + xhr.responseText);
    //     }
    // }

    // xhr.send(null);

    // // await resolveAfter2Seconds();

    // const object = JSON.parse(xhr.responseText, function (key, value) {
    //     if (key === "count") {
    //         console.log('value: ' + value);
    //         return value;
    //     }
    // });

    var test = makeRequest('GET', url);

    console.log(test);

    JSON.parse(test, function (key, value) {
        if (key == "count") {
            return value;
        }
    })
}

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                return resolve(xhr.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

function increaseSayNo() {
    var countNo = getCountNo();

    var newValue = Number(countNo) + 1;

    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayNo.json"

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }

    var data = {
        "count": newValue
    }

    xhr.send(data);
}

function getCountNo() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayNo.json"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    return xhr.responseText;
}

export { getCountNo, getCountYes, increaseSayNo, increaseSayYes }