const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "UM";
    const employeeInstance = new Intern("Sebas", 2, "sebastianbarrera@live.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "UM";
    const employeeInstance = new Intern("Sebas", 2, "sebastianbarrera@live.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Sebas", 2, "sebastianbarrea@live.com", "UM");
    expect(employeeInstance.getRole()).toBe(returnValue);
});