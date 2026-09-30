"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("GET HTTPS method", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");
    const responseJson = await response.json();
    console.log(responseJson);
    (0, test_1.expect)(response.status()).toBe(200);
    //   const responseHeader = response.headers();
    //   expect(responseHeader.connection).toBe("keep-aliv");
    (0, test_1.expect)(responseJson.support.text).toContain("playbook");
});
(0, test_1.test)("POST HTTPS method", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: { name: "Gaurav", job: "QA Engineer" },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    (0, test_1.expect)(response.status()).toBe(201);
});
