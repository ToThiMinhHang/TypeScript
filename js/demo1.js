function greeter(persion) {
    return "Hello," + persion.firstName + " " + persion.lastName;
}
var user = { firstName: "Hang", lastName: "Minh" };
console.log(greeter(user));
