function validateform() {

  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var topic = document.myform.topic.value;
  var message = document.myform.message.value;

  if (name === '') {
    alert("Palun sisesta nimi!");
    return false;
  } else if (email === '') {
    alert("Palun sisesta email!");
    return false;
  } else if (topic === '') {
    alert("Palun sisesta teema!");
    return false;
  } else if (message === '') {
    alert("Palun sisesta sõnum!");
    return false;
  }
}