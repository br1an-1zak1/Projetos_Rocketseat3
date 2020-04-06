const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("Incident", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Deve criar um novo incident para uma ONG", async () => {
    
    const response = await request(app)
      .post("/incidents")
      .send({
        title: "Passarinhos sem ninho",
        description: "Necessário novos gravetos",
        value: "50",
      })
      .set("authorization", 'af227ee6');

    expect(response.body).toHaveProperty("id");
  });

});
