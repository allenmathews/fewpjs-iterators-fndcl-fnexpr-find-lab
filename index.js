// function superbowlWin(array) {
//     let winYear = array.find((ob) => ob.result === 'W');
//     if (winYear) {
//         return winYear.year;
//     }
// }

function superbowlWin(array) {
    let winYear = array.find((e) => e.result === 'W');
    if (winYear) {
        return winYear.year;
    } else {
        return undefined;
    }
}