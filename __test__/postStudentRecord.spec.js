const request = require("supertest");
const app = require("../app");

describe('post student record', () => {
  test("It should store student data.", async () => {
    const response = await request(app).post('/student').send({
      "rollNumber": 4,
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

    expect(response.body.success).toEqual(true);
    expect(response.body.status).toHaveProperty("_id");
    expect(response.statusCode).toBe(200);
  });


})