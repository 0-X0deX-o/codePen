const CANVAS = document.querySelector('#canvas');
const btnE1 = document.querySelector('.btn');
const ctx = CANVAS.getContext('2d');
const NUM_PARTICLES = 50;
const MAX_Z = 2;
const MAX_R = 2;
const Z_SPD = 2;
const PARTICLES = [];
let W, 
    H, 
    XO, 
    YO = 0;

let isGoing = false;

class Particle {
	constructor(x, y, z) {
		this.pos = new Vector(x. y, z);
		const X_VEL = 0,
		      Y_VEL = 0,
		      Z_VEL = -Z_SPD;
		this.vel = new Vector(X_VEL, Y_VEL, Z_VEL);
		this.vel.scale(0.01);
		this.fill = "rgba(255,255,255,0.3)";
		this.stroke = this.fill;
	}

	update() {
		this.pos.add(this.vel);
	}

	render() {
		const PIXEL = to2d(this.pos),
			X = PIXEL[0],
			Y = PIXEL[1],
			R = ((MAX_Z - this.pos.z) / MAX_Z) * MAX_R;
		if (X < ) || X > W || Y < 0 || Y > H) this.pos.z = MAX_Z;
	
		this.update()
		ctx.beginPath();
		ctx.fillStyle = this.fill;
		ctx.strokeStyle = this.stroke;
		ctx.arc(X, PIXEL[1], R, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

class Vector {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	add(v)
}
