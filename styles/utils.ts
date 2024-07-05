export default function adjustOpacityFromRGBA(color: string, opacity: number): string {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  const [r, g, b] = rgba.map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}