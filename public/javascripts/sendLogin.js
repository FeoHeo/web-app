function triggerLogin() {
   let loginName = document.getElementById('username').value;
   let loginPass = document.getElementById('password').value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if( this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response)[0];
            console.log(data.userName);
        }
    };
    xhttp.open("POST", "login", true);
    xhttp.setRequestHeader("Content-type" , "application/json");
    xhttp.send(JSON.stringify({
        username: loginName,
        password: loginPass
    }));
}