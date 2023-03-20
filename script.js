    const form = document.getElementById('contact-form');

    form.addEventListener('submit'), function(event) {
        event.preventDefault()
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name.trim() === ''){
        alert('Por favor, ingrese su nombre')
    }

    if (email.trim() === '') {
        alert('Por favor, ingrese su correo electrónico')
    }

    if (message.trim() === '') {
        alert('Por favor, ingrese su mensaje')
    }

    const data = {
        name,
        email,
        phone,
        message,   
    }
    
    console.log(data);