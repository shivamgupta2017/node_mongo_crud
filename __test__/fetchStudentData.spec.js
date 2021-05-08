const request = require("supertest");
const app = require("../app");

describe('get student specific record', ()=> {
  test("It should get specific student data.", async () => {


    const response = await request(app).post('/student').send({
      "rollNumber":2,
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


    const getResponse = await request(app).get(`/student/${response.body.status._id}`)
    expect(getResponse.body.success).toEqual(true);
    expect(getResponse.body.records.length).toBe(1);
    expect(getResponse.statusCode).toBe(200);
  });


})