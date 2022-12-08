const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 17;
    const employeeInstance = new Manager("Sebas", 17, "sebastianbarrera@live.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 17;
    const employeeInstance = new Manager("Sebas", 17, "sebastianbarrera@live.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Sebas", 17, "sebastianbarrera@live.com", 17);
    expect(employeeInstance.getRole()).toBe(returnValue);
});