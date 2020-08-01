function setup(){
    createCanvas(425,225);
    DataArray = [];
    for(var i = 0; i < width; i ++){
        DataArray.push(random(height));
    }
    frameRate(30);
    
}
function draw(){
    background(0);

    GapVal = Math.floor(DataArray.length / 1.6);
    
    index = 0;
    
    if(GapVal > 1){
    while(GapVal + index <= DataArray.length){
        if(DataArray[index] < DataArray[index + GapVal]){
            var tmp = DataArray[index + GapVal];
            DataArray[index + GapVal] = DataArray[index];
            DataArray[index] = tmp;
        }
        index++;
        GapVal = Math.round(GapVal/1.6);
    }
    for(var i = 0;i < DataArray.length - 1; i++){
        stroke(255);
        line(i,height,i,DataArray[i]);   
    }
    
}

    
    
    
    
}