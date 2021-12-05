function fetchPromise(){
    fetch("https://monica-bu.github.io/degree.json")
    .then(response => {
        if (response.status == 200) {
            console.log(response)
            return response.json()
        } else {
            console.log("Failure, status code" + response.status);
        }
    })
    .then(data => {
        console.log(data)
        let underGradData = data["my_degrees"]["undergraduate"];
        let gradData = data["my_degrees"]["graduate"];
        console.log(underGradData)
        console.log(gradData)
        document.getElementById("data").innerHTML = parseData(underGradData) + parseData(gradData)
    })
    .catch(error => {
        console.log(error);
    });
}

function parseData(data){
    return "<table><tr><td>School</td><td>" + data["school"] + "</td></tr>" +
        "<tr><td>Major</td><td>" + data["major"] + "</td></tr>" +
        "<tr><td>Type</td><td>" + data["type"] + "</td></tr>" +
        "<tr><td>Year</td><td>" + data["year"] + "</td></tr></table><br>"
}

