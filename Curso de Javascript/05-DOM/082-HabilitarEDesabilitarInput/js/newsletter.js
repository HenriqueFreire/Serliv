const txtEmail = document.getElementById("txtEmail")

function editEmail() {
  txtEmail.disable = false
  txtEmail.focus()
}

function disableEmail() {
  txtEmail.disable = true
}