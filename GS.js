const scriptURL = 'https://script.google.com/macros/s/AKfycbxmNdOuZYafI3ZslvJpWF4uRCYz1JcyRmN5Y1uHykCAPur6acqmacBk22CMHs9VlcnPsw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! you have successfully RSVP." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})