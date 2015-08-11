/* Chuch stats */

var elForm,newDate,newAttendance,newSermon,newDateOutput,newAttendanceOutput,newSermonOutput;

elForm = document.getElementById('stats');

function printData(event){
    newDate = document.getElementById("date").value;
    newAttendance = document.getElementById("attendance").value;
    newSermon = document.getElementById("sermon").value;
    newDateOutput = document.getElementById("dateOutput");
    newAttendanceOutput = document.getElementById("attendanceOutput");
    newSermonOutput = document.getElementById("sermonOutput");
    
    //write the new info into 2nd div
    newDateOutput.innerHTML = newDate;
    newAttendanceOutput.innerHTML = newAttendance;
    newSermonOutput.innerHTML = newSermon;
    event.preventDefault();
}

elForm.addEventListener('submit', printData, false);

