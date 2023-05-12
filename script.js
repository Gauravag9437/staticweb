



function init() {
    let storeArray = [];
    document.getElementById("studentForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let names = document.getElementById("name").value;

        let emails = document.getElementById("email").value;

        let web = document.getElementById("website").value;

        let image = document.getElementById("image").value;

        let gender;

        if(document.getElementById("male").checked){
            gender = "male";
        }else{
            gender = "female";
        }

        

        let java = document.getElementById("java");
        let html = document.getElementById("html");
        let css = document.getElementById("css");

        let skillArray = [];

        if(java.checked == true){
            console.log("java")
            skillArray.push("java");
        } if(html.checked == true){
            console.log("html")
            skillArray.push("html")
        } if(css.checked == true){
            skillArray.push("css")
            console.log("css")
        }if(!java.checked && !html.checked && !css.checked){
            skillArray.push("NO Skills");

        }
            
        

        let storeData = {
            name: names,
            email: emails,
            website: web,
            image: image,
            gender: gender,
            skills: skillArray

        };

        console.log(storeData.name+storeData.email);

        storeArray.push(storeData);

        localStorage.setItem("data", JSON.stringify(storeArray));

        printData();
    });
}

function printData() {
    let retrievedData = [];

    let objectData = window.localStorage.getItem("data");

    retrievedData = JSON.parse(objectData);

    var row = "";

    for (let i = 0; i < retrievedData.length; i++) {  
        row +=
            "<tr class='flex'  style='flex-direction: row; border-bottom: 2px solid rgb(133, 172, 42)'><td style='border-right:2px solid rgb(164, 194, 94)' class='w-5 flex-3' scope='row'><div style='font-weight: bold'>" +
            retrievedData[i].name +
            "</div><div>" +
            retrievedData[i].gender +
            "</div><div>" +
            retrievedData[i].email +
            "</div><a target='_blank' href=" +
            retrievedData[i].website +
            ">website</a><div>" +retrievedData[i].skills+
            "</div></td><td style='cursor:pointer' class='flex-1 image'><a href='" +
            retrievedData[i].image +
            "' target='_blank'><img src=" +
            retrievedData[i].image +
            " width='100%' alt='not found' /></a></td></tr>";
    }

    document.getElementById("tobody").innerHTML = row;
}
//     var row = 1;
//     var name = document.getElementById("name").value;

//     var email = document.getElementById("email").value;

//     var website = document.getElementById("website").value;

//     var image = document.getElementById("imageLink").value;

//     var male = document.getElementById("male");

//     var female = document.getElementById("female");

//     if (male.checked==true){
//         var gender = male.value;
//     }

//     else{
//         var gender = female.value;
//     }

//     var java = document.getElementById("java");

//     if (java.checked==true){
//         var skillJava = java.value;
//     }

//     var html = document.getElementById("html");

//     if (html.checked==true){
//         var skillHtml = html.value;
//     }

//     var css = document.getElementById("css");

//     if (css.checked==true){
//         var skillCss = css.value;
//     }

//     var display = document.getElementById("display");

//     var newRow = display.insertRow(row);

//     var cell1 = newRow.insertCell(0);

//     var cell2 = newRow.insertCell(1);

//     cell1.innerHTML = <p></p>
//     // cell1.innerHTML = email;
//     // cell1.innerHTML = website;
//     // cell1.innerHTML = gender;
//     // cell1.innerHTML = skillJava;
//     // cell1.innerHTML = skillHtml;
//     // cell1.innerHTML = skillCss;

//     cell2.innerHTML = image;

//     row++;


// }