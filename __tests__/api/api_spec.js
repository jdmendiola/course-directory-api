const frisby = require('frisby');

it ('When I make a request to the GET /api/users route with the correct credentials, the corresponding user document is returned', function () {
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

it ('When I make a request to the GET /api/users route with the invalid credentials, a 401 status error is returned', function () {
    return frisby
    .setup({
        request: {
            headers: {
                'Authorization': 'Basic ' + Buffer.from("wrong@wrong.com:wrong").toString('base64')
            }
        }
    })
    .get('http://localhost:5000/api/users')
    .expect('status', 401);
});