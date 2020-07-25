function setup(){
    createCanvas(250,250);

    DataArray = [];
    for(var i = 0; i < width; i ++){
        DataArray.push(random(height));
    }
    frameRate(30);
    console.log(DataArray);
}

function draw(){
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