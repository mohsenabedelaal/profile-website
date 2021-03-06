var api ="https://script.google.com/macros/s/AKfycbztlTV4OjEFXC3rzN9ebxap4d_v-aYBLfXwfuEQWNwODkVOEhtYaSPGnfWOgREQvfk-/exec"

// update 2022
// var cv = {
//     general: {
//         website_name: document.getElementById('website_name'),
//         logo: document.getElementById('logo'),
//         h1: document.getElementById('h1'),
//         h2: document.getElementById('h2'),
//         cv: document.getElementById('cv') //as pdf
//     },
//     contact: {
//         email: '',
//         number: '',
//         location: '',
//         ig: '',
//         fb: '',
//         li: '',
//         tw: ''
//     },
//     personal: {
//         age: '',
//         about: '',
//         lang: ''
//     },
//     skills: [
//         { name: '', perc: '' }
//     ],
//     projects: [
//         { title: '', category: '', image: '' }
//     ]

// }
var data = {};
var spinner = document.getElementById("loader");

function LoadFromDB() {
  //step 1 is to fetch data from gsheets
  
  

  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      data = res;
      document.getElementById("website_name").innerText =
        data["header-content"]["website-name"];
      document.getElementById("logo").src =
        data["header-content"]["profile_pic"];
      document.getElementById("h1").innerText =
        data["header-content"]["full_name"];
      document.getElementById("h2").innerText =
        data["header-content"]["job_title"];
      document.getElementById("cv").href = data["header-content"]["cv"];
      document.getElementById("email").innerText =
        data["about-me-content"]["email"];
      document.getElementById("number").innerText =
        data["about-me-content"]["phone_number"];
      document.getElementById("location").innerText =
        data["about-me-content"]["location"];
      document.getElementById("lang").innerText =
        data["about-me-content"]["language"];
      document.getElementById("nabtha").innerText =
        data["about-me-content"]["about_me_details"];
      // createprojects(data.projects);
    //   createskill()
    createcertificates(data.certificates)
      spinner.style.display = "none";
    });
}

// function createskill(allskills) {
// var skills = document.getElementById('skills')
// var box = document.getElementById('skills-box')

// console.log(skills.firstChild)

//     allskills.forEach(s => {

//         var colprogress = document.createElement('div')

//         var skillbox = document.createElement('div')

//         var eachprogress = document.createElement('div')
//         eachprogress.classList.add('progress-container')
//         eachprogress.classList.add('progress-primary')

//         var skillname = document.createElement('span')
//         skillname.innerText = s.name
//         skillname.classList.add('progress-badge')

//         var skillprogress = document.createElement('div')
//         skillprogress.setAttribute("class", "progress");

//         var skillprogressbar = document.createElement('div')
//         skillprogressbar.ariaValueNow = s.perc
//         skillprogressbar.classList.add('progress-bar')
//         skillprogressbar.classList.add('progress-bar-primary')
//         skillprogressbar.setAttribute("data-aos", "progress-full");
//         skillprogressbar.setAttribute("data-aos-offset", "10");
//         skillprogressbar.setAttribute("data-aos-duration", "2000");
//         skillprogressbar.setAttribute("role", "progressbar");
//         skillprogressbar.setAttribute("aria-valuenow", s.perc);
//         skillprogressbar.setAttribute("aria-valuemin", "0");
//         skillprogressbar.setAttribute("aria-valuemax", "100");
//         skillprogressbar.setAttribute("style", "width: 80%;");

//         var skillperc = document.createElement('span')
//         skillperc.innerText = s.perc
//         skillperc.classList.add('progress-value')

//         skillprogress.appendChild(skillprogressbar)
//         skillprogress.appendChild(skillperc)

//         document.getElementById('skillbox').appendChild(skillname)
//         document.getElementById('skillbox').appendChild(skillprogress)

//     });

// }

function createprojects(projects) {
  var box = document.getElementById("pbox");
  projects.forEach((proj) => {
    var div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-md-3");
    div.classList.add("mr-2");
    div.classList.add("ml-2");
    div.style.width = "15rem";

    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("mt-2");
    img.src = proj.image;
    img.alt = proj.title;

    var h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.classList.add("mt-1");
    h5.innerText = proj.title;

    var p = document.createElement("p");
    p.classList.add("card-text");
    p.classList.add("mt-1");
    p.classList.add("mb-2");
    p.innerText = proj.category;

    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    box.appendChild(div);
  });
}
function createcertificates(certificates) {
  var box = document.getElementById("cbox");
  certificates.forEach((certificate) => {
    var div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-md-3");
    div.classList.add("mr-2");
    div.classList.add("ml-2");
    div.style.width = "15rem";

    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("mt-2");
    img.src = certificate.image;
    img.alt = certificate.title;

    var h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.classList.add("mt-1");
    h5.innerText = certificate.title;

    // var p = document.createElement("p");
    // p.classList.add("card-text");
    // p.classList.add("mt-1");
    // p.classList.add("mb-2");
    // p.innerText = proj.category;

    div.appendChild(img);
    div.appendChild(h5);
    // div.appendChild(p);
    box.appendChild(div);
  });
}
function createExperience(experiences) {
  var box = document.getElementById("experience-card");
  projects.forEach((proj) => {
    var row = document.createElement("div");
    row.classList.add("row");
    var div = document.createElement("div");

    div.classList.add("col-md-3");
    div.classList.add("mr-2");
    div.classList.add("ml-2");
    div.style.width = "15rem";

    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("mt-2");
    img.src = proj.image;
    img.alt = proj.title;

    var h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.classList.add("mt-1");
    h5.innerText = proj.title;

    var p = document.createElement("p");
    p.classList.add("card-text");
    p.classList.add("mt-1");
    p.classList.add("mb-2");
    p.innerText = proj.category;

    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    box.appendChild(div);
  });
}

function createskill() {

  var testing = "dsadsa";
  for(var i=0;i <= 3;i++){
    var box = document.getElementById('experience')
    var experience_card = document.getElementById('experience-card')
    let clone_card = experience_card.cloneNode(true)
    // clone_card.id = `experience-card-${i}`
    box.appendChild(clone_card)
  }
 
}

// function createskill(){

//     var box = document.getElementById('experience')
//     var card = document.createElement('div')
//     card.classList.add('card')
//     var div_inner = document.createElement('div')
//     div_inner.classList.add('row')

//     var div_duration = document.createElement('div')
//     div_duration.classList.add('col-md-3')
//     div_duration.classList.add('bg-primary')
//     div_duration.setAttribute('data-aos','fade-right')
//     div_duration.setAttribute('data-aos-offset','50')
//     div_duration.setAttribute('data-aos-duration','500')

//     var div_duration_value = document.createElement('div')
//     div_duration_value.classList.add('card-body')
//     div_duration_value.classList.add('cc-experience-header')

//     var p_date = document.createElement('p')
//     p_date.innerText = "dsadsa"
//     var company_name = document.createElement('div')
//     company_name.classList.add('h5')
//     company_name.innerText = "dasdasdas"

//     var information = document.createElement('div')
//     information.classList.add('col-md-9')
//     information.setAttribute('data-aos','fade-left')
//     information.setAttribute('data-aos-offset','50')
//     information.setAttribute('data-aos-duration','500')
//     var information_value = document.createElement('div')
//     information_value.classList.add('card-body')

//     var job_title = document.createElement('div')
//     job_title.classList.add('h5')
//     job_title.innerText = "dasdsada"
//     var details = document.createElement('p')
//     details.innerText = "dasdsadasjkdhkjasd djkashdkjashjkdsa"

//     card.appendChild(div_inner)
//     div_inner.appendChild(div_duration)
//     // div_duration.appendChild(div_duration_value)
//     // div_duration_value.appendChild(p_date)
//     // div_duration_value.appendChild(company_name)
//     // information.appendChild(information_value)
//     // div_inner.appendChild(information)
//     // information_value.appendChild(job_title)
//     // information_value.appendChild(details)
//     box.appendChild(card)

//     // row.classList.add('row')
//     // var div = document.createElement('div')
// //     projects.forEach(proj => {

// //         var row = document.createElement('div')
// //         row.classList.add('row')
// //         var div = document.createElement('div')

// //         div.classList.add('col-md-3')
// //         div.classList.add('mr-2')
// //         div.classList.add('ml-2')
// //         div.style.width = '15rem'

// //         var img = document.createElement('img')
// //         img.classList.add('card-img-top')
// //         img.classList.add('mt-2')
// //         img.src = proj.image
// //         img.alt = proj.title

// //         var h5 = document.createElement('h5')
// //         h5.classList.add('card-title')
// //         h5.classList.add('mt-1')
// //         h5.innerText = proj.title

// //         var p = document.createElement('p')
// //         p.classList.add('card-text')
// //         p.classList.add('mt-1')
// //         p.classList.add('mb-2')
// //         p.innerText = proj.category

// //         div.appendChild(img)
// //         div.appendChild(h5)
// //         div.appendChild(p)
// //         box.appendChild(div)
// // })

// }

