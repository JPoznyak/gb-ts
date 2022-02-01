// Реализовать абстрактный класс MyGraphicsPrimitive2D 
// у которого есть следующие свойства: 
// прямоугольная область(2 точки, левая верхняя и правая нижняя), описывающая примитив; 
// метод - переместить примитив на заданное смещение;. 
// От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, 
// у которого есть метод площадь. От него должны наследоваться класс MyCircle, 
// у него есть свойства: центр окружности и ее радиус, 
// а также должен наследоваться класс MyRectangle с свойствами: ширина и высота

abstract class MyGraphicsPrimitive2D {
    protected rectangularArea: number[] = [];
    protected abstract movePrimitive(offsetX: number, offsetY: number): void;
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    protected abstract getArea(): void;
} 

export class MyCircle extends MyAreaPrimitive2D {
    constructor(
        public center: {x: number, y: number}, 
        public radius: number,
    ) {
    super();
  }
  movePrimitive(offsetX: number, offsetY: number): void {
    this.center.x += offsetX;
    this.center.y += offsetY;
  }
  getArea(): void{
      let pi = 3.14;
      let circleArea = pi*this.radius*this.radius;
      console.log("area =", circleArea);
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
    constructor(
        public width: number,
        public height: number,
        public leftTop: {x: number, y: number},
        public rightBottom: {x: number, y: number},
    ) {
        super();
        this.rectangularArea = [width, height];
    }
    movePrimitive(offsetX: number, offsetY: number): void {
    this.leftTop.x += offsetX;
    this.leftTop.y += offsetY;
    this.rightBottom.x += offsetX;
    this.rightBottom.y += offsetY;
  }
  getArea(): void{
      let square = this.width * this.height;
      console.log("area =", square);
  }
}

const circle = new MyCircle({x:1, y:3}, 5);
circle.movePrimitive(2, 2);

const rectangle = new MyRectangle(2, 5, {x:1, y:1}, {x:5, y:6});
rectangle.movePrimitive(3, 3);

