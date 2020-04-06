const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  //Utilizado para destruir a conexão após todos os testes daqui serem feitos
  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      email: "contato@contato.com",
      whatsapp: "12346789101",
      city: "Santa Ernestina",
      uf: "SP",
      nome: "teste joi",
    });
    console.log(response.body)
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
    
  });

});
