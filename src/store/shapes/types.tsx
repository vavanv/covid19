export interface Shape {
  // id: number;
  shapeId: string;
  lon: number;
  lat: number;
  sec: number;
}

export type Shapes = Shape[];

export interface ShapesTrainsState {
  items: Shapes;
}
