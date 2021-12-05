function fetchPromise(){
    fetch("https://api.plos.org/111")
    .then(response => {
        if (response.status == 200) {
            return response.json()
        } else {
            console.log("Failure, status code" + response.status);
        }
    })
    .then(data => {
        let underGradData = data["my_degrees"]["undergraduate"];
        let gradData = data["my_degrees"]["graduate"];
        document.getElementById("data").innerHTML = parseData(underGradData) + parseData(gradData)
    })
    .catch(error => {
        console.log(error);
    });
}

function parseData(data){
    return "<table><tr><td>School</td></tr><tr><td>" + result["school"] + "</td></tr>" +
        "<tr><td>Major</td></tr><tr><td>" + result["major"] + "</td></tr>" +
        "<tr><td>Type</td></tr><tr><td>" + result["type"] + "</td></tr>" +
        "<tr><td>Year</td></tr><tr><td>" + result["year"] + "</td></tr></table>"
}

