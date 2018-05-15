var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lassName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lassName = lassName;
        this.fullName = firstName + " " + middleInitial + " " + lassName;
    }
    return Student;
}());
function greeter(persion) {
    return "Hello," + persion.firstName + " " + persion.lassName;
}
var user = new Student("Hang", "Minh", "To");
console.log(greeter(user));
