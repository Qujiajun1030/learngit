// var money = '我是很有钱';
// function fun() {
//   var money = 10000;
//
//   function getMoney() {
//     return money
//   }
//   function setMoney(a) {
//     return money+=a
//   }
//   return {
//       getMoney:getMoney,
//       setMoney:setMoney
//   }
// }
(function () {
    var money = 20000;
    function getMoney() {
      return money;
    }
    function setMoney(a) {
      return money += a
    }

    window.getMoney = getMoney;
    window.setMoney = setMoney;
})();