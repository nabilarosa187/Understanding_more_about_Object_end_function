function track(target) {
const changes = [];

const proxy = new Proxy(target, {
    set(obj, prop, value) {
    const existed = Object.prototype.hasOwnProperty.call(obj, prop);
    changes.push({
        type: existed ? "update" : "add",
        property: prop,
        previousValue: existed ? obj[prop] : undefined,
        newValue: value,
    });
    obj[prop] = value;
    return true;
    },
    deleteProperty(obj, prop) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        changes.push({
        type: "delete",
        property: prop,
        previousValue: obj[prop],
        newValue: undefined,
        });
    }
    return delete obj[prop];
    },
});

return { proxy, changes };
}

const { proxy: user, changes } = track({ name: "Sari", age: 20 });

user.city = "Bandung";
user.age = 21;
delete user.name;

console.log(changes);
console.log("Current object:", user);