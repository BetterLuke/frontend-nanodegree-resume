/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "LUKE Bei",
  "role": "Full Stack Developer",
  "contacts": {
    "mobile": "17698098378",
    "email": "luke.bei.2015@gmail.com",
    "github": "luke",
    "twitter": "@lukebei",
    "location": "Zhengzhou"
  },
  "welcomeMessage": "Hey, This is luke",
  "skills": [
    "awesomeness", "delivering things", "docker", "Frontend"
  ],
  "biopic": "images/fry.jpg"
};

var education = {
  schools: [{
      "name": "Zhengzhou University Of Light Industry",
      "city": "Zhengzhou, China",
      "degree": "Bechalar",
      "majors": ["CS"],
      "dates": 2014,
      "url": "http://zzuli.edu.cn"
    },
    {
      "name": "Zhengzhou University Of Light Industry",
      "city": "Zhengzhou, China",
      "degree": "Bechalar",
      "majors": ["CS"],
      "dates": 2014,
      "url": "http://zzuli.edu.cn"
    }
  ],
  "onlineCourse": [{
    "title": "JavaScript Crash Course",
    "school": "Udacity",
    "dates": 2014,
    "url": "https://cn.udacity.com/course/javascript-basics--ud804/"
  }]
};

var work = {
  "jobs" : [
    {
      "employer" : "ZZULI",
      "title" : "PM",
      "dates" : "2016.3",
      "description" : "在爱丁堡龙比亚大学Merchiston校区的古老城堡里，我校学生与英方六名学生进行了为期两周的项目研讨，从各自课题阐述、辩论到确定小组研究课题，小组成员进行了大量细致深入的讨论和分析，并对该项目未来的各阶段工作进行安排。在离开英国前，IGP小组学生向龙比亚大学的专家组就两周的成果和规划做了精彩的展示。在未来的三个月内，双方将通过互联网进行远程科研项目合作和研究，对该项目进行实质性地展开与推进，预计五月中旬完成。届时，爱丁堡龙比亚大学的六名学生将会前来我校共同完成最后的项目总结报告。",
      "location" : "zhengzhou"
    },
    {
      "employer" : "ZZULI",
      "title" : "PM",
      "dates" : "2016.8",
      "description" : "在爱丁堡龙比亚大学Merchiston校区的古老城堡里，我校学生与英方六名学生进行了为期两周的项目研讨，从各自课题阐述、辩论到确定小组研究课题，小组成员进行了大量细致深入的讨论和分析，并对该项目未来的各阶段工作进行安排。在离开英国前，IGP小组学生向龙比亚大学的专家组就两周的成果和规划做了精彩的展示。在未来的三个月内，双方将通过互联网进行远程科研项目合作和研究，对该项目进行实质性地展开与推进，预计五月中旬完成。届时，爱丁堡龙比亚大学的六名学生将会前来我校共同完成最后的项目总结报告。",
      "location" : "Xian"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "ZZULI IGP project",
      "dates" : "2014",
      "description" : "在爱丁堡龙比亚大学Merchiston校区的古老城堡里，我校学生与英方六名学生进行了为期两周的项目研讨，从各自课题阐述、辩论到确定小组研究课题，小组成员进行了大量细致深入的讨论和分析，并对该项目未来的各阶段工作进行安排。在离开英国前，IGP小组学生向龙比亚大学的专家组就两周的成果和规划做了精彩的展示。在未来的三个月内，双方将通过互联网进行远程科研项目合作和研究，对该项目进行实质性地展开与推进，预计五月中旬完成。届时，爱丁堡龙比亚大学的六名学生将会前来我校共同完成最后的项目总结报告。",
      "images" : ["http://iec.zzuli.edu.cn/picture/article/103/13/a6/b00511e74b0b8a51c17f33c24a59/94765e44-6cee-4405-a5d0-2816e5c3df98.jpg", "http://iec.zzuli.edu.cn/picture/article/103/13/a6/b00511e74b0b8a51c17f33c24a59/071d1d52-b735-484e-ae79-b778ff6545ae.jpg"]
    }
  ]
};





var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedGithub);




var formatedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formatedbioPic);
$("#header").append(formattedMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


function displaywork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displaywork();

// function locationizer(work_obj) {
//   var locationArray = [];
//
//   for(job in work_obj.jobs) {
//     var newLovation = work_obj.jobs[job].location;
//     locationArray.push(newLovation)
//   }
//
//   return locationArray;
// }

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formatterImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formatterImage);
      }
    }
  }
}

projects.display();

// $("#mapDiv").append(googleMap);
//console.log(locationizer(work));

// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//
//   logClicks(x, y);
// });
//
//
//

//AIzaSyC-wzXT5AnsIx0l6XRCTlLIabM5q4zgv8I
