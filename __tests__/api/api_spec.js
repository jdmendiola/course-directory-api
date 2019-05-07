const frisby = require('frisby');

it ('When I make a request to the GET route with the correct credentials, the corresponding user document is returned', function () {
    return frisby
    .setup({
        request: {
            headers: {
                'Authorization': 'Basic ' + Buffer.from("jdm@jdm.com:vbnm").toString('base64')
            }
        }
    })
    .get('http://localhost:5000/api/users')
    .expect('status', 200);
});