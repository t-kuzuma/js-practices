#!/usr/bin/env node

const currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;

var argv = process.argv.slice(2);
if (argv.includes('-y')) {
  year = Number(argv[argv.indexOf('-y') + 1]);
}
if (argv.includes('-m')) {
  month = Number(argv[argv.indexOf('-m') + 1]);
}

const firstDay = new Date(year, month - 1, 1).getDay();
const lastDate = new Date(year, month, 0).getDate();

function printCalendarWithNewlineOnSaturdays(year, month, i) {
  let eachDay = ` ${String(i).padStart(2, ' ')}`;
  if (new Date(year, month - 1, i).getDay() === 6) {
    console.log(eachDay);
  } else {
    process.stdout.write(eachDay);
  }
}

console.log(`      ${year}年 ${month}月`);
console.log(' 日 月 火 水 木 金 土');
process.stdout.write('   '.repeat(firstDay));
for (let i = 1; i <= lastDate; i++) {
  printCalendarWithNewlineOnSaturdays(year, month, i);
}
console.log();
