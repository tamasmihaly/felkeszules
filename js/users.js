function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */

    // funtablazatMegjelenit(userDatas);

    //funAddEventListener(userDatas);
    //fun90elottiek(userDatas);
    fun3legidossebb(userDatas);
}

getData('/js/users.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */



function funtablazatfejlec() {

    var tablehead = ""
    tablehead += `
    <th>Azonosító</th>
    <th>Felhasználónév</th>
    <th>Jelszó</th>
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
    <th>Ország</th>
    <th>Állam/Megye</th>
    <th>Irányítószám</th>
    <th>Város</th>
    <th>Cím</th>
    <th>Nem</th>
    <th>Születési dátum</th>
    <th>Email cím</th>
    <th>Telefonszám</th>
    `;
    document.querySelector(".table-head").innerHTML = tablehead;


}

function funtablazatMegjelenit(data) {
    funtablazatfejlec();
    var jsonData = data[0].users;
    var tableBody = "";
    for (var i = 0; i < jsonData.length; i++) {

        tableBody += `<tr><td>${jsonData[i].id}</td>
    <td>${jsonData[i].username}</td>
    <td>${jsonData[i].password}</td>
    <td>${jsonData[i].firstname}</td>
    <td>${jsonData[i].lastname}</td>
    <td>${jsonData[i].country}</td>
    <td>${jsonData[i].state}</td>
    <td>${jsonData[i].zipcode}</td>
    <td>${jsonData[i].city}</td>
    <td>${jsonData[i].address}</td>
    <td>${jsonData[i].sex}</td>
    <td>${jsonData[i].birthdate}</td>
    <td>${jsonData[i].email}</td>
    <td>${jsonData[i].phone}</td></tr>`

    }

    document.querySelector(".table-body").innerHTML = tableBody;
    //console.log(jsonData[4].birthdate.substring(0, 4) < 1990);
}

function fun90elottiek(data) {
    var tablehead = ""
    tablehead += `
   
    <th>Felhasználónév</th>
    
    `;
    document.querySelector(".table-head").innerHTML = tablehead;

    var jsonData = data[0].users
    var tableBody = ""
    for (var i = 0; i < jsonData.length; i++) {

        if (jsonData[i].birthdate.substring(0, 4) < 1990) {
            tableBody += `<tr>
    <td>${jsonData[i].username}</td>
    </tr> `
        }
    }

    document.querySelector(".table-body").innerHTML = tableBody;
}

function fun3legidossebb(data) {
    var tablehead = ""
    tablehead += `
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
    <th>Születési dátum</th>
    `;

    document.querySelector(".table-head").innerHTML = tablehead;



    var jsonData = data[0].users;
    jsonData.sort(function (a, b) {
        a = new Date(a);
        b = new Date(b);
        return a - b;
        //return a.birthdate.substring(0, 4) - b.birthdate.substring(0, 4)
    })
    //console.log(jsonData);



    var tableBody = "";
    for (var i = 0; i < jsonData.length; i++) {
        tableBody += `<tr>
    <td>${jsonData[i].firstname}</td>
    <td>${jsonData[i].lastname}</td>
    <td>${jsonData[i].birthdate}</td>
    </tr>`
        document.querySelector(".table-body").innerHTML = tableBody;

    }
};

/*function funAddEventListener(param) {
    document.querySelector("#button1").addEventListener("click", console.log(1));
    //console.log(data);
};
*/