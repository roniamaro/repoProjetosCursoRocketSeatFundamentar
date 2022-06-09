const timeOut1 = 1000
const finished1 = () => console.log('1sec!')
const timeOut2 = 2000
const finished2 = () => console.log('2sec!')
const timeOut3 = 3000
const finished3 = () => console.log('3sec!')

setTimeout(finished1, timeOut1)
setTimeout(finished2, timeOut2)
setTimeout(finished3, timeOut3)

