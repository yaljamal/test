var form = document.getElementById('form');
var fieldset = document.createElement('fieldset');
var label1 = document.createElement('label');
var input1 = document.createElement('input');
var label2 = document.createElement('label');
var input2 = document.createElement('input');
var label3 = document.createElement('label');
var input3 = document.createElement('input');
var label4 = document.createElement('label');
var input4 = document.createElement('input');
var submit = document.createElement('input');
var dataObj = [];// array of object created
var datali=[];//to retreve data from local storge
input1.id = 'input1';
input2.id = 'input2';
input3.id = 'input3';
input4.id = 'input4';


function FormData(fname, lname, age, phone) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.phone = phone;
    dataObj.push(this);
}
// to show the form 
function renderForm() {
    form.appendChild(fieldset);
    fieldset.textContent = 'Personal Info';
    form.appendChild(label1);
    label1.textContent = 'First Name:';
    form.appendChild(input1);
    label2.textContent = 'Last Name:';
    form.appendChild(label2);
    form.appendChild(input2);
    label1.className = 'label';
    label2.className = 'label';
    input1.className = 'input';
    input2.className = 'input';
    form.appendChild(label3);
    label3.textContent = 'Your Age:';
    input3.type = 'Number';
    form.appendChild(input3);
    label3.className = 'label';
    input3.className = 'input';
    form.appendChild(label4);
    label4.textContent = 'Your Number:';
    form.appendChild(input4);
    label4.className = 'label';
    input4.className = 'input';
    submit.type = 'submit';
    form.appendChild(submit);
    input1.required=true;
    input2.required=true;
    input3.required=true;
    input4.required=true;
    
}
renderForm();
submit.addEventListener('click', click);
function click() {
    event.preventDefault();
    var input1Data = document.getElementById('input1').value;
    var input2Data = document.getElementById('input2').value;
    var input3Data = document.getElementById('input3').value;
    var input4Data = document.getElementById('input4').value;
    if(input1Data && input2Data && input3Data && input4Data !== null){
            new FormData(input1Data, input2Data, input3Data, input4Data);

    }
    console.log(dataObj);
    set();
    renderList();
    renderForm();
    location.reload();
    document.getElementById('form').reset();

}
function set(){
    var setlocaldata=JSON.stringify(dataObj);
    // datalocal.push(setlocaldata);
    localStorage.setItem('form', setlocaldata);
}
function get(){
    var getLocaldata=JSON.parse(localStorage.getItem('form'));
    if(getLocaldata){

        dataObj=getLocaldata;   
    }
}
get();


// to show the result form the form 
function renderList(){
    datali=[];
    for(var l=0;l<dataObj.length;l++){
        datali.push(dataObj[l]);
    }

    var listForm=document.getElementById('listForm');

    for(var i =0 ;i<datali.length;i++){
        var li=document.createElement('li');
        listForm.appendChild(li);
        // li.textContent=JSON.stringify(localStorage.getItem('form')) ;
        li.textContent=`First Name : ${datali[i].fname} Last Name : ${datali[i].lname} Your Age : ${datali[i].age} Your Phone : ${datali[i].phone}`
    }
}
renderList();
function renderTable() {
    datali=[];
    for(var l=0;l<dataObj.length;l++){
        datali.push(dataObj[l]);
    }
    var table = document.getElementById('table');
    var thElement = document.createElement('tr');
    table.appendChild(thElement);
    var tdFName = document.createElement('th');
    thElement.appendChild(tdFName);
    tdFName.textContent='No'
    var tdFName = document.createElement('th');
    thElement.appendChild(tdFName);
    tdFName.textContent='First Name'
    var tdLName = document.createElement('th');
    thElement.appendChild(tdLName);
    tdLName.textContent='Last Name'
    var tdAge = document.createElement('th');
    thElement.appendChild(tdAge);
    tdAge.textContent='Age '
    var tdPhone = document.createElement('th');
    thElement.appendChild(tdPhone);
    tdPhone.textContent='Phone Number';

    for(var i = 0; i < datali.length;i++){

        var thNewElement=document.createElement('tr');
        table.appendChild(thNewElement);
        var tdFNamel = document.createElement('th');
        thNewElement.appendChild(tdFNamel);
        tdFNamel.textContent=i+1;
         var tdFNamel = document.createElement('th');
         thNewElement.appendChild(tdFNamel);
         tdFNamel.textContent=datali[i].fname;
        var tdLNamel = document.createElement('th');
        thNewElement.appendChild(tdLNamel);
        tdLNamel.textContent=datali[i].lname;
        var tdAgel = document.createElement('th');
        thNewElement.appendChild(tdAgel);
        tdAgel.textContent=datali[i].age;
        var tdPhonel = document.createElement('th');
        thNewElement.appendChild(tdPhonel);
        tdPhonel.textContent=datali[i].phone;

    }
}
renderTable();
// print chart
function drowChart(){
var ageChart=[];
var nameChart=[];
for(var c=0;c<datali.length;c++){
    ageChart.push(datali[c].age);
    nameChart.push(datali[c].fname);
}
var ctx = document.getElementById('myCanvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameChart,//for x accesses
        datasets: [
        {
            label: 'age in our table ',
            data: ageChart ,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

}
drowChart();