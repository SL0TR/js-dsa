// HackerLand University has the following grading policy:

// Every student receives a  grade in the inclusive range from 0 to .
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Sample Input

// 73
// 67
// 38
// 33
// Sample Output

// 75
// 67
// 40
// 33

function gradingStudents(grades) {
  const curvedGrades = [];

  grades.forEach((grade) => {
    const projectedMark = (Math.floor(grade / 5) + 1) * 5;
    const difference = projectedMark - grade;

    if (difference < 3 && grade >= 38) {
      curvedGrades.push(projectedMark);
    } else {
      curvedGrades.push(grade);
    }
  });

  return curvedGrades;
}

gradingStudents([73, 67, 38, 33]);
