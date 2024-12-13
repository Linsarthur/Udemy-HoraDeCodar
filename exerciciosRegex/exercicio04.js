const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(ip.test("192.130.0.1"));
console.log(ip.test("8.8.8.8"));
