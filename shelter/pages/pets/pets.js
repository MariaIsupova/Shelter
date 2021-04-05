var pets = [{
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

const name = document.querySelector('.name'),
  image = document.querySelector('.pet__image'),
  petType = document.querySelector('.subtitle'),
  petDescription = document.querySelector('.pets__description'),
  age = document.querySelector('.age'),
  inoculations = document.querySelector('.inoculation'),
  diseases = document.querySelector('.diseases'),
  parasites = document.querySelector('.parasites');


function getInfo(number) {
  var k
  console.log(number)
  if (number === 1) {
    k = 4
  } else if (number == 2) {
    k = 0
  } else if (number === 3) {
    k = 2
  } else if (number === 4) {
    k = 1
  } else if (number == 5) {
    k = 5
  } else if (number === 6) {
    k = 7
  } else if (number === 7) {
    k = 3
  } else if (number === 8) {
    k = 6
  }
  image.style.backgroundImage = `url('${pets[k].img}')`;
  name.innerHTML = `${pets[k].name}`;
  petType.innerHTML = `${pets[k].type} - ${pets[k].breed}`;
  petDescription.innerHTML = `${pets[k].description}`;
  age.innerHTML = "<strong>Age: </strong>" + pets[k].age;
  inoculations.innerHTML = "<strong>Inoculation: </strong>" + pets[k].inoculations;
  diseases.innerHTML = "<strong>Diseases: </strong>" + pets[k].diseases;
  parasites.innerHTML = "<strong>Parasites: </strong>" + pets[k].parasites;
  // console.log(`${pets[0].name} ${pets[0].type} - ${pets[0].breed}`)
}


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".first");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(1)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});



var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".second");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(2)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()

  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".third");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(3)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});



var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".fourth");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(4)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".fifth");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(5)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()

  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".sixth");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(6)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".seventh");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(7)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()

  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".eighth");
var close = document.querySelector(".close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
  disableScrolling()
  getInfo(8)
});

popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    enableScrolling()

  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
  enableScrolling()
});

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}