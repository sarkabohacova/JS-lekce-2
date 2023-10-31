const fullPrice = 12;
const visitorsMonthly = 174;
const showsMonthly = 15;
const intake = fullPrice * visitorsMonthly * showsMonthly;
document.body.innerHTML += '<p>Příjem divadla: ' + intake + ' Kč</p>';

const studentPrice = 0.65 * fullPrice;
const students = 0.4;
const intakeStudents = (fullPrice * (1 - students) + studentPrice * students) * visitorsMonthly * showsMonthly;
document.body.innerHTML += '<p>Příjem divadla se slevou pro studenty:' + intakeStudents + ' Kč </p>';
