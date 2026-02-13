export default function validation(values) {
    let errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values?.name){
        if (values.name === "") {
            errors.name = "Name is required"
        } else if (values.name.length < 3 || values.name.length > 30) {
            errors.name = "Name must be between 3 and 30 characters"
        }else {
            errors.name = ""
        }
    }
    if (values.email === "") {
        errors.email = "Email is required"
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email is invalid"
    }else {
        errors.email = ""
    }
    if (values.password === "") {
        errors.password = "Password is required"
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters with uppercase, lowercase, and number"
    }else {
        errors.password = ""
    }
    return errors

}