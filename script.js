var container = creatediv("div","container my-4");
var row = creatediv("div","row rowdata");
var col1 = creatediv("div","col-lg-6 imgdata");
var img = creatediv("img","img-fluid")
img.setAttribute("src","Creative-Graphic-Designer-Png-1024x819.png")
img.setAttribute("alt","search")
var col2 = creatediv("div","col-lg-6");
 var h2 = creatediv("h2","text-center mt-5 mb-5")
 h2.innerHTML = "Search For The Nationality";
 var form = document.createElement("form");
 form.setAttribute("id","myform")
 var div3 = creatediv("div"," row content ")
 var inputbox= creatediv("div","form-group has-search pl-5 pt-3")
var span= creatediv("span","fa fa-search form-control-feedback")
var inputfield= creatediv("input","form-control ");
inputfield.setAttribute("type","text");
inputfield.setAttribute("id","result")
inputfield.setAttribute("placeholder","enter the name")
var div=creatediv("div","d-flex justify-content-center buttondispaly mt-4")

var button1= creatediv("button","button");
button1.setAttribute("type","button");
button1.innerHTML="Submit";
button1.addEventListener("click",getdeatils);

var button2= creatediv("button","button");
button2.setAttribute("type","button");
button2.innerHTML="Reset";
button2.addEventListener("click",clear);
function creatediv(tagname,classname){
    var div = document.createElement(tagname);
    div.className=classname;
    return div;
}
var div1= creatediv("div","  mt-5");




async function getdeatils(){
    try{
        
        var searchdata = document.getElementById('result').value;
        if(searchdata ==="")
        {
           
            div1.innerHTML=`<p class=" col-sm-12 error text-center pt-3">Please enter the name</p> `
           
            div3.append(div1)
        }else{
         var result = await fetch(`https://api.nationalize.io/?name=${searchdata}`)
         var data= await result.json();
 
         console.log(data.name,data.country[0].country_id ,data.country[0].probability,data.country[1].country_id ,data.country[1].probability);
         for(var i=0; i<=1;i++)
         {
             displaydata(`CountryName: ${data.country[i].country_id }`, ` Probability: ${data.country[i].probability}`)
         }
        
        }
      
    }
    catch(error){
       div1.innerHTML=`<p class=" col-sm-12 error text-center pt-3">Data was not found</p> `
            
            div3.append(div1)
       
        console.log("Error");

    }


}
function displaydata(countname,probabilityno){
   
    var div1= creatediv("div","dispaly mt-5 ");
    
    div1.innerHTML=`<div class=" text-left px-2 py-2"> ${countname}</div>
                <div class=" text-left px-2 py-2"> ${probabilityno}</div>`
    
  
    div3.append(div1)
    

}
function clear(){  
    document.getElementById("myform").reset();  
    location.reload();
  }   
div.append(button1,button2);
inputbox.append(span,inputfield);
form.append(inputbox,div)
col2.append(h2,form,div3)
col1.append(img)
row.append(col1,col2);
container.append(row)
document.body.append(container);