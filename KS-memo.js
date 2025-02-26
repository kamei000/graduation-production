function save() {
    var mydata = document.getElementById("mydata_in").value;
    localStorage.setItem('mydata', mydata);
        
}
function save2(){
    var mydata2 = document.getElementById("mydata_in").value;
    localStorage.setItem('mydata2',mydata2);
}
function view() {
    if(!localStorage.getItem('mydata') && !localStorage.getItem('mydata2')){
        document.getElementById("mydata_out").innerText = "";
        document.getElementById("my_data_out").innerText = "";
        alert("どちらにも保存データがありません");
    }
    else if(!localStorage.getItem('mydata')) {
        document.getElementById("mydata_out").innerText = "";
        mydata2 = localStorage.getItem('mydata2');
        document.getElementById("my_data_out").innerText = "2 "+mydata2;
    }
    else if(!localStorage.getItem('mydata2')){
        document.getElementById("my_data_out").innerText = "";
        mydata = localStorage.getItem('mydata');
        document.getElementById("mydata_out").innerText = "1 "+mydata;
    }
    else{
        mydata = localStorage.getItem('mydata');
        document.getElementById("mydata_out").innerText = "1 "+mydata;
        mydata2 = localStorage.getItem('mydata2');
        document.getElementById("my_data_out").innerText = "2 "+mydata2;
    }
}