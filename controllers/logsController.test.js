const request = require("supertest");

const logs = require("../app.js");
let logsArray = require("../models/log.js");

describe("logs", () => {
  let originalLogsArray = logsArray;

  beforeEach(() => {
    logsArray = originalLogsArray;
  });

  describe("/logs", () => {
    describe("GET", () => {
      it("sends the logs array", async () => {
        const response = await request(logs).get("/logs");

        expect(JSON.parse(response.text)).toEqual(logsArray);
      });
    });

    describe("POST", () => {
      it("adds new log to end of logs array", async () => {
        const newLastArrayPosition = logsArray.length;
        const newLog = {
          captainName: "Picard",
          title: "Stars",
          post: "Today I contemplated that there sure are a lot of stars in the sky",
          mistakesWereMadeToday: true,
          daysSinceLastCrisis: 10,
        };

        await new Promise((resolve) => {
          request(logs)
            .post(`/logs`)
            .send(newLog)
            .set("Accept", "application/json")
            .expect("headers.location", "/logs")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[newLastArrayPosition]).toEqual(newLog);
      });
    });
  });

  describe("/logs/:arrayIndex", () => {
    describe("GET", () => {
      it("sends the corresponding log when a valid index is given", async () => {
        const response = await request(logs).get("/logs/1");

        expect(JSON.parse(response.text)).toEqual(logsArray[1]);
      });

      it("sends a redirect when an invalid index is given", async () => {
        const response = await request(logs).get("/logs/9001");

        expect(response.redirect).toBe(true);
      });
    });

    describe("PUT", () => {
      it("replaces the index in the logs array", async () => {
        const updatedLog = logsArray[0];

        await new Promise((resolve) => {
          request(logs)
            .put("/logs/0")
            .send(updatedLog)
            .set("Accept", "application/json")
            .expect("headers.location", "/logs/")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[0]).toEqual(updatedLog);
      });
    });

    describe("DELETE", () => {
      it("deletes at the index in the logs array", async () => {
        const logToDelete = logsArray[2];
        const originalLength = logsArray.length;
        await new Promise((resolve) => {
          request(logs)
            .delete("/logs/2")
            .set("Accept", "application/json")
            .expect("headers.location", "/logs")
            .expect("statusCode", 303)
            .end(resolve);
        });

        expect(logsArray[2]).toEqual(originalLogsArray[2]);
        expect(logsArray).toHaveLength(originalLength - 1);
      });
    });
  });
});
