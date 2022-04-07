let printDate = function(){
    let currentDate = new Date()
    console.log(currentDate.getDate())
}

const printMonth = function(){
    let currentMonth = new Date()
    console.log(currentMonth.getMonth()+1)
}

const getBatchInfo = function(){
    console.log('Uranium, W3D1, the topic for today is Nodejs module system')
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
