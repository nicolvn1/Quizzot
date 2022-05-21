const ICS32_Questions = [
    {
      question: "What is the purpose of Tracebacks?",
      answers: {
        a: "It's used to annoy the programmer with unnecessary messages.",
        b: "It's Python's way of showing the programmer why the program crashed.c",
        c: "It's Python's way of telling the programmer that the program ran successfully",
        d: "It's decorates the programmer's terminal.",
      },
      correctAnswer: "b"
    },
    {
      question: "When is the finally block executed during a try/except?",
      answers: {
        a: "It executes when testing certain lines of code.",
        b: "It executes if an error occured when testing certain lines of code.",
        c: "It executes regardless of whether code ran successfully or not.c",
        d: "It executes if an error didn't occur when running code."
      },
      correctAnswer: "c"
    },
    {
      question: "What does a Class do?",
      answers: {
        a: "Create an instance.",
        b: "Defines methods and attributes that can be used in that Class",
        c: "Creates an outline for creating an object.",
        d: "All of the Above.c"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the namespace precedence order?",
      answers: {
        a: "local --> built-in --> enclosed --> global",
        b: "built-in --> enclosed --> local --> global",
        c: "local --> enclosed --> global --> built-inc",
        d: "local --> global --> enclosed --> build-in"
      },
      correctAnswer: "c"
    },
    {
      question: `What is the order of HTTP request and response?
        1.Server accepts connection, 2.Server responds with content, 
        3. Clinet sends request, 4. Client establish connection with server`,
      answers: {
        a: "1,2,4,3",
        b: "2,1,3,4",
        c: "4,1,3,2c",
        d: "4,3,2,1"
      },
      correctAnswer: "c"
    },
    {
      question: "What happens in a recursive function?",
      answers: {
        a: "A function call results in another call to the same function.c",
        b: "A function call results in another call to a different function.",
        c: "A function call executes the code once and returns.",
        d: "A function call returns a reference to the inner function"
      },
      correctAnswer: "a"
    },
    {
      question: "What is a class called when it inherits from another class?",
      answers: {
        a: "Base class",
        b: "Child classc",
        c: "Parent class",
        d: "Daughter class"
      },
      correctAnswer: "b"
    },
    {
      question: `Which class is the base class?
      class Base: pass
      class Base1(Base): pass
      class Base2(Base, Base1): pass`,
      answers: {
        a: "Base1",
        b: "Base1 and Base2.",
        c: "Base2",
        d: "Basec"
      },
      correctAnswer: "d"
    },
    {
      question: "What is method overloading?",
      answers: {
        a: `Replacing the functionality of a method defined in the child class 
        with the definition from the base class`,
        b: `Replacing the functionality of the method with the same definition
         from the parent class in the child classc`,
        c: "Defining a new method with a different name in the child class",
        d: "Defining a new method in the base class"
      },
      correctAnswer: "b"
    },
    {
      question: "What is duck typing?",
      answers: {
        a: `Even if a class doesn't inherit from a base class, 
        if that class copies the interface of the base class, 
        Python will assume the class is a child class of the base class`,
        b: "If it looks like a duck and acts like a duck, then it must be a duck",
        c: "Quack Quack",
        d: "It's a duck that types"
      },
      correctAnswer: "a"
    }
  ];


  const indentString = (str, count, indent = ' ') =>
    str.replace(/^/gm, indent.repeat(count));

  var available_inds = [0, 1, 2]

  function next_question() {
    return available_inds[Math.floor(Math.random() * available_inds.length)];
  }

  function answer_button(current_question_num, user_answer) {
    if (ICS32_Questions[current_question_num].correctAnswer == user_answer) {
      for(var i = 0; i < available_inds.length; i++){ 
        if (available_inds[i] === current_question_num) { 
          available_inds.splice(i, 1); 
        }
      }
    }
  }

  function handle_correct(set, question_ind) {
      //or this whole function doesn't even need to exist and we can just delete in an if statement
      delete available_inds[question_ind];
      //call the move forward function
  }

  function handle_incorrect() {
      pass
  }

  function display() {
    let current_question_num = next_question();
    document.getElementById('questions').innerHTML =`<div class="buttons" data-aos="fade-up" data-aos-duration="1200">
    ${ICS32_Questions[current_question_num].question}
    <br></br>
    <button onclick="answer_button(${current_question_num}, 'a')">A</button> ${ICS32_Questions[current_question_num].answers.a}
    <br></br>
    <button onclick="answer_button(${current_question_num}, 'b')">B</button> ${ICS32_Questions[current_question_num].answers.b}
    <br></br>
    <button onclick="answer_button(${current_question_num}, 'c')">C</button> ${ICS32_Questions[current_question_num].answers.c}
    <br></br>
    <button onclick="answer_button(${current_question_num}, 'd')">D</button> ${ICS32_Questions[current_question_num].answers.d}
       
   </div>`

   document.getElementById('check').innerHTML = available_inds

}

