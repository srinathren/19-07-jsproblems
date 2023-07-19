let students =[{
    "name" : "shane",
    "usn" : "rex",
    "marks" : 95,
    "fees" : 15000
}
,
{
    "name" : "shyam",
    "usn" : "shy",
    "marks" : 90,
    "fees" : 15000
},
{
"name" : "nithish",
"usn" : "nit",
"marks" : 85,
"fees" : 20000
}
]

username = prompt("Enter the Username: ")
const foundStudent = students.find((student) => student.usn === username);

console.log(foundStudent.name)