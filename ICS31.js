const ICS31_questions = [
  {
    question: "What is the definition of a ValueError?",
    answers: {
      a: "The program contains invalid code that cannot be understood.",
      b: "An invalid value is used - can occur if giving letters to int().",
      c: "The program tries to use a variable that does not exist.",
      d: "An operation uses incorrect types - can occur if adding an integer to a string.",
    },
    correctAnswer: "b"
  },
  {
    question: "How would I slice the list [0,2,4,7,13] to get [2,4]?",
    answers: {
      a: "[:-3]",
      b: "[1:]",
      c: "[1:3:1]",
      d: "[1:2]"
    },
    correctAnswer: "c"
  },
  {
    question: "Which command outputs a (key,value) tuple from a dictionary?",
    answers: {
      a: "sample_dict.keys()",
      b: "sample_dict.values()",
      c: "sample_dict.tuple()",
      d: "sample_dict.items()"
    },
    correctAnswer: "d"
  },
  {
    question: `Which code won't raise an error?
    <br></br>
    def hello(name):
    <br></br>
    assert type(name) == str
    <br></br>
    print(f"Hi my name is {name}!`,
    answers: {
      a: "hello(234)",
      b: "hello(['Kristen', 'Nicole'])",
      c: "hello('Audrey')",
      d: "hello({'name': 'Taylor'})"
    },
    correctAnswer: "c"
  },
  {
    question: "Which command will NOT raise an error?",
    answers: {
      a: "int('N1col3')",
      b: "float('3.1415s')",
      c: "str(111)",
      d: "int('1')"
    },
    correctAnswer: "c"
  },
  {
    question: "Which command is NOT used to create a new string?",
    answers: {
      a: "islower()",
      b: "capitalize()",
      c: "strip()",
      d: "title()"
    },
    correctAnswer: "a"
  },
  {
    question: `Which post-condition assert will FAIL?
    <br></br>
    def product(x,y):
    <br></br>
    return x * y`,
    answers: {
      a: "assert product(1,2) == 2",
      b: "assert product(3,3) == 6",
      c: "assert product(6,5) == 30",
      d: "assert product(4,product(2,3)) == 24"
    },
    correctAnswer: "b"
  },
  {
    question: `How do I access 1 in this nested list:
    <br></br>
    nl = [[0,0,0],
    <br></br>
    [0,0,0],
    <br></br>
    [0,0,1]]`,
    answers: {
      a: "nl[2]",
      b: "nl[3][3]",
      c: "nl[-1][1]",
      d: "nl[2][2]"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of these is NOT a list operation?",
    answers: {
      a: "len()",
      b: "list.add(val)",
      c: "sum()",
      d: "max()"
    },
    correctAnswer: "b"
  },
  {
    question: "Which data type is not mutable?",
    answers: {
      a: "A string.",
      b: "A dictionary.",
      c: "A list.",
      d: "A set."
    },
    correctAnswer: "a"
  }
];

const indentString = (str, count, indent = ' ') =>
  str.replace(/^/gm, indent.repeat(count));

var available_inds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function next_question() {
  return available_inds[Math.floor(Math.random() * available_inds.length)];
}

function answer_button(current_question_num, user_answer) {
  if (ICS31_questions[current_question_num].correctAnswer == user_answer) {
    document.getElementById('check').innerHTML = "Correct!"
    for (var i = 0; i < available_inds.length; i++){ 
      if (available_inds[i] === current_question_num) { 
        available_inds.splice(i, 1);
        petr_move()
      }
    }
  }
  else {
    document.getElementById('check').innerHTML = "Wrong >:("
  }
}

function start_to_next_question() {
  document.getElementById('start_button').innerHTML = `<button class="startbutton" onclick="display()">Next question</button>`
  display()
}

function display() {
  document.getElementById('check').innerHTML = "..."
  if (available_inds.length == 0) {
    document.getElementById('questions').innerHTML = "Congrats! You finished this practice set :D"
  }
  else {
    let current_question_num = next_question();
    document.getElementById('questions').innerHTML = `<div>
    ${ICS31_questions[current_question_num].question}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'a')">A</button> ${ICS31_questions[current_question_num].answers.a}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'b')">B</button> ${ICS31_questions[current_question_num].answers.b}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'c')">C</button> ${ICS31_questions[current_question_num].answers.c}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'd')">D</button> ${ICS31_questions[current_question_num].answers.d}
    </div>`
  }
}

petr_pos = 0;
function petr_move() {
  petr = document.getElementById('petr')
  petr_pos += 1/(ICS31_questions.length) * window.innerWidth - 15;
  petr.style.transform = `translateX(${petr_pos}px)`
}

zotbot_pos = 0;
function zotbot_move() {
  zotbot = document.getElementById('zotbot')
  zotbot_pos += 1/(ICS31_questions.length) * window.innerWidth - 15;
  zotbot.style.transform = `translateX(${zotbot_pos}px)`
}

function computer_move() {
  var i = 1;
  while (i < 11) {
    setTimeout(function() {zotbot_move()}, i * 5000);
    i++;
  }
}
