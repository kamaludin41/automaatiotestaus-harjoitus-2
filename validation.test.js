import { test } from "node:test";

import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");
  assert.strictEqual(result, true);
});
test("validateEmail hylkää sähköpostiosoitteen ilman domainia", () => {
  const result = validateEmail("@test.");
  assert.strictEqual(result, false);
});

test("validateEmail hylkää sähköpostiosoitteen ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");
  assert.strictEqual(result, false);
});

test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");
  assert.strictEqual(result, false);
});
