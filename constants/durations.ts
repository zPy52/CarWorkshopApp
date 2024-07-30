interface DurationsType {
  interval: number;
  veryFast: number;
  fast: number;
  normal: number;
  slow: number;
  verySlow: number;
  pause: number;
}

const Durations: DurationsType = {
  interval: 50,
  veryFast: 100,
  fast: 200,
  normal: 300,
  slow: 400,
  verySlow: 500,
  pause: 1000,
};

export default Durations;
