const verifyId = /\d+ID\b/ //\b diz que a string termina com o ID

console.log(verifyId.test("001ID"));
console.log(verifyId.test("001"));
console.log(verifyId.test("zarabatanaID"));