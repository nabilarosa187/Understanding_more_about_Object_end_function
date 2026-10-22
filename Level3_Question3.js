function mergeSettings(defaults, user) {
return {
    ...defaults,
    ...user,
    notifications: {
        ...defaults.notifications,
        ...(user.notifications || {}),
        },
    };
}

const defaults = {
theme: "light",
language: "en",
notifications: { email: true, sms: false, push: true },
};
const userSettings = {
theme: "dark",
notifications: { sms: true },
};

const defaultsCopy = JSON.stringify(defaults);
const userCopy = JSON.stringify(userSettings);

const merged = mergeSettings(defaults, userSettings);
console.log("Merged:", JSON.stringify(merged, null, 2));

console.log("Defaults unchanged?", JSON.stringify(defaults) === defaultsCopy);
console.log("User unchanged?", JSON.stringify(userSettings) === userCopy);

console.log("--- User has no notifications ---");
console.log(mergeSettings(defaults, { language: "id" }));