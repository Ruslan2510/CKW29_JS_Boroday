//Задание 1
let car = {
    manufacturer: "BMW",
    model: "series 3 F30",
    manufactureYear: 2020,
    averageSpeed: 200,
    ShowInfo() {
        return `Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nManufacture year: ${this.manufactureYear}\nAverage speed: ${this.averageSpeed}`;
    },

    TimeCalculate(distance) {
        let hoursAmount = 0;
        while (distance >= this.averageSpeed) {
            distance -= this.averageSpeed;
            hoursAmount++;
            if (hoursAmount % 4 == 0) {
                hoursAmount++;
            }
        }
        let minutesAmount = 0;
        if (distance < this.averageSpeed) {
            let distancePerMinute = this.averageSpeed / 60;
            minutesAmount = Math.floor(distance / distancePerMinute);
        }
        return `Время в пути: ${hoursAmount} часов ${minutesAmount} минут`;
    }
};

//console.log(car.ShowInfo());
//console.log(car.TimeCalculate(800));