import p5Types from "p5";
import { drawHelper, setupHelper } from "./fractals";

let canvasParent: Element;
let parentStyle: CSSStyleDeclaration;
let canvasWidth: number, canvasHeight: number;

const setup = (p5: p5Types, canvasParentRef: Element) => {
  // Find the parent Element's size to create a Canvas that size
  canvasParent = canvasParentRef;
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement);
  } else {
    parentStyle = getComputedStyle(canvasParentRef);
  }
  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);
  p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  setupHelper(p5, canvasHeight, canvasWidth);
  // Coordinates, size and speed don't depend on the canvas's size
};

const draw = (p5: p5Types) => {
  drawHelper(p5, canvasHeight, canvasWidth);
};

// Keep canvas and its content responsive across window resizes
const windowResized = (p5: p5Types) => {
  let parentStyle: CSSStyleDeclaration;
  if (canvasParent.parentElement) {
    parentStyle = getComputedStyle(canvasParent.parentElement);
  } else {
    parentStyle = getComputedStyle(canvasParent);
  }
  canvasWidth = parseInt(parentStyle.width);
  canvasHeight = parseInt(parentStyle.height);
  p5.resizeCanvas(canvasWidth, canvasHeight);
};

export { setup, draw, windowResized };
