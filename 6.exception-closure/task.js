//Task 1

function validateCount(value) {
    try {
        let pars1 = parseCount(value);
        return pars1;
    } catch (err) {
        return err;
    }
}

function parseCount(value) {
    let pars = parseInt(value);
    if (isNaN(pars)) {
        throw new Error('Невалидное значение');
    } else return pars;
}


//Task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.p = 0;
        this.S = 0;

        if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.p = this.a + this.b + this.c;
    }

    getArea() {
        let p = this.p / 2
        return this.S = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        trig = new Triangle(a, b, c);
        return trig;
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

