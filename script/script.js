const modal = document.getElementById("eventModal");
const title = document.getElementById("eventTitle");
const venue = document.getElementById("eventVenue");
const time = document.getElementById("eventTime");
const theme = document.getElementById("eventTheme");

function openModal(eventName, v, t, th) {
    title.innerText = eventName;
    venue.innerText = v;
    time.innerText = t;
    theme.innerText = th;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function coding() {
    openModal("CODING", "IT Hall", "9:30-10:30", "Basic programming in any language");
}
function ppt() {
    openModal("PRESENTATION", "IT Hall", "9:30-10:30", "Full Stack Development");
}
function bug() {
    openModal("CODE DEBUGGING", "IT Hall", "9:30-10:30", "Rectify the bug in the program");
}
function web() {
    openModal("WEB DESIGN", "IT Hall", "9:30-10:30", "Web design for TecItZ event");
}
function poster() {
    openModal("POSTER MAKING", "Deadline: Nov 10", "", "Theme: For TecItZ event");
}
function logo() {
    openModal("LOGO DESIGN", "Deadline: Nov 10", "", "Theme: For TecItZ event");
}
function video() {
    openModal("VIDEO EDITING", "Deadline: Nov 10", "", "Theme: 3 years journey");
}

// Close modal if click outside content
window.onclick = function(event) {
  if (event.target == modal) closeModal();
}
