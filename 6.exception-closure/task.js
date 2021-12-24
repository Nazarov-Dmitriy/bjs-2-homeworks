//Task 1

function validateCount(value) {
    try {
        return pars1 = parseCount(value);
    } catch (err) {
        return err;
    }
}

function parseCount(value) {
    let pars = parseInt(value);
    if (isNaN(pars)) {
        throw new Error('Невалидное значение');
    }
    return pars;
}


//Task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;


        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        let p = this.a + this.b + this.c;
        return p;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return this.S = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return trig = new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}