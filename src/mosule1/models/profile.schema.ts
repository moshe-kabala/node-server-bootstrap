export const profileSchema = () => ({
  type: "object",
  properties: {
    name: { type: "string" },
    age: { age: "number", minimum: 0, maximum: 99 }
  }
});
