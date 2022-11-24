module.exports = (req, res) => {
    const data = {
        "success": true,
        "data": {
            "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM3ZjdhYzctYTE3YS00NDQwLTgzM2QtOWM0ZTgxNzJkMjQ2IiwiZmlyc3ROYW1lIjoib2JhZmVtaSIsImxhc3ROYW1lIjoib2RlcmFudGkiLCJlbWFpbCI6Im9iYWZlbWkub2RlcmFudGlAaW5ub3ZhbnRpY3MuY29tIiwicGFzc3dvcmQiOm51bGwsInN0YWZmSWQiOiIyMDIyMDEwMTAwMSIsInJvbGUiOiJzdXBlcmFkbWluIiwiYnJhbmNoIjoiaGVhZG9mZmljZSIsInZpcnR1YWxBY2NvdW50IjpudWxsLCJtb2JpbGUiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsIm5ld1VzZXIiOmZhbHNlLCJjcmVhdGVkQnkiOiI2YTM0ZWI2ZC01MWUzLTQ3ODctYjZjYS1lMTcyMmM2MjRjNmMiLCJpc0RlbGV0ZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIyLTA5LTIwVDIyOjQzOjQ2LjczOVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTI0VDEyOjU2OjU1LjgwMVoifSwiaWF0IjoxNjY4NzE0NDk5fQ.ATqOTl_Euib6cFgVYPTSkFbJuFSNDehhk33g2ohhmEc",
            "user": {
                "id": "5c7f7ac7-a17a-4440-833d-9c4e8172d246",
                "firstName": "FIRSTNAME",
                "lastName": "LASTNAME",
                "email": "EMAIL",
                "password": null,
                "staffId": "20220101001",
                "role": (req.body.email === 'adejumoahmad4life@gmail.com') ? "branchmanager" : "agent",
                "branch": "headoffice",
                "virtualAccount": null,
                "mobile": null,
                "status": "active",
                "newUser": false,
                "createdBy": "6a34eb6d-51e3-4787-b6ca-e1722c624c6c",
                "isDeleted": false,
                "createdAt": "2022-09-20T22:43:46.739Z",
                "updatedAt": "2022-10-24T12:56:55.801Z"
            }
        },
        "message": "Logged In"
    };
    console.log(data);
    res.status(200).send(data);
}