class Students{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school ="Siraj Uddin Sarker Vidyaniketan"
    }
}
const student1 = new Students('201-010-811', "Al Amin");
const student2 = new Students(202, "Osman");
console.log(student1,student2);