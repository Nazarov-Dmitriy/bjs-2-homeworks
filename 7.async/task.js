class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        let regexp = /^\d\d:\d\d$/;
        let stop = 0;
        if (regexp.test(time) === false) {
            console.error('Введите время в формате HH:MM');
        }
        if (id == null) {
            throw new Error('Ошибка id не добавлен');
        }


        this.alarmCollection.forEach(element => {
            if (element.id == id) {
                stop = 1;
                console.error(`Id с номером ${id} уже добавлен`);
            }
        });

        if (stop == 0) {
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: function () {
                    console.log(`Будильник ${callback} сработал`);
                }
            });
        }
    }

    removeClock(id) {
        let initialLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => {
            return element.id !== id;
        });
        let finalLength = this.alarmCollection.length;
        return finalLength < initialLength ? true : false;

    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`;
    }

    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log(`Будильник №${element.id} заведен на ${element.time}`);
        });
    }

    start() {
        function checkClock(arr, currunetTime) {
            arr.forEach(element => {
                if (element.time == currunetTime) {
                    element.callback();
                }
            });
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => checkClock(this.alarmCollection, this.getCurrentFormattedTime()), 1000);
        }
    }

    stop(){
        if(this.timerId !== null){
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}


