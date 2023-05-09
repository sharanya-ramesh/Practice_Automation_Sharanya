const passwordField = $("#password"),
    repeatPasswordField = $("#passwordRepeat"),
    termsAndConditions= $("#termsAndConditions"), // this was hardcoded, this is now moved to a variable
    termsCheckbox = $("#terms");

function validateForm() {
    ClearAllBorders() // clear borders before form is validated again

    // check for termsAreChecked was not added, this has been added 
    if (!isPasswordLengthValid() || !passwordsAreMatch() || !termsAreChecked()) {
        alert("Failed to create account")
        return false
    }
    alert("Account created successfully")
    return true
}

function isPasswordLengthValid() {
    const passwordText = passwordField.val()
    // fix the conditions as the max is 16 included and min is 6 included , modified the condition here
    if (passwordText.length >= 17 || passwordText.length < 6) {
        setBorderColour(passwordField, "red")
        return false
    }
    return true
}

function passwordsAreMatch() {
    // condition should check for passwordField.val != repeatPasswordField 
    if (passwordField.val() !== repeatPasswordField.val()) {
        setBorderColour(passwordField, "red")
        setBorderColour(repeatPasswordField, "red")
        return false
    }
    return true
}

function termsAreChecked() {
    if (!termsCheckbox.is(':checked')) {
        setBorderColour(termsAndConditions, "red")
        return false
    }
    return true
}

function setBorderColour(field, colour) {
    field.css("border-style", "solid")
    field.css("border-color", colour)
}

// function to clear all borders before re validating the form
function ClearAllBorders(){
    ClearBorder(passwordField)
    ClearBorder(repeatPasswordField)
    ClearBorder(termsAndConditions)
}

function ClearBorder(field){
    field.css('border-style', '')
    field.css('border-color', '')
}