type Noop = () => any;
type Noop2 = () => void;

export default function play() {
  function fn1(x: Noop): void {
    const result = x();
    result();
  }
  function fn2(x: Noop2): void {
    const result = x();
  }
}
