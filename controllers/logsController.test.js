const request = require("supertest");
const app = require("../app.js")

const logs = require("./logsController");
let logsArray = require("../models/log.js");

describe("logs", () => {
  let originalLogsArray = logsArray;

  beforeEach(() => {
    logsArray = originalLogsArray;
  });

  describe("/", () => {
    it("sends the logs array", async () => {
      const response = await request(app).get("/logs");

      expect(JSON.parse(response.text)).toEqual(logsArray);
    });
  });

  describe("/:arrayIndex", () => {
    describe("GET", () => {
      it("sends the corresponding log when a valid index is given", async () => {
        const response = await request(app).get("/logs/1");

        expect(JSON.parse(response.text)).toEqual(logsArray[1]);
      });

      it("sends a redirect when an invalid index is given", async () => {
        const response = await request(app).get("/logs/9001");

        expect(response.redirect).toBe(true);
      });
    });

    describe("PUT", () => {
      it("replaces the index in the logs array", async () => {
        const newBook = logsArray[3];

        await new Promise(resolve => {
          request(app)
            .put("/logs/1")
            .send(newBook)
            .set("Accept", "application/json")
            .expect("headers.location", "/logs/1")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[1]).toEqual(newBook);
      });
    });

    describe("POST", () => {
      it("creates at the index in the logs array", async () => {
        const newBook = logsArray[3];

        await new Promise(resolve => {
          request(app)
            .post("/logs/1")
            .send(newBook)
            .set("Accept", "application/json")
            .expect("headers.location", "/logs")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[1]).toEqual(newBook);
      });
    });

    describe("DELETE", () => {
      it("creates at the index in the logs array", async () => {
        const nextBook = logsArray[2];
        const originalLength = logsArray.length;
        await new Promise(resolve => {
          request(app)
            .delete("/logs/1")
            .set("Accept", "application/json")
            .expect("headers.location", "/logs")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[1]).toEqual(nextBook);
        expect(logsArray).toHaveLength(originalLength - 1);
      });
    });
  });
});
