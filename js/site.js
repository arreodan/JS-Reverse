// Controller
function getValues() {
    // get the user's input
    // decide what to do with it 
    let userInput = document.getElementById('message').value;
    let reversedInput = reverseString(userInput);

    displayString(reversedInput)
}

// Business logic
function reverseString(message){
    // take string, return it in reverse
    let reversedMessage = '';
    // todo: reverse the string
    // reversedMessage = message.split('').reverse().join('');
    for (let index = message.length - 1; index >= 0; index = index - 1){
        reversedMessage = reversedMessage + message[index];
    }

    return reversedMessage;
}

// View
function displayString(reverseMessage){
    // show string on page
    document.getElementById('msg').textContent = reverseMessage;
    document.getElementById('alert').classList.remove('d-none');
}


    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'App Name',
    //         text: msg
    //     }
    // );