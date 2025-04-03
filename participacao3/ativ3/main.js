import { quilogramaParaLibra, metroParaPe, celsiusParaFahrenheit } from './conversor.js';

const pesoKg = 5;
const metros = 10;
const tempCelsius = 25;

const libras = quilogramaParaLibra(pesoKg);
const pes = metroParaPe(metros);
const fahrenheit = celsiusParaFahrenheit(tempCelsius);

console.log(`Quilogramas para Libras: ${pesoKg} kg = ${libras.toFixed(4)} lb`);
console.log(`Metros para Pés: ${metros} m = ${pes.toFixed(4)} ft`);
console.log(`Celsius para Fahrenheit: ${tempCelsius}°C = ${fahrenheit.toFixed(0)}°F`);
