class Gradient {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.colours = [
            {
                r: 60,
                g: 202,
                b: 207
            },
            {
                r: 57,
                g: 130,
                b: 230
            },
            {
                r: 90,
                g: 210,
                b: 169
            }
        ];

        this.currInterp = 0;
        this.interpIncrement = 0.005;

        this.currentColour = 0;
    }

    incrementColour() {
        this.currentColour = this.getNextColour();
        this.currInterp = 0;
    }

    getNextColour() {
        return (this.currentColour + 1) % this.colours.length;
    }

    update() {

        const interpolatedR = Math.floor(lerp(this.colours[this.currentColour].r, this.colours[this.getNextColour()].r, this.currInterp)),
        interpolatedG = Math.floor(lerp(this.colours[this.currentColour].g, this.colours[this.getNextColour()].g, this.currInterp)),
        interpolatedB = Math.floor(lerp(this.colours[this.currentColour].b, this.colours[this.getNextColour()].b, this.currInterp));

        if (this.currInterp >= 1) this.incrementColour();
        this.currInterp += this.interpIncrement;
        
        this.ctx.fillStyle = `rgb(${interpolatedR}, ${interpolatedG}, ${interpolatedB})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function lerp(a, b, u) {
    return (1 - u) * a + u * b;
}

export default Gradient;