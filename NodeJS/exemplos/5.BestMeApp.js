const question = [
    "o que aprendi hoje?",
    "o que me deixou feliz hoje?",
    "quantas pessoas ajudei hoje?",
]

const ask =( index = 0) => {
    process.stdout.write(question[index] + " -> ")
}

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    process.stdout.write("Salvo com sucesso o/ \n\n")
    if (answers.length < question.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

ask()