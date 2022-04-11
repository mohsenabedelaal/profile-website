var api = 'https://script.google.com/macros/s/AKfycbyxGXTQj4It4VMf0qksXq6DLmg1wVXDLzT6spU97zhiNJ5HJwL9A90-TyXONl2qX_jZaQ/exec'


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
var data = {}
var spinner = document.getElementById('loader')

function LoadFromDB() {
    //step 1 is to fetch data from gsheets
    fetch(api).then(res => res.json()).then(res => {

        console.log(res)
        data = res
        console.log('data = ', data)
        document.getElementById('website_name').innerText = data.general.website_name
        document.getElementById('logo').src = data.general.logo
        document.getElementById('h1').innerText = data.general.h1
        document.getElementById('h2').innerText = data.general.h2
        document.getElementById('cv').href = data.general.cv
        document.getElementById('gh').href = data.contact.gh
        document.getElementById('li').href = data.contact.li

        document.getElementById('age').innerText = data.personal.age
        document.getElementById('email').innerText = data.contact.email
        document.getElementById('number').innerText = data.contact.number
        document.getElementById('location').innerText = data.contact.location

        document.getElementById('lang').innerText = data.personal.lang
        document.getElementById('nabtha').innerText = data.personal.about
            // createskill(data.skills)
        createprojects(data.projects)
            // turn off the spinner 
        spinner.style.display = 'none'
    })

    fetch('https://script.google.com/macros/s/AKfycbxk0ol26QH89YTWOViFNx9FdXsfrTZRGp7SZogSFSnreVTBq5Rs6FNgv-QqqeWHMGxu/exec')
    .then(res=>res.json()).then(res=> console.log(res))
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
    var box = document.getElementById('pbox')
    projects.forEach(proj => {

        var div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('col-md-3')
        div.classList.add('mr-2')
        div.classList.add('ml-2')
        div.style.width = '15rem'

        var img = document.createElement('img')
        img.classList.add('card-img-top')
        img.classList.add('mt-2')
        img.src = proj.image
        img.alt = proj.title

        var h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.classList.add('mt-1')
        h5.innerText = proj.title

        var p = document.createElement('p')
        p.classList.add('card-text')
        p.classList.add('mt-1')
        p.classList.add('mb-2')
        p.innerText = proj.category

        div.appendChild(img)
        div.appendChild(h5)
        div.appendChild(p)
        box.appendChild(div)
    });

}