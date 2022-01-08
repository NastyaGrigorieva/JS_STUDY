// TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


//
// function wakeUp(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('Здаровасики');
//             }
//             reject('Я памэрла');
//         }, 1000)
//     });
// }
//
// function brushTooth(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.20) {
//                 resolve('Чищу зубки');
//             }
//             reject('Я памэрло');
//         }, 3000)
//     });
// }
//
// function brushPerushki(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('Очистилась');
//             }
//             reject('Грязная тварь');
//         }, 500);
//     });
// }
//
// function brushHard(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('ВЫмой всю хату');
//             }
//             reject('Грязная тварь');
//         }, 10000)
//     });
// }
//
// function coocingHard(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('Наготовь еды на месяц за пару часов');
//             }
//             reject('Ленивая тварь');
//         }, 300);
//     });
// }
//
// function washTheWindows(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('Вымой все окна');
//             }
//             reject('Выпала,упс');
//         }, 100)
//     });
// }
//
// function tigers(randomNum) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNum > 0.25) {
//                 resolve('Отгрызи когти тигру');
//
//             }
//             reject('Я памерэло');
//         }, 1000)
//     });
// }

// const myDayList = async () => {
//     try{
//         const a = await wakeUp(Math.random());
//         console.log(a);
//         const b = await brushTooth(Math.random());
//         console.log(b);
//         const c = await brushPerushki(Math.random());
//         console.log(c);
//         const d = await brushHard(Math.random());
//         console.log(d);
//         const e = await coocingHard(Math.random());
//         console.log(e);
//         const f = await washTheWindows(Math.random());
//         console.log(f);
//         const g = await tigers(Math.random());
//         console.log(g);
//
//
//     } catch (e) {
//         console.error(e)
//     }
// };
//
// myDayList()


// wakeUp(Math.random())
//     .then(resp => {
//         console.log(resp)
//         return brushTooth(Math.random());
//     })
//
//     .then(resp => {
//         console.log(resp)
//         return brushPerushki(Math.random());
//     })
//     .then(resp => {
//         console.log(resp)
//         return brushHard(Math.random());
//     })
//     .then(resp => {
//         console.log(resp)
//         return coocingHard(Math.random());
//     })
//     .then(resp => {
//         console.log(resp)
//         return washTheWindows(Math.random());
//     })
//     .then(resp => {
//         console.log(resp)
//         return tigers(Math.random());
//     })
//
// .then(resp => console.log(resp))
// .catch(e => console.error(e))
// .finally(() => console.log('Финита ля комедиа'))


// function wakeUp(randomNum, callback) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Дратути');
//             return callback(Math.random(), brushPerushki)
//         }
//         console.log('Я памерэло');
//     }, 2000)
// }
//
// function brushPerushki(randomNum, callback) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Чищу зубки');
//             return callback(Math.random(), brushHard)
//         }
//         console.log('Я памерэло');
//     }, 200)
// }
// wakeUp(Math.random(), brushPerushki)
//
//
// function brushHard(randomNum, callback) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Вымой всю хату');
//             return callback(Math.random(),coocingHard)
//         }
//         console.log('Я памерэло');
//     }, 3000)
// }
//
// function coocingHard(randomNum, callback) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Наготовь еды на месяц за пару часов');
//             return callback(Math.random(),washTheWindows)
//         }
//         console.log('Ленивая тварь');
//     }, 10000)
// }
//
// function washTheWindows(randomNum, callback) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Отгрызи когти тигру');
//             return callback(Math.random(),tigers)
//         }
//         console.log('Я Выпала,упс');
//     }, 1000)
// }
//
// function tigers(randomNum) {
//     setTimeout(() => {
//         if (randomNum > 0.25) {
//             console.log('Отгрызи когти тигру');
//         }
//         console.log('Я памерэло');
//     }, 500)
// }
//
//
//
//


function schedule(morning, cb) {
    setTimeout(() => {
        if (morning === 'bad') {
            console.log(`>>> ${morning} morning`);
            cb('this is the (dead) end', null);
        } else {
            cb(null, `>>> ${morning} morning`)
        }
    }, 500)
}

function wakeUp(cb) {
    setTimeout(() => {
        console.log('Здаровасики');
        cb(null, 'Я памэрла');
    }, 300);
}
function brushToosh(cb) {
    setTimeout(() => {
        console.log('Чищу зубки');
        cb(null, 'Я памэрло');
    }, 500);
}
function brushPerushki(mood, cb) {
    setTimeout(() => {
        console.log('Очистилась');
        setTimeout(() => {
            if (mood === 'bad') {
                console.log('чистая Тварь');
                cb('Недостаточно чистая тварь', null);
            } else {
                cb(null, 'Грязная тварь');
            }

        }, 1000)
    }, 500);
}
function brushHard(cb) {
    setTimeout(() => {
        console.log('ВЫмой всю хату');
        cb(null, 'или умри');
    }, 3000);
}
function coocingHard(cb) {
    setTimeout(() => {
        console.log('Наготовь еды на месяц за пару часов');
        console.log('Ленивая тварь');
        cb(null, 'все равно Ленивая тварь');
    }, 1000);
}
function washTheWindows(status, cb) {
    setTimeout(() => {
        console.log(`Вымой все окна`);
        if (status === 'bad') {
            console.log('Выпади')
            cb('или умри', null);
        } else {
            cb(null, 'успех!');
        }
    }, 1000);
}
function tigers(cb) {
    setTimeout(() => {
        console.log(`'Отгрызи когти тигру'`);
        cb(null, 'С НОвым годом,братишка,йо');
    }, 2000);
}
function cat(cb) {
    setTimeout(() => {
        console.log(`Ну можно еще и котику`);
        cb(null, 'Грызи тебе говорят');
    }, 1000);
}
function dead(value, cb) {
    setTimeout(() => {
        console.log(`если ты все еще жив`);
        cb(null, `Смотри ${value}`);
    }, 200);
}
function sleep(cb) {
    setTimeout(() => {
        console.log(`да харош уже`);
        cb(null, `умер в подушку таки`);
    }, 100);
}

schedule('bad', (err, success) => {
    if (err) {
        console.error(err);
    } else {
        wakeUp((err, success) => {
            if (err) {
                console.error(err);
            } else {
                console.log(success);
                brushToosh((err, success) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(success);
                        brushPerushki('bad', (err, success) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log(success);
                                brushHard((err, success) => {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log(success);
                                        coocingHard((err, success) => {
                                            if (err) {
                                                console.error(err);
                                            } else {
                                                console.log(success);
                                                washTheWindows('bad', (err, success) => {
                                                    if (err) {
                                                        console.error(err);
                                                    } else {
                                                        console.log(success);
                                                        tigers((err, success) => {
                                                                if (err) {
                                                                    console.error(err);
                                                                } else {
                                                                    console.log(success);
                                                                    cat((err, success) => {
                                                                        if (err) {
                                                                            console.error(err);
                                                                        } else {
                                                                            console.log(success);
                                                                            dead('romanticyyy', (err, success) =>{
                                                                                if (err) {
                                                                                    console.error(err);
                                                                                } else{
                                                                                    console.log(success);
                                                                                    sleep((err, success) => {
                                                                                        if (err) {
                                                                                            console.error(err);
                                                                                        } else{
                                                                                            console.log(success);
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            }
                                                        )
                                                    }
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    }
                });
            }
        });
    }
})