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

// create local storage var
if(!localStorage.getItem('question_num')){
    localStorage.setItem('question_num', 0)
    localStorage.setItem('correct', 0)
} 

// document loaded then ....
document.addEventListener('DOMContentLoaded', () => {
    load_question()
})

// define vars
let question_num;
let correct;


// run this function
const load_question = () => {
    
    // get values from local storage
    question_num = localStorage.getItem('question_num')
    correct = localStorage.getItem('correct')

    // show the current score
    document.querySelector("#correct").innerHTML = `${correct} of ${question_num}` 

    // get question div
    let questions_div = document.querySelector('#questions')

    // if quiz over
    if (questions.length === parseInt(question_num)) {

        // alert('hi')

        //display msg & hide buttons
        questions_div.innerHTML = "Quiz Completed!"
        document.querySelectorAll(".option").forEach(opt => {
            opt.style.display = "none";
        })

        // set local storage back to 0
        localStorage.setItem('question_num', 0)
        localStorage.setItem('correct', 0)
        
        setTimeout(() => {
            location.reload();
            return
        }, 2000);
    }
    
    // if quiz not done ....

    // insert the question in HTML
    questions_div.innerHTML = questions[question_num].question

    // get the options div and empty it
    const options = document.querySelector('#options')
    options.innerHTML = ""

    // insert buttons with value (answers)
    questions[question_num].options.forEach (opt => {
        options.innerHTML += `<button class="option">${opt}</button>`
    })

    // if button clicked ...
    document.querySelectorAll(".option").forEach(opt => {
        opt.onclick = () => {

            // check if right answer
            if (opt.textContent === questions[question_num].answer)
            {
                // Update correct value and Local storage
                opt.style.background = 'green';
                correct++
                localStorage.setItem('correct', correct)   
            }
            else{
                opt.style.background = 'red';
            }

            // update question num and storage
            question_num++
            localStorage.setItem('question_num', question_num)
            // alert('question_num is ' + question_num)
            // alert('correct is ' + correct)

            // grab correct div and update value
            document.querySelector("#correct").innerHTML = `${correct} of ${question_num}` 
            
            // load the function again
            setTimeout(() => {
                load_question()
            }, 750);
        }
    })

}
