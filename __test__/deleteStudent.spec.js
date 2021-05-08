const request = require("supertest");
const app = require("../app");

describe('delete student record', () => {
  test("It should delete student data.", async () => {

    const response = await request(app).post('/student').send({
      "rollNumber":1,
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


    const deleteResponse = await request(app).delete(`/student/${response.body.status._id}`)
    expect(deleteResponse.body.success).toEqual(true);
    expect(deleteResponse.statusCode).toBe(200);
  });


})