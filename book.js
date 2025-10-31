document.getElementById('abo').addEventListener('click', function() {
    window.location = 'about.html';
});

document.getElementById('ho').addEventListener('click', function() {
    window.location = 'main.html';
});

document.getElementById('book').addEventListener('click', function() {
    window.location = 'book.html';
});

document.getElementById('eme').addEventListener('click', function() {
    window.location = 'eme.html';
});

document.getElementById('con').addEventListener('click', function() {
    window.location = 'contact.html';
});

document.getElementById('hos').addEventListener('click', function() {
    window.location = 'hospital.html';
});

document.getElementById('doc').addEventListener('click', function() {
    window.location = 'doctor.html';
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointment = {
        name: name,
        age: age,
        gender: gender,
        phone: phone,
        doctor: doctor,
        date: date,
        time: time
    };

    alert( `Appointment booked with ${doctor} on ${date} at ${time}`);
    alert('If there is any change in the schedule, we will inform you 24 hours before the appointment.');
    this.reset();
});

function sendSMS(phone, message) {
    console.log(`Sending SMS to ${phone}: ${message}`);
}
function word() {
    const words = document.querySelector("#docts");
    
    const a = ['Neurologist','Derminologist','ENT','Gynecology','ChildCare','Neurosurgeson','Orthppedics','cardiology'];
    let i = 0;
    let letterIndex = 0;
    let currentWord = a[i];
    let displayedWord = "";
  
    function updateWord() {
      if (letterIndex < currentWord.length) {
        displayedWord += currentWord[letterIndex];
        words.innerHTML = `Looking for a doctor:       ` + displayedWord;
        letterIndex++;
      } else {
        i = (i + 1) % a.length;
        currentWord = a[i];
        displayedWord = "";
        letterIndex = 0;
      }
    }
  
    setInterval(updateWord, 300);
  }
word()