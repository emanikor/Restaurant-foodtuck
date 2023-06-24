
const data = [{
    id: 1,
    name: "conny iamazon",
    image: "images/people03.jpg",
    job: "Front-end developer",
    text: "Working with UNI-SOKO ecommerce was a game-changer for our web development project. Their expertise and attention to detail resulted in a visually stunning and highly functional website."
},
{
    id: 2,
    name: "alexa white",
    image: "images/user-1.png",
    job: "Web designer",
    text: "Working with UNI-SOKO ecommerce designers was an absolute pleasure. Their creative vision and attention to detail brought our website to life. They understood our brand and translated it into a visually stunning design that perfectly captured our message. "
},
{
    id: 3,
    name: "collins steve",
    image: "images/user-2.png",
    job: "software engineer",
    text: "I had the privilege of collaborating with software engineer at uni-soko on our e-commerce project, and their expertise and dedication were instrumental in its success. Their deep understanding of software engineering principles and e-commerce best practices enabled us to build a robust and scalable platform"
},
{
    id: 4,
    name: "jane ayo",
    image: "images/user-3.png",
    job: "backend developer",
    text: "consistently delivered clean and well-structured code, ensuring the reliability and performance of our application. Their attention to detail and meticulous testing approach helped us identify and resolve potential issues proactively."
}];

const img = document.getElementById('personimg');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')

// set starting item
let currentItem = 0;

// load initial
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// show person
function showPerson (){
    const item = data[currentItem];
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
   currentItem++
   if(currentItem > data.length -1 )
   currentItem = 0;
   showPerson(currentItem);
})

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = data.length-1;
    }
    
    showPerson();
 })



