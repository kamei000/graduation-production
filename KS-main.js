const btn = document.getElementById('btn');
    const setWadai = document.getElementById("setWadai");
    const selectWadai = document.getElementById("selectWadai");
    const like_btn = document.getElementById('like');
    const setLike = document.getElementById('setLike')
    const fabo = document.getElementById('fabo');

    const array = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
    const genre = [["他を選択してください。"],
        ["よく行く場所","休日の予定","池袋で一番好きな場所"],
        ["どんなゲーム？","おすすめのゲーム","最近気になっているゲーム"],
        ["gg","qq","vv"],
        ["ff","kk","ll"],
        ["rr","bb","cc"],
        ["uu","mm","xx"]
    ];
    btn.addEventListener('click', () => {
        const a=0,b=0,c=0,d=0,e=0,f=0;
        const num = selectWadai.selectedIndex;              //プルダウンの配列番号をnumに代入
        if(num==0){
            setWadai.innerText = genre[0][0];
        }
        else{
            const randomIndex = Math.floor(Math.random()*3);    //乱数をrandomIndexに代入
            const currentWadai = genre[num][randomIndex];       //話題テーマが入った配列にnumとrandomIndexを参照させる
            setWadai.innerText = currentWadai;                  //setWadai IDのついたpタグに送信
            if(num==0){
                fabo.innerText = "";
            }
            else{
                fabo.innerText = "いいね数："+array[num][randomIndex];
                /*const serializedArray = localStorage.getItem('myArray');
                console.log(serializedArray)
                switch(num){
                    case 1:
                        a = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+a[num][randomIndex];
                        break;
                    case 2:
                        b = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+b[num][randomIndex];
                        break;
                    case 3:
                        c = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+c[num][randomIndex];
                        break;
                    case 4:
                        d = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+d[num][randomIndex];
                        break;
                    case 5:
                        e = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+e[num][randomIndex];
                        break;
                    case 6:
                        f = JSON.parse(serializedArray);
                        fabo.innerText = "いいね数："+f[num][randomIndex];
                        break;
                }*/
            }
        }
        
    });
    like_btn.addEventListener('click',() => {
        //console.log(setWadai.textContent);
        
        const num = selectWadai.selectedIndex;
        const num2 = genre[num].indexOf(setWadai.textContent);
        array[num][num2] = array[num][num2]+1;
        if(num==0){
            fabo.innerText = "";
        }
        else if(setWadai.textContent==""){
            fabo.innrtText = "";
        }
        else if(setWadai.textContent=="他を選択してください。"){
            fabo.innerText = "";
        }
        else{
            fabo.innerText = "いいね数："+array[num][num2];
        }
        const Array = JSON.stringify(array[num][num2]);
        localStorage.setItem('myArray', Array);  
    });