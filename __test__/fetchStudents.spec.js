const request = require("supertest");
const app = require("../app");

describe('get student record', ()=> {
  test("It should get student data.", async () => {

    await request(app).post('/student').send({
      "rollNumber":3,
      "studentFirstName": "shivam",
      "studentLastName": "gupta",
      "class": 5,
      "parentContactNumber": 9993330227,
      "address": [{
        "state": "MP",
        "district": "shajapur",
        "pin": 465110,
        "landmark": "abc",
        "houseName": "abc",
        "houseNumber": "123"
      }]
  })
    const getResponse = await request(app).get('/student')
    expect(getResponse.body.success).toEqual(true);
    expect(getResponse.statusCode).toBe(200);
  });


})