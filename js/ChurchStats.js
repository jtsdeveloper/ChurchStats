/* Chuch stats */

var elForm,newDate,newAttendance,newSermon,newDateOutput,newAttendanceOutput,newSermonOutput;

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

elForm = document.getElementById('stats');
elForm.addEventListener('submit', printData, false);

