let bouncingBall = (h: number, bounce: number, window: number): number => {
    let result: number = 0;
    let isFirstTime: number = 0;
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        while (h > window) {
            isFirstTime == 0 ? (result++,isFirstTime++) : result += 2
            h = h * bounce;
        }
        return result;
    } else {
        return -1;
    }
}
// console.log(bouncingBall(3.0, 0.66, 1.5)); //, 3
// console.log(bouncingBall(30.0, 0.66, 1.5)); //, 15
// console.log(bouncingBall(30, 0.75, 1.5)); //, 21
// console.log(bouncingBall(30, 0.4, 10)); //, 3
// console.log(bouncingBall(-1, 0.4, 10)); //, -1
// console.log(bouncingBall(30, -.5, 10)); //, -1
// console.log(bouncingBall(30, 1.5, 10)); //, -1
// console.log(bouncingBall(30, .5, 31)); //, -1

// Time : 25minutes