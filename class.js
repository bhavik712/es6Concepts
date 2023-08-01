class Students {
    constructor(name, physicsMarks,chemistryMarks, mathsMarks){
        this.name = name;
        this.physicsMarks = physicsMarks;
        this.chemistryMarks = chemistryMarks;
        this.mathsMarks = mathsMarks;
    }

    showSummary(){
        console.log(`${this.name} marks sumary:
        physics = ${this.physicsMarks}
        chemistry = ${this.chemistryMarks}
        Maths = ${this.mathsMarks}`);
    }
    getPercentage(){
        return (this.physicsMarks + this.chemistryMarks + this.mathsMarks)/3;
    }
}

const student1 = new Students('Bhavik',96,84,96);
student1.showSummary();
console.log(student1.getPercentage());