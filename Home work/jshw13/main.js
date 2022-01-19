// Зробити свій розпорядок дня. У вас має бути більше 6-9 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо).
// Затримка має бути не в порядку зростання, а в будь яка. При тому ваші дії мають бути синхронізовані.
// Наприклад: Прокинутись -0.3с; Поснідати - 1с; Піти в душ - 0.5с; Дочекатись автобуса - 3с; Пообідати - 1с; І так далі.

// callback

// let time = 7;
//
// function wakeUp(times, callback) {
//     setTimeout(() => {
//         if (times >= 7) {
//             time += 0.1;
//             console.log('you must wake up and go to the work');
//             callback(null, times);
//         } else if (times >= 7.1) {
//             console.log('You late for work');
//             callback(times, null);
//         }
//     }, 1500);
// }
//
// function standUpWithBed(times, callback) {
//     setTimeout(() => {
//         console.log(times, 'time');
//         if (times <= 7.1) {
//             time += 0.15;
//             console.log('stand up with bed');
//             callback(null, times);
//         } else if (times > 7.15) {
//             console.log('Oops you very late for work 1');
//             callback(null, times);
//         }
//     }, 1200);
// }
//
// function goToShower(times, callback) {
//     setTimeout(() => {
//         console.log(times, 'time');
//         if (times <= 7.25) {
//             time += 0.20;
//             console.log('go to the shower');
//             callback(null, times);
//         } else if (times > 7.27) {
//             console.log('Oops you very late for work 2');
//             callback(times, null);
//         }
//
//     }, 500);
//
// }
//
// function breakfast(times, callback) {
//     setTimeout(() => {
//         console.log(times, 'time');
//         if (times <= 7.45) {
//             time += 0.10;
//             console.log('eat breakfast');
//             callback(null, times);
//         } else if (times > 7.47) {
//             console.log('Oops you very late for work 3');
//             callback(times, null);
//         }
//     }, 1500);
// }
//
// function toGetDressed(times, callback) {
//     setTimeout(() => {
//         console.log(times, 'time');
//         if (times <= 7.55) {
//             time += 0.10;
//             console.log('go to get dressed');
//             callback(Math.round(times), null);
//         } else if (times > 7.57) {
//             console.log('Oops you very late for work 4');
//             callback(times, null);
//         }
//     }, 100);
//
// }
//
// function goToBus(times, callback) {
//     setTimeout(() => {
//         console.log((Math.round(times) + 0.05), 'time');
//         if (Math.round(times) <= 8.05) {
//             time += 0.55;
//             console.log('go to the bus');
//             callback(times, null);
//         } else if (times > 8.17) {
//             console.log('Oops you very late for work 5');
//             callback(times, null);
//         }
//     }, 200);
//
// }
//
// function work(times, callback) {
//     setTimeout(() => {
//         console.log((Math.round(times)), 'time');
//         if (Math.round(times) <= 9) {
//             console.log('WORK WORK WORK');
//             callback(times, null);
//         } else if (times > 9.05) {
//             console.log('Oops you very late for work 6');
//             callback(times, null);
//         }
//     }, 700);
// }
//
// wakeUp(time, () => {
//     standUpWithBed(time, () => {
//         goToShower(time, () => {
//             breakfast(time, () => {
//                 toGetDressed(time, () => {
//                     goToBus(time, () => {
//                         work(time, () => {
//
//                         })
//                     });
//                 });
//             });
//         });
//
//     });
// });

// promise

// function goodMorning(wakeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeUp) {
//                 resolve('Hello wake up please');
//             } else {
//                 reject('Oops !!!');
//             }
//         }, 1000);
//     });
// }
//
// function goToShower(go) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (go) {
//                 resolve('Go to shower');
//             } else {
//                 reject('Oops !!! Oops !!!');
//             }
//         }, 200);
//     });
// }
//
// function goToEat(eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve('Go to eat your breakfast');
//             } else {
//                 reject('You late for work. Oops !!!');
//             }
//         }, 700);
//     });
// }
//
// function toGetDressed(dressed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dressed) {
//                 resolve('Go to get dressed');
//             } else {
//                 reject('You late for work. Oops !!!');
//             }
//         }, 400);
//     });
// }
//
// function goToBus(go) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (go) {
//                 resolve('Ok wait your bus');
//             } else {
//                 reject('You late for work. Oops !!!');
//             }
//         }, 1100);
//     });
// }
//
// function work(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 resolve('WORK WORK WORK');
//             } else {
//                 reject('Oops !!!');
//             }
//         }, 1500);
//     });
// }
//
// function finishWork(goToHome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goToHome) {
//                 resolve('Work day is finish go home');
//             } else {
//                 reject('Oops !!!');
//             }
//         }, 500);
//     });
// }
//
// function sleep(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep) {
//                 resolve('I am tired and I go to sleep');
//             } else {
//                 reject('Ura ura !!!');
//             }
//         }, 1000);
//     });
// }
//
// goodMorning(true)
//     .then(result => {
//         console.log(result);
//         return goToShower(result);
//     })
//     .then(result => {
//         console.log(result);
//         return goToEat(result);
//     })
//     .then(result => {
//         console.log(result);
//         return toGetDressed(result);
//     })
//     .then(result => {
//         console.log(result);
//         return goToBus(result);
//     })
//     .then(result => {
//         console.log(result);
//         return work(result);
//     })
//     .then(result => {
//         console.log(result);
//         return finishWork(result);
//     })
//     .then(result => {
//         console.log(result);
//         return sleep(result)
//     })
//     .then(result => {
//         console.log(result);
//     });

// async await

// function wakeUp(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 resolve('7:00 A.M. Wake up, you must go to  work');
//             } else {
//                 reject('Oops, you late on work');
//             }
//         }, 1000);
//     });
// }
//
// function goToShower(shower) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shower) {
//                 resolve('7:10 A.M.  you must go to shower');
//             } else {
//                 reject('Oops, Mda 1');
//             }
//         }, 1300);
//     });
// }
//
// function goBreakfast(breakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (breakfast) {
//                 resolve('7:30 A.M.  I cook my breakfast and eat');
//             } else {
//                 reject('Oops, Mda 2');
//             }
//         }, 1700);
//     });
// }
//
// function goDressed(dressed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dressed) {
//                 resolve('8:00 A.M.  I go to dressed');
//             } else {
//                 reject('Oops, Mda 3');
//             }
//         }, 500);
//     });
// }
//
// function goBusStop(go) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (go) {
//                 resolve('8:20 A.M.  Go to the bus stop');
//             } else {
//                 reject('Oops, Mda 4');
//             }
//         }, 200);
//     });
// }
//
// function workTime(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 resolve('9:00 A.M.  Work time');
//             } else {
//                 reject('Oops, Mda 5');
//             }
//         }, 100);
//     });
// }
//
// function lunchTime(lunch) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lunch) {
//                 resolve('1:00 P.M.  Lunch time');
//             } else {
//                 reject('Oops, Mda 6');
//             }
//         }, 230);
//     });
// }
//
// function goHome(home) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (home) {
//                 resolve('6:00 P.M.  Work day is finish go home');
//             } else {
//                 reject('Oops, Mda 7');
//             }
//         }, 135);
//     });
// }
//
// function goDinner(dinner) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner) {
//                 resolve('7:00 P.M.  I cook my dinner and eat');
//             } else {
//                 reject('Oops, Mda 8');
//             }
//         }, 135);
//     });
// }
//
// function goSleep(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep) {
//                 resolve('11:00 P.M.  Go to sleep');
//             } else {
//                 reject('Oops, Mda 9');
//             }
//         }, 235);
//     });
//
// }
//
// async function myMorning() {
//     const morning = await wakeUp(true);
//     const showers = await goToShower(morning);
//     const breakfast = await goBreakfast(showers);
//     const dressed = await goDressed(breakfast);
//     const busStop = await goBusStop(dressed);
//     const work = await workTime(busStop);
//     const lunch = await lunchTime(work);
//     const home = await goHome(lunch);
//     const dinner = await goDinner(home);
//     const sleep = await goSleep(dinner);
//
//     console.log(morning);
//     console.log(showers);
//     console.log(breakfast);
//     console.log(dressed);
//     console.log(busStop);
//     console.log(work);
//     console.log(lunch);
//     console.log(home);
//     console.log(dinner);
//     console.log(sleep);
// }
//
// myMorning();