
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
  legend:{
    cursor:"pointer",
    itemclick : toggleDataSeries
  },
  toolTip: {
    shared: "true"
  },
  
  data: []
});
//chart.render();


var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia, Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Kosovo", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and Grenadines", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone","Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan, Republic of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Viet Nam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
load("1");
load("2");
load("3");
load("4");






var selected = ["Choose...", "Choose...", "Choose...", "Choose..."];

function load(id) {
  //alert("load");
    var x = document.getElementById(id);
    for(var i = 0; i < countries.length; i++) {

      var option = document.createElement("option");
      //alert(countries[i]);
      //option.index = i;
      option.text = countries[i];
      x.appendChild(option);
  }
}

function onChange(selectObject, i){
  
  var value = selectObject.value;  
  console.log(value);
  hide();
  selected[i] = value;
  show();
  //hide(index[i]);
  //show(value - 1);
  //index[i] = value - 1;

}



function hide() {

  for(var i = 0; i < chart.options.data.length; i++) {
    chart.options.data[i].visible = false;
  }
}

function show() {
  for(var i = 0; i < chart.options.data.length; i++) {
    var name = chart.options.data[i].name;
    if(selected.includes(name)){
      chart.options.data[i].visible = true;
    }
  }
  chart.render();
}


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

//var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See (Vatican City State)", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Korea (South)", "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia, Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Kosovo", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and Grenadines", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone","Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic (Syria)", "Taiwan, Republic of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela (Bolivarian Republic)", "Viet Nam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];



///HTTP REQUEST

function fetch () {
  //var countries = ["canada", "mexico", "france", "uk", "italy"];
  //var countries = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia, Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Kosovo", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and Grenadines", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone","Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan, Republic of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Viet Nam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
  
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
    //showInLegend: true,
    yValueFormatString: "## active",
    name: data[0].Country,
    dataPoints: dataPoints
    //color: generateRandomColor()
  }
  chart.options.data.push(data);
  chart.render();
  customLegends(chart,legendListId);

}

/*
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
}
*/

/*

window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer",
  {    
      axisY:{
        includeZero:false,
      },      
      data: [
         {
        type: "line",
        color: "#1aaf5d",
        markerSize: 0,

        dataPoints: [{y: 95.165}, {y: 95.541}, {y: 95.611}, {y: 95.594}, {y: 95.583}]
    }, {
        type: "line",
        color: "#f2c500",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 99.966}]
    }, {
        type: "line",
        color: "#f45b00",
        markerSize: 0,

        dataPoints: [{y: 99.932}, {y: 99.967}, {y: 100.0}, {y: 100.0}, {y: 99.966}]
    }, {
        type: "line",
        color: "#8e0000",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 99.967}, {y: 99.966}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#0e948c",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 99.967}, {y: 99.966}, {y: 99.967}, {y: 100.0}]
    }, {
        type: "line",
        color: "#8cbb2c",
        markerSize: 0,

        dataPoints: [{y: 99.966}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#f3de00",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#c02d00",
        markerSize: 0,

        dataPoints: [{y: 98.206}, {y: 97.971}, {y: 99.526}, {y: 99.705}, {y: 98.138}]
    }, {
        type: "line",
        color: "#5b0101",
        markerSize: 0,
 
        dataPoints: [{y: 99.695}, {y: 99.803}, {y: 98.306}, {y: 98.165}, {y: 99.695}]
    }, {
        type: "line",
        color: "#0075c2",
        markerSize: 0,

        dataPoints: [{y: 99.797}, {y: 99.836}, {y: 99.898}, {y: 99.836}, {y: 99.864}]
    }, {
        type: "line",
        color: "#1aaf5d",
        markerSize: 0,

        dataPoints: [{y: 99.796}, {y: 99.869}, {y: 99.864}, {y: 99.836}, {y: 99.898}]
    },  {
        type: "line",
        color: "#f45b00",
        markerSize: 0,

        dataPoints: [{y: 99.898}, {y: 99.869}, {y: 99.864}, {y: 99.934}, {y: 99.763}]
    }, {
        type: "line",
        color: "#8e0000",
        markerSize: 0,

        dataPoints: [{y: 99.797}, {y: 99.934}, {y: 99.83}, {y: 99.934}, {y: 99.932}]
    }, {
        type: "line",
        color: "#0e948c",
        markerSize: 0,
        
        dataPoints: [{y: 99.932}, {y: 99.934}, {y: 99.932}, {y: 99.901}, {y: 99.966}]
    }, {
        type: "line",
        color: "#8cbb2c",
        markerSize: 0,
        
        name: "ngiap17a: CPU % Idle for Cpu23",

        dataPoints: [{y: 99.932}, {y: 99.934}, {y: 99.966}, {y: 99.967}, {y: 99.898}]
    }, {
        type: "line",
        color: "#f3de00",
        markerSize: 0,

        dataPoints: [{y: 99.898}, {y: 99.934}, {y: 99.932}, {y: 99.901}, {y: 99.898}]
    }, {
        type: "line",
        color: "#c02d00",
        markerSize: 0,

        dataPoints: [{y: 99.932}, {y: 99.967}, {y: 99.932}, {y: 99.901}, {y: 99.966}]
    }, {
        type: "line",
        color: "#5b0101",
        markerSize: 0,

        dataPoints: [{y: 99.966}, {y: 99.967}, {y: 99.966}, {y: 99.934}, {y: 99.898}]
    }, {
        type: "line",
        color: "#0075c2",
        markerSize: 0,

        dataPoints: [{y: 99.966}, {y: 99.934}, {y: 100.0}, {y: 99.901}, {y: 99.966}]
    }, {
        type: "line",
        color: "#1aaf5d",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 99.967}, {y: 99.932}, {y: 99.967}, {y: 99.932}]
    }, {
        type: "line",
        color: "#f2c500",
        markerSize: 0,

        dataPoints: [{y: 99.898}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 99.932}]
    },  {
        type: "line",
        color: "#8e0000",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 99.934}, {y: 99.966}, {y: 99.967}, {y: 99.966}]
    }, {
        type: "line",
        color: "#0e948c",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 99.967}, {y: 100.0}, {y: 99.967}, {y: 99.966}]
    }, {
        type: "line",
        color: "#8cbb2c",
        markerSize: 0,

        dataPoints: [{y: 98.948}, {y: 99.08}, {y: 98.947}, {y: 99.144}, {y: 99.149}]
    }, {
        type: "line",
        color: "#f3de00",
        markerSize: 0,

        dataPoints: [{y: 99.627}, {y: 99.803}, {y: 99.796}, {y: 99.737}, {y: 99.728}]
    }, {
        type: "line",
        color: "#c02d00",
        markerSize: 0,

        dataPoints: [{y: 96.756}, {y: 96.927}, {y: 96.224}, {y: 96.539}, {y: 96.457}]
    }, {
        type: "line",
        color: "#5b0101",
        markerSize: 0,

        dataPoints: [{y: 96.628}, {y: 96.482}, {y: 96.423}, {y: 96.348}, {y: 96.261}]
    }, {
        type: "line",
        color: "#0075c2",
        markerSize: 0,

        dataPoints: [{y: 96.531}, {y: 96.74}, {y: 96.757}, {y: 96.861}, {y: 96.232}]
    }, {
        type: "line",
        color: "#1aaf5d",
        markerSize: 0,
        
        dataPoints: [{y: 96.464}, {y: 96.547}, {y: 96.461}, {y: 96.797}, {y: 96.623}]
    }, {
        type: "line",
        color: "#f2c500",
        markerSize: 0,
        
        dataPoints: [{y: 96.994}, {y: 96.517}, {y: 96.69}, {y: 96.481}, {y: 96.232}]
    }, {
        type: "line",
        color: "#f45b00",
        markerSize: 0,

        dataPoints: [{y: 96.926}, {y: 97.061}, {y: 96.361}, {y: 96.577}, {y: 96.104}]
    }, {
        type: "line",
        color: "#0e948c",
        markerSize: 0,
        
        dataPoints: [{y: 99.217}, {y: 99.08}, {y: 99.15}, {y: 99.145}, {y: 98.981}]
    }, {
        type: "line",
        color: "#8cbb2c",
        markerSize: 0,

        dataPoints: [{y: 99.898}, {y: 99.901}, {y: 99.864}, {y: 99.836}, {y: 99.83}]
    }, {
        type: "line",
        color: "#f3de00",
        markerSize: 0,
        
        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#c02d00",
        markerSize: 0,
 
        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#5b0101",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 99.967}, {y: 100.0}]
    }, {
        type: "line",
        color: "#0075c2",
        markerSize: 0,
        
        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#1aaf5d",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }, {
        type: "line",
        color: "#f2c500",
        markerSize: 0,

        dataPoints: [{y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}, {y: 100.0}]
    }
    ]

 });

chart.render();

//Add custom-legends as list and attach click event to that
var legendListId = document.getElementById("legendList");
customLegends(chart,legendListId);

function customLegends(chart, legendListId){
    for(var i=0; i < chart.options.data.length; i++){ 
      var li = document.createElement("li");
      li.style.color = chart.options.data[i].color;
      li.appendChild(document.createTextNode("Legend Test "+(i+1)));
      legendListId.appendChild(li); 
      $('li').each(function (i) {
          $(this).attr('id', (i));
      });
    }
    
    //Add click event to Custom-Legends being clicked
    $('li').click(function (event) {        
         var index = $(this).index();
         var x = document.getElementById(index);   
         if (typeof (chart.options.data[index].visible) === "undefined" || chart.options.data[index].visible) {
            x.style.color = LightenDarkenColor(chart.options.data[index].color, -70);
            //x.style.color = "white";
            console.log(x.style.color);
            chart.options.data[index].visible = false;
         } else {
            x.style.color = chart.options.data[index].color;
            chart.options.data[index].visible = true;
         }
         chart.render();
    });  
}

function LightenDarkenColor(col, amt) {
  if ( col[0] == "#" ) {
      col = col.slice(1);
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00FF) + amt;
  var g = (num & 0x0000FF) + amt;


  var newColor = inRange(g) | (inRange(b) << 8) | (inRange(r) << 16);
  return "#"+newColor.toString(16);
}

function inRange(num) {
  if (num > 255) {
    return 255;
  }
  if (num < 0) {
    return 0;
  }
  return num;
}


}
*/