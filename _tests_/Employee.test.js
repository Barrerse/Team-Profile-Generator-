const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Sebas";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 17;
    const employeeInstance = new Employee("Sebas", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "sebastianbarrera@live.com";
    const employeeInstance = new Employee("Sebas", 17, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "Sebas";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 17;
    const employeeInstance = new Employee("Sebas", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "sebastianbarrera@live.com";
    const employeeInstance = new Employee("Sebas", 17, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Sebas", 17, "sebastianbarrera@live.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})