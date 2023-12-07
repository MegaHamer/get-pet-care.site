function login() {
    let formdata = new FormData(document.getElementById('form-login'));
    console.log(formdata);
    var requestOptions = {
        method: 'POST',
        body: formdata
    };

    fetch("https://pets.сделай.site/api/login", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}