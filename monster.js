class Monster
{
	constructor(x, y, r)
	{
        var options =
        {
           isStatic: true
        }
		this.x = x;
        this.y = y;
        this.r = r;
        this.width = 250;
        this.height = 200;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
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

    updateImg(lImage)
    {
        this.image = lImage;
    }
};