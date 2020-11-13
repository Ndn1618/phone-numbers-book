// ;(
//   async function () {

//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')

//     const data = await response.json()

//     for (let u of data) {

//       const newLi = document.createElement('LI')
//       newLi.textContent = '"userId": ' + u.userId
//       users.appendChild(newLi)

//       if (u.completed == true) {
//         newLi.style.backgroundColor = '#a6dcfb'
//         newLi.style.borderColor = '#52b9f5'
//       }
//       else {
//         newLi.style.backgroundColor = '#a8fdf5'
//         newLi.style.borderColor = 'turquoise'
//       }

//       const newDiv = document.createElement('DIV')
//       newLi.appendChild(newDiv)

//       const idElement = document.createElement('P')
//       idElement.textContent = '"id": ' + u.id
//       newDiv.appendChild(idElement)

//       const titleElement = document.createElement('P')
//       titleElement.textContent = '"title": ' + u.title
//       newDiv.appendChild(titleElement)

//       const completedElement = document.createElement('P')
//       completedElement.textContent = '"completed": ' + u.completed
//       newDiv.appendChild(completedElement)
//     }
//   }
//   )()

var newPhoneNumber = {};

var phoneNumbers = [];
