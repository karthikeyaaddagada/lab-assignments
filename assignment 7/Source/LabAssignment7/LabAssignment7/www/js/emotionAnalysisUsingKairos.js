angular
    .module('myApp')
    .controller('EmotionAnalysisController', EmotionAnalysisController);

EmotionAnalysisController.$inject = ['$scope'];
function EmotionAnalysisController($scope,$window) {
    $scope.getEmotionAnalysisData=function(){
        var url='https://api.kairos.com/v2/media?source=';
var request = new XMLHttpRequest();

request.open('POST', 'https://api.kairos.com/v2/media?source=http://media.kairos.com/test.flv');

request.setRequestHeader('app_id', '4985f625');
request.setRequestHeader('app_key', '4423301b832793e217d04bc44eb041d3');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    var result=JSON.parse(this.responseText);
    var table='';
            table+="<label id='tableLabel'>Emotion Analysis Data</label>";
            table+="<tbody>";
            table+="<tr><td>Id</td><td>"+result.id+"</td></tr>";
            table+="<tr><td>Media Type</td><td>"+result.media_info.type+"</td></tr>";
            table+="<tr><td>Age Group</td><td>"+result.frames[0].people[0].demographics.age_group+"</td></tr>";
            table+="<tr><td>Gender</td><td>"+result.frames[0].people[0].demographics.gender+"</td></tr>";
            table+="<tr><td>Glasses</td><td>"+result.frames[0].people[0].appearance.glasses+"</td></tr>";
            table+="<tr><td>Anger</td><td>"+result.frames[0].people[0].emotions.anger+"</td></tr>";
            table+="<tr><td>Disgust</td><td>"+result.frames[0].people[0].emotions.disgust+"</td></tr>";
            table+="<tr><td>Fear</td><td>"+result.frames[0].people[0].emotions.fear+"</td></tr>";
            table+="<tr><td>Joy</td><td>"+result.frames[0].people[0].emotions.joy+"</td></tr>";
            table+="<tr><td>Sadness</td><td>"+result.frames[0].people[0].emotions.sadness+"</td></tr>";
            table+="<tr><td>Glances</td><td>"+result.frames[0].people[0].tracking.glances+"</td></tr>";
            table+="<tr><td>Dwell</td><td>"+result.frames[0].people[0].tracking.dwell+"</td></tr>";
            table+="<tr><td>Attention</td><td>"+result.frames[0].people[0].tracking.attention+"</td></tr>";
            table+="<tr><td>Blink</td><td>"+result.frames[0].people[0].tracking.blink+"</td></tr>";
            table+="</tbody>";
            document.getElementById("data").innerHTML=table;
  }
};

request.send();
    }
} 
