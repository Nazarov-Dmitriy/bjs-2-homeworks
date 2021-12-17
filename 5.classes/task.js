//task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value == 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.author = author;
        this.state = 100;
        this.type = "book";

    }
}

class NovelBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "novel";
        this.author = author;

    }
}
class FantasticBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "fantastic";
        this.author = author;

    }
}
class DetectiveBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "detective";
        this.author = author;

    }
}

// Task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }


    findBookBy(type, value) {
        let arr;
        this.books.map(item => {

            if (item[type] === value) {
                arr = item;
            }
        });

        if (arr == undefined) {
            return null;
        } else {
            return arr;
        }
    }


    giveBookByName(bookName) {
        let arr;

        this.books.map((item, i) => {
            if (item.name === bookName) {
                arr = item;
                this.books.splice(i, 1);
            }
        });
        if (arr == undefined) {
            return null;
        } else {
            return arr;
        }
    }
}


//Task 3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    setSubject(subjectName) {

        if (this.subject === undefined) {
            this.subject = {};
            if (this.subject.hasOwnProperty(subjectName) !== true)
                this.subject[subjectName] = [];
        } else {
            if (this.subject.hasOwnProperty(subjectName) !== true)
                this.subject[subjectName] = [];
        }
    }

    addMark(grade, subject) {
        if (grade > 0 && grade < 6) {
            this.setSubject(subject);
            this.subject[subject].push(grade);
        } else {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
    }


    getAverageBySubject(name) {
        let sum = 0
        if (name in this.subject) {
            this.subject[name].map(el => sum += el);
        } else {
            return 'Несуществующий предмет';
        }
        return sum / this.subject[name].length;
    }

    getAverage() {
        let sum = 0;
        let count = 0;
        for (let key in this.subject) {
            this.subject[key].map(
                el => {
                    sum += el;
                    count++;
                });
        }
        return sum / count;
    }

}








