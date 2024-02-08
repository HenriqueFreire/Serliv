function sendEmail() {
  const txtEmail = document.querySelector('#txtEmail').value
  const msgFeedBack = document.querySelector('#newsletterFeedback')
   msgFeedBack.textContent = `O e-mail: ${txtEmail} foi cadastradocom sucesso!`
}