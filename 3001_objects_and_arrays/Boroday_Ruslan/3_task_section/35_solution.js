/*3.5. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
R
RR
RRR
RRRR
RRRRR
RRRRRR
RRRRRRR
*/
let str = "";
for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        str += "R";
    }
    str += "\n";
}

console.log(str);