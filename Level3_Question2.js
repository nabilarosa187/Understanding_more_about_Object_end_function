function groupByMajor(student) {
    return student.reduce((groups, student) => {
        if (!groups[student.major]) groups[student.major] = [];
        groups[student.major].push(student);
        return groups;
    }, {});
}

const students = [
    {name: "Nabila", major: "informatics" },
    {name: "Rosa", major: "Design" },
    {name: "citra", major: "informatics" },
    {name: "Dewi", major: "Accounting" },
    {name: "Eko", major: "Design" },
];

console.log(JSON.stringify(groupByMajor(students), null, 2));