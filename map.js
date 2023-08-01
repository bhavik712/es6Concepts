const students = [
    {
        id:1,
        name:'Bhavik',
        age:17,
        percentage: 90
    },
    {
        id:2,
        name:'Chirag',
        age:21,
        percentage: 70
    },
    {
        id:4,
        name:'Rahul',
        age:15,
        percentage: 80
    }
]

const showGrades = ({percentage}) =>{
    

    if(percentage >= 90 && percentage < 100){
        return 'First';
    }else if(percentage >=80 && percentage < 90){
        return 'Second';
    }else if(percentage >=70 && percentage < 80){
        return 'Third';
    }else if(percentage >= 60 && percentage < 70){
        return 'Fourth';
    }else{
        return 'Fail';
    }

}

console.log(students.map(showGrades));

