//Задание 3 
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ShowTime() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    AddSeconds(secondsAmount) {
        this.seconds += secondsAmount;
        if (secondsAmount > 0) {
            while (this.seconds > 59){
                this.seconds -= 60;
                this.minutes++;
            }
            while(this.minutes > 59) {
                this.minutes -=60;
                this.hours++;
            }
            while(this.hours > 23) {
                this.hours -= 24;
            }
        } else if (secondsAmount < 0) {
            while (this.seconds < 0) {
                this.seconds += 60;
                this.minutes--;
            }
            while (this.minutes < 0) {
                this.minutes += 60;
                this.hours--;
            }
            while (this.hours < 0) {
                this.hours += 24;
            }
        }

        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
        }
        if (this.hours < 10) {
            this.hours = "0" + this.hours;
        }

        return `Новое время: ${this.hours}:${this.minutes}:${this.seconds}`;
    },

    AddMinutes(minutesAmount) {
        this.minutes += minutesAmount;
        if (minutesAmount > 0) {
            while (this.minutes > 59) {
                this.minutes -= 60;
                this.hours++;
            }
            while (this.hours > 23) {
                this.hours -= 24;
            }
        }
        else if (this.minutes < 0) {
            while (this.minutes < 0) {
                this.minutes += 60;
                this.hours--;
            }
            while (this.hours < 0) {
                this.hours += 24;
            }
        }

        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
        }
        if (this.hours < 10) {
            this.hours = "0" + this.hours;
        }

        return `Новое время: ${this.hours}:${this.minutes}:${this.seconds}`; 
    },

    AddHours(hoursAmount) {

        this.hours += hoursAmount;
        if (hoursAmount > 0) {
            while (this.hours > 23) {
                this.hours -= 24;
            }
        }
        else if (hoursAmount) {
            while (this.hours < 0) {
                this.hours += 24;
            }
        }

        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
        }
        if (this.hours < 10) {
            this.hours = "0" + this.hours;
        }

        return `Новое время: ${this.hours}:${this.minutes}:${this.seconds}`; 
    }

};

//console.log(time.AddSeconds(-86399));

//console.log(time.AddMinutes(1380));

//console.log(time.AddHours(-3));