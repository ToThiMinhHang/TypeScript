class Student{
    fullName: string
    constructor( public firstName: string, public middleInitial: string, public lassName: string){
        this.fullName = firstName +" "+ middleInitial+" "+lassName;
    }
}
interface Persion{
    firstName: string;
    lassName: string;
}
function greeter(persion: Persion) {
    return "Hello," + persion.firstName + " "+persion.lassName;
}
 const user = new Student("Hang","Minh","To");
 console.log(greeter(user));