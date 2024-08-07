export default class Color {
  private static clamp(value: number, min: number, max: number): number {
      return Math.max(min, Math.min(max, value));
  }

  public static rgbo(r: number, g: number, b: number, o: number = 1): string {
      r = this.clamp(r, 0, 255);
      g = this.clamp(g, 0, 255);
      b = this.clamp(b, 0, 255);
      o = this.clamp(o, 0, 1);
      return `rgba(${r}, ${g}, ${b}, ${o})`;
  }

  public static hslo(h: number, s: number, l: number, o: number = 1): string {
      h = this.clamp(h, 0, 360);
      s = this.clamp(s, 0, 100);
      l = this.clamp(l, 0, 100);

      let c = (1 - Math.abs(2 * l / 100 - 1)) * (s / 100);
      let x = c * (1 - Math.abs((h / 60) % 2 - 1));
      let m = l / 100 - c / 2;
      let r = 0, g = 0, b = 0;

      if (0 <= h && h < 60) {
          r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
          r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
          r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
          r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
          r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
          r = c; g = 0; b = x;
      }

      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      o = this.clamp(o, 0, 1);

      return `rgba(${r}, ${g}, ${b}, ${o})`;
  }

  public static rgb(r: number, g: number, b: number): string {return Color.rgbo(r, g, b)}
  public static hsl(h: number, s: number, l: number): string {return Color.hslo(h, s, l)}
}
