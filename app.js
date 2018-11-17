// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcDDEwgxlHEvmEloxXJNYAJ6FfAPvrgpk",
    authDomain: "traintime-6b521.firebaseapp.com",
    databaseURL: "https://traintime-6b521.firebaseio.com",
    projectId: "traintime-6b521",
    storageBucket: "traintime-6b521.appspot.com",
    messagingSenderId: "1062186007516"
};

firebase.initializeApp(config);

var database = firebase.database();


$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var $nextTrain = $("#train-name-input").val().trim();
    var $nextTrainDestination = $("#destination-input").val().trim();
    var $nextTrainTime = $("#time-input").val().trim();
    var $nextTrainFrequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: $nextTrain,
        destination: $nextTrainDestination,
        time: $nextTrainTime,
        frequency: $nextTrainFrequency
    }
    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

});

database.ref().on("child_added", function (childSnapshot) {

    var firstTime = childSnapshot.val().time;
    var nextTrainName = childSnapshot.val().name;
    var nextTrainFrequency = parseInt(childSnapshot.val().frequency);
    var nextTrainDestination = childSnapshot.val().destination;
    var nextTrainTime = moment(firstTime, 'HH:mm');
    var now = moment();
    var timeDiff = moment().diff(moment(nextTrainTime), 'minutes');
    var timeRemaining = timeDiff % nextTrainFrequency;
    var minutesAway = nextTrainFrequency - timeRemaining;
    var nextArrival = moment().add(minutesAway, 'minutes').format('hh:mm a')
    


    var newRow = $("<tr>").append(
        $("<td>").text(nextTrainName),
        $("<td>").text(nextTrainDestination),
        $("<td>").text(nextTrainFrequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway, 'minutes')
    )
    $("#incomingTrains > tbody").append(newRow);
})
