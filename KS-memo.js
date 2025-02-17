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
    function save2(){
        var mydata2 = document.getElementById("mydata_in").value;
        localStorage.setItem('mydata2',mydata2);
    }
    function view() {
        if(!localStorage.getItem('mydata')) {
            document.getElementById("mydata_out").innerText = "";
            alert("保存データはありません");
            
        }
        else {
            mydata = localStorage.getItem('mydata');
            mydata2 = localStorage.getItem('mydata2');
            document.getElementById("mydata_out").innerText = "1 "+mydata;
            document.getElementById("my_data_out").innerText = "2 "+mydata2;
        }
    }