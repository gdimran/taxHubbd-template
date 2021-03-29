
var citiesByState = {
Chattagram: ["Comilla","Feni","Brahmanbaria","Rangamati","Noakhali","Chandpur","Lakshmipur","Chattogram","Coxsbazar","Khagrachhari","Bandarban"],
Rajshahi:["Sirajganj","Pabna","Bogura","Rajshahi","Natore","Joypurhat","Chapainawabganj","Naogaon"],
Khulna: ["Jashore","Satkhira","Meherpur","Narail","Chuadanga","Kushtia","Magura","Khulna","Bagerhat","Jhenaidah"],
Barisal: ["Jhalakathi","Patuakhali","Pirojpur","Barisal","Bhola","Barguna"],
Sylhet: ["Sylhet","Moulvibazar","Habiganj","Sunamganj"],
Dhaka : [ "Narsingdi","Gazipur","Shariatpur","Narayanganj","Tangail","Kishoreganj","Manikganj","Dhaka","Munshiganj","Rajbari","Madaripur","Gopalganj","Faridpur"],	
Rangpur: ["Panchagarh","Dinajpur","Lalmonirhat","Nilphamari","Gaibandha","Thakurgaon","Rangpur","Kurigram"],
Mymensingh: [ "Sherpur","Mymensingh","Jamalpur","Netrokona"]	
}
function makeSubmenu(value) {
if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
else {
var citiesOptions = "";
for(cityId in citiesByState[value]) {
citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
}
document.getElementById("citySelect").innerHTML = citiesOptions;
}
}
function displaySelected() { var country = document.getElementById("countrySelect").value;
var city = document.getElementById("citySelect").value;
alert(country+"\n"+city);
}
function resetSelection() {
document.getElementById("countrySelect").selectedIndex = 0;
document.getElementById("citySelect").selectedIndex = 0;
}


//both same address function
//function addressFunction() 
//{ 
//  if (document.getElementById('same').checked) 
//  { 
//    document.getElementById('secondaryaddress').value=document. 
//             getElementById('primaryaddress').value; 
//    document.getElementById('secondaryzip').value=document. 
//             getElementById('primaryzip').value 
//  } 
//      
//  else
//  { 
//    document.getElementById('secondaryaddress').value=""; 
//    document.getElementById('secondaryzip').value=""; 
//  } 
//} 

function addressFunction() 
{ 
  if (document.getElementById('same').checked) 
  { 
        
    $('#permanentAddress').val($('#presentAddress').val() + ' ' +
                             $('#present_ZipCode').val() + ', ' +
                             $('#citySelect').val() + ' ' +
                             $('#countrySelect').val() );       
  } 
      
  else
  { 
    document.getElementById('permanentAddress').value=""; 
    //document.getElementById('secondaryzip').value=""; 
  } 
} 

