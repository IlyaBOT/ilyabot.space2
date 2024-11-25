function solveEquation() {
    const a = parseFloat(document.getElementById("text-field-a").value);
    const b = parseFloat(document.getElementById("text-field-b").value);
    const c = parseFloat(document.getElementById("text-field-c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerHTML = "Введите все коэффициенты!";
        return;
    }
    if (a === 0) {
        document.getElementById("result").innerHTML = "Это не квадратное уравнение (A не может быть 0).";
        return;
    }
    // If a is 0, then equation is not
    // quadratic, but linear
    if (a == 0) {
        document.getElementById("result").innerHTML = "ОШИБКА! Вы ввели не квадратное уравнение (A не может быть = 0!).";
        return;
    }
    let d = b * b - 4 * a * c;
    let resultText;
    if (d > 0) {
        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        resultText = `Корни действительные и различные:<br>x₁ = ${root1.toFixed(2)}, x₂ = ${root2.toFixed(2)}`;
    } else if (d === 0) {
        const root = -b / (2 * a);
        resultText = `Корни действительные и одинаковые:<br>x₁ = x₂ = ${root.toFixed(2)}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
        resultText = `Корни комплексные:<br>x₁ = ${realPart} + ${imaginaryPart}i, x₂ = ${realPart} - ${imaginaryPart}i`;
    }

    document.getElementById("result").innerHTML = resultText;
}