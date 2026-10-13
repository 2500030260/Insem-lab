function calculate() {
    let name = document.getElementById("name").value;
    let n1 = Number(document.getElementById("m1").value);
    let n2 = Number(document.getElementById("m2").value);
    let n3 = Number(document.getElementById("m3").value);

    let total = n1 + n2 + n3;
    let percentage = total / 3;
    let grade;

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 35) grade = "C";
    else grade = "F";

    let result = percentage >= 35 ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        `<h3>${name}</h3>
         <p>Total: ${total}</p>
         <p>Percentage: ${percentage.toFixed(2)}%</p>
         <p>Grade: ${grade}</p>
         <p>Result: ${result}</p>`;
}