const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "BARRERSE";
    const employeeInstance = new Engineer("Sebas", 2, "sebastianbarrera@live.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "BARRERSE";
    const employeeInstance = new Engineer("Sebas", 2, "sebastianbarrera@live.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Sebas", 2, "sebastianbarrera@live.com", "BARRERSE");
    expect(employeeInstance.getRole()).toBe(returnValue);
});