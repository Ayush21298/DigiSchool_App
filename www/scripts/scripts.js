var datecode = "hi-IN";

var options = {
  message: 'DigiSchool', // not supported on some apps (Facebook, Instagram)
  subject: 'Share', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'DigiSchool Share', // Android only, you can override the default share sheet title
  // appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
  iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
};

var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
};


function Translate() {
  var language = localStorage.getItem("language");
  console.log(language);
  if (language == "hindi") {
    Hindi();
  } else {
    English();
  }
}

function Hindi() {
  localStorage.setItem("language", "hindi");
  var eng = document.getElementsByClassName("en");
  datecode = "hi-IN";
  for (var i = 0; i < eng.length; i += 1) {
    eng[i].style.display = "none";
  }
  var hin = document.getElementsByClassName("hi");
  for (var i = 0; i < hin.length; i += 1) {
    hin[i].style.display = "block";
  }
  document.getElementById("language-ctrl").innerHTML = "भाषा";
  if (document.getElementById("myState")) {
    document.getElementById("myState").innerHTML =
      '<option value="">राज्य चुने</option> <option value="Rajasthan">राजस्थान</option><option value="Madhya Pradesh">मध्य प्रदेश</option><option value="Jharkhand">झारखंड</option><option value="Others">अन्य</option>';
  }
  if (document.getElementById("mySelect")) {
    document.getElementById("mySelect").innerHTML =
      '<option value="">वर्ग चुने</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>';
  }

  $(".mainlogo1").attr("src", "../images/brand-hin.png");
  $(".mainlogo").attr("src", "../images/brand-hin.png");
}

function English() {
  localStorage.setItem("language", "english");
  datecode = "en-US";
  var hin = document.getElementsByClassName("hi");
  for (var i = 0; i < hin.length; i += 1) {
    hin[i].style.display = "none";
  }
  var eng = document.getElementsByClassName("en");
  for (var i = 0; i < eng.length; i += 1) {
    eng[i].style.display = "block";
  }
  document.getElementById("language-ctrl").innerHTML = "Language";
  if (document.getElementById("myState")) {
    document.getElementById("myState").innerHTML =
      '<option value="">Select State</option> <option value="Rajasthan">Rajasthan</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Jharkhand">Jharkhand</option><option value="Others">Others</option>';
  }
  if (document.getElementById("mySelect")) {
    document.getElementById("mySelect").innerHTML =
      '<option value="">Select Class</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>';
  }

  $(".mainlogo1").attr("src", "../images/brand-en.png");
  $(".mainlogo").attr("src", "../images/brand-en.png");
}

function videoStart(str) {
  $.get(base_url + "video/history/start", { video_id: str }, function (
    data,
    status
  ) {
    history_id = data["id"];
  });
}

function videoEnd() {
  $.get(base_url + "video/history/end", { history_id: history_id }, function (
    data,
    status
  ) {});
}

function copyText(str) {
  var textarea = document.createElement("textarea");
  textarea.textContent = str;
  document.body.appendChild(textarea);

  var selection = document.getSelection();
  var range = document.createRange();
  range.selectNode(textarea);
  selection.removeAllRanges();
  selection.addRange(range);

  console.log("copy success", document.execCommand("copy"));
  selection.removeAllRanges();

  document.body.removeChild(textarea);
  options["url"] = str;
  window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}

function copyPlaylist(key){
  var x=temp_data[key];
  if (localStorage.getItem("language") =='hindi'){
    console.log("hindi copy")
    var strr="कक्षा "+x[0]['standard_']+" के लिये दक्षता "+x[0]['competency_hindi_']+"\n";
    for (i=0;i<x.length;i++)
      strr+="\n"+x[i]['url'];
    strr+="\n\n ऐसी और सामग्री के लिए, visit https://www.digischoolindia.com"
    var textarea = document.createElement("textarea");
    textarea.textContent = strr;
    document.body.appendChild(textarea);
  
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
  
    console.log("copy success", document.execCommand("copy"));
    selection.removeAllRanges();
  
    document.body.removeChild(textarea);
    // alert("Playlist copied");
    options["url"] = strr;
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    }

    else{
    console.log("eng copy")
    var strr="Competency " +x[0]['competency_']+ " for Class "+x[0]['standard_']+"\n";
    for (i=0;i<x.length;i++)
      strr+="\n"+x[i]['url'];
    strr+="\n\n For more such content, visit https://www.digischoolindia.com"
    var textarea = document.createElement("textarea");
    textarea.textContent = strr;
    document.body.appendChild(textarea);
  
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
  
    console.log("copy success", document.execCommand("copy"));
    selection.removeAllRanges();
  
    document.body.removeChild(textarea);
    // alert("Playlist copied");
    options["url"] = strr;
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
  }
}