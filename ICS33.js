const ICS33_questions = [
    {
      question: `Which expanded code is equivalent to this one-liner:
      <br></br>
      dictionary = {'a':1,'b':2,'c':3, 'd':0}
      <br></br>
      one_liner = [key for key in dictionary if dictionary[key] % 2 == 0]`,
      answers: {
        a: `one_liner =[]
        <br></br>
        for key in dictionary:
        <br></br>
        one_liner.append(key)
        `,
        b: `one_liner =[]
        <br></br>
        for key in dictionary:
        <br></br>
        if dictionary[key] % 2 == 0:
        <br></br>
        one_liner.append(key)
        `,
        c: `one_liner =[]
        <br></br>
        if dictionary.keys() % 2 == 0:
        <br></br>
        for key in dictionary:
        <br></br>
        one_liner.append(key)
        `,
        d: `one_liner =[]
        <br></br>
        for key in dictionary.key:
        <br></br>
        if dictionary[key] % 2 == 0:
        <br></br>
        one_liner.append(key)
        `,
      },
      correctAnswer: "b"
    },
    {
      question: "What is the difference between an iterator and an iterable?",
      answers: {
        a: "An iterable is an object you can call next() on and an iterator is an object that can be iterated over",
        b: "An iterator returns an iterable while an iterable returns a generator",
        c: "An iterator is an object you can call next() on and an iterable is an object that can be iterated over",
        d: "An iterator returns a generator while an iterator returns an interable"
      },
      correctAnswer: "c"
    },
    {
      question: `Which email will NOT match the regular expresion?
      <br></br>
      r"^(\w)+@(\w)+.(com|net|org|edu)$"`,
      answers: {
        a: "p_anteater@sbcglobal.net",
        b: "panteater@hotmail.com",
        c: "pant3at3r@gmail.com",
        d: "panteater@uciedu."
      },
      correctAnswer: "d"
    },
    {
      question: "How would you access the value 3 on in the following linked list? X = LN(1) --> LN(2) --> LN(3) --> LN(4) --> LN(5)",
      answers: {
        a: "x.next",
        b: "x.next()",
        c: "x.next.next",
        d: "x.next.next()"
      },
      correctAnswer: "c"
    },
    {
      question: "What does FEOOP stand for?",
      answers: {
        a: "Famous Elephants Of Oakdale Pennsylvania",
        b: "Forestry Education Observation-Outreach Program",
        c: "Fundamental Equation of Object-Oriented Programming",
        d: "Fail Everyone Out of Physics"
      },
      correctAnswer: "c"
    },
    {
      question: "Which term is not included in LEGB ?",
      answers: {
        a: "Local",
        b: "Errors",
        c: "Global",
        d: "Built-ins"
      },
      correctAnswer: "c"
    },
    {
      question: "What method(s) does/do a class object need if it wants to be used by a context manager?",
      answers: {
        a: "__start__ and __exit__",
        b: "__enter__ and __exit__",
        c: "__start__ and __finish__",
        d: "__enter__ and __finish__"
      },
      correctAnswer: "b"
    },
    {
      question: "If the method call 1 < x fails, python would try to execute which of the following?",
      answers: {
        a: "type(1).__le__(1,x)",
        b: "type(1).__ge__(1,x)",
        c: "type(x).__le__(x,1)",
        d: "type(x).__ge__(x,1)"
      },
      correctAnswer: "d"
    },
    {
      question: "What does any(()) evaluates to?",
      answers: {
        a: "True",
        b: "False",
        c: "Both a and b",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "What are Pattis' pet peeve(s)?",
      answers: {
        a: "People still talking after class has begun.",
        b: "Thornton's pronunciation of Tkinter.",
        c: "Phones ringing during class.",
        d: "All of the above."
      },
      correctAnswer: "d"
    }
  ];


  const indentString = (str, count, indent = ' ') =>
  str.replace(/^/gm, indent.repeat(count));

var available_inds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function next_question() {
  return available_inds[Math.floor(Math.random() * available_inds.length)];
}

function answer_button(current_question_num, user_answer) {
  if (ICS33_questions[current_question_num].correctAnswer == user_answer) {
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
    ${ICS33_questions[current_question_num].question}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'a')">A</button> ${ICS33_questions[current_question_num].answers.a}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'b')">B</button> ${ICS33_questions[current_question_num].answers.b}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'c')">C</button> ${ICS33_questions[current_question_num].answers.c}
    <br></br>
    <button class="answer_buttons" onclick="answer_button(${current_question_num}, 'd')">D</button> ${ICS33_questions[current_question_num].answers.d}
    </div>`
  }
}

end = 10/(ICS33_questions.length+1) * screen.width;
petr_pos = 0;

function petr_move() {
  petr = document.getElementById('petr')
  petr_pos += 1/(ICS33_questions.length+1) * screen.width;
  petr.style.transform = `translateX(${petr_pos}px)`
}

zotbot_pos = 0;
function zotbot_move() {
  zotbot = document.getElementById('zotbot')
  zotbot_pos += 1/(ICS33_questions.length+1) * screen.width;
  zotbot.style.transform = `translateX(${zotbot_pos}px)`
}

function computer_move() {
  var i = 1;
  while (i < 11) {
    setTimeout(function() {zotbot_move()}, i * 5000);
    i++;
  }
}
