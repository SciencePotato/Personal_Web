

function setup(){
    createCanvas(425,250);

    DataArray = [];

    for(var i = 0; i < width; i ++){
        DataArray.push(random(height));
    }

    frameRate(30);

    console.log(DataArray);

    // t = 0;
     
    // Totaltime = 0;
}

function draw(){
    
    // background(0);
    // for(var i = 0; i < DataArray.length; i ++){
    //     stroke(255);
    //     strokeWeight(1);
    //     line(i,height,i,DataArray[i])
    // }
    // if(Totaltime < DataArray.length){
    //     for(var o = 0; o < DataArray.length; o++){
    //         if(DataArray[t] < DataArray[t+1]){
    //             var tmp = DataArray[t + 1];
    //             DataArray[t + 1] = DataArray[t];
    //             DataArray[t] = tmp;
    //             strokeWeight(5);
    //             stroke(255,0,0);
    //             line(t,height,t,DataArray[t]);
    //             strokeWeight(1);
    //         }
    //         if(t == DataArray.length -1){
    //             t = 0;
    //         }
    //     }
    //     t++;
    // }
    // for(var i = 0; i < DataArray.length; i ++){
    //     stroke(255);
    //     strokeWeight(1);
    //     line(i,height,i,DataArray[i])
    // }
    // Totaltime++;

    background(0);
    stroke(255);
    for(var i = 0;i < DataArray.length; i++){
        line(i,height,i,DataArray[i]);

        if(DataArray[i] < DataArray[i + 1] ){
            var tmp = DataArray[i + 1];
            DataArray[i + 1] = DataArray[i];
            DataArray[i] = tmp;
            line(i,height,i,DataArray[i]);
        }
    }

}
//n^2