import slug from "./slug";

test("add words without blank and without uppercase letter", () => {
  expect(slug(" Anchor blue ")).toBe("anchor-blue");
});
test("add words without blank and without uppercase letter", () => {
  expect(slug("Le petit chat gris")).toBe("le-petit-chat-gris");
});
test("add words without blank and without uppercase letter", () => {
  expect(slug("LE GROS CHIEN JAUNE ")).toBe("le-gros-chien-jaune");
});
test("add words without blank and without uppercase letter", () => {
  expect(slug("Le rouge-gorge Chantant")).toBe("le-rouge-gorge-chantant");
});
