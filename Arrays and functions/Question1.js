let students =[
    {
        name: 'Jennifer',
        age: 21,
        course: 'Computer Science'
    },
    {
        name: 'George',
        age: 18,
        course: 'Mechanical Engineering'
    },
    {
        name: 'Adrian',
        age: 24,
        course: 'Mechatronics'
    },
    {
        name: 'June',
        age: 22,
        course: 'IT'
    },
    {
        name: 'Victor',
        age: 27,
        course: 'Computer Science'
    }
]
let sortedStudent = []
for(let student of students){
    sortedStudent.push([student.name, student.age])
}
sortedStudent.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(sortedStudent)