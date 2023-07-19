const gradingStudents = (grades) => {
  const finalGrade = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    let roundedNote = grade;

    if (grade >= 30) {
      if (grade >= 38) {
        while (roundedNote % 5) {
          roundedNote++;
        }
      }

      if (roundedNote - grade < 3) {
        finalGrade.push(roundedNote);
      } else {
        finalGrade.push(grade);
      }
    }
  }

  return finalGrade;
};

module.exports = { gradingStudents };
