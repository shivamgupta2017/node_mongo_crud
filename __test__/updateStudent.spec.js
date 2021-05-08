const request = require("supertest");
const app = require("../app");

describe('put student record', () => {
  test("It should update student data.", async () => {
    const response = await request(app).post('/student').send({
      "rollNumber": 5,
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
    const updateResponse = await request(app).put(`/student`).send(getResponse.body.records[0])
    expect(response.body.success).toEqual(true);

  });

})