import { test, expect } from "@playwright/test";

test("GET HTTPS method", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  const responseJson = await response.json();
  console.log(responseJson);
  expect(response.status()).toBe(200);
  //   const responseHeader = response.headers();
  //   expect(responseHeader.connection).toBe("keep-aliv");
  expect(responseJson.support.text).toContain("playbook");
});

test("POST HTTPS method", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: { name: "Gaurav", job: "QA Engineer" },
  });

  const responseJson = await response.json();
  console.log(responseJson);
  expect(response.status()).toBe(201);
});
