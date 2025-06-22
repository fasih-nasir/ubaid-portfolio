const titles = ["Shopify Developer", "WordPress Developer", "Canvas Designer"];
let currentIndex = 0;
const jobTitleElements = document.querySelectorAll(".job-title"); // Select all elements with class 'job-title'

// Function to change the title with a slide-up effect
function changeTitle() {
  // Loop through all elements with class 'job-title'
  jobTitleElements.forEach((jobTitleElement) => {
    jobTitleElement.classList.remove("slide-up"); // Remove the animation class first
    
    // Wait for a brief moment, then change the text and re-add the animation class
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % titles.length; // Update index
      jobTitleElement.textContent = titles[currentIndex]; // Change the title
      jobTitleElement.classList.add("slide-up"); // Trigger the slide-up animation
    }, 100); // Small delay to re-trigger animation
  });
}

// Start with the first title and add the slide-up class to animate
jobTitleElements.forEach((jobTitleElement) => {
  jobTitleElement.classList.add("slide-up");
});

// Change title every 5 seconds
setInterval(changeTitle, 5000);
function countUp(id, target) {
  let count = 0;
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      element.innerHTML = count;
    } else {
      clearInterval(interval); // Stop the interval once the target is reached
    }
  }, 200); // Adjust the speed of the counter
}

// Call the function for each counter
countUp('projects-count', 10);  // Start count for complete projects
countUp('clients-count', 10);   // Start count for happy clients
countUp('completed-count', 100,'%'); // Start count for completed projects


// contact form 
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
          alert("Your Msg Is Send To Admin")
              } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

var loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
  // Set a timeout to remove the loader after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    loader.remove(); // Removes the loader element from the DOM
  }, 0);
});


// ================= THEME BTN START =======================
var toogle_theme=document.getElementById("toogle_theme");
var theme_now;


// ==============================
toogle_theme.addEventListener("click",()=>{
 
localStorage.setItem( "theme", localStorage.getItem("theme") === "black" ? "white" :"black");
theme_now=localStorage.getItem("theme");
 

if(theme_now === "white"){
  document.body.style.backgroundColor=`rgb(255, 255, 255)`
  document.documentElement.style.setProperty('--background', 'rgb(228, 228, 228)'); // light background
  document.documentElement.style.setProperty('--backround1', 'rgb(175, 175, 175)'); // light background

  document.documentElement.style.setProperty('--color2', '#3d3d3d'); // light background

}
else{
  document.body.style.backgroundColor=`rgb(27, 27, 27)`;
  
  document.documentElement.style.setProperty('--background', '#161616'); // light background
  document.documentElement.style.setProperty('--backround1', '#242424'); // light background

  document.documentElement.style.setProperty('--color2', 'rgb(228, 228, 228)'); // light background


}


}
)

  
// ================= THEME BTN END =========================
