/*Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий.
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфавиту).
*/

let auditorium = [
    {name: "123", seatsNumber: 15, facultyName: "Gryffindor"},
    {name: "315", seatsNumber: 20, facultyName: "Ravenclaw"},
    {name: "422", seatsNumber: 12, facultyName: "Ravenclaw"},
    {name: "202", seatsNumber: 10, facultyName: "Hufflepuff"},
    {name: "169", seatsNumber: 15, facultyName: "Slytherin"},
    {name: "401", seatsNumber: 15, facultyName: "Slytherin"},
    {name: "333", seatsNumber: 13, facultyName: "Gryffindor"},
    {name: "100", seatsNumber: 16, facultyName: "Hufflepuff"}
];

//1)
function showAllAuditoriumInfo(list) {
    console.log("\t\t\tAuditorium info");
    console.log("\tNumber\t\tSeats number\t\tFuculty owner");

    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}:  ${list[i].name} \t\t\t ${list[i].seatsNumber}\t\t\t\t${list[i].facultyName}`);
    }
}

showAllAuditoriumInfo(auditorium);

//2)
function showFucultyAuditorium(list, faculty) {
    let count = 0;
    console.log(`\tAuditoriums of ${faculty}:`);

    for (let i = 0; i < list.length; i++) {
        if (list[i].facultyName === faculty) {
            console.log(`Auditorium ${list[i].name} contains ${list[i].seatsNumber} seats number;`)
            count++;
        }
    }

    if (count === 0) {
        console.log("There is no auditoriums for " + faculty);
    }
}

showFucultyAuditorium(auditorium, "Hufflepuff");

//3)

function showSuitableAuditorium(list, group) {
    let result = `\nList of suitable auditoriums for group ${group.name}:\n`;
    let count = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i].seatsNumber >= group.studentsAmount 
            && list[i].facultyName === group.facultyName) {
            result += `\t${++count}) You can use auditorium ${list[i].name};\n`;
        }
    }

    if (count === 0) {
        result = "There is not auditorium for that group.";
    }
    console.log(result);
}

showSuitableAuditorium(auditorium, {name: "335a", studentsAmount: 14, facultyName: "Gryffindor"});

//4)

function sortBySeatsNumber(list) {
    list.sort(function (a, b) {
        return a.seatsNumber - b.seatsNumber;
    });
    console.log("Array was sorted by number of seats.");
}

sortBySeatsNumber(auditorium);

showAllAuditoriumInfo(auditorium);

//5)

function sortAlphabetically(list) {
    list.sort(function(a, b){
        return a.name > b.name ? 1 : -1;
    });
    console.log("Array was sorted alphabetically.");
}

sortAlphabetically(auditorium);

showAllAuditoriumInfo(auditorium);