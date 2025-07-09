const calculateRectangleArea = (base, height) => {
  if (base <= 0 || height <= 0) {
    throw new Error('La base y la altura deben ser números positivos.');
  }
  return base * height;
};

const calculateCubeVolume = (side) => {
  if (side <= 0) {
    throw new Error('El lado debe ser un número positivo.');
  }
  return Math.pow(side, 3);
};

const calculateCylinderVolume = (radius, height) => {
  if (radius <= 0 || height <= 0) {
    throw new Error('El radio y la altura deben ser números positivos.');
  }
  return Math.PI * Math.pow(radius, 2) * height;
};

module.exports = {
  calculateRectangleArea,
  calculateCubeVolume,
  calculateCylinderVolume,
};