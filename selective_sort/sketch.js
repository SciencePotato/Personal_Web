function setup(){
    createCanvas(975,480);
    DataArray = [];
    for(var i = 0; i < width; i ++){
        DataArray.push(random(height));
    }
    shiftcounter = 0;
    frameRate(30);
}

function draw() {
    background(0);
    for(var i = 0;i < DataArray.length - 1; i++){
        stroke(255);
        line(i,height,i,DataArray[i]);
    }
    for(var x = 0; x < 50; x++){
        index = 0;
        Smallest = DataArray[shiftcounter];
        Temp = DataArray[shiftcounter];
        for(var x = shiftcounter;x < DataArray.length - 1; x++){        
            if(Smallest < DataArray[x]){
                Smallest = DataArray[x];
                index = x;
            }   
        }
        DataArray.splice(index,1,Temp);
        DataArray.splice(shiftcounter,1, Smallest);
        
        if (shiftcounter > DataArray.length -2 ){
            shiftcounter = 0;
        } 
        shiftcounter++;
    }
       
    
    // for(var i = 0;i < DataArray.length - 1; i++){
    //     index = 0;  
    //     stroke(255);
    //     line(i,height,i,DataArray[i]);
    //     index = 0;
    //     Smallest = DataArray[shiftcounter];
    //     Temp = DataArray[shiftcounter];
    //     for(var x = shiftcounter;x < DataArray.length - 1; x++){        
    //         if(Smallest > DataArray[x]){
    //             Smallest = DataArray[x];
    //             index = x;
    //         }   
    //     }
    //     DataArray.splice(index,1,Temp);
    //     DataArray.splice(shiftcounter,1, Smallest);
        
    //     if (shiftcounter > DataArray.length -2 ){
    //         shiftcounter = 0;
    //     } 
    //     shiftcounter++;
    // }
}


  
