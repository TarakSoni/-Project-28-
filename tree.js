class Tree
{
    constructor(x, y, width, height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world, this.body);
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image, 1050, 250, this.width, this.height);
        pop()
      }
}