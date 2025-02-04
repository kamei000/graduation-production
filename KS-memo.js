function load() {
        if(!localStorage.getItem('mydata')) {
            alert("保存データはありません");
        } 
        else {
           mydata = localStorage.getItem('mydata');
            document.getElementById("mydata_in").value = mydata;
        }
    }
    function save() {
        var mydata = document.getElementById("mydata_in").value;
        localStorage.setItem('mydata', mydata);
    }
    function view() {
        if(!localStorage.getItem('mydata')) {
            document.getElementById("mydata_out").innerText = "";
            alert("保存データはありません");
            
        }
        else {
            mydata = localStorage.getItem('mydata');
            document.getElementById("mydata_out").innerText = mydata;
        }
    }