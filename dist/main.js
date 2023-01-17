/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
fetch('http://api.openweathermap.org/geo/1.0/direct?q=Northville&limit=5&appid=0d83ebaa5424eb334c0fb0ac82e4b01f', {mode: 'cors'})
    .then(function(response) {
        return response.json;
    })
    .then(function(response) {
        console.log(response);
    })
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1IQUFtSCxhQUFhO0FBQ2hJO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPU5vcnRodmlsbGUmbGltaXQ9NSZhcHBpZD0wZDgzZWJhYTU0MjRlYjMzNGMwZmIwYWM4MmU0YjAxZicsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9