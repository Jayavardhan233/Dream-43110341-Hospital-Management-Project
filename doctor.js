// Navigation links
const abo = document.getElementById('abo');
abo.addEventListener("click",() => {
  window.location = 'about.html';
});

const ho = document.getElementById('ho');
ho.addEventListener("click",() => {
  window.location = 'main.html';
});

const book = document.getElementById('book');
book.addEventListener("click",() => {
  window.location = 'book.html';
});

const eme = document.getElementById('eme');
eme.addEventListener("click",() => {
  window.location = 'eme.html';
});

const con = document.getElementById('con');
con.addEventListener("click",() => {
  window.location = 'contact.html';
});

const hos = document.getElementById('hos');
hos.addEventListener("click",() => {
  window.location = 'hospital.html';
});

const doc = document.getElementById('doc');
doc.addEventListener("click",() => {
  window.location = 'doctor.html';
});

// Doctor specialization animation
function word() {
    const ip = document.querySelector("#docts");
    let a = ['Cardiology', 'Neurosciences', 'ENT'];
    let i = 0;
    let currentWord = a[i];
    let letterindex = 0;
    let displayedWord = '';

    function updatewords() {
        if (letterindex < currentWord.length) {
            displayedWord += currentWord[letterindex];
            ip.innerHTML = `Specialized Departments in Our Hospital: ` + displayedWord;
            letterindex++; 
        } else {
            i = (i + 1) % a.length;
            letterindex = 0;
            currentWord = a[i];
            displayedWord = '';
        }
    }

    setInterval(updatewords, 300);
}
word();

// Click events for departments
const departments = {
    'cardiology': {
        name: "Cardiology",
        description: "The Cardiology department specializes in heart health and cardiovascular diseases.",
        doctors: [
            { name: 'Dr. Priya', experience: '15 years', languages: 'Telugu, English, Hindi', photo: 'doctors.webp' },
            { name: 'Dr. Suresh', experience: '12 years', languages: 'Telugu, English, Hindi', photo: 'doctors.webp' }
        ]
    },
    'cardiothoracic': {
        name: "Cardiothoracic",
        description: "The Cardiothoracic department focuses on surgical treatment of diseases affecting the organs inside the thorax.",
        doctors: [
            { name: 'Dr. Arvind', experience: '10 years', languages: 'English, Tamil', photo: 'doctors.webp' },
            { name: 'Dr. Sneha', experience: '8 years', languages: 'English, Malayalam', photo: 'doctors.webp' }
        ]
    },
    'Neuroscience': {
        name: 'Neuroscience',
        description: "Neuroscience focuses on the nervous system, including the brain, spinal cord, and peripheral nerves.",
        doctors: [
            { name: 'Dr. Satwik', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Ramesh', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'nephrology': {
        name: 'Nephrology',
        description: "Nephrology is dedicated to the study and treatment of kidney function and diseases.",
        doctors: [
            { name: 'Dr. Satwik', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Ramesh', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'gastroenterology': {
        name: 'Gastroenterology',
        description: "Gastroenterology deals with the digestive system and its disorders.",
        doctors: [
            { name: 'Dr. Arun', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Satwika', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'Orthopedics':
    {
      name: 'Orthpedic',
      description: "Gastroenterology deals with the digestive system and its disorders.",
      doctors: [
          { name: 'Dr. Aruna.S', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
          { name: 'Dr. Satwika.K', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' },
      ],
  },
    'oncology': {
        name: 'Oncology',
        description: "Oncology is the branch of medicine that specializes in the diagnosis and treatment of cancer.",
        doctors: [
            { name: 'Dr. Arun', experience: '10 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Bramhanadam', experience: '35 years', languages: 'English, Telugu, Hindi', photo: 'doctors.webp' }
        ]
    },
    'organ-transplantation': {
        name: 'Organ Transplantation',
        description: "Organ transplantation is a medical procedure that involves transplanting an organ or tissue from one person to another.",
        doctors: [
            { name: 'Dr. Akara', experience: '10 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Chirenjevi', experience: '25 years', languages: 'English, Telugu, Hindi', photo: 'doctors.webp' }
        ]
    }
};

const main2 = document.getElementById('main2');

document.querySelectorAll('.m-1').forEach(item => {
    item.addEventListener('click', event => {
        const deptId = event.currentTarget.id;
        const deptInfo = departments[deptId];

        if (deptInfo) {
            main2.innerHTML = `
                <h2>${deptInfo.name} Department</h2>
                <center>
                <p style='font-size:1.5rem;color:orange'>${deptInfo.description}</p></center>
                <h3 style='margin-left:13rem;font-size:1.5rem'>Doctors:</h3>
                <div class="doctor-info">
                    ${deptInfo.doctors.map(doctor => `
                    <div class="doctor">
                        <img src="${doctor.photo}" alt="${doctor.name}">
                        <p><strong>${doctor.name}</strong></p>
                        <p>Experience: ${doctor.experience}</p>
                        <p>Languages: ${doctor.languages}</p>
                    </div>
                    `).join('')}
                </div>
            `;
        }
    });
});
