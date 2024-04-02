function submitForm() {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const duration = document.getElementById('duration').value;
    const gun = document.getElementById('gun').value;
    const time = document.getElementById('time').value;
    const grenade = document.getElementById('grenade').value;
    const comments = document.getElementById('comments').value;


    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://k15y8fc380.execute-api.ap-south-1.amazonaws.com/test/feedback', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Thanks for your Feedback.');
            } else {
                alert('Enter Valid Inputs: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        name: name,
        email: email,
        duration: duration,
        gun: gun,
        time: time,
        grenade: grenade,
        comments: comments
    }));
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Reset the form
    this.reset();
  });
  