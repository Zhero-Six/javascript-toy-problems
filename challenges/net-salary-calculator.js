// net-salary-calculator.js
function netSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = grossSalary * 0.3;
    let nhif = grossSalary * 0.025;
    let nssf = grossSalary * 0.06;
    let netSalary = grossSalary - (payee + nhif + nssf);
    return { grossSalary, payee, nhif, nssf, netSalary };
  }
  console.log(netSalary(50000, 10000));
  