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

        document.getElementById('fb').href = data.contact.fb
        document.getElementById('tw').href = data.contact.tw
        document.getElementById('gh').href = data.contact.gh
        document.getElementById('li').href = data.contact.li

        document.getElementById('age').innerText = data.personal.age
        document.getElementById('email').innerText = data.contact.email
        document.getElementById('number').innerText = data.contact.number
        document.getElementById('location').innerText = data.contact.location
        
        document.getElementById('lang').innerText = data.contact.lang
        document.getElementById('nabtha').innerText = data.personal.about
        createskill(data.skills)
    })
}

function createskill(allskills) {
    // var skills = document.getElementById('skills')
    var box = document.getElementById('skills-box')

    // console.log(skills.firstChild)

    allskills.forEach(s => {

        var skillname = document.createElement('span')
        skillname.innerText = s.name
        skillname.classList.add('progress-badge')

        var skillprogress = document.createElement('div')

        var skillprogressbar = document.createElement('div')
        skillprogressbar.ariaValueNow = s.perc
        skillprogressbar.classList.add('progress-bar')
        skillprogressbar.classList.add('progress-bar-primary')


        var skillperc = document.createElement('span')
        skillperc.innerText = s.perc
        skillperc.classList.add('progress-value')

        skillprogress.appendChild(skillprogressbar)
        skillprogress.appendChild(skillperc)

        document.getElementById('skillbox').appendChild(skillname)
        document.getElementById('skillbox').appendChild(skillprogress)



    });


}
function test(){
    // alert('test')
    // var a ;
    var box = document.getElementById('projects-box')
    var temp = document.getElementById('temp')
    // var clon = temp.content.cloneNode(true);
    // console.log(clone)
    var div = temp.content.querySelector(".h4");
    div.innerText = 'test'
    var clone =  temp.content.cloneNode(true);
    clone.classList.add('visibility') = 'visible'
    // a = document.importNode(div, true);
    // a.textContent = 'hello'
    box.appendChild(clone)

    console.log(clone)
}