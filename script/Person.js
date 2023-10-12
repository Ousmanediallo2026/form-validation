class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    myLearning() {
        console.log(`${this.firstName + this.lastName} I am learning Objected Oriented Programming`)
    }


    
}
const ousmane = new Person("Ousmane", "Diallo")

ousmane.myLearning();