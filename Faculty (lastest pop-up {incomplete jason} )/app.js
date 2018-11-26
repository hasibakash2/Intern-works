
      var myObject =
	{
      Professors:{
    	1:{
    		name:"Professor 1",
    		Educational_Attainment:["High School Student","-- No Work Experience","College Student/Recent Graduate","-- Some Work 						 Experience","Working Professional","-- 6 Years Experience"],
    		degree:["SSC From School","HSC From College","B.Sc in Computer Science From AIUB"],
    		coursesTaught: ["Programming Language-1 (C)", "Programming Language-2 (C++)", "Object Oriented Programmin Language-1 (JAVA)", "Object Oriented Programmin Language-2 (C#)", "Web Technology", "ADVANCED TOPICS IN PROGRAMMING I - (JAVA based)","ADVANCED TOPICS IN PROGRAMMING II- (C# based)","ADVANCED TOPICS IN PROGRAMMING III (WEB based)"],
    		Teaching_Experience:["Teaching_Experience: 30 Years"],
    		Lecturer:["Lecturer: 9 years","Reader: 11 years","13 years"],
    		Conference:["Attended any Conference?","Yes,I had Attended 20 Conferences"],
    		email:["Email: professor 1 @gmail.com"],
    		Phone_no:["Phone No. : 01X-20293456"],
    		facebook_id:["Facebook Id : professor 1 @facebook.com"]

    		},
    	2:{
    		name:"Professor 2",
    		Educational_Attainment:["High School Student","-- Some Work Experience","College Student/Recent Graduate","-- No Work Experience","Working Professional","-- 3 Years Experience"],
    		degree:["SSC From School2","HSC From College2","B.Sc in Computer Science From AIUB2"],
    		coursesTaught: ["Programming Language-3 (C)", "Object Oriented Programmin Language-1 (JAVA)", "Object Oriented Programmin Language-2 (C#)", "Web Technology", "ADVANCED TOPICS IN PROGRAMMING I - (JAVA based)","ADVANCED TOPICS IN PROGRAMMING II- (C# based)"],
    		Conference:["Attended any Conference?","Yes,I had Attended 15 Conferences"],
    		email: ["professor 2 @gmail.com"],
    		Phone_no:["01X-85264982"],facebook_id:["professor 2 @facebook.com"]
    		},
    	3:{
    		name:"Professor 3",
    		Educational_Attainment:["High School Student","-- No Work Experience","College Student/Recent Graduate","-- Some Work Experience","Working Professional","-- 4 Years Experience"],
    		degree:["SSC From School3","HSC From College3","B.Sc in Computer Science From AIUB3"],
    		coursesTaught: ["Object Oriented Programmin Language-1 (JAVA)", "Object Oriented Programmin Language-2 (C#)", "Web Technology", "ADVANCED TOPICS IN PROGRAMMING I - (JAVA based)","ADVANCED TOPICS IN PROGRAMMING II- (C# based)"],
    		Conference:["Attended any Conference?","Yes,I had Attended 10 Conferences"],
    		email:["professor 3 @gmail.com"],
    		Phone_no:["01X-26542362"],
    		facebook_id:["professor 3 @facebook.com"]
    		},
    	},
      getProfessorById: function(prof) {
        return this.Professors[prof] /*+ " " + this.Professor2*/;
    	}
	}           
             function toggle_visibility(id,clickedElement) {
             var e = document.getElementById(id);
             var prof = document.getElementById("prof");
             var prof1 = document.getElementById("prof1");
             var prof2 = document.getElementById("prof2");
             var time = document.getElementById("time");
             if (clickedElement==null || clickedElement.id==undefined ) {e.style.display = 'none';}
             x = myObject.getProfessorById(clickedElement.id);
			 document.getElementById("professorname").innerHTML = x.name;
             if(e.style.display == 'block')
                e.style.display = 'none';
             else{
             	e.style.display = 'block';
             	setList(x.Educational_Attainment,"Educational_Attainment");
             	setList(x.degree,"degree");
             	setList(x.coursesTaught,"coursesTaught");
             	setList(x.Teaching_Experience,"Teaching_Experience");
             	setList(x.Lecturer,"Lecturer");
             	setList(x.Conference,"Conference");
             	setList(x.email,"email");
             	setList(x.Phone_no,"Phone_no");
             	setList(x.facebook_id,"facebook_id");
                prof.innerHTML=clickedElement.innerHTML+ "";
             }
          }
          function setList(listItems,listID){
          	var text = "";
			var i;
			var ul= document.getElementById(listID);
			ul.innerHTML="";
			for (i = 0; i < listItems.length; i++) {
			    var li = document.createElement("li");
				  li.appendChild(document.createTextNode(listItems[i]));
				  li.setAttribute("class", "list-group-item");
				  ul.appendChild(li);
			}
          }    




        var x = document.getElementById("prof-1");
        x.addEventListener("click", myFunction);
        function myFunction(e) {
        console.log(e);  
        console.log(e.target.innerHTML);
        toggle_visibility('popupBoxOnePosition',e.target);
        //alert ("The work is Done");
        }
