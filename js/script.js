const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let maleStudents = [];
let femaleStudents = [];

function boyAndGirl() {
   maleStudents.push(students[0], students[1], students[4]);
   femaleStudents.push(students[2], students[3], students[5]);
   return;
}
boyAndGirl();

let pairsStudents = [];

function pairStudents() {
   for (let i = 0; i < femaleStudents.length; i++) {
      pairsStudents.push([maleStudents[i], femaleStudents[i]]);
   }
   return;
}
pairStudents();
console.log(pairsStudents);

let pairsAndTopic = [];

function pairAndTopic() {
   for (let i = 0; i < pairsStudents.length; i++) {
      pairsAndTopic.push([maleStudents[i] + ' і ' + femaleStudents[i], themes[i]]);
   }
   return;
}
pairAndTopic();
console.log(pairsAndTopic);

let ratingsStudents = [];
function ratingStudents() {
   for (let i = 0; i < students.length; i++) {
      ratingsStudents.push([students[i], marks[i]]);
   }
   return;
}
ratingStudents();
console.log(ratingsStudents)

let pairsRating = [];
function pairRating() {
   for (let i = 0; i < 3; i++) {
      pairsRating.push([maleStudents[i] + ' і ' + femaleStudents[i], themes[i], (Math.floor(Math.random() * 4 + 2))])
   }
   return;
}
pairRating();
console.log(pairsRating);
