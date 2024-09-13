let s = 'Welcome to Hemanta Pradhan\'s Portfolio, showcasing innovation and excellence in every project.';

if (s === 'Welcome to Hemanta Pradhan\'s Portfolio, showcasing innovation and excellence in every project.') {
    alert(s);
}
// const todoText = document.getElementById("submit-btn").value;
// if (todoText === '') {
//     alert('Please enter above data!');
//     return;
// }
function submitMessage() {
    const submitText = document.getElementById('message').value;
    if (submitText === '') {
        alert('Please enter above details!');
        return;
    }
}
//     const todoContainer = document.getElementById('formfield-container'); // Corrected ID reference
//     const newTodo = document.createElement('h2');
//     newTodo.innerHTML = submitText + ' <img src="delete.jpg" height="20px" width="20px" onclick="deleteTodo(this)">';
//     todoContainer.appendChild(newTodo); // Corrected reference
//     document.getElementById('message').value = ''; 
// }

// function deleteTodo(element) {
//     const todo = element.parentElement;
//     todo.remove();
// }


// function submitMessage() {
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message').value;

//     // Create message to display
//     var displayMessage = `
//         <h3>Message Submitted</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong> ${message}</p>
//     `;

//     // Display the message
//     document.getElementById('messageBox').innerHTML = displayMessage;

//     // Clear the form fields
//     document.querySelector('.form').reset();

//     // Prevent form submission (refresh)
//     return false;
// }


// function submitMessage() {
//     // Ensure the DOM is fully loaded
//     document.addEventListener('DOMContentLoaded', function() {
//         // Get form values
//         var name = document.getElementById('name').value;
//         var email = document.getElementById('email').value;
//         var subject = document.getElementById('subject').value;
//         var message = document.getElementById('message').value;

//         // Check if all fields are filled
//         if (name && email && subject && message) {
//             // Create message to display
//             var displayMessage = `
//                 <h3>Message Submitted</h3>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Subject:</strong> ${subject}</p>
//                 <p><strong>Message:</strong> ${message}</p>
//             `;

//             // Display the message
//             document.getElementById('messageBox').innerHTML = displayMessage;

//             // Clear the form fields
//             document.getElementById('contactForm').reset();
//         } else {
//             alert('Please fill out all fields before submitting.');
//         }
//     });

//     // Prevent form submission (refresh)
//     return false;
// }

