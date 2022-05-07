
function increaseSayYes() {

    var countYes = getCountYes();

    var newValue = Number(countYes) + 1;

    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayYes/count.json"

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }

    var data = Number(newValue);

    xhr.send(data);

    setStartDate();
}

function getCountYes() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayYes/count.json"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.responseText !== null) {
        return xhr.responseText;
    }

    return 0;
}

function increaseSayNo() {
    var countNo = getCountNo();

    var newValue = Number(countNo) + 1;

    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayNo/count.json"

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }

    var data = Number(newValue);

    xhr.send(data);
}

function getCountNo() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/sayNo/count.json"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.responseText !== null) {
        return xhr.responseText;
    }

    return 0;
}

function getStartDate() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/startDate.json"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    return xhr.responseText;
}

function setStartDate() {
    var url = "https://lovingyou-7c992-default-rtdb.asia-southeast1.firebasedatabase.app/startDate.json"

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }

    var data = new Date();

    xhr.send(JSON.stringify(data.getTime()));
}

export { increaseSayNo, increaseSayYes, getStartDate, setStartDate }