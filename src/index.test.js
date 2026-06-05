// src/index.test.js
test('sanity check', () => {
  expect(1 + 1).toBe(2);
});

test('health response shape is correct', () => {
  const response = {
    status: "ok",
    service: "GDCI BANK HRMS Assistant",
    version: "1.0.2",
    ready: true
  };
  expect(response.status).toBe("ok");
  expect(response.ready).toBe(true);
});