class Hero
{
	constructor(x, y, r)
	{
        var options =
        {
           density: 1,
           frictionAir: 1
        }
		this.x = x;
        this.y = y;
        this.r = r;
        this.width = 300;
        this.height = 150;
        this.image = loadImage("hero.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
	}

	display()
	{
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
};