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

it ('When I make a request to the GET /api/courses/:courseId route with the invalid credentials, a 401 status error is returned', function () {
    return frisby
    .setup({
        request: {
            headers: {
                'Authorization': 'Basic ' + Buffer.from("jdm@jdm.com:vbnmm").toString('base64')
            }
        }
    })
    .get('http://localhost:5000/api/courses/57029ed4795118be119cc43d')
    .expect('status', 401);
});