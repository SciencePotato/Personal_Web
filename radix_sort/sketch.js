function setup(){
    createCanvas(975,480);
    DataArray = [];
    for(var i = 0; i < width; i ++){
        DataArray.push(Math.round(random(height)));
    }
    frameRate(30);
    idx = 1;
    while(height % (10 ** idx) < height){
        idx++;
    }
    console.log(idx);
}
function draw(){
    background(0);
    stroke(255);
    for(var i = 0;i < DataArray.length - 1; i++){
        line(i,height,i,DataArray[i]);
    }
    for(var i = 0; i < DataArray.length - 1; i++){
        for(var x = 1; x < idx; x++){
            if(x == 1){
                var tmp = DataArray[i];
                var tmpmod1 = tmp%(10**x); 
                // var Num = DataArray[i]%(10**x);
                // var Num2 = DataArray[i+1]%(10**x);
                if(DataArray[i+1]%(10**x) > tmpmod1){
                    DataArray[i] = DataArray[i + 1]; 
                    DataArray[i + 1] = tmp;
                       
                }
            }
            else{
                var tmp = DataArray[i];
                var tmpDiv = tmp/(10 ** (idx - x));
                if(DataArray[i + 1]/(10 ** (idx - x)) > tmpDiv){
                    DataArray[i] = DataArray[i + 1]; 
                    DataArray[i + 1] = tmp;
                }
            }
            // else{
            //     var tmp = DataArray[i];
            //     var tmpDiv = tmp/(10 ** x);
            //     // var Num = DataArray[i]/(10**x);
            //     // var Num2 = DataArray[i + 1]/(10 ** x);
            //     if(DataArray[i + 1]/(10 ** x) > tmpDiv){
            //         DataArray[i + 1] = tmp;
            //         DataArray[i] = DataArray[i + 1];      
            //     }
            // }
        }
    }
}