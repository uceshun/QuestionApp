var client;


function startDataUpload() {
alert ("start data upload");

// Question Status
var question = document.getElementById("question").value;
var answeri = document.getElementById("answeri").value;
var answerii = document.getElementById("answerii").value;
var answeriii = document.getElementById("answeriii").value;
var answeriv = document.getElementById("answeriv").value;
var correct_answer = document.getElementById("correct_answer").value;

// Now get the geometry values
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
var postString = "question="+question +"&answeri="+answeri+"&answerii="+answerii+"&answeriii="+answeriii+"&answeriv="+answeriv+"&correct_answer="+correct_answer; 

// Adding up all the constraints
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

// Pop-up box for showing what data have been uploaded
alert(latitude + " "+ longitude + " "+ question + " "+ answeri + " "+answerii + " "+answeriii + " "+answeriv + " "+correct_answer);

processData(postString);

}

function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30298/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}
// create the code to wait for the response from the data server, and process the response once it is received

function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}