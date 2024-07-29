const loginvalidation = (values) => {

    let errors = {}

    if (typeof values.email !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(values.email)) {
            errors.email = "Please enter valid email address.";
        }
    }

    if (typeof values.password !== "undefined") {
        var strongPswdRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*`~])(?=.{8,})");
        if (!strongPswdRegEx.test(values.password)) {
            errors.password = "Please use a strong password of total 8 letters and in which atleast one special character,one lower case and one upper case letter is used ";
        }

    }

    return errors;

}

export default loginvalidation;