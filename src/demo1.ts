interface Persion {
    firstName: string;
    lastName: string;
}
function greeter(persion:Person) {
    return "Hello," + persion.firstName + " " + persion.lastName;
    
}
 let user = { firstName:"Hang" , lastName:"Minh"};
 console.log(greeter(user));