// cancela um timeout
const timeOut = 3000
const finished = () => console.log('3sec!')

// a variável "timer" está recebendo o timeout de 3sec
let timer = setTimeout(finished, timeOut)
console.log('registrou o "timeout" na variável "timer"')

// chama a função "clear" para cancelar o timeout de 3sec armazenado na variável "timer"
clearTimeout(timer)
console.log('cancelou o timeout e saiu da função"')