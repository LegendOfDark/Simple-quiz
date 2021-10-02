const questions = [
    {
        question: "What is 10 + 10",
        options: ["20", "30", "40", "50"],
        answer: "20",
    },
    {
        question: "What is Athena's favorite animal",
        options: ["penguin", "whale", "otters", "jellyfish"],
        answer: "otters",
    },
    {
        question: "What is the largest country in the world?",
        options: ["Russia", "US", "Canada", "Africa"],
        answer: "Russia",
    },
    {
        question: "What is the name of the largest ocean on earth?",
        options: ["Pacific", "Indian", "Atlantic", "Russian"],
        answer: "Pacific",
    },
    {
        question: "Who was the first woman to win a Nobel Prize (in 1903)?",
        options: ["Mother Teresa", "Madame Curie", "Malala Yousafzai", "Irena Sendler"],
        answer: "Madame Curie",
    }
]

let question_num = 0;
let correct = 0;

document.addEventListener('DOMContentLoaded', () => {
    load_question()
})




const load_question = () => {

    let questions_div = document.querySelector('#questions')

    if (questions.length === question_num) {
        questions_div.innerHTML = "Quiz Completed!"
        document.querySelectorAll(".option").forEach(opt => {
            opt.style.display = "none";
        })
        setTimeout(() => {
            location.reload();
        }, 5000);
        return;
    }

    questions_div.innerHTML = questions[question_num].question
    const options = document.querySelector('#options')
    options.innerHTML = ""

    questions[question_num].options.forEach (opt => {
        options.innerHTML += `<button class="option">${opt}</button>`
    })

    document.querySelectorAll(".option").forEach(opt => {
        opt.onclick = () => {
            if (opt.textContent === questions[question_num].answer)
            {
                opt.style.background = 'green';
                correct++
            }
            else{
                opt.style.background = 'red';
            }
            question_num++
            document.querySelector("#correct").innerHTML = `${correct} of ${question_num}` 
            setTimeout(() => {
                load_question()
            }, 1000);
        }
    })

}
