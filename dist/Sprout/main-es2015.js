(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\">\r\n  <div id=\"btnContainer\">\r\n    <button id=\"view-all\" (click)=\"viewAll()\">{{message}}</button>\r\n  </div>\r\n  <div class=\"teammates\">\r\n    <img src=\"assets/img/jPlumb.jpeg\" (click)=\"toggleJon()\" >\r\n    <div class=\"info\" *ngIf=\"jonInfoShown\">\r\n      <p>Jon Plumb has been creating dishes for the last 8 years. After witnessing the joy and excitement his brother experienced learning to code, he decided to make a career change into technology. He enjoys not only cooking, but also eating 24/7, drinking coffee through all hours of the day and playing musical instruments.</p>\r\n      <p><a href=\"https://www.linkedin.com/in/jonathon-plumb/\" class=\"fa fa-linkedin-square\"></a></p>\r\n    </div>   \r\n  </div>\r\n\r\n  <div class=\"teammates\">\r\n    <img src=\"assets/img/dLeasure.jpeg\" (click)=\"toggleDave()\">\r\n    <div class=\"info\" *ngIf=\"daveInfoShown\">\r\n      <p>Dave Leasure graduated from Wayne State University with a Bachelor's in Mathematics. He's spent 5 years in the software world and is currently a Product Manager at Ford. In his spare time, he likes gardening and video games.</p>\r\n      <p><a href=\"https://www.linkedin.com/in/dleasure/\" class=\"fa fa-linkedin-square\"></a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"teammates\">\r\n    <img src=\"assets/img/jb.jpeg\" (click)=\"toggleJess()\">\r\n    <div class=\"info\" *ngIf=\"jessInfoShown\">\r\n      <p>Jess Billingslea graduted from the University of Michigan-Dearborn with a BA in Communication and a minor in Marketing. Jess has been passionate about technology since she was able to explore Windows 95. In her spare time she enjoys watching anime, spending time with her two dogs and traveling.</p>\r\n      <p><a href=\"https://www.linkedin.com/in/jessica-billingslea/\" class=\"fa fa-linkedin-square\"></a></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n<div id=\"canvas\">\r\n  <p id=\"canvasIntro\">Click the empty box below to grow a flower garden.</p>\r\n  <div id=\"app\">\r\n    <canvas id=\"flower\" width=\"350px\" height=\"300px\" style=\"border:1px solid #000000;\"></canvas>\r\n    <button id=\"clearBtn\">Clear canvas</button> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sprout-home></app-sprout-home>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\r\n        <img src=\"assets/img/SproutLogoBackground.png\" class=\"tree\" />\r\n        <div class=\"page\">\r\n                <div class=\"spins\">\r\n                        <img src=\"assets/img/SproutSymbol.png\" class=\"rotateToReduce\" id=\"image\"/>\r\n                </div>\r\n        </div>\r\n        <div id=\"buttons\">\r\n                <button [ngStyle]=\"{'background-color': reduceActive ? '#79916e' : '#303a2c'}\" id=\"reduce\" class=\"componentButton\" (click)=\"updateSelectedComponent('reduce')\">reduce</button> \r\n                <button [ngStyle]=\"{'background-color': reuseActive ? '#79916e' : '#303a2c'}\" id=\"reuse\" class=\"componentButton\" (click)=\"updateSelectedComponent('reuse')\">reuse</button> \r\n                <button [ngStyle]=\"{'background-color': recycleActive ? '#79916e' : '#303a2c'}\" id=\"recycle\" class=\"componentButton\" (click)=\"updateSelectedComponent('recycle')\">recycle</button> \r\n        </div>\r\n        <div id=\"routingButtons\">\r\n                <button *ngIf=\"reduceActive\" id=\"reduceRoute\" class=\"routeToComponentButton\" routerLink=\"/reduce\">Learn more about reducing your carbon footprint</button> \r\n                <button *ngIf=\"reuseActive\" id=\"reuseRoute\" class=\"routeToComponentButton\" routerLink=\"/reuse\">Find creative ways to upcycle your used items</button> \r\n                <button *ngIf=\"recycleActive\" id=\"recycleRoute\" class=\"routeToComponentButton\" routerLink=\"/recycle\">Find your closest recycling facility</button> <br />\r\n                <button id=\"quizRoute\" class=\"routeToComponentButton\" routerLink=\"/quiz\">Think you're an expert? Take our quiz and prove it!</button> \r\n        </div>\r\n        <p id=\"activeFacts\">\r\n                {{ activeFacts }}\r\n        </p>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz/quiz.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-container\">\r\n    <div *ngIf=\"_displayTitle\" class=\"start\" (click)=\"startQuiz()\">Start Quiz!</div>\r\n    <div *ngIf=\"!_displayTitle\" id=\"quiz\">\r\n        <div class=\"question\">{{_questionAndAnswer.question}}</div>\r\n        <div class=\"qImg\">\r\n            <img [src]=\"_questionAndAnswer.image\" />\r\n        </div>\r\n        <div class=\"choices\">\r\n            <div class=\"choice\" *ngFor=\"let answer of _answers\" (click)=\"submitAnswer(answer)\">{{answer}}</div>\r\n            <div>{{_numberCorrect}}</div>\r\n        </div>\r\n        <div id=\"timer\">\r\n            <div id=\"counter\"></div>\r\n            <div id=\"btimeGauge\"></div>\r\n            <div id=\"timeGauge\"></div>\r\n        </div>\r\n        <div id=\"progress\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recycle/recycle.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recycle/recycle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bodyContainer\">\r\n    <div id=\"contentContainer\">\r\n        <h1>\r\n            Where and What to Recycle\r\n        </h1>\r\n        <p>\r\n            Did you know: {{ recyclingFact }}\r\n        </p>\r\n        <div id=\"locationForm\">\r\n            <input [(ngModel)]=\"ZIP\" placeholder=\"Enter your zip code to begin!\" id=\"locationInput\" (keydown.enter)=\"requestLatLonAndLocation()\">\r\n            <button (click)=\"requestLatLonAndLocation()\" id=\"locationButton\">Find a Location</button>\r\n        </div>\r\n        <p *ngIf=\"errorMessage\" id=\"errorMessage\">\r\n            {{ errorMessage }}\r\n        </p>\r\n        <div *ngFor=\"let location of responseArrayObjects; index as i\" id=\"locationContainer\">\r\n            <div id=\"locationInfo\">\r\n                <h3 class=\"locationName\">\r\n                    {{ location[0].description }}\r\n                </h3>\r\n                Address: {{ location[0].address }} {{ location[0].city }}, {{ location[0].province }} {{ location[0].postal_code }} <br/>\r\n                Phone: {{ location[0].phone }} <br />\r\n                Hours: {{ location[0].hours }} <br />\r\n            </div>\r\n            <a href=\"{{ openInMaps(location[0].latitude, location[0].longitude) }}\" target=\"_blank\" id=\"buttonLink\">\r\n                <button id=\"viewButton\">View in Maps</button>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reduce/reduce.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reduce/reduce.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bodyContainer\">\r\n  <div *ngIf=\"!articleShown\" id=\"contentContainer\">\r\n    <h1>Reducing Waste</h1>\r\n    <div *ngFor=\"let article of allArticles\" id=\"articleContainer\">\r\n      <img src=\"https://www.recycling.com/wp-content/uploads/2017/07/reduce-reducing-step-symbol-logo-red.png\" id=\"reduceImg\"/>\r\n      <p id=\"articleDes\">{{article.description}}</p>\r\n      <button value=\"{{article.url}}\" (click)=\"requestArticleDetails($event)\" id=\"readButton\" (click)=\"scrollToTop()\"><a href=\"{{ article.url }}\"></a> Read Article\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"articleShown\" id=\"articleShowContainer\">\r\n    <button (click)=\"articleShown = false\" class=\"backButton\">Back to Articles</button>\r\n    <h1 id=\"articleTitle\">{{articleDets.description}}</h1>\r\n    <div [innerHtml]=\"cleanArticleContent\" id=\"articleShowing\"></div>\r\n    <button (click)=\"articleShown = false\" class=\"backButton\" (click)=\"scrollToTop()\">Back to Articles</button>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reuse/reuse.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reuse/reuse.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bodyContainer\">\r\n    <div id=\"contentContainer\">\r\n        <h1 class=\"reuseTitle\">Reuse One-Time-Use Items</h1>\r\n        <div *ngFor=\"let item of reuseItems\" class=\"articleContainer\">\r\n            <img src=\"https://www.recycling.com/wp-content/uploads/2017/07/reuse-reusing-step-symbol-logo-blue.png\" class=\"reuseImage\"/>\r\n            <p class=\"reuseArticle\">\r\n                {{item.title}}\r\n            </p>\r\n            <button class=\"reuseLink\"><a [href]=\"item.url\"></a>View Article</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sprout-home/sprout-home.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sprout-home/sprout-home.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\r\n  <nav role=\"navigation\">\r\n    <div id=\"menuToggle\">\r\n\r\n      <input type=\"checkbox\" id=\"menuButton\" />\r\n      \r\n      <!-- Hamburger Menu Icons -->\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      \r\n      <ul id=\"menu\">\r\n        <a (click)=\"optionClicked()\" routerLink=\"home\"><li>Home</li></a>\r\n        <a (click)=\"optionClicked()\" routerLink=\"reduce\"><li>Reduce</li></a>\r\n        <a (click)=\"optionClicked()\" routerLink=\"reuse\"><li>Reuse</li></a>\r\n        <a (click)=\"optionClicked()\" routerLink=\"recycle\"><li>Recycle</li></a>\r\n        <a (click)=\"optionClicked()\" routerLink=\"AboutUs\"><li>About Us</li></a>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <ul id=\"bigMenu\">\r\n    <a (click)=\"optionClicked()\" routerLink=\"home\"><li>Home</li></a>\r\n    <a (click)=\"optionClicked()\" routerLink=\"reduce\"><li>Reduce</li></a>\r\n    <a (click)=\"optionClicked()\" routerLink=\"reuse\"><li>Reuse</li></a>\r\n    <a (click)=\"optionClicked()\" routerLink=\"recycle\"><li>Recycle</li></a>\r\n    <a (click)=\"optionClicked()\" routerLink=\"AboutUs\"><li>About Us</li></a>\r\n  </ul>\r\n  <div id=\"logo\">Sprout</div>\r\n</div>  \r\n<p>\r\n    \r\n</p>\r\n<p>\r\n</p>\r\n<p>\r\n</p>\r\n<p>\r\n  some content\r\n</p>\r\n<p>\r\n  \r\n</p>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 1px solid;\r\n  margin-bottom: 20px;\r\n  border-radius: 100%;\r\n}\r\n\r\n#team {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  background-color: #e6eae1;\r\n  width: 90%;\r\n  margin: auto;\r\n}\r\n\r\n#btnContainer{\r\n  width: 100%;\r\n  align-items: flex-end;\r\n  text-align: end;\r\n}\r\n\r\n#view-all{\r\n  width: 20%;\r\n}\r\n\r\n.teammates{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 20px 10px 0px 10px;\r\n  width: 44%;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.info{\r\n  padding: 10px;\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  background-color: whitesmoke;\r\n  width: 100%;\r\n}\r\n\r\np{\r\n  margin: 0\r\n}\r\n\r\nbutton{\r\n  margin-top: 30px;\r\n  width: 100%;\r\n  color: white;\r\n  border-radius: 24px;\r\n  background-color: #50833c;\r\n}\r\n\r\nhr{\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  background-color: #e6eae1;\r\n}\r\n\r\n#canvas{\r\n  width: 90%;\r\n  margin: auto;\r\n  background-color: #e6eae1;\r\n}\r\n\r\n#canvasIntro{\r\n  margin-top: 0px;\r\n  padding-top: 15px 10px 0px 10px;\r\n  text-align: center;\r\n}\r\n\r\n#clearBtn{\r\n  margin-top: 0px;\r\n}\r\n\r\n#app{\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#flower{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.fa {\r\n  padding: 5px 5px 0px 0px;\r\n  font-size: 20px;\r\n  width: 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.fa-linkedin-square {\r\n  color: #0e76a8;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 0px;\r\n}\r\n\r\n@media only screen and (min-width: 480px){\r\n  img{\r\n    height: 150px;\r\n    width: 150px;\r\n  }\r\n\r\n  #team{\r\n    width: 80%;\r\n  }\r\n\r\n  button{\r\n    font-size: 16px;\r\n  }\r\n\r\n  #canvas{\r\n    width: 80%;\r\n  }\r\n\r\n  .info, #canvasIntro{\r\n    font-size: 16px;\r\n  }\r\n  .fa {\r\n    font-size: 25px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px){\r\n  img{\r\n    height: 200px;\r\n    width: 200px;\r\n  }\r\n\r\n  #team {\r\n    width: 70%;\r\n  }\r\n\r\n  button{\r\n    font-size: 18px;\r\n  }\r\n\r\n  #canvas{\r\n    width: 70%;\r\n  }\r\n\r\n  #clearBtn{\r\n    width: 70%;\r\n  }\r\n\r\n  .info, #canvasIntro{\r\n    font-size: 18px;\r\n  }\r\n\r\n  .fa{\r\n    font-size: 30px;\r\n  }\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbiN0ZWFtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmVhZTE7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNidG5Db250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuI3ZpZXctYWxse1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50ZWFtbWF0ZXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDQ0JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuLmluZm97XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDgzM2M7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYWUxO1xyXG59XHJcblxyXG4jY2FudmFze1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmVhZTE7XHJcbn1cclxuXHJcbiNjYW52YXNJbnRyb3tcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHggMTBweCAwcHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjbGVhckJ0bntcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbiNhcHB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNmbG93ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggMHB4IDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZhLWxpbmtlZGluLXNxdWFyZSB7XHJcbiAgY29sb3I6ICMwZTc2YTg7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgI3RlYW17XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgI2NhbnZhc3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAuaW5mbywgI2NhbnZhc0ludHJve1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuZmEge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gIGltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAjdGVhbSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgI2NhbnZhc3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5cclxuICAjY2xlYXJCdG57XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8sICNjYW52YXNJbnRyb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5mYXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_interactive_flowers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/interactive-flowers */ "./src/app/animations/interactive-flowers.ts");



let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.message = 'View All';
        this.jonInfoShown = false;
        this.daveInfoShown = false;
        this.jessInfoShown = false;
    }
    ngOnInit() {
        const canvas = document.getElementById('flower');
        const flowers = new _animations_interactive_flowers__WEBPACK_IMPORTED_MODULE_2__["InteractiveFlowers"](canvas);
        const btn = document.getElementById('clearBtn');
        btn.addEventListener('click', () => {
            flowers.clearCanvas();
        });
    }
    toggleJon() {
        this.jonInfoShown = !this.jonInfoShown;
    }
    ;
    toggleDave() {
        this.daveInfoShown = !this.daveInfoShown;
    }
    ;
    toggleJess() {
        this.jessInfoShown = !this.jessInfoShown;
    }
    ;
    viewAll() {
        this.jonInfoShown = !this.jonInfoShown;
        this.daveInfoShown = !this.daveInfoShown;
        this.jessInfoShown = !this.jessInfoShown;
        if (this.jonInfoShown && this.daveInfoShown && this.jessInfoShown) {
            this.message = 'Close All';
        }
        else {
            this.message = 'View All';
        }
    }
    ;
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/animations/interactive-flowers.ts":
/*!***************************************************!*\
  !*** ./src/app/animations/interactive-flowers.ts ***!
  \***************************************************/
/*! exports provided: InteractiveFlowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveFlowers", function() { return InteractiveFlowers; });
/* harmony import */ var _models_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/point */ "./src/app/models/point.ts");
/* harmony import */ var _flower_randomization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flower-randomization.service */ "./src/app/flower-randomization.service.ts");


``;
class InteractiveFlowers {
    constructor(canvas) {
        this.canvas = canvas;
        this.flowers = [];
        this.randomizationService = new _flower_randomization_service__WEBPACK_IMPORTED_MODULE_1__["FlowerRandomizationService"]();
        this.ctrlIsPressed = false;
        this.mousePosition = new _models_point__WEBPACK_IMPORTED_MODULE_0__["Point"](-100, -100);
        this.context = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.addShadowEffect();
        this.addInteractions();
    }
    clearCanvas() {
        this.flowers = [];
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
    animateFlowers() {
        if (this.flowers.every(f => f.stopChanging)) {
            return;
        }
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.flowers.forEach(flower => {
            flower.increasePetalRadiusWithLimit();
            flower.draw(this.context);
        });
        window.requestAnimationFrame(() => this.animateFlowers());
    }
    addInteractions() {
        this.canvas.addEventListener('click', e => {
            if (this.ctrlIsPressed) {
                this.clearCanvas();
                return;
            }
            this.calculateMouseRelativePositionInCanvas(e);
            const flower = this.randomizationService.getFlowerAt(this.mousePosition);
            this.flowers.push(flower);
            this.animateFlowers();
        });
        window.addEventListener('keydown', (e) => {
            if (e.which === 17 || e.keyCode === 17) {
                this.ctrlIsPressed = true;
            }
        });
        window.addEventListener('keyup', () => {
            this.ctrlIsPressed = false;
        });
    }
    calculateMouseRelativePositionInCanvas(e) {
        this.mousePosition = new _models_point__WEBPACK_IMPORTED_MODULE_0__["Point"](e.clientX +
            (document.documentElement.scrollLeft || document.body.scrollLeft) -
            this.canvas.offsetLeft, e.clientY +
            (document.documentElement.scrollTop || document.body.scrollTop) -
            this.canvas.offsetTop);
    }
    addShadowEffect() {
        this.context.shadowBlur = 5;
        this.context.shadowOffsetX = 2;
        this.context.shadowOffsetY = 2;
        this.context.shadowColor = '#333';
        this.context.globalAlpha = 0.8;
    }
}
InteractiveFlowers.ctorParameters = () => [
    { type: HTMLCanvasElement }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reuse_reuse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reuse/reuse.component */ "./src/app/reuse/reuse.component.ts");
/* harmony import */ var _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reduce/reduce.component */ "./src/app/reduce/reduce.component.ts");
/* harmony import */ var _recycle_recycle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recycle/recycle.component */ "./src/app/recycle/recycle.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");









const routes = [
    {
        path: 'reuse',
        component: _reuse_reuse_component__WEBPACK_IMPORTED_MODULE_3__["ReuseComponent"]
    },
    {
        path: 'reduce',
        component: _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_4__["ReduceComponent"]
    },
    {
        path: 'recycle',
        component: _recycle_recycle_component__WEBPACK_IMPORTED_MODULE_5__["RecycleComponent"]
    },
    {
        path: 'home',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
    },
    {
        path: 'AboutUs',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"]
    },
    {
        path: 'quiz',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"]
    },
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _earth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earth.service */ "./src/app/earth.service.ts");



let AppComponent = class AppComponent {
    constructor(earthService) {
        this.earthService = earthService;
        this.title = 'Sprout';
    }
    ;
    requestLatLon() {
        this.earthService.getUsersLatLon('US', '48044').subscribe(resp => {
            console.log(resp);
        });
    }
    ;
};
AppComponent.ctorParameters = () => [
    { type: _earth_service__WEBPACK_IMPORTED_MODULE_2__["EarthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);

;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sprout_home_sprout_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sprout-home/sprout-home.component */ "./src/app/sprout-home/sprout-home.component.ts");
/* harmony import */ var _recycle_recycle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recycle/recycle.component */ "./src/app/recycle/recycle.component.ts");
/* harmony import */ var _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reduce/reduce.component */ "./src/app/reduce/reduce.component.ts");
/* harmony import */ var _reuse_reuse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reuse/reuse.component */ "./src/app/reuse/reuse.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");














// import { EarthService } from './earth.service'
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _sprout_home_sprout_home_component__WEBPACK_IMPORTED_MODULE_6__["SproutHomeComponent"],
            _reduce_reduce_component__WEBPACK_IMPORTED_MODULE_8__["ReduceComponent"],
            _reuse_reuse_component__WEBPACK_IMPORTED_MODULE_9__["ReuseComponent"],
            _recycle_recycle_component__WEBPACK_IMPORTED_MODULE_7__["RecycleComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
            _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/earth.service.ts":
/*!**********************************!*\
  !*** ./src/app/earth.service.ts ***!
  \**********************************/
/*! exports provided: EarthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthService", function() { return EarthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EarthService = class EarthService {
    constructor(http) {
        this.http = http;
    }
    getUsersLatLon(country, ZIP) {
        return this.http.get("http://localhost:3500/latLon/" + country + "/" + ZIP);
        // })
    }
    ;
    getLocationFromLatLon(latitude, longitude) {
        return this.http.get("http://localhost:3500/location/" + latitude + "/" + longitude);
    }
    ;
    getLocationDetails(locationId) {
        // return this.http.get("http://localhost:3500/locationInfo/" + locationId);
        // console.log(locationId);
        const locationObject = this.http.get("http://localhost:3500/locationInfo/" + locationId);
        return locationObject;
        // console.log("locationObject = " + locationObject);
        // const objectKeys = Object.keys(locationObject);
        // console.log("objectKeys");
        // console.log(objectKeys); 
        // const responseArray = Object.values(locationObject);
        // console.log(responseArray);
        // return responseArray;
        // let responseArray = Object.values(locationObject);
        // console.log("responseArray = " + responseArray);
        // return responseArray[0];
    }
    ;
    //function to get Reduce articles from Proxy Server
    getReduceArticles() {
        return this.http.get("http://localhost:3500/reduce/");
    }
    ;
    //function to get Reduce article details from Proxy Server
    getArticleDetails(reduceURL) {
        let decodeURL = decodeURI(reduceURL);
        return this.http.get("http://localhost:3500/reduce/details/" + decodeURL);
    }
};
EarthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EarthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EarthService);

;


/***/ }),

/***/ "./src/app/flower-randomization.service.ts":
/*!*************************************************!*\
  !*** ./src/app/flower-randomization.service.ts ***!
  \*************************************************/
/*! exports provided: FlowerRandomizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowerRandomizationService", function() { return FlowerRandomizationService; });
/* harmony import */ var _models_flower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/flower */ "./src/app/models/flower.ts");
/* harmony import */ var _models_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/point */ "./src/app/models/point.ts");
/* harmony import */ var _models_flower_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/flower-center */ "./src/app/models/flower-center.ts");
/* harmony import */ var _models_petal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/petal */ "./src/app/models/petal.ts");




class FlowerRandomizationService {
    constructor() {
        this.colors = [
            '#f10e57',
            '#ea767a',
            '#ff6d3d',
            '#ecac43',
            '#fb9983',
            '#f9bc9f',
            '#f8ed38',
            '#a8e3f9',
            '#d1f2fd',
            '#ecd5f5',
            '#fee4fd',
            '#8520b4',
            '#fa2e59',
            '#ff703f',
            '#ff703f',
            '#f7bc05',
            '#ecf6bb',
            '#76bcad'
        ];
    }
    getFlowerAt(point) {
        const flowerCenter = new _models_flower_center__WEBPACK_IMPORTED_MODULE_2__["FlowerCenter"](point, this.randomIntFromInterval(5, 16), this.randomColor());
        const numberOfPetals = this.randomIntFromInterval(4, 8);
        const petalAngleSpacing = this.randomIntFromInterval(5, 25);
        const petalAngleSpan = 360 / numberOfPetals - petalAngleSpacing;
        const petal = new _models_petal__WEBPACK_IMPORTED_MODULE_3__["Petal"](point, this.randomIntFromInterval(20, 50), this.randomIntFromInterval(9, 14) / 10, petalAngleSpan, this.randomColor());
        return new _models_flower__WEBPACK_IMPORTED_MODULE_0__["Flower"](flowerCenter, numberOfPetals, petal);
    }
    getFlowerOnCanvas(canvasWidth, canvasHeight) {
        return this.getFlowerAt(new _models_point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.randomIntLessThan(canvasWidth), this.randomIntLessThan(canvasHeight)));
    }
    randomIntFromInterval(min, max) {
        // min: inclusive; max: exclusive
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomIntLessThan(n) {
        return this.randomIntFromInterval(0, n);
    }
    randomColor() {
        return this.colors[this.randomIntLessThan(this.colors.length)];
    }
}


/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n   width: 100%;\r\n}\r\n\r\n#page {\r\n   width: 100%;\r\n}\r\n\r\n#image {\r\n   transition: 1s;\r\n   width: 80%;\r\n   /* left: 50%; */\r\n   /* transform: translateX(-50%); */\r\n   /* height: 350px; */\r\n   /* z-index: 1; */\r\n   /* position: absolute; */\r\n   /* margin: auto; */\r\n   top: 50px;\r\n}\r\n\r\n.rotateToReduce {\r\n   -webkit-transform: rotate(120deg);\r\n   transform: rotate(120deg);\r\n}\r\n\r\n.rotateToReuse {\r\n   -webkit-transform: rotate(240deg);\r\n   transform: rotate(240deg);\r\n   padding-left: - 10px;\r\n}\r\n\r\n.rotateToRecycle {\r\n   -webkit-transform: rotate(0deg);\r\n   transform: rotate(0deg);\r\n}\r\n\r\n.spins {\r\n   /* margin-left: 12%; */\r\n   /* margin-top: 20%; */\r\n   /* z-index: 1; */\r\n   /* margin: auto; */\r\n   width: 100%;\r\n   -webkit-transform: translateX(10%);\r\n           transform: translateX(10%);\r\n}\r\n\r\n.tree {\r\n   position: absolute;\r\n   width: 40%;\r\n   /* height: 150px; */\r\n   z-index: 2;\r\n   /* margin: auto; */\r\n   left: 50%;\r\n   -webkit-transform: translateX(-50%);\r\n           transform: translateX(-50%);\r\n   top: 6em;\r\n}\r\n\r\n.Pic {\r\n   position: absolute;\r\n   z-index: 2;\r\n   width: 100%;\r\n}\r\n\r\n.componentButton {\r\n   position: relative;\r\n   display: inline-block;\r\n   /* background-color: #303a2c; */\r\n   border-radius: 10px;\r\n   width: 25%;\r\n   /* height: 50px; */\r\n   z-index: 3;\r\n   color: #f5f5f5;\r\n   font-family: 'Caveat', cursive;\r\n   font-size: 1.5em;\r\n   /* bottom: 20%; */\r\n   /* margin-left: 36%; */\r\n}\r\n\r\n.routeToComponentButton {\r\n   position: relative;\r\n   /* display: inline-block; */\r\n   background-color: #303a2c;\r\n   border-radius: 10px;\r\n   /* width: 25%; */\r\n   /* height: 50px; */\r\n   z-index: 3;\r\n   color: #f5f5f5;\r\n   font-family: 'Caveat', cursive;\r\n   font-size: 1.1em;\r\n   /* bottom: 20%; */\r\n   /* margin-left: 36%; */\r\n   margin: 5px 0px 0px 0px;\r\n   left: 50%;\r\n   -webkit-transform: translateX(-50%);\r\n           transform: translateX(-50%);\r\n}\r\n\r\nbutton:focus {\r\n   outline:0;\r\n}\r\n\r\n#buttons {\r\n   display: flex;\r\n   flex-direction: row;\r\n   justify-content: space-evenly;\r\n   /* height: 55px; */\r\n};\r\n\r\n#routingButtons {\r\n   width: 100%;\r\n   display: flex;\r\n   flex-direction: column;\r\n   flex-wrap: nowrap;\r\n   justify-content: center;\r\n   align-items: center;\r\n   align-content: center;\r\n}\r\n\r\n#activeFacts {\r\n   text-align: center;\r\n   margin-left: 10%;\r\n   margin-right: 10%;\r\n}\r\n\r\n@media only screen and (min-width:480px) {\r\n\r\n   .componentButton {\r\n      width: 100px;\r\n      margin: 10px;\r\n   }\r\n\r\n   #buttons {\r\n      justify-content: center;\r\n   }\r\n   \r\n   .spins {\r\n      /* left: 50%; */\r\n      width: 350px;\r\n      margin: auto;\r\n      -webkit-transform: translateX(0%);\r\n              transform: translateX(0%);\r\n   }\r\n  \r\n   #image {\r\n      /* transition: 1s; */\r\n      width: 350px;\r\n      height: 350px;\r\n      /* z-index: 1;\r\n      position: absolute; */\r\n   }\r\n  \r\n   .tree {\r\n      /* position: absolute; */\r\n      width: 200px;\r\n      /* height: 300px; */\r\n      z-index: 2;\r\n      /* margin-left: 33%;\r\n      margin-top: -10%; */\r\n   }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsVUFBVTtHQUNWLGVBQWU7R0FDZixpQ0FBaUM7R0FDakMsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQix3QkFBd0I7R0FDeEIsa0JBQWtCO0dBQ2xCLFNBQVM7QUFDWjs7QUFFQTtHQUVHLGlDQUFpQztHQUNqQyx5QkFBeUI7QUFDNUI7O0FBRUM7R0FFRSxpQ0FBaUM7R0FDakMseUJBQXlCO0dBQ3pCLG9CQUFvQjtBQUN2Qjs7QUFFQTtHQUVHLCtCQUErQjtHQUMvQix1QkFBdUI7QUFDMUI7O0FBRUE7R0FDRyxzQkFBc0I7R0FDdEIscUJBQXFCO0dBQ3JCLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsV0FBVztHQUNYLGtDQUEwQjtXQUExQiwwQkFBMEI7QUFDN0I7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLG1CQUFtQjtHQUNuQixVQUFVO0dBQ1Ysa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxtQ0FBMkI7V0FBM0IsMkJBQTJCO0dBQzNCLFFBQVE7QUFDWDs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsV0FBVztBQUNkOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLHFCQUFxQjtHQUNyQiwrQkFBK0I7R0FDL0IsbUJBQW1CO0dBQ25CLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLGNBQWM7R0FDZCw4QkFBOEI7R0FDOUIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsMkJBQTJCO0dBQzNCLHlCQUF5QjtHQUN6QixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsY0FBYztHQUNkLDhCQUE4QjtHQUM5QixnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0Qix1QkFBdUI7R0FDdkIsU0FBUztHQUNULG1DQUEyQjtXQUEzQiwyQkFBMkI7QUFDOUI7O0FBRUE7R0FDRyxTQUFTO0FBQ1o7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLDZCQUE2QjtHQUM3QixrQkFBa0I7QUFDckIsQ0FBQTs7QUFFQTtHQUNHLFdBQVc7R0FDWCxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLGlCQUFpQjtHQUNqQix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLHFCQUFxQjtBQUN4Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCOztBQUVBOztHQUVHO01BQ0csWUFBWTtNQUNaLFlBQVk7R0FDZjs7R0FFQTtNQUNHLHVCQUF1QjtHQUMxQjs7R0FFQTtNQUNHLGVBQWU7TUFDZixZQUFZO01BQ1osWUFBWTtNQUNaLGlDQUF5QjtjQUF6Qix5QkFBeUI7R0FDNUI7O0dBRUE7TUFDRyxvQkFBb0I7TUFDcEIsWUFBWTtNQUNaLGFBQWE7TUFDYjsyQkFDcUI7R0FDeEI7O0dBRUE7TUFDRyx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixVQUFVO01BQ1Y7eUJBQ21CO0dBQ3RCO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3BhZ2Uge1xyXG4gICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgIHdpZHRoOiA4MCU7XHJcbiAgIC8qIGxlZnQ6IDUwJTsgKi9cclxuICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAqL1xyXG4gICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xyXG4gICAvKiB6LWluZGV4OiAxOyAqL1xyXG4gICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucm90YXRlVG9SZWR1Y2Uge1xyXG4gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcbiBcclxuIC5yb3RhdGVUb1JldXNlIHtcclxuICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgcGFkZGluZy1sZWZ0OiAtIDEwcHg7XHJcbn1cclxuXHJcbi5yb3RhdGVUb1JlY3ljbGUge1xyXG4gICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4uc3BpbnMge1xyXG4gICAvKiBtYXJnaW4tbGVmdDogMTIlOyAqL1xyXG4gICAvKiBtYXJnaW4tdG9wOiAyMCU7ICovXHJcbiAgIC8qIHotaW5kZXg6IDE7ICovXHJcbiAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xyXG59XHJcblxyXG4udHJlZSB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgd2lkdGg6IDQwJTtcclxuICAgLyogaGVpZ2h0OiAxNTBweDsgKi9cclxuICAgei1pbmRleDogMjtcclxuICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICBsZWZ0OiA1MCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgdG9wOiA2ZW07XHJcbn1cclxuXHJcbi5QaWMge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHotaW5kZXg6IDI7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tcG9uZW50QnV0dG9uIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMDNhMmM7ICovXHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIHdpZHRoOiAyNSU7XHJcbiAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgei1pbmRleDogMztcclxuICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcclxuICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgLyogYm90dG9tOiAyMCU7ICovXHJcbiAgIC8qIG1hcmdpbi1sZWZ0OiAzNiU7ICovXHJcbn1cclxuXHJcbi5yb3V0ZVRvQ29tcG9uZW50QnV0dG9uIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzMDNhMmM7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIC8qIHdpZHRoOiAyNSU7ICovXHJcbiAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgei1pbmRleDogMztcclxuICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcclxuICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgLyogYm90dG9tOiAyMCU7ICovXHJcbiAgIC8qIG1hcmdpbi1sZWZ0OiAzNiU7ICovXHJcbiAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICBsZWZ0OiA1MCU7XHJcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufSBcclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgIG91dGxpbmU6MDtcclxufVxyXG5cclxuI2J1dHRvbnMge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgLyogaGVpZ2h0OiA1NXB4OyAqL1xyXG59O1xyXG5cclxuI3JvdXRpbmdCdXR0b25zIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jYWN0aXZlRmFjdHMge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgwcHgpIHtcclxuXHJcbiAgIC5jb21wb25lbnRCdXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgfVxyXG5cclxuICAgI2J1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgLnNwaW5zIHtcclxuICAgICAgLyogbGVmdDogNTAlOyAqL1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgfVxyXG4gIFxyXG4gICAjaW1hZ2Uge1xyXG4gICAgICAvKiB0cmFuc2l0aW9uOiAxczsgKi9cclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAvKiB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgIH1cclxuICBcclxuICAgLnRyZWUge1xyXG4gICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgLyogbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwJTsgKi9cclxuICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() {
        this.activeFacts = "The concept of reducing what is produced and what is consumed is essential to the waste hierarchy. The logic behind it is simple to understand – if there is less waste, then there is less to recycle or reuse.";
        this.recycleActive = false;
        this.reuseActive = false;
        this.reduceActive = true;
    }
    updateSelectedComponent(component) {
        var element = document.getElementById('image');
        this.recycleActive = false;
        this.reuseActive = false;
        this.reduceActive = false;
        // console.log("clicked");
        switch (component) {
            case "recycle": {
                // console.log("recycle clicked");
                this.recycleActive = true;
                element.className = "rotateToRecycle";
                this.activeFacts = "One of the issues facing communities that want to become more involved with a recycling effort is that while the relying collection and sorting process may be affordable to implement, there still has to be a facility to receive and transform the discarded waste into a raw material. More progress is being made toward uniting recycling plants with industries that can process the waste material through agreements and incentive credits.";
                break;
            }
            case "reuse": {
                // console.log("reuse clicked");
                this.reuseActive = true;
                element.className = "rotateToReuse";
                this.activeFacts = "You may have a box of things you keep that are broken or that you don’t have a use for that you hang on to in-case you find another use for them; or you may find bargains on old furniture or go trash picking and get things that you can refinish – in either case you are working towards reusing the item. Learning to reuse items, or re-purpose them for a use different then what they are intended for is essential in waste hierarchy.";
                break;
            }
            case "reduce": {
                // console.log("reduce clicked");
                this.reduceActive = true;
                element.className = "rotateToReduce";
                this.activeFacts = "The concept of reducing what is produced and what is consumed is essential to the waste hierarchy. The logic behind it is simple to understand – if there is less waste, then there is less to recycle or reuse.";
                break;
            }
            default: {
                // console.log("default selected");
            }
        }
        ;
    }
    ;
    // Rotate() {
    //   var element = document.getElementById('image');
    //   var x = document.getElementById("reduce");
    //   var a = document.getElementById("reuse");
    //   var b = document.getElementById("recycle");
    //   var x1 = document.getElementById("reduce1");
    //   var a1 = document.getElementById("reuse1");
    //   var b1 = document.getElementById("recycle1");
    //   if (element.className === "normal") {
    //     element.className = "rotate";
    //     var x = document.getElementById("reduce");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //       a.style.display = "none";
    //       b.style.display = "none";
    //       x1.style.display = "block";
    //       a1.style.display = "none";
    //       b1.style.display = "none";
    //     } else {
    //       x.style.display = "none";
    //       a.style.display = "block";
    //       b.style.display = "none";
    //       x1.style.display = "none";
    //       a1.style.display = "block";
    //       b1.style.display = "none";
    //     }
    //   }
    //   else if (element.className === "rotate") {
    //     element.className = 'rotate1';
    //     var a = document.getElementById("reuse");
    //     if (x.style.display === "none") {
    //       a.style.display = "block";
    //       x.style.display = "none";
    //       b.style.display = "none";
    //       a1.style.display = "block";
    //       x1.style.display = "none";
    //       b1.style.display = "none";
    //     } else {
    //       x.style.display = "none";
    //       a.style.display = "block";
    //       b.style.display = "none";
    //       x1.style.display = "none";
    //       a1.style.display = "block";
    //       b1.style.display = "none";
    //     }
    //     a.style.display === "block";    
    //   } else if ( element.className === "rotate1" && element.className ==="rotate1") {
    //     element.className = 'normal';
    //     var b = document.getElementById("recycle");
    //     if (x.style.display === "none") {
    //       b.style.display = "block";
    //       a.style.display = "none";
    //       x.style.display = "none";
    //       b1.style.display = "block";
    //       a1.style.display = "none";
    //       x1.style.display = "none";
    //     } else {
    //       x1.style.display = "block";
    //       a1.style.display = "none";
    //       b1.style.display = "none";
    //       x1.style.display = "block";
    //       a1.style.display = "none";
    //       b1.style.display = "none";
    //     }
    //   }
    // }
    // optionClicked1() {
    //   document.getElementById('image').click();
    // }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/maps.service.ts":
/*!*********************************!*\
  !*** ./src/app/maps.service.ts ***!
  \*********************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MapsService = class MapsService {
    constructor(http) {
        this.http = http;
    }
    openLocationInMaps(lat, lng) {
        return ("https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng);
    }
    ;
};
MapsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapsService);



/***/ }),

/***/ "./src/app/models/flower-center.ts":
/*!*****************************************!*\
  !*** ./src/app/models/flower-center.ts ***!
  \*****************************************/
/*! exports provided: FlowerCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowerCenter", function() { return FlowerCenter; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/app/models/point.ts");

class FlowerCenter {
    constructor(centerPoint, centerRadius, centerColor) {
        this.centerPoint = centerPoint;
        this.centerRadius = centerRadius;
        this.centerColor = centerColor;
    }
    draw(context) {
        context.save();
        context.beginPath();
        context.arc(this.centerPoint.x, this.centerPoint.y, this.centerRadius, 0, 2 * Math.PI);
        context.fillStyle = this.centerColor;
        context.fill();
        context.restore();
    }
}
FlowerCenter.ctorParameters = () => [
    { type: _point__WEBPACK_IMPORTED_MODULE_0__["Point"] },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/flower.ts":
/*!**********************************!*\
  !*** ./src/app/models/flower.ts ***!
  \**********************************/
/*! exports provided: Flower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flower", function() { return Flower; });
/* harmony import */ var _petal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petal */ "./src/app/models/petal.ts");
/* harmony import */ var _flower_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flower-center */ "./src/app/models/flower-center.ts");


class Flower {
    constructor(flowerCenter, numberOfPetals, petal) {
        this.flowerCenter = flowerCenter;
        this.numberOfPetals = numberOfPetals;
        this.petal = petal;
        this.stopChanging = false;
        this.originalPetalRadius = this.petal.radius;
    }
    draw(context) {
        this.drawPetals(context);
        this.flowerCenter.draw(context);
    }
    increasePetalRadius() {
        this.petal = new _petal__WEBPACK_IMPORTED_MODULE_0__["Petal"](this.petal.centerPoint, this.petal.radius + 0.2, this.petal.tipSkewRatio, this.petal.angleSpan, this.petal.color);
    }
    increasePetalRadiusWithLimit() {
        if (this.petal.radius < this.originalPetalRadius + 20) {
            this.stopChanging = false;
            this.increasePetalRadius();
        }
        else {
            this.stopChanging = true;
        }
    }
    drawPetals(context) {
        context.save();
        const rotateAngle = (2 * Math.PI) / this.numberOfPetals;
        for (let i = 0; i < this.numberOfPetals; i++) {
            context.translate(this.petal.centerPoint.x, this.petal.centerPoint.y);
            context.rotate(rotateAngle);
            context.translate(-this.petal.centerPoint.x, -this.petal.centerPoint.y);
            this.petal.draw(context);
        }
        context.restore();
    }
}
Flower.ctorParameters = () => [
    { type: _flower_center__WEBPACK_IMPORTED_MODULE_1__["FlowerCenter"] },
    { type: Number },
    { type: _petal__WEBPACK_IMPORTED_MODULE_0__["Petal"] }
];


/***/ }),

/***/ "./src/app/models/petal.ts":
/*!*********************************!*\
  !*** ./src/app/models/petal.ts ***!
  \*********************************/
/*! exports provided: Petal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Petal", function() { return Petal; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/app/models/point.ts");

const rad = Math.PI / 180;
const tangent = 0.2;
class Petal {
    constructor(centerPoint, radius, tipSkewRatio, angleSpan, color) {
        this.centerPoint = centerPoint;
        this.radius = radius;
        this.tipSkewRatio = tipSkewRatio;
        this.angleSpan = angleSpan;
        this.color = color;
        this.vertices = this.getVertices();
        this.controlPoints = this.getControlPoints(this.vertices);
    }
    draw(context) {
        context.save();
        context.beginPath();
        context.moveTo(this.centerPoint.x, this.centerPoint.y);
        context.quadraticCurveTo(this.controlPoints[1][1].x, this.controlPoints[1][1].y, this.vertices[1].x, this.vertices[1].y);
        context.bezierCurveTo(this.controlPoints[1][0].x, this.controlPoints[1][0].y, this.controlPoints[2][1].x, this.controlPoints[2][1].y, this.vertices[2].x, this.vertices[2].y);
        context.bezierCurveTo(this.controlPoints[2][0].x, this.controlPoints[2][0].y, this.controlPoints[3][1].x, this.controlPoints[3][1].y, this.vertices[3].x, this.vertices[3].y);
        context.quadraticCurveTo(this.controlPoints[3][0].x, this.controlPoints[3][0].y, this.centerPoint.x, this.centerPoint.y);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    }
    getVertices() {
        const halfAngleSpan = 0.5 * this.angleSpan * rad;
        const dx = this.radius * Math.sin(halfAngleSpan);
        const dy = this.radius * Math.cos(halfAngleSpan);
        const tipRadius = this.radius * this.tipSkewRatio;
        return [
            this.centerPoint,
            new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.centerPoint.x - dx, this.centerPoint.y - dy),
            new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.centerPoint.x, this.centerPoint.y - tipRadius),
            new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.centerPoint.x + dx, this.centerPoint.y - dy),
            this.centerPoint
        ];
    }
    getControlPoints(vertices) {
        const controlPoints = [];
        for (let i = 1; i < vertices.length - 1; i++) {
            const dx = (vertices[i - 1].x - vertices[i + 1].x) * tangent;
            const dy = (vertices[i - 1].y - vertices[i + 1].y) * tangent;
            controlPoints[i] = [];
            controlPoints[i].push(new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](vertices[i].x - dx, vertices[i].y - dy));
            controlPoints[i].push(new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](vertices[i].x + dx, vertices[i].y + dy));
        }
        return controlPoints;
    }
}
Petal.ctorParameters = () => [
    { type: _point__WEBPACK_IMPORTED_MODULE_0__["Point"] },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/point.ts":
/*!*********************************!*\
  !*** ./src/app/models/point.ts ***!
  \*********************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }
}
Point.ctorParameters = () => [
    null,
    null
];


/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: 20px;\r\n    font-family: monospace;\r\n}\r\n\r\n.start {\r\n    font-size: 1.5em;\r\n    font-weight: bolder;\r\n    word-break: break-all;\r\n    width: 100px;\r\n    height: 150px;\r\n    border: 2px solid lightgrey;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 300px;\r\n    top: 50px;\r\n    color: lightgrey;\r\n}\r\n\r\n.start:hover {\r\n    border: 3px solid lightseagreen;\r\n    color: lightseagreen;\r\n}\r\n\r\n.quiz-container {\r\n    margin: 20px auto;\r\n    background-color: white;\r\n    height: 300px;\r\n    width: 700px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 5px 15px 0px;\r\n    position: relative;\r\n}\r\n\r\n.qImg {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.question {\r\n    text-align: center;\r\n    width: 500px;\r\n    height: 125px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.question p {\r\n    margin: 0;\r\n    padding: 15px;\r\n    font-size: 1.25em;\r\n}\r\n\r\n.choices {\r\n    display: flex;\r\n    width: 480px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 125px;\r\n    padding: 10px;\r\n}\r\n\r\n.choice {\r\n    display: inline-block;\r\n    width: 135px;\r\n    height: auto;\r\n    text-align: center;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n}\r\n\r\n.choice:hover {\r\n    border: 2px solid grey;\r\n    font-weight: bold;\r\n}\r\n\r\n#timer {\r\n    position: absolute;\r\n    height: 100px;\r\n    width: 200px;\r\n    bottom: 0px;\r\n    text-align: center;\r\n}\r\n\r\n#counter {\r\n    font-size: 3em;\r\n}\r\n\r\n#btimeGauge {\r\n    width: 150px;\r\n    height: 10px;\r\n    border-radius: 10px;\r\n    background-color: lightgray;\r\n    margin-left: 25px;\r\n}\r\n\r\n#timeGauge {\r\n    height: 10px;\r\n    border-radius: 10px;\r\n    background-color: mediumseagreen;\r\n    margin-top: -10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n#progress {\r\n    width: 500px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    padding: 5px;\r\n    text-align: right;\r\n}\r\n\r\n.prog {\r\n    width: 25px;\r\n    height: 25px;\r\n    border: 1px solid #000;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n#scoreContainer {\r\n    margin: 20px auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n    height: 300px;\r\n    width: 700px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 5px 15px 0px;\r\n    position: relative;\r\n    display: none;\r\n}\r\n\r\n#scoreContainer img {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 325px;\r\n}\r\n\r\n#scoreContainer p {\r\n    position: absolute;\r\n    display: block;\r\n    width: 59px;\r\n    height: 59px;\r\n    top: 130px;\r\n    left: 325px;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07QUFDVjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uc3RhcnQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzAwcHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4uc3RhcnQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG59XHJcblxyXG4ucXVpei1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucUltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxufVxyXG5cclxuLmNob2ljZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA0ODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jaG9pY2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNob2ljZTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiN0aW1lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb3VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4jYnRpbWVHYXVnZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbiN0aW1lR2F1Z2Uge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuI3Byb2dyZXNzIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiNzY29yZUNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jc2NvcmVDb250YWluZXIgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAzMjVweDtcclxufVxyXG5cclxuI3Njb3JlQ29udGFpbmVyIHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTlweDtcclxuICAgIGhlaWdodDogNTlweDtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBsZWZ0OiAzMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quiz_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz-info.service */ "./src/app/services/quiz-info.service.ts");



let QuizComponent = class QuizComponent {
    constructor(_quizInfoService) {
        this._quizInfoService = _quizInfoService;
    }
    ngOnInit() {
        this.initalize();
    }
    initalize() {
        this._displayTitle = true;
        this._quizInfoService.getJson().subscribe(this.onSuccess.bind(this), this.onError.bind(this));
    }
    generateOrderForAnswers() {
        let answers = this._questionAndAnswer.others;
        answers.push(this._questionAndAnswer.answer);
        const length = answers.length;
        const randomOrder = [];
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * Math.floor(answers.length));
            randomOrder.push(answers[index]);
            answers = answers.filter(a => a !== answers[index]);
        }
        return randomOrder;
    }
    onSuccess(items) {
        const final = items.map((res) => {
            return { id: res.id, question: res.question, answer: res.answer, others: res.others, answered: false, correct: false, image: 'img/html.png' };
        });
        this._questionsAndAnswers = final;
    }
    onError(error) {
        console.log(error);
    }
    getQuestion() {
        const nonUsed = this._questionsAndAnswers.filter(qanda => !qanda.answered);
        const randomIndex = Math.floor(Math.random() * Math.floor(nonUsed.length));
        const question = nonUsed[randomIndex];
        return question;
    }
    getCorrectAmount() {
        const correctQuestions = this._questionsAndAnswers.filter((item) => item.correct);
        this._numberCorrect = correctQuestions.length;
    }
    startQuiz() {
        this._numberCorrect = 0;
        this._displayTitle = false;
        this._questionAndAnswer = this.getQuestion();
        this._answers = this.generateOrderForAnswers();
    }
    submitAnswer(answer) {
        const index = this._questionsAndAnswers.indexOf(this._questionAndAnswer);
        if (this._questionAndAnswer.answer === answer) {
            this._questionsAndAnswers[index].correct = true;
            this._questionsAndAnswers[index].answered = true;
            alert('Correct');
        }
        else {
            this._questionsAndAnswers[index].correct = false;
            this._questionsAndAnswers[index].answered = true;
            alert('Wrong');
        }
        console.log(this._questionsAndAnswers);
        this.getCorrectAmount();
        this._questionAndAnswer = this.getQuestion();
        if (this._questionAndAnswer === undefined) {
            this.initalize();
            return;
        }
        this._answers = this.generateOrderForAnswers();
    }
};
QuizComponent.ctorParameters = () => [
    { type: _services_quiz_info_service__WEBPACK_IMPORTED_MODULE_2__["QuizInfoService"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html"),
        styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
    })
], QuizComponent);



/***/ }),

/***/ "./src/app/recycle/recycle.component.css":
/*!***********************************************!*\
  !*** ./src/app/recycle/recycle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bodyContainer {\r\n    background-color: #e6eae1;\r\n    margin: 0;\r\n}\r\n\r\n#contentContainer {\r\n    background-color: #e6eae1;\r\n    margin: auto;\r\n    width: 90%;\r\n}\r\n\r\n#locationContainer {\r\n    margin: 0px 10px 20px 10px;\r\n    /* padding: 0px 10px; */\r\n    display: flex;\r\n    /* flex-wrap: wrap; */\r\n    flex-direction: column;\r\n    border: 1px solid;\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n#locationInfo{\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n#locationForm {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0px 0px 20px 0px;\r\n}\r\n\r\n#locationInput {\r\n    position: relative;\r\n    width: 180px;\r\n    margin: 0px;\r\n    border-radius: 24px 0 0 24px;\r\n    padding-left: 10px;\r\n}\r\n\r\ninput:focus {\r\n    outline: 0px;\r\n}\r\n\r\nbutton:focus {\r\n    outline: 0px;\r\n}\r\n\r\n#locationButton {\r\n    color: white;\r\n    background-color: #50833c;\r\n    position: relative;\r\n    margin: 0px;\r\n    width: 120px;\r\n    border-radius: 0 24px 24px 0;\r\n    padding: 5px;\r\n}\r\n\r\n#errorMessage {\r\n    text-align: center;\r\n    color: red;\r\n}\r\n\r\n#viewButton {\r\n    width: 100%;\r\n    padding: 5px;\r\n    color: white;\r\n    background-color: #50833c;\r\n    border-width: 0px;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.backButton {\r\n    color: white;\r\n    background-color: #50833c;\r\n}\r\n\r\n#articleShowing {\r\n    margin: 0px 20px 20px 20px;\r\n}\r\n\r\n#reduceImg {\r\n    display: none;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    margin-top: 0;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.locationName {\r\n    text-align: center;\r\n    width: 100%;\r\n    color: #303a2c;\r\n    margin: 10px 0px;\r\n};\r\n\r\n/* .locationAddress {\r\n    width: 100%;\r\n}; */\r\n\r\n#locationContainer .locationInfo {\r\n    /* background-color: black; */\r\n    /* width: 80%; */\r\n    /* margin-left: 5px; */\r\n    padding: 0px 10px;\r\n    font-size: 200px;\r\n    /* border: 0px solid #303a2c; */\r\n};\r\n\r\n@media only screen and (min-width: 480px) {\r\n    #contentContainer{\r\n        width: 80%;\r\n    }\r\n\r\n    #viewButton {\r\n        margin: 10px 0px 0px 0px;\r\n        font-size: 16px;\r\n        }  \r\n    }\r\n\r\n@media only screen and (min-width: 768px) {\r\n    #contentContainer{\r\n        width:70%;\r\n    }\r\n    h1{\r\n        font-size: 40px;\r\n    }\r\n\r\n    #viewButton {\r\n        position: relative;\r\n        top: 15px;\r\n        margin-top: 0px;\r\n        margin: auto;\r\n        width: 20%;\r\n        border-radius: 20px;\r\n        padding: 5px;\r\n    }  \r\n\r\n    #buttonLink {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        text-decoration: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjeWNsZS9yZWN5Y2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIsQ0FBQTs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DLENBQUE7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2Y7SUFDSjs7QUFFSjtJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVjeWNsZS9yZWN5Y2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYWUxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGVudENvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYWUxO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuI2xvY2F0aW9uQ29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgLyogcGFkZGluZzogMHB4IDEwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiNsb2NhdGlvbkluZm97XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNsb2NhdGlvbkZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG59XHJcblxyXG4jbG9jYXRpb25JbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMCAwIDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDBweDtcclxufVxyXG5cclxuI2xvY2F0aW9uQnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgzM2M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjRweCAyNHB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0gIFxyXG5cclxuI2Vycm9yTWVzc2FnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jdmlld0J1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgzM2M7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJhY2tCdXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwODMzYztcclxufVxyXG5cclxuI2FydGljbGVTaG93aW5nIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMjBweCAyMHB4O1xyXG59XHJcblxyXG4jcmVkdWNlSW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvY2F0aW9uTmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMzAzYTJjO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufTtcclxuXHJcbi8qIC5sb2NhdGlvbkFkZHJlc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn07ICovXHJcblxyXG4jbG9jYXRpb25Db250YWluZXIgLmxvY2F0aW9uSW5mbyB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICAgIC8qIHdpZHRoOiA4MCU7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNXB4OyAqL1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgLyogYm9yZGVyOiAwcHggc29saWQgIzMwM2EyYzsgKi9cclxufTtcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgICNjb250ZW50Q29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZXdCdXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjY29udGVudENvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDo3MCU7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZpZXdCdXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfSAgXHJcblxyXG4gICAgI2J1dHRvbkxpbmsge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/recycle/recycle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recycle/recycle.component.ts ***!
  \**********************************************/
/*! exports provided: RecycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecycleComponent", function() { return RecycleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _earth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../earth.service */ "./src/app/earth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maps.service */ "./src/app/maps.service.ts");



// import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


let RecycleComponent = class RecycleComponent {
    constructor(earthService, mapsService) {
        this.earthService = earthService;
        this.mapsService = mapsService;
        this.country = "US";
        this.responseArrayKeys = [];
        this.responseArrayObjects = [
        // {0: {
        //   address: "46922 Romeo Plank",
        //   city: "Macomb",
        //   country: "US",
        //   created: "2011-12-20T11:53:27",
        //   curbside: false,
        //   description: "AutoZone",
        //   event_only: false,
        //   fax: "",
        //   geocoded: true,
        //   hours: "Please call for hours of operation.",
        //   latitude: 42.64244119839103,
        //   location_type_id: 28,
        //   longitude: -82.93529707050959,
        //   municipal: false,
        //   national: false,
        //   notes: null,
        //   notes_public: null,
        //   phone: "(586) 226-2730",
        //   postal_code: "48044",
        //   province: "MI",
        //   region: "Macomb",
        //   updated: "2011-12-20T11:53:27",
        //   url: "https://www.autozone.com/landing/page.jsp?name=in-our-stores"
        // }}, {0: {
        //   address: "18400 Hall Rd",
        //   city: "Charter Township of Clinton",
        //   country: "US",
        //   created: "2012-06-20T17:48:50",
        //   curbside: false,
        //   description: "Walmart Supercenter",
        //   event_only: false,
        //   fax: "",
        //   geocoded: true,
        //   hours: "Please call for hours of operation.",
        //   latitude: 42.62599730967077,
        //   location_type_id: 28,
        //   longitude: -82.93753160591059,
        //   municipal: false,
        //   national: false,
        //   notes: null,
        //   notes_public: null,
        //   phone: "(586) 263-7196",
        //   postal_code: "48038",
        //   province: "MI",
        //   region: "Macomb",
        //   updated: "2012-06-20T17:48:50",
        //   url: "https://www.walmart.com/"
        // }}
        ];
        this.errorMessage = "";
        this.recyclingFacts = [
            "Without exception, recycling is the top action society can do to simultaneously improve the environment, the economy, sustainable manufacturing, and to prevent waste from going into oceans.",
            "Recycling is in a crisis in the U.S. due to public confusion about recycling. Find your closest recycling center below!",
            "U.S. recycling levels are currently 21.4% (recent EPA funded Yale University Study). Let's do our part to find a center and get recycling!",
            "When U.S. recycling levels reach 75% it will be the environmental and CO2 equivalent of removing 55 million cars from U.S. roads each year. Let's find your closest center below!",
            "When U.S. recycling levels reach 75% it will generate 1.5 million new jobs in the U.S. (net). Let's find your closest center below!",
            "Manufacturers truly want these materials back to reuse in their manufacturing, but they aren't able to reuse the materials if people don't recycle. Let's find your closest location and get started!"
        ];
        this.recyclingFact = "";
    }
    ;
    openInMaps(lat, lng) {
        return this.mapsService.openLocationInMaps(lat, lng);
    }
    ;
    requestLatLonAndLocation() {
        if (this.ZIP > 4999 && this.ZIP < 100000) {
            // console.log("searching for " + this.ZIP);
            this.earthService.getUsersLatLon(this.country, this.ZIP).subscribe((resp) => {
                if (resp !== null) {
                    // console.log(resp);
                    this.latitude = resp.latitude;
                    this.longitude = resp.longitude;
                    // console.log(resp);
                    this.requestLocation();
                }
                else {
                    this.errorMessage = "Zip code not found";
                }
                ;
            });
        }
        else {
            this.errorMessage = "Please enter a 5-digit number to proceed";
        }
        ;
    }
    ;
    requestLocation() {
        this.earthService.getLocationFromLatLon(this.latitude, this.longitude).subscribe(resp => {
            // console.log("second API request ran");
            // console.log(resp);
            for (let index = 0; index < 20; index++) {
                this.responseArrayKeys[index] = (resp[index].location_id);
            }
            ;
            // console.log(this.responseArrayKeys);
            this.requestLocationDetails();
        });
    }
    ;
    requestLocationDetails() {
        // console.log(this.responseArrayKeys[0]);
        // console.log("fork runs now");
        let promises = [
            this.earthService.getLocationDetails(this.responseArrayKeys[0]),
            this.earthService.getLocationDetails(this.responseArrayKeys[1]),
            this.earthService.getLocationDetails(this.responseArrayKeys[2]),
            this.earthService.getLocationDetails(this.responseArrayKeys[3]),
            this.earthService.getLocationDetails(this.responseArrayKeys[4]),
            this.earthService.getLocationDetails(this.responseArrayKeys[5]),
            this.earthService.getLocationDetails(this.responseArrayKeys[6]),
            this.earthService.getLocationDetails(this.responseArrayKeys[7]),
            this.earthService.getLocationDetails(this.responseArrayKeys[8]),
            this.earthService.getLocationDetails(this.responseArrayKeys[9]),
            this.earthService.getLocationDetails(this.responseArrayKeys[10]),
            this.earthService.getLocationDetails(this.responseArrayKeys[11]),
            this.earthService.getLocationDetails(this.responseArrayKeys[12]),
            this.earthService.getLocationDetails(this.responseArrayKeys[13]),
            this.earthService.getLocationDetails(this.responseArrayKeys[14]),
            this.earthService.getLocationDetails(this.responseArrayKeys[15]),
            this.earthService.getLocationDetails(this.responseArrayKeys[16]),
            this.earthService.getLocationDetails(this.responseArrayKeys[17]),
            this.earthService.getLocationDetails(this.responseArrayKeys[18]),
            this.earthService.getLocationDetails(this.responseArrayKeys[19])
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promises).subscribe(values => {
            console.log("ran");
            // console.log(values);
            if (values === null) {
                this.errorMessage = "no results found";
            }
            this.responseArrayObjects = values;
            this.errorMessage = "";
            console.log(this.responseArrayObjects);
        });
    }
    ;
    ngOnInit() {
        let integerForRecyclingFact = Math.floor(Math.random() * this.recyclingFacts.length);
        this.recyclingFact = this.recyclingFacts[integerForRecyclingFact];
    }
};
RecycleComponent.ctorParameters = () => [
    { type: _earth_service__WEBPACK_IMPORTED_MODULE_2__["EarthService"] },
    { type: _maps_service__WEBPACK_IMPORTED_MODULE_4__["MapsService"] }
];
RecycleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recycle',
        template: __webpack_require__(/*! raw-loader!./recycle.component.html */ "./node_modules/raw-loader/index.js!./src/app/recycle/recycle.component.html"),
        styles: [__webpack_require__(/*! ./recycle.component.css */ "./src/app/recycle/recycle.component.css")]
    })
], RecycleComponent);



/***/ }),

/***/ "./src/app/reduce/reduce.component.css":
/*!*********************************************!*\
  !*** ./src/app/reduce/reduce.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentContainer, #articleShowContainer {\r\n  background-color: #e6eae1;\r\n  margin: auto;\r\n  width: 90%;\r\n}\r\n\r\n#bodyContainer {\r\n  background-color: #e6eae1;\r\n  margin: 0;\r\n}\r\n\r\n#articleContainer {\r\n  margin: 0px 10px 20px 10px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border: 1px solid;\r\n  border-radius: 10px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n#articleDes {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n#readButton {\r\n  width: 100%;\r\n  padding: 5px;\r\n  color: white;\r\n  background-color: #50833c;\r\n  border-width: 0px;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.backButton {\r\n  color: white;\r\n  background-color: #50833c;\r\n  border-radius: 20px;\r\n}\r\n\r\n#articleShowing {\r\n  margin: 0px 20px 20px 20px;\r\n}\r\n\r\n#reduceImg {\r\n  display: none;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding-top: 30px;\r\n  margin-top: 0;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 0px;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n  #contentContainer{\r\n    width: 80%;\r\n  }\r\n\r\n  #articleDes {\r\n    font-size: 20px;\r\n    width: 70%;\r\n    margin-left: 15px;\r\n    text-align: left;\r\n    margin: auto;\r\n  }  \r\n\r\n  #reduceImg{\r\n    display: flex;\r\n    width: 100px;\r\n    margin-right: 0px;\r\n    vertical-align: middle;\r\n    margin-top: 10px;\r\n  }\r\n  #readButton {\r\n    margin: 10px 0px 0px 0px;\r\n    font-size: 16px;\r\n   }  \r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  #contentContainer{\r\n    width:70%;\r\n  }\r\n  h1{\r\n    font-size: 40px;\r\n  }\r\n\r\n  #articleDes {\r\n    font-size: 25px;\r\n    padding: 5px;\r\n  }\r\n  #readButton {\r\n    position: relative;\r\n    top: 15px;\r\n    margin-top: 0px;\r\n    margin: auto;\r\n    width: 20%;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n   }  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkdWNlL3JlZHVjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZTtHQUNoQjtBQUNIOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3JlZHVjZS9yZWR1Y2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50Q29udGFpbmVyLCAjYXJ0aWNsZVNob3dDb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmVhZTE7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiNib2R5Q29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYWUxO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2FydGljbGVDb250YWluZXIge1xyXG4gIG1hcmdpbjogMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuI2FydGljbGVEZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNyZWFkQnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDgzM2M7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJhY2tCdXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA4MzNjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiNhcnRpY2xlU2hvd2luZyB7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbiNyZWR1Y2VJbWcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAjY29udGVudENvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAjYXJ0aWNsZURlcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH0gIFxyXG5cclxuICAjcmVkdWNlSW1ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gICNyZWFkQnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgfSAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICNjb250ZW50Q29udGFpbmVye1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gIH1cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcblxyXG4gICNhcnRpY2xlRGVzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgI3JlYWRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgIH0gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/reduce/reduce.component.ts":
/*!********************************************!*\
  !*** ./src/app/reduce/reduce.component.ts ***!
  \********************************************/
/*! exports provided: ReduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceComponent", function() { return ReduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _earth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../earth.service */ "./src/app/earth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReduceComponent = class ReduceComponent {
    constructor(earthService, router) {
        this.earthService = earthService;
        this.router = router;
        this.reduceURL = "";
        this.articleShown = false;
        this.earthService.getReduceArticles().subscribe((res) => {
            this.allArticles = res.result;
        });
    }
    requestArticleDetails(e) {
        this.reduceURL = encodeURIComponent(e.target.value);
        let decodeURL = decodeURIComponent(this.reduceURL);
        this.earthService.getArticleDetails(this.reduceURL).subscribe((res) => {
            this.articleDets = res[`${decodeURL}`];
            this.articleContent = this.articleDets.content;
            const regex = /(\[caption[^>]*].*?\[\/caption])/gm;
            this.cleanArticleContent = this.articleContent.replace(regex, "");
            this.articleShown = true;
            this.reduceDes = this.articleDets.description;
        });
    }
    ;
    scrollToTop() {
        window.scroll(0, 0);
    }
    ngOnInit() {
    }
};
ReduceComponent.ctorParameters = () => [
    { type: _earth_service__WEBPACK_IMPORTED_MODULE_2__["EarthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ReduceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reduce',
        template: __webpack_require__(/*! raw-loader!./reduce.component.html */ "./node_modules/raw-loader/index.js!./src/app/reduce/reduce.component.html"),
        styles: [__webpack_require__(/*! ./reduce.component.css */ "./src/app/reduce/reduce.component.css")]
    })
], ReduceComponent);

;


/***/ }),

/***/ "./src/app/reuse.service.ts":
/*!**********************************!*\
  !*** ./src/app/reuse.service.ts ***!
  \**********************************/
/*! exports provided: ReuseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseService", function() { return ReuseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ReuseService = class ReuseService {
    constructor(_http) {
        this._http = _http;
    }
    getData() {
        return this._http.get('https://www.reddit.com/r/Reuse/.json');
    }
};
ReuseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReuseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReuseService);

;


/***/ }),

/***/ "./src/app/reuse/reuse.component.css":
/*!*******************************************!*\
  !*** ./src/app/reuse/reuse.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentContainer{\r\n    background-color: #e6eae1;\r\n    margin: auto;\r\n    width: 90%;\r\n}\r\n\r\n#bodyContainer {\r\n    background-color: #e6eae1;\r\n    margin: 0;\r\n}\r\n\r\n.articleContainer {\r\n    margin: 0px 10px 20px 10px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border: 1px solid;\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.reuseArticle {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.reuseLink {\r\n    width: 100%;\r\n    padding: 5px;\r\n    color: white;\r\n    background-color: #50833c;\r\n    border-width: 0px;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.reuseImage {\r\n    display: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.reuseTitle {\r\n    padding-top: 30px;\r\n    margin-top: 0;\r\n    text-align: center;\r\n}\r\n\r\nbutton:focus {\r\n    outline: 0px;\r\n}\r\n\r\n@media only screen and (min-width:480px) {\r\n    #contentContainer{\r\n        width:80%;\r\n    }\r\n\r\n    .reuseArticle{\r\n        font-size: 20px;\r\n        width: 70%;\r\n        margin-left: 15px;\r\n        text-align: left;\r\n        margin: auto;\r\n    }\r\n\r\n    .reuseImage{\r\n        display: flex;\r\n        width: 100px;\r\n        margin-right: 0px;\r\n        vertical-align: middle;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .reuseLink{\r\n        margin: 10px 0px 0px 0px;\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    #contentContainer{\r\n        width:70%;\r\n    }\r\n    .reuseTitle{\r\n        font-size: 40px;\r\n    }\r\n\r\n    .articleContainer{\r\n        padding: 15px;\r\n    }\r\n\r\n    .reuseArticle{\r\n        font-size: 25px;\r\n        padding: 10px;\r\n    }\r\n\r\n    .reuseLink{\r\n        position: relative;\r\n        top: 30px;\r\n        margin-top: 0px;\r\n        margin: auto;\r\n        width: 20%;\r\n        border-radius: 20px;\r\n        padding: 5px;\r\n        z-index: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2UvcmV1c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXVzZS9yZXVzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYWUxO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuI2JvZHlDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWFlMTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFydGljbGVDb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnJldXNlQXJ0aWNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJldXNlTGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDgzM2M7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJldXNlSW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmV1c2VUaXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODBweCkge1xyXG4gICAgI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXVzZUFydGljbGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnJldXNlSW1hZ2V7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXVzZUxpbmt7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2NvbnRlbnRDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgfVxyXG4gICAgLnJldXNlVGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcnRpY2xlQ29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldXNlQXJ0aWNsZXtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmV1c2VMaW5re1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reuse/reuse.component.ts":
/*!******************************************!*\
  !*** ./src/app/reuse/reuse.component.ts ***!
  \******************************************/
/*! exports provided: ReuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReuseComponent", function() { return ReuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reuse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reuse.service */ "./src/app/reuse.service.ts");



let ReuseComponent = class ReuseComponent {
    constructor(reuseService) {
        this.reuseService = reuseService;
    }
    ngOnInit() {
        this.reuseItems = [];
        this.reuseService.getData().subscribe((res) => {
            res.data.children.forEach(item => {
                let url = item.data.url;
                let image = item.data.thumbnail;
                let title = item.data.title;
                let reuseObject = {
                    title: title,
                    url: url,
                    image: image
                };
                this.reuseItems.push(reuseObject);
            });
        });
    }
};
ReuseComponent.ctorParameters = () => [
    { type: _reuse_service__WEBPACK_IMPORTED_MODULE_2__["ReuseService"] }
];
ReuseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reuse',
        template: __webpack_require__(/*! raw-loader!./reuse.component.html */ "./node_modules/raw-loader/index.js!./src/app/reuse/reuse.component.html"),
        styles: [__webpack_require__(/*! ./reuse.component.css */ "./src/app/reuse/reuse.component.css")]
    })
], ReuseComponent);



/***/ }),

/***/ "./src/app/services/quiz-info.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/quiz-info.service.ts ***!
  \***********************************************/
/*! exports provided: QuizInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizInfoService", function() { return QuizInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let QuizInfoService = class QuizInfoService {
    constructor(_http) {
        this._http = _http;
    }
    getJson() {
        return this._http.get('../../assets/q-and-a-data.json');
    }
};
QuizInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuizInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuizInfoService);



/***/ }),

/***/ "./src/app/sprout-home/sprout-home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sprout-home/sprout-home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  text-decoration: none;\r\n  color: #232323;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\na:hover {\r\n  color: green;\r\n}\r\n\r\n#logo {\r\n margin-left: 25%;\r\n /* justify-content: center; */\r\n font-family: 'Caveat', cursive;\r\n font-size: 45px;\r\n color: #303a2c;\r\n}\r\n\r\n#bigMenu{\r\n  display: none;\r\n}\r\n\r\n#banner{\r\n  position: fixed;\r\n   display: flex;\r\n   justify-content: flex-start;\r\n  height: 60px;\r\n  width: 100%;\r\n  background-color: #8dbc74;\r\n  top: 0;\r\n  z-index: 10;\r\n}\r\n\r\n#menuToggle {\r\n  display: block;\r\n  position: relative;\r\n  top: 20px;\r\n  left: 20px;\r\n  z-index: 1;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#menuToggle input {\r\n  display: block;\r\n  width: 40px;\r\n  height: 32px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;\r\n  \r\n  cursor: pointer;\r\n  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */\r\n  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n/* hamburger*/\r\n\r\n#menuToggle span {\r\n  display: block;\r\n  width: 33px;\r\n  height: 4px;\r\n  margin-bottom: 5px;\r\n  position: relative;\r\n  \r\n  background: #303a2c;\r\n  border-radius: 3px;\r\n  \r\n  z-index: 1;\r\n  \r\n  -webkit-transform-origin: 4px 0px;\r\n  \r\n          transform-origin: 4px 0px;\r\n  \r\n  transition: background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease;\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n              opacity 0.55s ease,\r\n              -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n\r\n#menuToggle span:first-child {\r\n  -webkit-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n#menuToggle span:nth-last-child(2) {\r\n  -webkit-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n/* Transform to a crossmark */\r\n\r\n#menuToggle input:checked ~ span {\r\n  opacity: 1;\r\n  -webkit-transform: rotate(45deg) translate(-2px, -1px);\r\n          transform: rotate(45deg) translate(-2px, -1px);\r\n  background: #232323;\r\n}\r\n\r\n/* Hide the middle one */\r\n\r\n#menuToggle input:checked ~ span:nth-last-child(3) {\r\n  opacity: 0;\r\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\r\n          transform: rotate(0deg) scale(0.2, 0.2);\r\n}\r\n\r\n/*\r\n * Ohyeah and the last one should go the other direction\r\n */\r\n\r\n#menuToggle input:checked ~ span:nth-last-child(2) {\r\n  -webkit-transform: rotate(-45deg) translate(0, -1px);\r\n          transform: rotate(-45deg) translate(0, -1px);\r\n}\r\n\r\n#navigation {\r\n  /* height: 100%; */\r\n}\r\n\r\n/* Make this absolute positioned*/\r\n\r\n#menu {\r\n  position: absolute;\r\n  width: 100px;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px;\r\n  padding-top: 125px;\r\n  /* height: 100%; */\r\n  background: #8dbc74;\r\n  list-style-type: none;\r\n  -webkit-font-smoothing: antialiased;\r\n /* to stop flickering of text in safari */\r\n  \r\n  -webkit-transform-origin: 0% 0%;\r\n  \r\n          transform-origin: 0% 0%;\r\n  -webkit-transform: translate(-100%, 0);\r\n          transform: translate(-100%, 0);\r\n  \r\n  transition: -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n  \r\n  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), -webkit-transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n}\r\n\r\n#menu li {\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n}\r\n\r\n/* slide it in from the left*/\r\n\r\n#menuToggle input:checked ~ ul {\r\n  -webkit-transform: none;\r\n          transform: none;\r\n}\r\n\r\n#reduce {\r\n  margin-top: 100px;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n  nav{\r\n    display: none;\r\n  }\r\n\r\n  #bigMenu{\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    padding-left: 0px;\r\n    align-items: center;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slidein;\r\n            animation-name: slidein;\r\n  }\r\n  @-webkit-keyframes slidein {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 100%; \r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 300%;\r\n    }\r\n  }\r\n  @keyframes slidein {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 100%; \r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 300%;\r\n    }\r\n  }\r\n\r\n  #bigMenu li {\r\n    font-size: 16px;\r\n    background-color: whitesmoke;\r\n    color: #303a2c;\r\n    padding: 2px;\r\n    margin: 5px;\r\n    border-radius: 30px;\r\n    width:100%;\r\n    text-align: center;\r\n  }\r\n\r\n  #logo {\r\n    justify-content: end;\r\n    margin-left: 0px;\r\n    margin-right: 2%;\r\n    font-size: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  #bigMenu li{\r\n    font-size: 18px;\r\n    padding: 5px;\r\n  }\r\n  \r\n  #logo {\r\n    margin-right: 2%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Byb3V0LWhvbWUvc3Byb3V0LWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7R0FDZCxhQUFhO0dBQ2IsMkJBQTJCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixzQkFBaUI7R0FBakIscUJBQWlCO09BQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTs7RUFFVixlQUFlOztFQUVmLFVBQVUsRUFBRSxjQUFjO0VBQzFCLFVBQVUsRUFBRSxvQ0FBb0M7O0VBRWhELDJCQUEyQjtBQUM3Qjs7QUFFQSxhQUFhOztBQUNiO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsVUFBVTs7RUFFVixpQ0FBeUI7O1VBQXpCLHlCQUF5Qjs7RUFFekI7O29FQUU4Qjs7RUFGOUI7O2dDQUU4Qjs7RUFGOUI7OztvRUFFOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQSw2QkFBNkI7O0FBQzdCO0VBQ0UsVUFBVTtFQUNWLHNEQUE4QztVQUE5Qyw4Q0FBOEM7RUFDOUMsbUJBQW1CO0FBQ3JCOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSxVQUFVO0VBQ1YsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRTs7QUFDRjtFQUNFLG9EQUE0QztVQUE1Qyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsaUNBQWlDOztBQUNqQztFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUNBQW1DO0NBQ3BDLHlDQUF5Qzs7RUFFeEMsK0JBQXVCOztVQUF2Qix1QkFBdUI7RUFDdkIsc0NBQThCO1VBQTlCLDhCQUE4Qjs7RUFFOUIsa0VBQTBEOztFQUExRCwwREFBMEQ7O0VBQTFELGtIQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLDZCQUE2Qjs7QUFDN0I7RUFDRSx1QkFBZTtVQUFmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtFQUNGO0VBVkE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zcHJvdXQtaG9tZS9zcHJvdXQtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjMyMzIzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiBtYXJnaW4tbGVmdDogMjUlO1xyXG4gLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XHJcbiBmb250LXNpemU6IDQ1cHg7XHJcbiBjb2xvcjogIzMwM2EyYztcclxufVxyXG5cclxuI2JpZ01lbnV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2Jhbm5lcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYmM3NDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNtZW51VG9nZ2xlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBpbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC03cHg7XHJcbiAgbGVmdDogLTVweDtcclxuICBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHJcbiAgb3BhY2l0eTogMDsgLyogaGlkZSB0aGlzICovXHJcbiAgei1pbmRleDogMjsgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xyXG4gIFxyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxufVxyXG5cclxuLyogaGFtYnVyZ2VyKi9cclxuI21lbnVUb2dnbGUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICBiYWNrZ3JvdW5kOiAjMzAzYTJjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBcclxuICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICBvcGFjaXR5IDAuNTVzIGVhc2U7XHJcbn1cclxuXHJcbiNtZW51VG9nZ2xlIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG59XHJcblxyXG4jbWVudVRvZ2dsZSBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG59XHJcblxyXG4vKiBUcmFuc2Zvcm0gdG8gYSBjcm9zc21hcmsgKi9cclxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBtaWRkbGUgb25lICovXHJcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDMpIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxufVxyXG5cclxuLypcclxuICogT2h5ZWFoIGFuZCB0aGUgbGFzdCBvbmUgc2hvdWxkIGdvIHRoZSBvdGhlciBkaXJlY3Rpb25cclxuICovXHJcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgwLCAtMXB4KTtcclxufVxyXG5cclxuI25hdmlnYXRpb24ge1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG5cclxuLyogTWFrZSB0aGlzIGFic29sdXRlIHBvc2l0aW9uZWQqL1xyXG4jbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IC0xMDBweCAwIDAgLTUwcHg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gIGJhY2tncm91bmQ6ICM4ZGJjNzQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gLyogdG8gc3RvcCBmbGlja2VyaW5nIG9mIHRleHQgaW4gc2FmYXJpICovXHJcbiAgXHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCk7XHJcbn1cclxuXHJcbiNtZW51IGxpIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4vKiBzbGlkZSBpdCBpbiBmcm9tIHRoZSBsZWZ0Ki9cclxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbiNyZWR1Y2Uge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgbmF2e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNiaWdNZW51e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2xpZGVpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIH1cclxuICBcclxuICAgIHRvIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICB3aWR0aDogMzAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNiaWdNZW51IGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogIzMwM2EyYztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAjbG9nbyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI2JpZ01lbnUgbGl7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dvIHtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/sprout-home/sprout-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sprout-home/sprout-home.component.ts ***!
  \******************************************************/
/*! exports provided: SproutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SproutHomeComponent", function() { return SproutHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SproutHomeComponent = class SproutHomeComponent {
    constructor() { }
    ngOnInit() {
    }
    optionClicked() {
        document.getElementById('menuButton').click();
    }
};
SproutHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sprout-home',
        template: __webpack_require__(/*! raw-loader!./sprout-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/sprout-home/sprout-home.component.html"),
        styles: [__webpack_require__(/*! ./sprout-home.component.css */ "./src/app/sprout-home/sprout-home.component.css")]
    })
], SproutHomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\Documents\FrontEndBootcamp\FinalProject\Sprout\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map