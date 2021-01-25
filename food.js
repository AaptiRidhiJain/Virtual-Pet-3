class Food{
    constructor(){
         this.foodStock = 0;
         this.fedTime;
         this.foodS;
         this.image = loadImage("Milk.png");
    }

    getFoodStock(){
        return this.foodStock;
    }

   updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    
    deductFood(){
        if(this.foodStock>0){ 
          this.foodStock = this.foodStock - 1; 
        }
        else{
            this.foodStock=0;
        }
    }
    
    getFedTime(lastFed)
    {
        this.lastFed = lastFed;
    }  

    display(){
        var x = 80;
        var y = 100;
        imageMode(CENTER);
        image(this.image, 100, 470, 70, 70);
        image(this.image, 650, 140, 70, 70);

            if(this.foodStock !== 0){
            for(var i = 0 ; i < this.foodStock ; i++){
                if(i % 10 === 0){
                    y = y+50;
                    x = 180;
                }

                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
    }

    bedroom(){
        background(bedroom,550,500);
    }

    garden(){
        background(garden,550,500);
    }

    washroom(){
        background(washroom,550,500);
    }
}
