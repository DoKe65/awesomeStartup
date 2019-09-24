// global variables
const list = document.getElementById("employee_list");
const url = "https://randomuser.me/api/?results=12&nat=us,au,ca,ch,de,gb,fr";
let employees = [];

// import 12 employees from https://randomuser.me

function generateData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.results;

      // generateCards(results);
      console.log(results);

      results.map(result => {
          let employee = {};
          employee.image = result.picture.large;
          employee.firstName = changeCase(result.name.first);
          employee.lastName = changeCase(result.name.last);
          employee.city = changeCase(result.location.city);
          employee.phone = result.name.phone;
          employee.street = `${changeCase(result.location.street)},`;
          employee.state = result.location.state;
          employee.zipCode = result.location.postcode;
          employee.birthday = result.dob.date;
          employees.push(employee);
        })
        generateCards(employees);
      })

      // results.map(result => console.log(`${result.name.first} ${result.name.last}`))

    .catch(error => console.log("Looks like there was a problem", error))
}

generateData();

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const results = data.results;
//     generateCards(results);
//     console.log(results);
//
//     // results.map(result => console.log(`${result.name.first} ${result.name.last}`))
//   })
//   .catch(error => console.log("Looks like there was a problem", error))



// function generateData(data) {
//   let employees = [];
//   data.map(result => {
//     let employee = {};
//     employee.firstName = changeCase(result.name.first);
//     employee.lastName = changeCase(result.name.last);
//     employee.city = changeCase(result.location.city);
//     employee.phone = result.name.phone;
//     employee.street = `${changeCase(result.location.street)},`;
//     employee.state = result.location.state;
//     employee.zipCode = result.loactaion.postcode;
//     employee.birthday = result.dob.date;
//   })
//   employees.push(employee);
// }

function generateCards(data) {
  let html = [];
  data.map(data => {
    let firstName = data.firstName;
    let lastName = data.lastName;
    let city = data.city;
    const thumbnail = `
      <section class="employee-card"><img class="employee-img" src=${data.image}>
      <div class="card">
      <h2>${firstName} ${lastName}</h2>
      <p>${data.email}</p>
      <p>${city}</p>
      </div>
      </section>`;
    html += thumbnail;

  });
  list.innerHTML = html;
}

function changeCase(str) {
  str = str.replace("ß", "ss");
  if(str.includes("-")) {
    str = str.replace("-", " - ");
  }
  let words = str.split(" ");
  let newString = [];
  words.forEach(word => newString += `${word[0].toUpperCase()}${word.slice(1)} `);
  newString = newString.replace(" - ", "-");
  return newString;
}

// muss in PromiseAll
// generateCards(employees);

list.addEventListener("click", (e) => {
    if(e.target !== list) {
      generateModal(target);
    }
  })

function generateModal(e) {
  let modal = document.createElement("div");
  modal.setAttribute("id", "employee-modal");
  modal.style.display = "block";
  modal.style.color = "white";
  modal.style.fontSize = "10em";
  let name = e.target.getElementByTagName("h2").innerHTML;
  // modal.innerHTML = e.image;
  console.log(name);
  document.body.appendChild(modal);

}

// function generateModal(data) {
//   let html = [];
//     const thumbnail = `
//       <section><img src=${result.picture.medium}>
//       <div class="card">
//       <p>${firstName} ${lastName}</p>
//       <p>${result.email}</p>
//       <p>${city}</p>
//       </div>
//       </section>`;
//     html += thumbnail;
//   });
//   list.innerHTML = html;
// }
