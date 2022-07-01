class Ground {
    constructor(x, y, w ,h){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        strokeWeight(4)
        fill("purple");
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}