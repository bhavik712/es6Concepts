const students = [
    {
        name:'Rohit',
        rollNo:45,
        marks:{
            physics:99,
            chemistry:88,
            maths:97
        }
    },
    {
        name:'Rahul',
        rollNo:1,
        marks:{
            physics:99,
            chemistry:97,
            maths:98
        }
    },
    {
        name:'Vir',
        rollNo:18,
        marks:{
            physics:40,
            chemistry:50,
            maths:33
        }
    }

    
]

// let [firstEle] = students;

// const { marks: {physics}} = firstEle;
// console.log(physics);


// const mediumStudent = students.filter(({ marks: {physics}})=> physics !== 99);
// // console.log(mediumStudent);
// for (let student of mediumStudent){
//     const {name} = student;
//     console.log(name);

// }

// // console.log(name);

// // students.forEach(({name,rollNo})=>console.log(`${name} --> ${rollNo}`));

for (const student of students){
    const {marks:{physics, chemistry, maths}} = student;
    console.log(`physics = ${physics} -- chemistry = ${chemistry} -- maths = ${maths}`);
}



 
    let mediumStudent = [];
    for (const student of students){
        const {marks: {physics}} = student;
        if(physics < 90){
            mediumStudent = [...mediumStudent, student];
        }
    }
console.log(mediumStudent);

const score = [96,84,96];

if(score.includes(100)){
    console.log('he scored century');
}else{
    console.log('no century');
}