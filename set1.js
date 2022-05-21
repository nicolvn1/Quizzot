const set1Questions = [
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
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: ""
      },
      correctAnswer: ""
    }
  ];

  var available_inds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  function next_question(set) {
    question_ind = Math.random(0, available_inds.length-1);
    question = set[question_ind];
    return [question, question_ind];
  }

  function a_button(qno, uans) {

    return set1Questions[qno].correctAnswer == uans;
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
    document.getElementById('hi').innerHTML = '';
      let qno = 5;
        document.getElementById('hi').innerHTML +=`<div class="buttons" data-aos="fade-up" data-aos-duration="1200">
        <br></br>
        <button onclick="a_button(${qno}, 'a')">A${set1Questions[qno].answers.a}/button>
        <br></br>
        <button onclick="b_button('b')">B</button>
        <br></br>
        <button onclick="c_button()">C</button>
        <br></br>
        <button onclick="d_button()">D</button>
         
    </div>`
}
  function answer_button() {
    pass
    };

