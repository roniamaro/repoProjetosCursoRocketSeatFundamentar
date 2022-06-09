const timeOut = 1000
now = new Date
const checking = () => console.log('checking -> ' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())

setInterval(checking, timeOut)
