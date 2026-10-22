function validate(object, schema) {
const errors = [];

for (const prop in schema) {
    const rules = schema[prop];
    const value = object[prop];
    const missing = value === undefined || value === null;

    if (missing) {
    if (rules.required) {
        errors.push({ property: prop, reason: "is required" });
    }
    continue;
    }

    if (rules.type && typeof value !== rules.type) {
    errors.push({
        property: prop,
        reason: `must be of type ${rules.type}, got ${typeof value}`,
    });
    continue;
    }

    if (rules.min !== undefined && rules.type === "number" && value < rules.min) {
    errors.push({ property: prop, reason: `must be at least ${rules.min}, got ${value}` });
    }
}

return errors;
}

const schema = {
name: { required: true, type: "string" },
age: { required: true, type: "number", min: 18 },
email: { required: false, type: "string" },
};

console.log("--- Valid ---");
console.log(validate({ name: "Rina", age: 21, email: "rina@mail.com" }, schema));

console.log("--- Invalid (missing name, age too low) ---");
console.log(validate({ age: 15 }, schema));

console.log("--- Invalid (wrong types) ---");
console.log(validate({ name: 123, age: "twenty", email: 5 }, schema));