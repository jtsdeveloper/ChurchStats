/* Chuch stats */

//create object of a Sunday's church stats
var service = {
    date: "July 26, 2015",
    attendance: 35,
    sermon: "Imagining the Unfathomable",
}

var newDate = document.getElementById("dateOutput");
newDate.textContent = service.date;

var newAttendance = document.getElementById("attendanceOutput");
newAttendance.textContent = service.attendance;

var newSermon = document.getElementById("sermonOutput");
newSermon.textContent = service.sermon;