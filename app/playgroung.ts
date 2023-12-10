export default function play() {
  const name = "Tyresz";
  const age = 28;

  function logPersonInfo(name: string, age: number) {
    const info = `Name: ${name}, age: ${age}`;
    console.log(info);
  }

  logPersonInfo(name, age);
}
