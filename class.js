class PenDriver{
    constructor(capacity, color, price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDriver('36GB', 'White', 1300);
console.log(ignite);
const oakwood = new PenDriver('4GB', 'black');
console.log(oakwood);

function StickyNote(color, price){
    this.color = color;
    this.price = price;
}
const yellow = new StickyNote('Yellow', 40);
console.log(yellow);