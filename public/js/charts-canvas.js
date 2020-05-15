
window.onload = function () {

fetch();
//alert("initialized");

var chart = new CanvasJS.Chart("chartContainer", {
  theme: "dark2",
  backgroundColor: "transparent",
  animationEnabled: true,
  title:{
    text: "Covid Confirmed Cases"
  },
  axisY :{
    includeZero: false,
    title: "Number of Active Cases",
    suffix: ""
  },
  toolTip: {
    shared: "true"
  },
  legend:{
    cursor:"pointer",
    itemclick : toggleDataSeries
  },
  data: []
});
chart.render();

function toggleDataSeries(e) {
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
    e.dataSeries.visible = false;
  } else {
    e.dataSeries.visible = true;
  }
  chart.render();
}


function dateToString (date) {
  var dd = String(date.getDate() - 1).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd ;
}
function dateToString2 (date) {
  var dd = String(date.getDate() - 1).padStart(2, '0');
  var mm = date.getMonth() + 1; //January is 0!
  var month = "";
  switch (mm) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sept";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
    default:

      break;
  }
  return month + " " + dd;
}




///HTTP REQUEST



function fetch () {
  var countries = ["canada", "mexico", "france", "uk", "italy"];
  for (var i = 0; i < countries.length; i++) {
    call (countries[i]);
  }

}

function call(country) {
  let baseUrl = "https://api.covid19api.com/total/country/";
  let params = "?from=2020-03-01T00:00:00Z&to="+dateToString(new Date())+"T00:00:00Z";
  let baseUrl1 = "https://api.covid19api.com/total/dayone/country/";

  var xhttp = new XMLHttpRequest();
  let url = baseUrl + country + params;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      //alert(myObj[0].Country);
      extractData(myObj);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function extractData (data) {
  var dataPoints = [];
  for (var i = 0; i < data.length; i++) {
    var datapoint = data[i];
    var date = dateToString2(new Date(datapoint.Date));
    var point = { label: date, y: datapoint.Active };
    dataPoints.push(point);

  }
  var data = {
    type: "spline",
    visible: false,
    showInLegend: true,
    yValueFormatString: "## active",
    name: data[0].Country,
    dataPoints: dataPoints
  }
  chart.options.data.push(data);
  chart.render();
}

}