function setup(){
    createCanvas(975,480);
    DataArray = [];
    for(var i = 0; i < width; i ++){
        DataArray.push(random(height));
    }
    frameRate(30);
    EndIndex = 1;
}

function draw(){
    background(0);
    stroke(255);
    for(var i = 0;i < DataArray.length - 1; i++){
        line(i,height,i,DataArray[i]);
    }
    

    for(var i = 0;i < EndIndex; i++){
        if(DataArray[i] < DataArray[EndIndex]){
            Tmp = DataArray[i];
            DataArray[i] = DataArray[EndIndex];
            DataArray[EndIndex] = Tmp;
        }
    }

    EndIndex++;
}