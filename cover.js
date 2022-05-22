
async function getCourse(class_name) {
  if (class_name == "CreateYourOwn") {
    document.getElementById("course_info").innerHTML =`You can make your own sets to quiz yourself in any subject!`
  } else {
    console.log(class_name)
    let response = await fetch("https://api.peterportal.org/rest/v0/courses/" + class_name);
    let data = await response.json();
    const needed_data = {"department": data.department_name, "school": data.school, "description": data.description};
    console.log(needed_data);

    //make "select course" disappear, make course_info appear
    document.getElementById("course_info").innerHTML =`
    <div class="centerplay" id="course_info"> </div>
    Department: ${needed_data["department"]}
    <br></br>
    School: ${needed_data["school"]}
    <br></br>
    Description: ${needed_data["description"]}
    <br></br>`
  }
  //change course_info style soo it becomes visible and colored
  document.getElementById("select_course").innerHTML = ``
  document.getElementById("course_info").style.color="black";
  document.getElementById("course_info").style.marginTop="30px";
  document.getElementById("course_info").style.textAlign="center";
  document.getElementById("course_info").style.margin="auto";
  document.getElementById("course_info").style.width="1050px";
  document.getElementById("course_info").style.borderRadius="20px";
  document.getElementById("course_info").style.padding="5px";
  document.getElementById("course_info").style.backgroundColor="#73babf"; 
  document.getElementById("course_info").style.font="ducimain, helvectica";
}

let selected = false;
async function set_chosen(id) {

    const i31 = document.getElementById('I&CSCI31');
    const i32 = document.getElementById('I&CSCI32');
    const i33 = document.getElementById('I&CSCI33');
    const cyo = document.getElementById('CreateYourOwn');
    i31.style.backgroundColor = '#498cb2'
    i32.style.backgroundColor = '#498cb2'
    i33.style.backgroundColor = '#498cb2'
    cyo.style.backgroundColor = '#498cb2'
    selected = id;
    
    const btn = document.getElementById(id);
    btn.style.backgroundColor = '#73babf'
}

function create_link() {
  if (selected == "I&CSCI31") {
    console.log('ICS31.html')
    return location.href='ICS31.html';
  }
  else if (selected == "I&CSCI32") {
    return location.href='ICS32.html';
  }
  else if (selected == "I&CSCI33") {
    return location.href='ICS33.html';
  }
  else if (selected == "CreateYourOwn") {
    return location.href='createyourown.html';
  }
  
  return selected;
}