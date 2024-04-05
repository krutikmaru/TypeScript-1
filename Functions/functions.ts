function sayHello() {
  console.log("Hello!");
  return true;
}

function signUp(username: string, phone: number, isMarried?: boolean) {}

signUp("krutik", 1234, false);
signUp("meera", 5678);

type Negate = (num: number) => number;
const negate: Negate = (value) => value * -1;
