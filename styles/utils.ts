export default function adjustOpacity(rgbaColor: string, opacity: number): string {
  const rgba = rgbaColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  const [r, g, b] = rgba.map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}