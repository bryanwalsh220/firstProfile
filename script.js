function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // window.onbeforeunload = function () {
  //   window.scrollTo(0,0);
  // }

  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}




var div1 = document.getElementById('panel-1');
var img1 = document.getElementById('amazon');
var img2 = document.getElementById('vistage');
var img3 = document.getElementById('medix');




var display = 0

function hideShow1() {
  div1.style.display = 'block';
  div2.style.display = 'none';
  div3.style.display = 'none';
  img1.style.display = 'block';
  img2.style.display = 'none';
  img3.style.display = 'none';

  // if (display == 1) {
  // }
  // else {
  //   div1.style.display = 'none';
  //   display = 1
  // }
}

var div2 = document.getElementById('panel-2');


function hideShow2() {
  div2.style.display = 'block';
  div1.style.display = 'none';
  div3.style.display = 'none';
  img2.style.display = 'block';
  img1.style.display = 'none';
  img3.style.display = 'none';
  // if (display == 1) {
  // }
  // else {
  //   div2.style.display = 'none';
  //   display = 1
  // }
}

var div3 = document.getElementById('panel-3');
var display = 0;

function hideShow3() {
  div3.style.display = 'block';
  div1.style.display = 'none';
  div2.style.display = 'none';
  img3.style.display = 'block';
  img2.style.display = 'none';
  img1.style.display = 'none';
  // if (display == 1) {
  // }
  // else {
  //   div3.style.display = 'none';
  //   display = 1
  // }
}


// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const about = entry.target.getElementById("aboutMe");

//     if (entry.isIntersecting) {
//       about.classList.add('animate__fadeInUp');
//       return; 
//     }
//     about.classList.remove('animate__fadeInUp');
//   })
// });

// observer.observe(document.getElementById("aboutMe"));


// on first view





const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
    } else {
      entry.target.classList.remove('animate__fadeIn');
    }
  })
});

const fadeIn = document.querySelectorAll(".animate__fadeIn");
fadeIn.forEach((el) => observer.observe(el));




// when leaving view

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.) {
//       entry.target.classList.add('animate__fadeOutUp');
//     } else {
//       entry.target.classList.remove('animate__fadeOutUp');
//     }
//   })
// });

// const fadeIn = document.querySelectorAll(".animate__fadeOutUp");
// fadeIn.forEach((el) => observer.observe(el));


function popUp(element) {
  element.classList.add("shadow");
}

function popIn(element) {
  element.classList.remove("shadow");
}