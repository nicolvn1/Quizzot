
//const btn = document.getElementById('sets');
async function getCourse(class_name) {
  console.log(class_name)
  let response = await fetch("https://api.peterportal.org/rest/v0/courses/" + class_name);
  let data = await response.json();
  const needed_data = {"department": data.department_name, "school": data.school, "description": data.description};
  console.log(needed_data);
 
}

let selected = false;
async function set_chosen(id) {

    //const buttons = document.getElementsByClassName(setbutton);
    //for (let i = 0; i < buttons.length; i++) {
    //  buttons[i].style.backgroundColor = ' #f7fcf7';
    //}
    const i31 = document.getElementById('I&CSCI31');
    const i32 = document.getElementById('I&CSCI32');
    const i33 = document.getElementById('I&CSCI33');
    i31.style.backgroundColor = '#cce5e7'
    i32.style.backgroundColor = '#cce5e7'
    i33.style.backgroundColor = '#cce5e7'
    selected = id;
    
    const btn = document.getElementById(id);
    btn.style.backgroundColor = '#a3cae0'

  

}

function create_link() {
  if (selected == "I&CSCI31") {
    console.log('ICS31.html')
    return `"location.href='ICS31.html'"`;
  } else if (selected == "I&CSCI32") {
    return `"location.href='ICS32.html'"`;
  } else if (selected == "I&CSCI33") {
    return `"location.href='ICS33.html'"`;
  }
  
  return selected;
  // if (document.getElementById('I&CSCI31').style.backgroundColor == '#a3cae0') {
  //   console.log('set1.html')
  //   return 'set1.html'}
  // if (document.getElementById('I&CSCI32').style.backgroundColor == '#a3cae0') {return 'set2.html'}
}
function returncoursedata() {
  if (selected != false) {
    return getCourse(selected);
  } 

  return selected;
}
function go_to_set1() {}


// function getClass(class_name) {
//   let response = await fetch("https://api.peterportal.org/rest/v0/courses/" + class_name);
//   let data = await response.json();
//   console.log(data);
//   let info;
//   if(data.id) {
//     info = <div className="classesinformation">
//       <p id="title">{data.title}</p>
//       <p id="department">{data.department}</p>
//       <p id="description">{data.description}</p>
//     </div>
//   }
//   return(
//     <div className="class">
//         {props.name}
//         <div>
//             {info}
//         </div>
//     </div>
// )
// }
