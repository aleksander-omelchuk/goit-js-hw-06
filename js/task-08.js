const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit (evn) {
    evn.preventDefault()
    const {
        elements: {email, password},
    } = evn.currentTarget

    if (email.value === '' || password.value === '') {
        return alert ('Please fill in all the fields')

    }

    const userDetails = {
        email: email.value,
        password: password.value
    }

    console.log(userDetails)
    evn.currentTarget.reset()
}
