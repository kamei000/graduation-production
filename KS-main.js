    const btn = document.getElementById('btn');
    const setWadai = document.getElementById("setWadai");
    const selectWadai = document.getElementById("selectWadai");
    const like_btn = document.getElementById('like');
    const setLike = document.getElementById('setLike')
    const fabo = document.getElementById('fabo');
    const link = document.getElementById('link');
    const first = document.getElementById('first');
    
    const genre = [["他を選択してください。"],
        ["よく行く場所","休日の予定","暇なとき何する？","今ハマってるものは？","一人暮らししたい？"],
        ["どんなゲーム？","おすすめのゲーム","最近気になっているゲーム","夢中になれる作品について！"],
        ["帰ってから最初にすることは？","お気に入りの家具","一人の時ついやっちゃう癖","朝ごはんはライス派？パン派？"],//syumi
        ["人生変えた作品","イチオシの作品を教えて！","手軽に読める作品は？","長期休暇とかにうってつけな漫画！"],//manga
        ["アニメに求めるものは？","こだわりを感じた作品は？","もう一回見たいアニメを教えて！","何度でも見れるアニメはある？"],//anime
        ["お気に入りのご飯屋をおしえて！","","ドーナツは好き？","最近行っておいしかったお店","今までで一番おいしかった\n料理は⁉"]//gohan
    ];
    const array = [[""],[0,0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0,0]];
    const gohan = ["オムライスのお店",
        "無難なマック",
        "安くておいしいサイゼリヤ",
        "一番近い校内セブン"
    ];
    const gohan2 = ['https://www.tamagoken.com/',
        'https://map.mcdonalds.co.jp/map/13155',
        'https://shop.saizeriya.co.jp/sz_restaurant/spot/detail?code=1132',
        'https://www.tokyo-ec.ac.jp/campus/guide/'
    ]
    btn.addEventListener('click', () => {
        const num = selectWadai.selectedIndex;              //プルダウンの配列番号をnumに代入
        if(num==0){
            setWadai.innerText = genre[0][0];
        }
        else{
            const randomIndex = Math.floor(Math.random()*genre[num].length);    //乱数をrandomIndexに代入
            console.log(genre[num].length)
            if(num==6 && randomIndex==1){
                const rndm = Math.floor(Math.random()*gohan.length);
                setWadai.innerText = "ここいってみない？";
                link.href = gohan2[rndm];
                link.innerText = gohan[rndm];
            }
            else{
                link.href="";
                link.innerText="";
                const currentWadai = genre[num][randomIndex];       //話題テーマが入った配列にnumとrandomIndexを参照させる
                setWadai.innerText = currentWadai;                  //setWadai IDのついたpタグに送信
            }
            if(num==0){
                fabo.innerText = "";
            }
            else{
                fabo.innerText = "いいね数："+array[num][randomIndex];
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
            console.log(array[num][num2])
        }
    });

    first.addEventListener('click',()=>{
        const num = selectWadai.selectedIndex;
        const max = Math.max(...array[num]);
        const num2 = array[num].indexOf(max);
        const num1 = genre[num].indexOf(setWadai.textContent);
        if(num==0){
            setWadai.innerText = "";
        }
        else{
            setWadai.innerText = genre[num][num2];
            fabo.innerText = "いいね数："+array[num][num2];
        }
    })