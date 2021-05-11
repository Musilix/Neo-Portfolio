(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar context = \"about\"></app-nav-bar>\r\n<div id=\"about-content\">\r\n    <div class=\"about-content-item\" id=\"intro\">\r\n        <div id=\"intro-header-wrap\" class=\"intro-content\">\r\n            <h2>Hey, I'm Kareem.</h2>\r\n            <h2>A <span style=\"background-color:#e07479;color:white\">full stack developer</span> with a full stack of skills!</h2>\r\n        </div>\r\n        <div id=\"intro-depth-wrap\" class=\"intro-content\">\r\n            <div id=\"intro-text\">\r\n                <p>I've been programming since 2018, finding myself in a range of settings; from 3d modeling and programming for games to building full stack web applications. I aim to go further than is expected, providing not just with my technical ability, but my understanding in experience and design as well. I make it my best effort to better myself in the things I am not acquainted with and work hard when set with a goal.</p>\r\n                <p>To be a bit more formal, you should take a look at my <a id=\"resumeLink\" href=\"assets/resume.pdf\">resume</a></p>\r\n                <p>I've been programming since 2014, finding myself in a range of settings; from 3d modeling and programming for games to building full stack web applications.</p>\r\n            </div>\r\n            <div id=\"intro-pic\">\r\n                <picture id=\"intro-pic-inner\">\r\n                    <img id=\"me\" src=\"assets/me.png\" alt=\"Dr. Kareem\">\r\n                </picture>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"about-content-divider\"></div>\r\n    <div class=\"about-content-item\" id=\"stats\">\r\n        <div id=\"about-stats-inner\">\r\n            <div id=\"time-wrap\">\r\n                <h2>\r\n                    <span *ngIf = 'totalTime != \"0 secs\"; else elseBlock'>\r\n                        {{totalTime}}\r\n                    </span>\r\n                </h2>\r\n                <ng-template #elseBlock>\r\n                    <span class = \"minified\">\r\n                        Nothing!\r\n                    </span>\r\n                </ng-template>\r\n\r\n                <p *ngIf = 'totalTime != \"0 secs\"; else elseMsgBlock'>spent over the last 7 days, coding at the speed of light!</p>\r\n                <ng-template #elseMsgBlock>\r\n                    <p>\r\n                        I've done nothing over the past week! Must be on vacay...\r\n                    </p>\r\n                </ng-template>\r\n            </div>\r\n\r\n            <!-- must get the objs that filled the statBarStyles going backwards, as we pushed into stack sequentially intitially -->\r\n            <div id=\"stats-data-bars\" *ngIf = 'totalTime != \"0 secs\"'>\r\n                <ng-container *ngFor = \"let lang of topLangs; let i = index;\">\r\n                    <div #codingStats class=\"stats-bar\" [ngStyle]=\"statBarStyles[iterAmt - 1 - i]\" [@fadeIn]=\"{value: false, params: {index: i, statWidth: statBarStyles[iterAmt - 1 - i]['width'], statBackground: statBarStyles[iterAmt - 1 - i]['background']}}\">\r\n                        <p>{{topLangs[i][\"lang\"]}}</p>\r\n                        <p>{{timeCheck(topLangs[i][\"hrs\"], topLangs[i][\"mins\"])}}</p>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"best-day-msg-wrap\" *ngIf = 'totalTime != \"0 secs\"'>\r\n            <h2>My most productive day in the past 7 days was <span style=\"background-color: #e0a674;color:white; padding: 1px\">{{bestDay}}</span>. {{dayComments[bestDay]}}</h2>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"outter-content-wrap\">\r\n    <div id=\"inner-content-wrap\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/art-item/art-item.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/art-item/art-item.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppArtItemArtItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"art-bio-wrap\" id=\"{{'art-bio-' + artObj.index}}\">\r\n    <div class=\"art-bio-detail-wrap\">\r\n        <div class=\"art-img-exit-wrap\">\r\n            <img src=\"{{artObj.img}}\" id=\"{{'art' + artObj.index}}\" class=\"art-bio-img\">\r\n            <div class=\"art-exit-wrap\" (click) = \"closeProj()\">\r\n                <img class=\"art-img-close\" src=\"assets/close.png\">\r\n            </div>\r\n        </div>\r\n        <div class=\"bio-bottom-lip-wrap\">\r\n            <h2>{{artObj.title}}</h2>\r\n            <p>{{artObj.description}}</p>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/art-list/art-list.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/art-list/art-list.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppArtListArtListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngFor=\"let art of getArt()\">\r\n    <app-art-item [artObj]=\"art\"></app-art-item>\r\n</ng-container>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar context = \"contact\"></app-nav-bar>\r\n<div id=\"contact-content-wrap\">\r\n    <div id=\"left-contact-wrap\">\r\n        <div id=\"left-contact-content\">\r\n            <h2>\r\n                GET\r\n            </h2>\r\n            <h2>\r\n                IN\r\n            </h2>\r\n            <h2>\r\n                TOUCH\r\n            </h2>\r\n        </div>\r\n    </div>\r\n    <div id=\"right-contact-wrap\">\r\n        <div id=\"right-contact-content\">\r\n            <!-- <div class=\"contact-section\">\r\n                <h1>Send me an email!</h1>\r\n                <a href=\"\"><p>kshehab1@outlook.com</p></a>    \r\n            </div> -->\r\n            <div class=\"contact-section\">\r\n                <h1>Connect</h1>\r\n                <section id=\"nav-links\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"https://github.com/Musilix\">\r\n                                <img class=\"contact-img\" src=\"assets/contact-imgs/git.png\">\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://www.linkedin.com/in/kareemshehab-a95162154/\">\r\n                                <img class=\"contact-img\" src=\"assets/contact-imgs/linked.png\">\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://stackoverflow.com/users/7471743/musilix\">\r\n                                <img class=\"contact-img\" src=\"assets/contact-imgs/stack.png\">\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"mailto:kshehab1@outlook.com\">\r\n                                <img class=\"contact-img\" src=\"assets/contact-imgs/out.png\">\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </section>\r\n            </div>\r\n            <div class=\"contact-section\">\r\n                <h1>Message me directly!</h1>\r\n                <form id=\"message-wrap\">\r\n                    <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your Email\">\r\n                    <input type=\"text\" id=\"topic\" name=\"topic\" placeholder=\"Topic\">\r\n                    <textarea id=\"message\" name=\"message\" form=\"message-wrap\">Whatever you'd like to say</textarea>\r\n                    <!-- <input type=\"text\" id=\"message\" name=\"message\" placeholder=\"Whatever you'd like to say\"> -->\r\n                    <input type=\"button\" id=\"submit\" value=\"send\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <section id=\"contact-content\">\r\n        <div id=\"contact-inner-content-wrap\">\r\n            <h2>Get in Touch</h2>\r\n            <p>Don't let it end here; feel free to contact me with any inquiries. Help with a math problem, a need for a programmer, someone to chat with; anything you need, don't be afraid to reach out!</p>\r\n        </div>\r\n    </section>\r\n    <section id=\"nav-links\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://github.com/Musilix\">\r\n                    <img class=\"contact-img\" src=\"assets/contact-imgs/git.png\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.linkedin.com/in/kareemshehab-a95162154/\">\r\n                    <img class=\"contact-img\" src=\"assets/contact-imgs/linked.png\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://stackoverflow.com/users/7471743/musilix\">\r\n                    <img class=\"contact-img\" src=\"assets/contact-imgs/stack.png\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"mailto:kshehab1@outlook.com\">\r\n                    <img class=\"contact-img\" src=\"assets/contact-imgs/out.png\">\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </section> -->\r\n</div>\r\n<!-- <div id=\"bg-design-wrap\">\r\n    <aside id=\"bg-blobs\">\r\n        <img class=\"blob-img\" id=\"blob1\" src=\"assets/blobs/subblobs/blob15.svg\">\r\n        <img class=\"blob-img\" id=\"blob2\" src=\"assets/blobs/subblobs/blob10.svg\">\r\n        <img class=\"blob-img\" id=\"blob3\" src=\"assets/blobs/subblobs/blob3.svg\">\r\n        <img class=\"blob-img\" id=\"blob4\" src=\"assets/blobs/subblobs/blob11.svg\">\r\n        <img class=\"blob-img\" id=\"blob5\" src=\"assets/blobs/subblobs/blob8.svg\"> \r\n        <img class=\"blob-img\" id=\"blob6\" src=\"assets/blobs/subblobs/blob16.svg\"> \r\n    </aside>\r\n</div> -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/endeavour-item/endeavour-item.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/endeavour-item/endeavour-item.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEndeavourItemEndeavourItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"end-1\" class =\"endeavours-preview-wrap\" *ngIf=\"displayEnd\">\r\n\r\n    <div class =\"endeavours-img-prev-wrap\">\r\n        <div class=\"left-nav-button\">\r\n            <img [ngClass] = \"{'endeavour-nav-active': hasLeftEnd(), 'endeavour-nav-inactive': !hasLeftEnd()}\" (click)=\"hasLeftEnd() ? handleLeftNavClick() : null\" src=\"assets/nav-left.png\">\r\n        </div>\r\n\r\n        <img class=\"end-img\" src=\"{{endObj.image}}\">\r\n\r\n        <div class=\"right-nav-button\">\r\n            <img [ngClass] = \"{'endeavour-nav-active': hasRightEnd(), 'endeavour-nav-inactive': !hasRightEnd()}\" (click)=\"hasRightEnd() ? handleRightNavClick() : null\" src=\"assets/nav-right.png\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class =\"endeavours-desc-prev-wrap\">\r\n        <h2>{{endObj.title}}</h2>\r\n        <p class =\"endeavour-desc\">\r\n            {{endObj.prevDesc}}\r\n        </p>\r\n    </div>\r\n\r\n    <div class =\"more-info-butt-wrap\" id=\"more-info-1\" (click)=\"displayEndeavour(endObj.index)\">\r\n        <div class =\"more-info-butt\">\r\n            <p>Read more</p>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"canReadMore\">\r\n        <div class=\"readmore-fake-wrap\">\r\n            <div class=\"readmore-wrap\">\r\n                <div class=\"readmore-details-wrap\">\r\n                    <h2>{{endObj.title}}</h2>\r\n                    <p>{{endObj.readMore}}</p>\r\n                </div>\r\n    \r\n                <div class=\"end-exit-wrap\" (click)=\"closeCurrEndeavour()\">\r\n                    <img src=\"assets/close.png\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/endeavours-list/endeavours-list.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/endeavours-list/endeavours-list.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEndeavoursListEndeavoursListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"endeavours-list-wrap\">\r\n    <!-- <p>{{getEndeavours()}}</p> -->\r\n    <div id=\"endeavours-index-wrap\">\r\n        <p>{{currIdx+1}}</p>\r\n        <div id=\"index-divider\"></div>\r\n        <p>{{getEndeavours().length}}</p>\r\n    </div>\r\n    <ng-container *ngFor = \"let endeavour of getEndeavours()\">\r\n        <!-- <p>{{getEndeavours().length}}</p>\r\n        <p>hi</p> -->\r\n\r\n        <app-endeavour-item [endeavourLen] = \"getEndeavours().length\" [endObj] = \"endeavour\" [displayEnd] = \"currIdx == endeavour.index\" (nav)=\"handleNavClick($event)\"></app-endeavour-item>\r\n    </ng-container>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/extras-page/extras-page.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/extras-page/extras-page.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExtrasPageExtrasPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar context = \"extras\"></app-nav-bar>\r\n<div id=\"extras-content-wrap\">\r\n\r\n    <section class=\"extra-section\" id=\"endeavours\">\r\n        <app-endeavours-list></app-endeavours-list>\r\n    </section>\r\n\r\n    <section class=\"extra-section\" id=\"art\">\r\n        <app-art-list></app-art-list>\r\n        <div id=\"art-list-wrap\">\r\n            <ul id=\"art-wrap\">\r\n                <ng-container *ngFor=\"let art of getArt()\">\r\n                    <li class=\"art-item\" id=\"{{'art' + art.index}}\" (click)=\"displayArt(art.index)\">\r\n                        <div class=\"art-detail-wrap\">\r\n                            <img src=\"{{art.img}}\" class=\"art-img\">\r\n                            <div class=\"bottom-lip-wrap\">\r\n                                <h2>{{art.title}}</h2>\r\n                                <p>{{art.medium}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ng-container>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- temporarily remove... or maybe remove forever. ppl probably don't care... maybe they do, idk! -->\r\n    <!-- <section class=\"extra-section\" id=\"hobbies\">\r\n        <div id=\"hobbies-left-wrap\">\r\n            <div id=\"hobbies-left-inner\">\r\n                <h2>\r\n                    Whats currently got my attention? BIG POOPY\r\n                </h2>\r\n                <p>\r\n                    I’d like to take the time, if you’re interested, to share with you some hobbies I’m trying to take up. Maybe it’s something you can teach me about!                </p>\r\n            </div>\r\n        </div>\r\n\r\n        abstract this out to a component probably\r\n        <div id=\"hobbies-right-wrap\">\r\n            <div id=\"hobbies-right-inner\">\r\n                <div class=\"hobby-item\" (click) = \"handleHobby($event)\">\r\n                    <img src=\"assets/proj5.gif\">\r\n                    <div id=\"hobby1\" class=\"hobby-details\">\r\n                        <h3>Rollerblading</h3>\r\n                        <p>I took up rollerblading in the beginning of the pandemic, and it's been a hobby since!</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"hobby-item\">\r\n                    <img src=\"assets/proj4.gif\" (click) = \"handleHobby($event)\">\r\n                    <div id=\"hobby2\" class=\"hobby-details\">\r\n                        <h3>Rollerblading</h3>\r\n                        <p>I took up rollerblading in the beginning of the pandemic, and it's been a hobby since!</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"hobby-item\">\r\n                    <img src=\"assets/proj3.gif\" (click) = \"handleHobby($event)\">\r\n                    <div id=\"hobby3\" class=\"hobby-details\">\r\n                        <h3>Rollerblading</h3>\r\n                        <p>I took up rollerblading in the beginning of the pandemic, and it's been a hobby since!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  -->\r\n</div>\r\n\r\n<div id=\"extras-content-nav-wrap\">\r\n    <!-- remove for now... DO PPL EVEN RLLY CARE!? Probably not... smh -->\r\n    <!-- <div class=\"nav-ele\" id=\"hobbies-nav\" (click)=\"scrollTo(2)\" [ngClass] = \"{'active': activeTabIdx == 2, 'inactive': activeTabIdx != 2}\">\r\n        <p>Hobbies</p>\r\n    </div> -->\r\n    <div class=\"nav-ele\" id=\"art-nav\" (click)=\"scrollTo(1)\" [ngClass] = \"{'active': activeTabIdx == 1, 'inactive': activeTabIdx != 1}\">\r\n        <p>Art</p>\r\n    </div>\r\n    <div class=\"nav-ele\" id=\"endeavours-nav\" (click)=\"scrollTo(0)\" [ngClass] = \"{'active': activeTabIdx == 0, 'inactive': activeTabIdx != 0}\">\r\n        <p>Endeavours</p>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"about-header\">\r\n    <div id=\"header-logo-wrap\">\r\n        <a id=\"img-splash-link\" routerLink=\"/\" routerLinkActive=\"active\"><img id=\"logo-literal\" src=\"assets/logo.svg\"/></a>\r\n        <h1><a id=\"text-splash-link\" class=\"link-button\" routerLink=\"/\" routerLinkActive=\"active\">kareemshehab.github.io</a></h1>\r\n    </div>\r\n    <nav id=\"header-nav-wrap\">\r\n        <ul>\r\n            <li class=\"link-button\" *ngFor = \"let navOption of navOptionsContext\">\r\n                <a routerLink = \"/{{navOption}}\" routerLinkActive=\"active\">{{navOption | uppercase}}</a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProjectListProjectListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngFor=\"let project of getProjs()\">\r\n    <div id=\"{{'proj' + project.index + '-wrap'}}\" class=\"proj-wrap\">\r\n        <div id=\"close-project-wrap\" (click) = 'closeCurrentProj()'>\r\n            <img src=\"assets/close.png\">\r\n        </div>\r\n    \r\n        <picture>\r\n            <img id=\"{{'proj' + project.index + '-accent'}}\" class=\"proj-accent\" src=\"\">\r\n        </picture>\r\n    \r\n        <div class=\"dynamic-proj-info-wrap\">\r\n            <div class=\"proj-left\">\r\n                <img src=\"{{project.img}}\"/>\r\n            </div>\r\n    \r\n            <div class=\"proj-right\">\r\n                <div class=\"proj-right-content\">\r\n                    <h2>\r\n                        {{project.title}}\r\n                    </h2>\r\n                    <p id=\"proj-description\">\r\n                        {{project.description}}\r\n                    </p>\r\n                    <ul class=\"tech-stack-wrap\">\r\n                        <ng-container *ngFor = \"let tech of project.stack\">\r\n                            <li>\r\n                                <p>\r\n                                    {{tech}}\r\n                                </p>\r\n                            </li>\r\n                        </ng-container>\r\n                    </ul>\r\n                    <ul class=\"links-wrap\">\r\n                        <li>\r\n                            <a href=\"{{project.links[0].link}}\">\r\n                                <img src=\"assets/contact-imgs/git.png\">\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"{{project.links[1].link}}\">\r\n                                <img src=\"assets/external.png\">\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/projects-page/projects-page.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects-page/projects-page.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProjectsPageProjectsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar context = \"projects\"></app-nav-bar>\r\n<section class=\"proj-outter-wrap\">\r\n     <app-project-list></app-project-list>\r\n\r\n    <div id=\"projects-outter\">\r\n        <div id=\"projects-inner\">\r\n            <ul id=\"projects-content\">\r\n                <ng-container *ngFor=\"let proj of getProjs()\">\r\n                    <li class=\"project-main\">\r\n                        <picture>\r\n                            <img (click)=\"displayProj(proj.index)\" id=\"{{'proj' + proj.index}}\" src=\"{{proj.img}}\">\r\n                        </picture>\r\n                        <h3>{{proj.title}}</h3>\r\n                        <ul id=\"mini-tech-wrap\">\r\n                            <ng-container *ngFor=\"let tech of proj.stack\">\r\n                                <li>\r\n                                    <p>{{tech}}</p>\r\n                                </li>\r\n                            </ng-container>\r\n                        </ul>\r\n                    </li>\r\n                </ng-container>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div id=\"bg-blob-wrap\">\r\n    <picture id=\"blob1-wrap\">\r\n        <img id=\"blob1\" class=\"bg-blob\" src=\"assets/blobs/subblobs/blob15.svg\">\r\n        <!-- <picture id=\"circle1-wrap\">\r\n            <svg height=\"100\" width=\"100\">\r\n                <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#F1C21B\" stroke-width=\"6\" fill=\"none\" />\r\n            </svg> \r\n        </picture> -->\r\n    </picture>\r\n    <picture id=\"blob2-wrap\">\r\n        <img id=\"blob2\" class=\"bg-blob\" src=\"assets/blobs/aboutblobs/blob1.svg\">\r\n    </picture>\r\n    <picture  id=\"blob3-wrap\">\r\n        <img id=\"blob3\" class=\"bg-blob\" src=\"assets/blobs/subblobs/blob3.svg\">\r\n    </picture>\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/splash-page/splash-page.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash-page/splash-page.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSplashPageSplashPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"splash-content-wrap\">\r\n    <div id=\"nav-wrap\">\r\n        <!-- make fake div to just make aligning right easier for other div... -->\r\n        <div class=\"nav\" id=\"left\">\r\n            <!-- stuff both img tags in one picture tag if u want the accent to cover more of the screen -->\r\n            <picture id=\"left-wrap\">\r\n                <img id=\"bg-accent\" src=\"assets/blobs/subblobs/blob2.svg\">\r\n            </picture>\r\n            <picture id=\"follower-wrap\">\r\n                <img id=\"follower\" src=\"assets/myBigHead.gif\">\r\n            </picture>\r\n        </div>\r\n        <div class=\"nav\" id=\"right\">\r\n            <div id=\"right-nav-wrap\">\r\n                <div id=\"splash-intro-text\">\r\n                    <h2>What's up! I'm Kareem</h2>\r\n                    <p>I'm a software engineer, currently residing over in Atlanta - not Hotlanta - where I focus on building up and publishing projects in various settings</p>\r\n                </div>\r\n                <nav>\r\n                    <ul>\r\n                        <li class=\"link-button\" id=\"splash-button\"><a routerLink = \"/about\" routerLinkActive = \"active\">ABOUT</a></li>\r\n                        <li class=\"link-button\" id=\"splash-button\"><a routerLink = \"/projects\" routerLinkActive=\"active\">PROJECTS</a></li>\r\n                        <li class=\"link-button\" id=\"splash-button\"><a routerLink = \"/contact\" routerLinkActive = \"active\">CONTACT</a></li>\r\n                        <li class=\"link-button\" id=\"splash-button\"><a routerLink= \"/extras\" routerLinkActive=\"active\">EXTRAS</a></li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./src/app/about-page/about-page.component.css":
    /*!*****************************************************!*\
      !*** ./src/app/about-page/about-page.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAboutPageAboutPageComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: flex;\r\n    flex-direction: column;\r\n    align-items: center; */\r\n}\r\n\r\n#about-content-wrap{\r\n    font-family: Inter var,sans-serif;\r\n\r\n    /* height: 100%; */\r\n    width: 100%;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#resumeLink{\r\n    background: none !important;\r\n    border-radius: 0px !important;\r\n    display: inline-block !important;\r\n    padding:0 !important;\r\n\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color:rgb(58,103,178);\r\n    padding:4px 10px;\r\n    border-radius: 1em;\r\n    background: #d6e2fa;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* transition: color .25s linear; */\r\n}\r\n\r\na:hover{\r\n    color:#d6e2fa;\r\n    background: rgb(58,103,178);\r\n}\r\n\r\n#about-inner-wrap{\r\n    width:70%;\r\n    /* max-width: 1500px; */\r\n    /* height:100%; */\r\n\r\n    padding: 20px 50px;\r\n\r\n    display:flex;\r\n    flex-direction: column; \r\n    align-items: center;\r\n\r\n    /* background: #dbdddf; */\r\n}\r\n\r\n#intro-text p{\r\n    margin:15px 0px 15px 0px;\r\n}\r\n\r\n.intro-content{\r\n    margin: 25px 0px;\r\n}\r\n\r\n#intro h2{\r\n    margin: 0;\r\n    font-family: Inter var,sans-serif;;\r\n    font-size: 4.2em;\r\n    font-weight: 900;\r\n    line-height: 1.5;\r\n    color: #747fe0;\r\n    /* font-weight: lighter; */\r\n}\r\n\r\n#about-content{\r\n    max-width: 1100px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.about-content-item{\r\n    /* padding:30px 60px; */\r\n    /* margin: 0px 0px 75px 0px; */\r\n    /* border-radius: 25px;\r\n    background: #fff;\r\n    box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1); */\r\n}\r\n\r\n.about-content-item#intro p{\r\n    /* line-height: 1.25em; */\r\n    /* font-size: 1.5em; */\r\n    font-size: 18px;\r\n    line-height: 1.35;\r\n    font-weight: 100;\r\n    font-family: \"Open Sans\";\r\n    color: #525f7f;\r\n\r\n    margin: 0px;\r\n    padding: 10px 5px;\r\n    /* width: 80%; */\r\n}\r\n\r\n.about-content-item#stats{\r\n    font-size: 3.2em;\r\n    line-height: 1.4;\r\n    font-weight: 900 !important;\r\n\r\n    margin:35px 0px;\r\n    padding: 0px 0px 35px 0px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* .about-content-item#stats > *{\r\n    margin: 15px 0px;\r\n} */\r\n\r\n#about-stats-inner{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#about-stats-inner > *{\r\n    margin: 10px 0px\r\n}\r\n\r\n/* .about-content-item#stats h2{\r\n    font-size: .4em;\r\n    line-height: 1.4;\r\n    font-weight: 900 !important;\r\n} */\r\n\r\n.about-content-item#stats ul{\r\n    font-size: .6em;\r\n    font-weight: 600;\r\n    list-style-type: none;\r\n}\r\n\r\n#intro-depth-wrap{\r\n    min-width: 10%;\r\n    display: grid;\r\n    grid-template-columns: 4fr 2fr;\r\n    gap: 50px;\r\n}\r\n\r\n#intro-pic-inner{\r\n    width: 100%;\r\n}\r\n\r\n#intro-pic{\r\n    max-width: 247px;\r\n    max-height: 275px;\r\n    position: relative;\r\n}\r\n\r\n/* #intro-pic::before, #intro-pic::after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    transition: var(--transition);\r\n} */\r\n\r\n/* #intro-pic::before {\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: #4954bd;\r\n    mix-blend-mode: screen;\r\n} */\r\n\r\n/* #intro-pic::after {\r\n    border: 2px solid black;\r\n    top: 20px;\r\n    left: 20px;\r\n    z-index: -1;\r\n} */\r\n\r\n/* #intro-pic::after {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 25px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    content: '';\r\n    z-index: -1;\r\n} */\r\n\r\n#me{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    border-radius: 5px;\r\n    z-index: 1;\r\n\r\n    filter: brightness(1.1);\r\n}\r\n\r\n#time-wrap h2{\r\n    font-size: 1.25em !important;\r\n    line-height: 1.4;\r\n    font-weight: 900 !important;\r\n\r\n    margin: 0 !important;\r\n    text-transform: uppercase;\r\n\r\n    color: #e7d184;\r\n    text-align: center;\r\n}\r\n\r\n#time-wrap p{\r\n    font-size: .3em !important;\r\n    font-weight: 100 !important;\r\n\r\n    font-family: \"Open Sans\";\r\n\r\n    color: white;\r\n\r\n    text-align: center;\r\n}\r\n\r\n#time-wrap{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    padding:50px 25px;\r\n\r\n    height: 250px;\r\n    max-height: 250px;\r\n    width:25%;\r\n    min-width: 300px;\r\n    max-width:600px;\r\n\r\n    background: #5a5d7a;\r\n    box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);\r\n\r\n    border-radius: 10px;\r\n\r\n    transition: max-height 1s ease-out;\r\n}\r\n\r\n.minified{\r\n    font-size: .85em !important;\r\n}\r\n\r\n#stats-data-bars{\r\n    width:75%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.stats-bar{\r\n    height: 25%;\r\n    width:0px;\r\n\r\n    min-width: 290px;\r\n    min-height: 55px;\r\n\r\n    border-radius: 0px 15px 15px 0px;\r\n\r\n    background:#747fe0;\r\n\r\n    margin: 15px 0px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n\r\n    transition: width 1.25s ease-out, background 2s ease-out;\r\n}\r\n\r\n.stats-bar p {\r\n    font-size: 16px;\r\n    line-height: 1.55;\r\n    font-weight: 100;\r\n    font-family: \"Open Sans\";\r\n    color: white;\r\n\r\n    text-align: right;\r\n\r\n    margin: 0;\r\n    padding: 0px 25px;\r\n}\r\n\r\n.stats-bar#top-stat{\r\n    /* background-color: #8f9afc!important; */\r\n}\r\n\r\n.stats-bar#mid-stat{\r\n    background-color: #747fe0 !important;\r\n    /* width: 75% !important; */\r\n}\r\n\r\n.stats-bar#low-stat{\r\n    /* background-color: #48519b !important; */\r\n    /* width:25% !important; */\r\n}\r\n\r\n#best-day-msg-wrap{\r\n    margin: 25px 0px 0px 0px;\r\n}\r\n\r\n#best-day-msg-wrap h2{\r\n    text-align: center;\r\n    font-family: Maven Pro;\r\n    font-size: .4em;\r\n    line-height: 1.4;\r\n    font-weight: 900 !important;\r\n\r\n    margin: 0px;\r\n}\r\n\r\n#about-stats-header{\r\n    background: #F43F3F;\r\n    color: white;\r\n    border-radius: 10px;\r\n    margin: 0px 0px 25px 0px;\r\n\r\n    max-width:400px;\r\n    box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);\r\n}\r\n\r\n#about-stats-header h2{\r\n    font-size: .8em !important;\r\n    margin: 0;\r\n    padding: 5px 10px;\r\n}\r\n\r\n#about-content-divider{\r\n    height: 0;\r\n    border-top: 1px solid #9c9898;\r\n    border-radius: 5px;\r\n    margin: 85px 0px;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n    .stats-bar{\r\n        border-radius: 15px;\r\n    }\r\n\r\n    .intro-content{\r\n        margin: 50px 0px;\r\n    }\r\n\r\n    #about-content-divider{\r\n        margin: 50px 10px;\r\n    }\r\n\r\n    #stats-data-bars{\r\n        width: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    #intro h2{\r\n        font-size: 3em;\r\n    }\r\n\r\n    #intro-header-wrap{\r\n        text-align: center;\r\n    }\r\n\r\n    #intro-depth-wrap{\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    #intro-text{\r\n        grid-row: 2;\r\n        text-align: center;\r\n    }\r\n\r\n    #intro-pic{\r\n        grid-row: 1;\r\n        justify-self: center;\r\n        align-self: center;\r\n        padding: 0px;\r\n    }\r\n\r\n    #about-stats-inner{\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px){\r\n\r\n    #inner-content-wrap{\r\n        padding: 0px;\r\n    }\r\n\r\n    #intro-pic{\r\n        z-index: 1;\r\n    }\r\n\r\n    #intro-pic::before{\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 0;\r\n        background: url('blob1.svg');\r\n        background-repeat: no-repeat;\r\n        width: 160%;\r\n        height: 160%;\r\n        left: -53.5%;\r\n        top: -28.5%;\r\n        transform: rotate(90deg);\r\n    }\r\n\r\n    #intro-pic::after{\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: -1;\r\n        background: url('blob2.svg');\r\n        background-repeat: no-repeat;\r\n        width: 145%;\r\n        height: 155%;\r\n        left: -0.5%;\r\n        top: -11.5%;\r\n        transform: rotate(210deg);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    #intro-depth-wrap{\r\n        gap: 70px;\r\n    }\r\n\r\n    /* #intro-header-wrap{\r\n        margin: 0px;\r\n    } */\r\n\r\n    #intro h2{\r\n        font-size: 2.25em;\r\n    }\r\n\r\n    #intro-pic{\r\n        max-width: 200px;\r\n        max-height: 200px;\r\n\r\n        /* padding:50px; */\r\n\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    #about-header{\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .about-content-item#intro p{\r\n        padding: 5px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    #stats-data-bars{\r\n        width: auto;\r\n    }\r\n\r\n    .stats-bar{\r\n        border-radius: 15px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaOzswQkFFc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7O0lBRWpDLGtCQUFrQjtJQUNsQixXQUFXOztJQUVYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qjs7NEdBRXdHO0FBQzVHOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYzs7SUFFZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCOztJQUUzQixlQUFlO0lBQ2YseUJBQXlCOztJQUV6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7OztHQUlHOztBQUVIO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDs7Ozs7Ozs7OztHQVVHOztBQUVIO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiwyQkFBMkI7O0lBRTNCLG9CQUFvQjtJQUNwQix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCOztJQUUzQix3QkFBd0I7O0lBRXhCLFlBQVk7O0lBRVosa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCOztJQUV0QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLG1CQUFtQjtJQUNuQixxR0FBcUc7O0lBRXJHLG1CQUFtQjs7SUFFbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUzs7SUFFVCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsZ0NBQWdDOztJQUVoQyxrQkFBa0I7O0lBRWxCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQix3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTs7SUFFWixpQkFBaUI7O0lBRWpCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQkFBMkI7O0lBRTNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3Qjs7SUFFeEIsZUFBZTtJQUNmLHFHQUFxRztBQUN6Rzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsNEJBQTBEO1FBQzFELDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsNEJBQTBEO1FBQzFELDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjs7SUFFQTs7T0FFRzs7SUFFSDtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7O1FBRWpCLGtCQUFrQjs7UUFFbEIsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbiNhYm91dC1jb250ZW50LXdyYXB7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIgdmFyLHNhbnMtc2VyaWY7XHJcblxyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jcmVzdW1lTGlua3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2IoNTgsMTAzLDE3OCk7XHJcbiAgICBwYWRkaW5nOjRweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZTJmYTtcclxuXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLyogdHJhbnNpdGlvbjogY29sb3IgLjI1cyBsaW5lYXI7ICovXHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjojZDZlMmZhO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LDEwMywxNzgpO1xyXG59XHJcblxyXG4jYWJvdXQtaW5uZXItd3JhcHtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIC8qIG1heC13aWR0aDogMTUwMHB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OjEwMCU7ICovXHJcblxyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZGJkZGRmOyAqL1xyXG59XHJcblxyXG4jaW50cm8tdGV4dCBwe1xyXG4gICAgbWFyZ2luOjE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcblxyXG4uaW50cm8tY29udGVudHtcclxuICAgIG1hcmdpbjogMjVweCAwcHg7XHJcbn1cclxuXHJcbiNpbnRybyBoMntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZjs7XHJcbiAgICBmb250LXNpemU6IDQuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyAqL1xyXG59XHJcblxyXG4jYWJvdXQtY29udGVudHtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50LWl0ZW17XHJcbiAgICAvKiBwYWRkaW5nOjMwcHggNjBweDsgKi9cclxuICAgIC8qIG1hcmdpbjogMHB4IDBweCA3NXB4IDBweDsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA1MHB4IDEwMHB4IHJnYmEoNTAsNTAsOTMsLjA1KSwgMCAxNXB4IDM1cHggcmdiYSg1MCw1MCw5MywuMSksIDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuMSk7ICovXHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50LWl0ZW0jaW50cm8gcHtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxLjI1ZW07ICovXHJcbiAgICAvKiBmb250LXNpemU6IDEuNWVtOyAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBjb2xvcjogIzUyNWY3ZjtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQtaXRlbSNzdGF0c3tcclxuICAgIGZvbnQtc2l6ZTogMy4yZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIG1hcmdpbjozNXB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMzVweCAwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8qIC5hYm91dC1jb250ZW50LWl0ZW0jc3RhdHMgPiAqe1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxufSAqL1xyXG5cclxuI2Fib3V0LXN0YXRzLWlubmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhYm91dC1zdGF0cy1pbm5lciA+ICp7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4XHJcbn1cclxuXHJcbi8qIC5hYm91dC1jb250ZW50LWl0ZW0jc3RhdHMgaDJ7XHJcbiAgICBmb250LXNpemU6IC40ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uYWJvdXQtY29udGVudC1pdGVtI3N0YXRzIHVse1xyXG4gICAgZm9udC1zaXplOiAuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuI2ludHJvLWRlcHRoLXdyYXB7XHJcbiAgICBtaW4td2lkdGg6IDEwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAyZnI7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbiNpbnRyby1waWMtaW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2ludHJvLXBpY3tcclxuICAgIG1heC13aWR0aDogMjQ3cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogI2ludHJvLXBpYzo6YmVmb3JlLCAjaW50cm8tcGljOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG59ICovXHJcblxyXG4vKiAjaW50cm8tcGljOjpiZWZvcmUge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1NGJkO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcclxufSAqL1xyXG5cclxuLyogI2ludHJvLXBpYzo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn0gKi9cclxuXHJcbi8qICNpbnRyby1waWM6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHotaW5kZXg6IC0xO1xyXG59ICovXHJcblxyXG4jbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4jdGltZS13cmFwIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW0gIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIGNvbG9yOiAjZTdkMTg0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGltZS13cmFwIHB7XHJcbiAgICBmb250LXNpemU6IC4zZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuXHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGltZS13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgcGFkZGluZzo1MHB4IDI1cHg7XHJcblxyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6MjUlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjNWE1ZDdhO1xyXG4gICAgYm94LXNoYWRvdzogMCA1MHB4IDEwMHB4IHJnYmEoNTAsNTAsOTMsLjA1KSwgMCAxNXB4IDM1cHggcmdiYSg1MCw1MCw5MywuMSksIDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuMSk7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubWluaWZpZWR7XHJcbiAgICBmb250LXNpemU6IC44NWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzdGF0cy1kYXRhLWJhcnN7XHJcbiAgICB3aWR0aDo3NSU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdGF0cy1iYXJ7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHdpZHRoOjBweDtcclxuXHJcbiAgICBtaW4td2lkdGg6IDI5MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTVweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiM3NDdmZTA7XHJcblxyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMS4yNXMgZWFzZS1vdXQsIGJhY2tncm91bmQgMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5zdGF0cy1iYXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcclxufVxyXG5cclxuLnN0YXRzLWJhciN0b3Atc3RhdHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM4ZjlhZmMhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uc3RhdHMtYmFyI21pZC1zdGF0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0N2ZlMCAhaW1wb3J0YW50O1xyXG4gICAgLyogd2lkdGg6IDc1JSAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uc3RhdHMtYmFyI2xvdy1zdGF0e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ4NTE5YiAhaW1wb3J0YW50OyAqL1xyXG4gICAgLyogd2lkdGg6MjUlICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbiNiZXN0LWRheS1tc2ctd3JhcHtcclxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuI2Jlc3QtZGF5LW1zZy13cmFwIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE1hdmVuIFBybztcclxuICAgIGZvbnQtc2l6ZTogLjRlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNhYm91dC1zdGF0cy1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQzRjNGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAyNXB4IDBweDtcclxuXHJcbiAgICBtYXgtd2lkdGg6NDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDUwcHggMTAwcHggcmdiYSg1MCw1MCw5MywuMDUpLCAwIDE1cHggMzVweCByZ2JhKDUwLDUwLDkzLC4xKSwgMCA1cHggMTVweCByZ2JhKDAsMCwwLC4xKTtcclxufVxyXG5cclxuI2Fib3V0LXN0YXRzLWhlYWRlciBoMntcclxuICAgIGZvbnQtc2l6ZTogLjhlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbiNhYm91dC1jb250ZW50LWRpdmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzljOTg5ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogODVweCAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAuc3RhdHMtYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmludHJvLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtY29udGVudC1kaXZpZGVye1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzdGF0cy1kYXRhLWJhcnN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjaW50cm8gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2ludHJvLWhlYWRlci13cmFwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjaW50cm8tZGVwdGgtd3JhcHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgI2ludHJvLXRleHR7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNpbnRyby1waWN7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtc3RhdHMtaW5uZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG5cclxuICAgICNpbm5lci1jb250ZW50LXdyYXB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNpbnRyby1waWN7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAjaW50cm8tcGljOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmxvYnMvYWJvdXRibG9icy9ibG9iMS5zdmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB3aWR0aDogMTYwJTtcclxuICAgICAgICBoZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgbGVmdDogLTUzLjUlO1xyXG4gICAgICAgIHRvcDogLTI4LjUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAjaW50cm8tcGljOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmxvYnMvYWJvdXRibG9icy9ibG9iMi5zdmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB3aWR0aDogMTQ1JTtcclxuICAgICAgICBoZWlnaHQ6IDE1NSU7XHJcbiAgICAgICAgbGVmdDogLTAuNSU7XHJcbiAgICAgICAgdG9wOiAtMTEuNSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgI2ludHJvLWRlcHRoLXdyYXB7XHJcbiAgICAgICAgZ2FwOiA3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qICNpbnRyby1oZWFkZXItd3JhcHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH0gKi9cclxuXHJcbiAgICAjaW50cm8gaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjI1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2ludHJvLXBpY3tcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICAvKiBwYWRkaW5nOjUwcHg7ICovXHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtaGVhZGVye1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtY29udGVudC1pdGVtI2ludHJvIHB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhdHMtZGF0YS1iYXJze1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0cy1iYXJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/about-page/about-page.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/about-page/about-page.component.ts ***!
      \****************************************************/

    /*! exports provided: AboutPageComponent */

    /***/
    function srcAppAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
        return AboutPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _coding_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../coding-stats.service */
      "./src/app/coding-stats.service.ts");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var AboutPageComponent = /*#__PURE__*/function () {
        function AboutPageComponent(statsService) {
          _classCallCheck(this, AboutPageComponent);

          this.statsService = statsService;
          this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          this.dayComments = {
            "Monday": "That's different!",
            "Tuesday": "Tuesday was the real start of my week!",
            "Wednesday": "I was feeling that midweek motivation!",
            "Thursday": "The sight of Friday must of got me going!",
            "Friday": "Must of been a bug...",
            "Saturday": "Why wasn't I relaxing?!",
            "Sunday": "One last hoorah for the week!"
          };
          this.statBarStyles = [];
          this.codingIDEs = ["VS Code", "IntelliJ"];
          this.totalTime = "...";
          this.bestDay = "...";
          this.topLangs = [];
          this.topLangLength = 4;
        }

        _createClass(AboutPageComponent, [{
          key: "normalize",
          value: function normalize(val, topLangs) {
            var min = topLangs[this.iterAmt - 1]["percent"];
            var max = topLangs[0]["percent"];
            return Math.round((val - min) / (max - min) * 100);
          }
        }, {
          key: "getStatStyles",
          value: function getStatStyles(i, template) {
            this.statsTemplate = template;
            return this.statBarStyles[this.topLangLength - 1 - i];
          }
        }, {
          key: "getToplangLen",
          value: function getToplangLen() {
            return this.topLangLength;
          } //called by ngfor elements, which generate time stamps for each row of data on prog langs used for the week

        }, {
          key: "timeCheck",
          value: function timeCheck(hrs, mins) {
            if (parseInt(hrs) <= 0 && parseInt(mins) <= 0) {
              return '';
            } else {
              var hrsTxt = this.timeStatEnglish(hrs, "hours");
              var minsTxt = this.timeStatEnglish(mins, "minutes");
              var consolidatedTxt = '';

              if (hrsTxt.length > 0 && minsTxt.length <= 0) {
                consolidatedTxt = "".concat(hrsTxt);
              } else if (hrsTxt.length <= 0 && minsTxt.length > 0) {
                consolidatedTxt = "".concat(minsTxt);
              } else if (hrsTxt.length > 0 && minsTxt.length > 0) {
                consolidatedTxt = "".concat(hrsTxt, " and ").concat(minsTxt);
              } else if (hrsTxt.length <= 0 && minsTxt.length <= 0) {
                consolidatedTxt = "";
              }

              return consolidatedTxt;
            }
          }
        }, {
          key: "timeStatEnglish",
          value: function timeStatEnglish(timeAmt, timeUnit) {
            var timeTxt = ''; //could use enum, but am I rlly gonna be that xtra?

            if (timeUnit == "hours") {
              if (parseInt(timeAmt) == 1) {
                return "".concat(timeAmt, " hour");
              } else if (parseInt(timeAmt) > 1) {
                return "".concat(timeAmt, " hours");
              } else {
                return timeTxt;
              }
            } else if (timeUnit == "minutes") {
              if (parseInt(timeAmt) == 1) {
                return "".concat(timeAmt, " min");
              } else if (parseInt(timeAmt) > 1) {
                return "".concat(timeAmt, " mins");
              } else {
                return timeTxt;
              }
            }
          }
        }, {
          key: "getStatTint",
          value: function getStatTint(i) {
            var base = [39, 57, 214]; //r, g, b

            var len = this.topLangLength;
            var rt = base[0] + .5 * 1 / (len - 1 - i + 1) * (255 - base[0]);
            var gt = base[1] + .5 * 1 / (len - 1 - i + 1) * (255 - base[1]);
            var bt = base[2] + .5 * 1 / (len - 1 - i + 1) * (255 - base[2]);
            var newBase = [rt, gt, bt];
            return "rgb(".concat(newBase[0], ", ").concat(newBase[1], ", ").concat(newBase[2], ")");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.statsService.getMyStats().subscribe(function (data) {
              _this.stats = data["data"];
              _this.languagesUsed = _this.stats["languages"];
              _this.dailyAvgTime = _this.stats["human_readable_daily_average"];
              _this.totalTime = _this.stats["human_readable_total_including_other_language"];
              _this.bestDayDate = _this.stats["best_day"]["date"];
              _this.bestDay = _this.days[new Date(_this.bestDayDate).getUTCDay()];
              _this.editors = _this.stats["editors"];
              _this.iterAmt = _this.languagesUsed.length >= _this.topLangLength ? _this.topLangLength : _this.languagesUsed.length; //get top 3 languages used this week

              for (var i = 0; i < _this.iterAmt; i++) {
                var langStat = {
                  lang: _this.languagesUsed[i]["name"],
                  hrs: _this.languagesUsed[i]["hours"],
                  mins: _this.languagesUsed[i]["minutes"],
                  percent: parseInt(_this.languagesUsed[i]["percent"])
                }; //check if we have an "other" category of languages

                if (langStat.lang === "Other") {
                  //check if more than 1 editor was used
                  if (_this.editors.length > 1) {
                    //loop thru used editors and check to see if one of them WASNT a coding IDE. aka Blender/video editing software/etc
                    for (var _i = 0; _i < _this.editors.length; _i++) {
                      if (!_this.codingIDEs.includes(_this.editors[_i].name)) {
                        langStat.lang = _this.editors[_i].name;
                      }
                    }
                  }
                }

                _this.topLangs.push(langStat);
              } //set style objects for each of the top 3 langs
              //currently, creating these objs and serving them to ngStyle to dynamically style sta bars, but it doesnt seem there is any binding on ngStyle
              //so fill statBarStyles, and call


              for (var _i2 = _this.topLangs.length - 1; _i2 >= 0; _i2--) {
                _this.statBarStyles.push({
                  'width': "".concat(_this.normalize(_this.topLangs[_i2]['percent'], _this.topLangs), "%"),
                  'background': _this.getStatTint(_i2)
                });
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return AboutPageComponent;
      }();

      AboutPageComponent.ctorParameters = function () {
        return [{
          type: _coding_stats_service__WEBPACK_IMPORTED_MODULE_2__["CodingStatsService"]
        }];
      };

      AboutPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          width: "0%",
          background: '#747fe0'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          width: '{{statWidth}}',
          background: '{{statBackground}}'
        }))])])],
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./about-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./about-page.component.css */
        "./src/app/about-page/about-page.component.css"))["default"]]
      })], AboutPageComponent);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash-page/splash-page.component */
      "./src/app/splash-page/splash-page.component.ts");
      /* harmony import */


      var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about-page/about-page.component */
      "./src/app/about-page/about-page.component.ts");
      /* harmony import */


      var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./projects-page/projects-page.component */
      "./src/app/projects-page/projects-page.component.ts");
      /* harmony import */


      var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contact-page/contact-page.component */
      "./src/app/contact-page/contact-page.component.ts");
      /* harmony import */


      var _extras_page_extras_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./extras-page/extras-page.component */
      "./src/app/extras-page/extras-page.component.ts"); // routable components


      var routes = [{
        path: '',
        component: _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__["SplashPageComponent"]
      }, {
        path: 'about',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
      }, {
        path: 'projects',
        component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageComponent"]
      }, {
        path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"]
      }, {
        path: 'extras',
        component: _extras_page_extras_page_component__WEBPACK_IMPORTED_MODULE_7__["ExtrasPageComponent"]
      } // { path: '**', component: ProdRouteHandlerComponent }  // Wildcard route for a 404 page
      ];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.css":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#outter-content-wrap{\r\n    font-family: Inter var,sans-serif;\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#inner-content-wrap{\r\n    width:70%;\r\n    /* max-width: 1500px; */\r\n    height:100%;\r\n\r\n    padding: 0px 50px;\r\n\r\n    display:flex;\r\n    flex-direction: column; \r\n    align-items: center;\r\n\r\n    /* background: #dbdddf; */\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n    #inner-content-wrap{\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7O0lBRWpDLFlBQVk7SUFDWixXQUFXOztJQUVYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtJQUN2QixXQUFXOztJQUVYLGlCQUFpQjs7SUFFakIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdXR0ZXItY29udGVudC13cmFwe1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2lubmVyLWNvbnRlbnQtd3JhcHtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIC8qIG1heC13aWR0aDogMTUwMHB4OyAqL1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC8qIGJhY2tncm91bmQ6ICNkYmRkZGY7ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAjaW5uZXItY29udGVudC13cmFwe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio-website';
      };

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.css */
        "./src/app/app.component.css"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./splash-page/splash-page.component */
      "./src/app/splash-page/splash-page.component.ts");
      /* harmony import */


      var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./about-page/about-page.component */
      "./src/app/about-page/about-page.component.ts");
      /* harmony import */


      var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./projects-page/projects-page.component */
      "./src/app/projects-page/projects-page.component.ts");
      /* harmony import */


      var _extras_page_extras_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./extras-page/extras-page.component */
      "./src/app/extras-page/extras-page.component.ts");
      /* harmony import */


      var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contact-page/contact-page.component */
      "./src/app/contact-page/contact-page.component.ts");
      /* harmony import */


      var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./nav-bar/nav-bar.component */
      "./src/app/nav-bar/nav-bar.component.ts");
      /* harmony import */


      var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./project-list/project-list.component */
      "./src/app/project-list/project-list.component.ts");
      /* harmony import */


      var _art_list_art_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./art-list/art-list.component */
      "./src/app/art-list/art-list.component.ts");
      /* harmony import */


      var _art_item_art_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./art-item/art-item.component */
      "./src/app/art-item/art-item.component.ts");
      /* harmony import */


      var _endeavour_item_endeavour_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./endeavour-item/endeavour-item.component */
      "./src/app/endeavour-item/endeavour-item.component.ts");
      /* harmony import */


      var _endeavours_list_endeavours_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./endeavours-list/endeavours-list.component */
      "./src/app/endeavours-list/endeavours-list.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_7__["SplashPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"], _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsPageComponent"], _extras_page_extras_page_component__WEBPACK_IMPORTED_MODULE_10__["ExtrasPageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_11__["ContactPageComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"], _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_13__["ProjectListComponent"], _art_list_art_list_component__WEBPACK_IMPORTED_MODULE_14__["ArtListComponent"], _art_item_art_item_component__WEBPACK_IMPORTED_MODULE_15__["ArtItemComponent"], _endeavour_item_endeavour_item_component__WEBPACK_IMPORTED_MODULE_16__["EndeavourItemComponent"], _endeavours_list_endeavours_list_component__WEBPACK_IMPORTED_MODULE_17__["EndeavoursListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
          appId: 'neo-portfolio'
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/art-item/art-item.component.css":
    /*!*************************************************!*\
      !*** ./src/app/art-item/art-item.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppArtItemArtItemComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".art-bio-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* background-image: linear-gradient(to top, white, rgba(0,0,0,0), white); */\r\n    background-color: rgba(255,255,255,.8);\r\n\r\n    display: none;\r\n    opacity: 0;\r\n    z-index: 2;\r\n\r\n    transition: opacity .25s ease-in-out;\r\n}\r\n\r\n.art-bio-detail-wrap{\r\n    width: 50vw;\r\n    height: 90vh;\r\n    min-width: 40vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.art-bio-detail-wrap img{\r\n    background: black;\r\n    border-radius: 10px;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    border-radius: 10px;\r\n}\r\n\r\n.bio-bottom-lip-wrap{\r\n    text-align: center;\r\n    border-radius: 0px 00px 10px 10px;\r\n    padding: 5px;\r\n    width: 70%;\r\n\r\n    background-color: white;\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.25);\r\n\r\n}\r\n\r\n.bio-bottom-lip-wrap > *{\r\n    margin: 5px 0px !important;\r\n}\r\n\r\n.bio-bottom-lip-wrap h2{\r\n    color: #747fe0;\r\n    font-family: Inter var,sans-serif !important;\r\n    margin: 0;\r\n\r\n    line-height: 1;\r\n    font-weight: 800;\r\n    font-size: clamp(24px, 2.5vw, 2.5vw);\r\n}\r\n\r\n.bio-bottom-lip-wrap p{\r\n    font-family: JetBrains Mono,monospace;\r\n    color: #636979;\r\n    margin: 0;\r\n\r\n\r\n    white-space: pre-wrap;\r\n    font-size: clamp(12px, .85vw, .85vw);\r\n}\r\n\r\n.art-img-exit-wrap{\r\n    display: flex;\r\n    width: 85%;\r\n    height: 85%;\r\n    position: relative;\r\n}\r\n\r\n.art-exit-wrap{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n}\r\n\r\n.art-img-close{\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n    background: rgba(0,0,0,0) !important;\r\n    filter: invert(1);\r\n\r\n    transition: filter .25s ease-in-out;\r\n}\r\n\r\n.art-img-close:hover{\r\n    cursor: pointer;\r\n    filter: invert(0);\r\n}\r\n\r\n@media screen and (max-width: 1400px){\r\n    .art-bio-detail-wrap{\r\n        width: auto;\r\n        height: auto;\r\n        min-width: auto;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0LWl0ZW0vYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTs7SUFFTix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0RUFBNEU7SUFDNUUsc0NBQXNDOztJQUV0QyxhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7O0lBRVYsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZOztJQUVaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFVBQVU7O0lBRVYsdUJBQXVCO0lBQ3ZCLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLFNBQVM7O0lBRVQsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLFNBQVM7OztJQUdULHFCQUFxQjtJQUNyQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGlCQUFpQjs7SUFFakIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcnQtaXRlbS9hcnQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydC1iaW8td3JhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHdoaXRlLCByZ2JhKDAsMCwwLDApLCB3aGl0ZSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXJ0LWJpby1kZXRhaWwtd3JhcHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgbWluLXdpZHRoOiA0MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJ0LWJpby1kZXRhaWwtd3JhcCBpbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYmlvLWJvdHRvbS1saXAtd3JhcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDUwLDUwLDkzLC4yNSk7XHJcblxyXG59XHJcblxyXG4uYmlvLWJvdHRvbS1saXAtd3JhcCA+ICp7XHJcbiAgICBtYXJnaW46IDVweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJpby1ib3R0b20tbGlwLXdyYXAgaDJ7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgMi41dncsIDIuNXZ3KTtcclxufVxyXG5cclxuLmJpby1ib3R0b20tbGlwLXdyYXAgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIzYzNjk3OTtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAuODV2dywgLjg1dncpO1xyXG59XHJcblxyXG4uYXJ0LWltZy1leGl0LXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYXJ0LWV4aXQtd3JhcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYXJ0LWltZy1jbG9zZXtcclxuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXJ0LWltZy1jbG9zZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDApO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgLmFydC1iaW8tZGV0YWlsLXdyYXB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/art-item/art-item.component.ts":
    /*!************************************************!*\
      !*** ./src/app/art-item/art-item.component.ts ***!
      \************************************************/

    /*! exports provided: ArtItemComponent */

    /***/
    function srcAppArtItemArtItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtItemComponent", function () {
        return ArtItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _art_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../art.service */
      "./src/app/art.service.ts");

      var ArtItemComponent = /*#__PURE__*/function () {
        function ArtItemComponent(artService) {
          _classCallCheck(this, ArtItemComponent);

          this.artService = artService;
        }

        _createClass(ArtItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(this.artObj);
          }
        }, {
          key: "closeProj",
          value: function closeProj() {
            this.artService.closeProj();
          }
        }]);

        return ArtItemComponent;
      }();

      ArtItemComponent.ctorParameters = function () {
        return [{
          type: _art_service__WEBPACK_IMPORTED_MODULE_2__["ArtService"]
        }];
      };

      ArtItemComponent.propDecorators = {
        artObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ArtItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-art-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./art-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/art-item/art-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./art-item.component.css */
        "./src/app/art-item/art-item.component.css"))["default"]]
      })], ArtItemComponent);
      /***/
    },

    /***/
    "./src/app/art-list/art-list.component.css":
    /*!*************************************************!*\
      !*** ./src/app/art-list/art-list.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppArtListArtListComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydC1saXN0L2FydC1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/art-list/art-list.component.ts":
    /*!************************************************!*\
      !*** ./src/app/art-list/art-list.component.ts ***!
      \************************************************/

    /*! exports provided: ArtListComponent */

    /***/
    function srcAppArtListArtListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtListComponent", function () {
        return ArtListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _art_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../art.service */
      "./src/app/art.service.ts");

      var ArtListComponent = /*#__PURE__*/function () {
        function ArtListComponent(artService) {
          _classCallCheck(this, ArtListComponent);

          this.artService = artService;
        }

        _createClass(ArtListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getArt",
          value: function getArt() {
            return this.artService.getArt();
          }
        }]);

        return ArtListComponent;
      }();

      ArtListComponent.ctorParameters = function () {
        return [{
          type: _art_service__WEBPACK_IMPORTED_MODULE_2__["ArtService"]
        }];
      };

      ArtListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-art-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./art-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/art-list/art-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./art-list.component.css */
        "./src/app/art-list/art-list.component.css"))["default"]]
      })], ArtListComponent);
      /***/
    },

    /***/
    "./src/app/art.service.ts":
    /*!********************************!*\
      !*** ./src/app/art.service.ts ***!
      \********************************/

    /*! exports provided: ArtService */

    /***/
    function srcAppArtServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArtService", function () {
        return ArtService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ArtService = /*#__PURE__*/function () {
        function ArtService() {
          _classCallCheck(this, ArtService);

          this.artPieces = [{
            "index": "0",
            "title": "The Golden Idol",
            "img": "assets/proj5.gif",
            "medium": "Blender",
            "description": "Inspired by Spelunky, the game\nMade in Blender\n09/2020"
          }, {
            "index": "1",
            "title": "Gleechi",
            "img": "assets/proj4.gif",
            "medium": "Blender",
            "description": "An enemy that makes an appearance in my game, Down the Crevice\nMade in Blender\n09/2020"
          }, {
            "index": "2",
            "title": "Crevice",
            "img": "assets/proj3.gif",
            "medium": "Blender",
            "description": "The main character, Crevice, of a game I'm making\nMade in Blender\n04/2020"
          }, {
            "index": "3",
            "title": "Sentient Pancakes",
            "img": "assets/proj2.gif",
            "medium": "Blender",
            "description": "Inspired by Spelunky, the game\nMade in Blender\n09/2020"
          }]; // TODO: move to art svc

          this.currArt = null;
        }

        _createClass(ArtService, [{
          key: "displayProj",
          value: function displayProj(idx) {
            var _this2 = this;

            var artBioTemplate = document.getElementById("art-bio-" + idx); // if we find an existing art item with a name coinciding with the idx sent in,
            // then we should set its display on and tune the opacity so it fades in!

            if (artBioTemplate) {
              artBioTemplate.style.display = "flex";
              setTimeout(function () {
                artBioTemplate.style.opacity = "1";
                _this2.currArt = artBioTemplate;
              }, 100);
            }
          }
        }, {
          key: "closeProj",
          value: function closeProj() {
            var _this3 = this;

            if (this.currArt) {
              this.currArt.style.opacity = "0";
              setTimeout(function () {
                _this3.currArt.style.display = "none";
                _this3.currArt = null;
              }, 100); // setTimeout(()=> {this.htmlRef.style.overflow = "auto";}, 500);
              // this.currProj = null;
            }
          }
        }, {
          key: "getArt",
          value: function getArt() {
            return this.artPieces;
          }
        }]);

        return ArtService;
      }();

      ArtService.ctorParameters = function () {
        return [];
      };

      ArtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ArtService);
      /***/
    },

    /***/
    "./src/app/coding-stats.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/coding-stats.service.ts ***!
      \*****************************************/

    /*! exports provided: CodingStatsService */

    /***/
    function srcAppCodingStatsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodingStatsService", function () {
        return CodingStatsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var CodingStatsService = /*#__PURE__*/function () {
        function CodingStatsService(http) {
          _classCallCheck(this, CodingStatsService);

          this.http = http;
        }

        _createClass(CodingStatsService, [{
          key: "getMyStats",
          value: function getMyStats() {
            var requestOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*"
              })
            }; //calling directly to the endpoint causes errors with CORS...
            //adding a proxy config and calling the endpoint with the domain works in local, but not prod
            //adding this heroku cors reroute to the api endpoint resolves prod issues

            var waka_data = this.http.get("/stats", requestOptions);
            console.log(waka_data);
            return waka_data;
          }
        }]);

        return CodingStatsService;
      }();

      CodingStatsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CodingStatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CodingStatsService);
      /***/
    },

    /***/
    "./src/app/contact-page/contact-page.component.css":
    /*!*********************************************************!*\
      !*** ./src/app/contact-page/contact-page.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppContactPageContactPageComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height:100%;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n#contact-content-wrap{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.contact-section{\r\n    width: 100%;\r\n    margin: 12.5px 0px;\r\n}\r\n\r\n#right-contact-content{\r\n    width: 100%;\r\n    /* height: 100%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: end;\r\n}\r\n\r\n#right-contact-content h1{\r\n    color: #7d7f81 !important;\r\n    font-size: .8em;\r\n    font-weight: 800;\r\n    margin: 0px 0px 7.5px 0px;\r\n    font-family: Inter var,sans-serif;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#right-contact-content a{\r\n    text-decoration: none;\r\n    font-family: JetBrains Mono,monospace;\r\n}\r\n\r\n#right-contact-content p{\r\n    margin: 0px 0px 10px 0px;\r\n}\r\n\r\n#left-contact-wrap{\r\n    width: 60%;\r\n}\r\n\r\n#right-contact-wrap{\r\n    width: 40%;\r\n    /* align-items: flex-start; */\r\n}\r\n\r\n#left-contact-wrap, #right-contact-wrap{\r\n    height:100%;\r\n    /* width: 50%; */\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    font-family: Inter var,sans-serif;\r\n    z-index: 1;\r\n}\r\n\r\n#left-contact-wrap h2{\r\n    font-size: 148px;\r\n    font-weight: 800;\r\n    margin: 0;\r\n    color: #747fe0;\r\n    margin: -80px 0px 0px 0px;\r\n    opacity: .8;\r\n    text-align: end;\r\n}\r\n\r\n/* #left-contact-wrap::before{\r\n    content: '';\r\n    background-image: url(../../assets/blobs/subblobs/blob17.svg);\r\n    position: absolute;\r\n    left: -25%;\r\n    top: 0;\r\n    transform: scale(2);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n} */\r\n\r\n#message-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* width: 65%; */\r\n    width: 50%;\r\n    justify-content: center;\r\n}\r\n\r\n#message-wrap input:focus, #message-wrap textarea:focus{\r\n    box-shadow: 0px 0px 3.5px #3a67b2;\r\n    outline: none;\r\n}\r\n\r\n#message-wrap input, #message-wrap textarea{\r\n    width: 100%;\r\n\r\n    background-color: #D0E2FF;\r\n    border-radius: 20px;\r\n    padding: 15px;\r\n    color: #7d7f81;\r\n\r\n    margin: 15px 0px;\r\n\r\n    font-size: 12px;\r\n    font-family: JetBrains Mono,monospace;\r\n\r\n    border: none;\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.1);\r\n}\r\n\r\n#message{\r\n    min-height: 200px;\r\n}\r\n\r\n#submit{\r\n    text-align: center;\r\n    width: 50% !important;\r\n    transition: background-color .2s ease-in-out, color .2s ease-in-out;\r\n}\r\n\r\n#submit:hover{\r\n    cursor: pointer;\r\n    background-color: #747fe0 !important;\r\n    color: #D0E2FF !important;\r\n}\r\n\r\n#contact-content-wrap{\r\n    overflow: hidden;\r\n\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n#contact-content-wrap section{\r\n    z-index:2;\r\n}\r\n\r\n#contact-content, #nav-links{\r\n    width: 80%;\r\n    max-width: 700px;\r\n}\r\n\r\n#contact-content h2{\r\n    margin:0;\r\n\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n\r\n    font-family: Inter var,sans-serif;\r\n    font-size: clamp(40px, 5vw, 60px);\r\n    font-weight: 800;\r\n    line-height: 1.1;\r\n    color: #747fe0;\r\n\r\n    z-index: 2;\r\n}\r\n\r\n#contact-content p{\r\n    text-align: center;\r\n\r\n    margin: 25px 0px;\r\n\r\n    line-height: 1.35;\r\n    font-weight: 100;\r\n    font-size: 18px;\r\n    font-family: Open Sans;\r\n    color: #525f7f;\r\n\r\n    z-index: 2;\r\n}\r\n\r\n#contact-inner-content-wrap{\r\n\r\n}\r\n\r\n#nav-links{\r\n    margin: 15px 0px 0px 0px;\r\n}\r\n\r\n#nav-links ul{\r\n    list-style-type: none;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* justify-content: space-evenly; */\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n#nav-links  ul li{\r\n    margin-right: 15px;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.contact-img{\r\n    width: 30px;\r\n    height: 30px;\r\n    filter: invert(55%) sepia(16%) saturate(3311%) hue-rotate(205deg) brightness(91%) contrast(93%);\r\n    transition: filter .25s ease-in-out, width .25s ease-in-out, height .25s ease-in-out;\r\n}\r\n\r\n.contact-img:hover{\r\n    /* width: 32px;\r\n    height: 32px; */\r\n    filter: invert(38%) sepia(9%) saturate(4936%) hue-rotate(183deg) brightness(93%) contrast(83%);\r\n}\r\n\r\n#bg-design-wrap{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n#bg-blobs{\r\n    position: inherit;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#bg-blobs > *{\r\n    width: 110vw;\r\n    height: 110vh;\r\n    position: absolute;\r\n\r\n    opacity: .85;\r\n}\r\n\r\n#blob1{\r\n    left: -45vw;\r\n    bottom: -70vh;\r\n    transform: rotateZ(-25deg) scale(1.5) scaleX(1.15);\r\n}\r\n\r\n#blob2{\r\n    left: -45vw;\r\n    top: -55vh;\r\n    transform: rotateZ(270deg) scale(1.75);\r\n}\r\n\r\n#blob3{\r\n    right: -45vw;\r\n    top: -55vh;\r\n    transform: rotateZ(220deg) scale(1.5);\r\n}\r\n\r\n#blob4{\r\n    top: -60vh;\r\n    transform: rotateZ(330deg) scale(1.5);\r\n}\r\n\r\n#blob5{\r\n    right: -40vw;\r\n    bottom: -70vh;\r\n    transform: rotateZ(-41deg) scale(1.75);\r\n}\r\n\r\n#blob6{\r\n    bottom: -85vh;\r\n    left: -5vh;\r\n    transform: rotateZ(362deg) rotateY(180deg) scale(1.5);    \r\n}\r\n\r\n#blob1-wrap{\r\n    bottom:0;\r\n    right:5%;\r\n}\r\n\r\n#path1 {\r\n    fill: #2196F3;\r\n}\r\n\r\n@media screen and (max-width: 1250px){\r\n    #nav-links ul{\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px){\r\n    #contact-content{\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 950px){\r\n    :host{\r\n        overflow: inherit;\r\n    }\r\n\r\n    #contact-content-wrap{\r\n        height: auto;\r\n        flex-direction: column;\r\n        overflow: inherit;\r\n        position: static;\r\n    }\r\n\r\n    #left-contact-wrap{\r\n        margin: 50px 0px 10px 0px;\r\n    }\r\n\r\n    #left-contact-wrap, #right-contact-wrap{\r\n        width: 100%;\r\n        height: 50%;\r\n    }\r\n\r\n    #right-contact-wrap, #right-contact-content{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    #message-wrap{\r\n        width: 90%;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .contact-section{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .contact-section ul{\r\n        justify-content: center;\r\n    }\r\n\r\n    #message-wrap input{\r\n\r\n    }\r\n\r\n    #nav-lnks ul{\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 575px){\r\n    #left-contact-wrap h2{\r\n        font-size: 110px !important;\r\n        margin: -65px 0px 0px 0px !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 485px){\r\n    #left-contact-wrap h2{\r\n        font-size: 86px !important;\r\n        margin: -35px 0px 0px 0px !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1400px){\r\n    #message-wrap{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1150px){\r\n    #left-contact-wrap h2{\r\n        font-size: 124px;\r\n        margin: -75px 0px 0px 0px;\r\n    }\r\n\r\n    #message-wrap{\r\n        width: 70%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXOztJQUVYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7O0lBRWQsZ0JBQWdCOztJQUVoQixlQUFlO0lBQ2YscUNBQXFDOztJQUVyQyxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0FBQ1Y7O0FBR0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTs7SUFFUixrQkFBa0I7SUFDbEIseUJBQXlCOztJQUV6QixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYzs7SUFFZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGdCQUFnQjs7SUFFaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGNBQWM7O0lBRWQsVUFBVTtBQUNkOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCOztJQUVyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1DQUFtQzs7SUFFbkMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtGQUErRjtJQUMvRixvRkFBb0Y7QUFDeEY7O0FBRUE7SUFDSTttQkFDZTtJQUNmLDhGQUE4RjtBQUNsRzs7QUFFQTtJQUNJLGVBQWU7SUFDZixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtJQUNBO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTs7UUFFVixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBOztJQUVBOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQixvQ0FBb0M7SUFDeEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLG9DQUFvQztJQUN4QztBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jY29udGFjdC1jb250ZW50LXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMi41cHggMHB4O1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFjdC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbiNyaWdodC1jb250YWN0LWNvbnRlbnQgaDF7XHJcbiAgICBjb2xvcjogIzdkN2Y4MSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA3LjVweCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIgdmFyLHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFjdC1jb250ZW50IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFjdC1jb250ZW50IHB7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcblxyXG4jbGVmdC1jb250YWN0LXdyYXB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGFjdC13cmFwe1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG59XHJcblxyXG4jbGVmdC1jb250YWN0LXdyYXAsICNyaWdodC1jb250YWN0LXdyYXB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIC8qIHdpZHRoOiA1MCU7ICovXHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2xlZnQtY29udGFjdC13cmFwIGgye1xyXG4gICAgZm9udC1zaXplOiAxNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDtcclxuICAgIG1hcmdpbjogLTgwcHggMHB4IDBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLyogI2xlZnQtY29udGFjdC13cmFwOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmxvYnMvc3ViYmxvYnMvYmxvYjE3LnN2Zyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjUlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn0gKi9cclxuXHJcbiNtZXNzYWdlLXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIHdpZHRoOiA2NSU7ICovXHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtZXNzYWdlLXdyYXAgaW5wdXQ6Zm9jdXMsICNtZXNzYWdlLXdyYXAgdGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMuNXB4ICMzYTY3YjI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jbWVzc2FnZS13cmFwIGlucHV0LCAjbWVzc2FnZS13cmFwIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QwRTJGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6ICM3ZDdmODE7XHJcblxyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlO1xyXG5cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNTAsNTAsOTMsLjEpO1xyXG59XHJcblxyXG4jbWVzc2FnZXtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jc3VibWl0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3N1Ym1pdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDdmZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRDBFMkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjb250YWN0LWNvbnRlbnQtd3JhcHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuXHJcbiNjb250YWN0LWNvbnRlbnQtd3JhcCBzZWN0aW9ue1xyXG4gICAgei1pbmRleDoyO1xyXG59XHJcblxyXG4jY29udGFjdC1jb250ZW50LCAjbmF2LWxpbmtze1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbiNjb250YWN0LWNvbnRlbnQgaDJ7XHJcbiAgICBtYXJnaW46MDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgNXZ3LCA2MHB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgY29sb3I6ICM3NDdmZTA7XHJcblxyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuI2NvbnRhY3QtY29udGVudCBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbjogMjVweCAwcHg7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGNvbG9yOiAjNTI1ZjdmO1xyXG5cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNjb250YWN0LWlubmVyLWNvbnRlbnQtd3JhcHtcclxuXHJcbn1cclxuXHJcbiNuYXYtbGlua3N7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiNuYXYtbGlua3MgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuI25hdi1saW5rcyAgdWwgbGl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdC1pbWd7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSgzMzExJSkgaHVlLXJvdGF0ZSgyMDVkZWcpIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg5MyUpO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIC4yNXMgZWFzZS1pbi1vdXQsIHdpZHRoIC4yNXMgZWFzZS1pbi1vdXQsIGhlaWdodCAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29udGFjdC1pbWc6aG92ZXJ7XHJcbiAgICAvKiB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDsgKi9cclxuICAgIGZpbHRlcjogaW52ZXJ0KDM4JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDQ5MzYlKSBodWUtcm90YXRlKDE4M2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDgzJSk7XHJcbn1cclxuXHJcbiNiZy1kZXNpZ24td3JhcHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jYmctYmxvYnN7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jYmctYmxvYnMgPiAqe1xyXG4gICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMTB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBvcGFjaXR5OiAuODU7XHJcbn1cclxuXHJcbiNibG9iMXtcclxuICAgIGxlZnQ6IC00NXZ3O1xyXG4gICAgYm90dG9tOiAtNzB2aDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMjVkZWcpIHNjYWxlKDEuNSkgc2NhbGVYKDEuMTUpO1xyXG59XHJcblxyXG4jYmxvYjJ7XHJcbiAgICBsZWZ0OiAtNDV2dztcclxuICAgIHRvcDogLTU1dmg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjcwZGVnKSBzY2FsZSgxLjc1KTtcclxufVxyXG5cclxuI2Jsb2Ize1xyXG4gICAgcmlnaHQ6IC00NXZ3O1xyXG4gICAgdG9wOiAtNTV2aDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigyMjBkZWcpIHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbiNibG9iNHtcclxuICAgIHRvcDogLTYwdmg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzMwZGVnKSBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4jYmxvYjV7XHJcbiAgICByaWdodDogLTQwdnc7XHJcbiAgICBib3R0b206IC03MHZoO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00MWRlZykgc2NhbGUoMS43NSk7XHJcbn1cclxuXHJcbiNibG9iNntcclxuICAgIGJvdHRvbTogLTg1dmg7XHJcbiAgICBsZWZ0OiAtNXZoO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MmRlZykgcm90YXRlWSgxODBkZWcpIHNjYWxlKDEuNSk7ICAgIFxyXG59XHJcblxyXG4jYmxvYjEtd3JhcHtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgcmlnaHQ6NSU7XHJcbn1cclxuICBcclxuI3BhdGgxIHtcclxuICAgIGZpbGw6ICMyMTk2RjM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCl7XHJcbiAgICAjbmF2LWxpbmtzIHVse1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAjY29udGFjdC1jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XHJcbiAgICA6aG9zdHtcclxuICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdC1jb250ZW50LXdyYXB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIH1cclxuXHJcbiAgICAjbGVmdC1jb250YWN0LXdyYXB7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbGVmdC1jb250YWN0LXdyYXAsICNyaWdodC1jb250YWN0LXdyYXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3JpZ2h0LWNvbnRhY3Qtd3JhcCwgI3JpZ2h0LWNvbnRhY3QtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjbWVzc2FnZS13cmFwe1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LXNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3Qtc2VjdGlvbiB1bHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjbWVzc2FnZS13cmFwIGlucHV0e1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjbmF2LWxua3MgdWx7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICNsZWZ0LWNvbnRhY3Qtd3JhcCBoMntcclxuICAgICAgICBmb250LXNpemU6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAtNjVweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODVweCl7XHJcbiAgICAjbGVmdC1jb250YWN0LXdyYXAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiA4NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAtMzVweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgI21lc3NhZ2Utd3JhcHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpe1xyXG4gICAgI2xlZnQtY29udGFjdC13cmFwIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTI0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAtNzVweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbWVzc2FnZS13cmFwe1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/contact-page/contact-page.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/contact-page/contact-page.component.ts ***!
      \********************************************************/

    /*! exports provided: ContactPageComponent */

    /***/
    function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
        return ContactPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ContactPageComponent = /*#__PURE__*/function () {
        function ContactPageComponent() {
          _classCallCheck(this, ContactPageComponent);
        }

        _createClass(ContactPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactPageComponent;
      }();

      ContactPageComponent.ctorParameters = function () {
        return [];
      };

      ContactPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contact-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contact-page.component.css */
        "./src/app/contact-page/contact-page.component.css"))["default"]]
      })], ContactPageComponent);
      /***/
    },

    /***/
    "./src/app/endeavour-item/endeavour-item.component.css":
    /*!*************************************************************!*\
      !*** ./src/app/endeavour-item/endeavour-item.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEndeavourItemEndeavourItemComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.left-nav-button, .right-nav-button, .endeavours-preview-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-nav-button, .right-nav-button{\r\n    width: 10%;\r\n}\r\n\r\n.left-nav-button img:hover, .right-nav-button img:hover{\r\n    /* cursor: pointer;\r\n    filter: none; */\r\n}\r\n\r\n.endeavours-preview-wrap{\r\n    width: 80%;\r\n}\r\n\r\n.endeavours-img-prev-wrap{\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n}\r\n\r\n.endeavours-img-prev-wrap .end-img{\r\n    width: 400px;\r\n    height: 400px;\r\n}\r\n\r\n.endeavours-desc-prev-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.endeavours-desc-prev-wrap h2{\r\n    font-size: 28px;\r\n    font-family: Inter var,sans-serif;;\r\n    color: #747fe0;    \r\n    font-weight: 800;\r\n\r\n    margin: 0;\r\n}\r\n\r\n.endeavours-desc-prev-wrap, .more-info-butt{\r\n    color: #636979;  \r\n    transition: color .25s ease-in-out;\r\n}\r\n\r\n.endeavours-desc-prev-wrap p, .more-info-butt p{\r\n    font-family: JetBrains Mono,monospace;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.more-info-butt p{\r\n    margin: 0;\r\n}\r\n\r\n.left-nav-button img, .right-nav-button img{\r\n    width: 55px;\r\n    height: 55px;\r\n}\r\n\r\n.more-info-butt-wrap, .more-info-butt{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.more-info-butt{\r\n    background-color: #D0E2FF;\r\n    border-radius: 20px;\r\n    padding: 15px;\r\n    /* color: #7d7f81; */\r\n    /* margin: 15px 0px; */\r\n    /* font-size: 12px; */\r\n    /* font-family: JetBrains Mono,monospace; */\r\n    border: none;\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.1);\r\n    transition: background-color .25s ease-in-out;\r\n}\r\n\r\n.more-info-butt:hover{\r\n    cursor: pointer;\r\n    background-color: #747fe0 !important;\r\n    color: #D0E2FF !important;\r\n}\r\n\r\n.view-active{\r\n    display: flex;\r\n    opacity: 1;\r\n}\r\n\r\n.view-inactive{\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.readmore-fake-wrap{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    \r\n\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    z-index: 3;\r\n\r\n    background-color: rgba(255,255,255,.8);\r\n\r\n    transition: opacity .25s ease-in-out, display .25s ease-in-out !important;\r\n}\r\n\r\n.readmore-wrap{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: relative;\r\n    z-index: 3;\r\n\r\n    width: 75vw;\r\n    height: 75vh;\r\n\r\n    max-height: 700px;\r\n    max-width: 800px;\r\n\r\n    border-radius: 10px;\r\n\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.25);\r\n    background: white;\r\n}\r\n\r\n.end-exit-wrap{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n}\r\n\r\n.end-exit-wrap img{\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    transition: opacity .25s ease-in-out;\r\n}\r\n\r\n.end-exit-wrap img:hover{\r\n    cursor: pointer;\r\n    opacity: .5;\r\n}\r\n\r\n.readmore-details-wrap{\r\n    box-sizing: border-box;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    padding: 50px;\r\n}\r\n\r\n.readmore-details-wrap h2{\r\n    text-align: center;\r\n    font-size: clamp(1vw, 2.5vw, 2.5vw);\r\n\r\n    font-family: Inter var,sans-serif;;\r\n    color: #747fe0;    \r\n    font-weight: 800;\r\n\r\n    margin: 0;\r\n}\r\n\r\n.readmore-details-wrap p{\r\n    text-align: center;\r\n    font-family: JetBrains Mono,monospace;\r\n    font-weight: normal;\r\n    font-size: clamp(12px, .85vw, .85vw);\r\n\r\n    text-align: center;\r\n}\r\n\r\n.endeavour-nav-active{\r\n    filter: none;\r\n    transition: filter .25s ease-in-out;\r\n    opacity: 1;\r\n}\r\n\r\n.endeavour-nav-inactive{\r\n    opacity: .25 !important;\r\n}\r\n\r\n.endeavour-nav-active:hover{\r\n    cursor: pointer !important;\r\n    filter: invert(45%) sepia(80%) saturate(11%) hue-rotate(147deg) brightness(95%) contrast(100%);\r\n}\r\n\r\n.endeavour-nav-inactive:hover{\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n    .endeavours-img-prev-wrap .end-img {\r\n        width: 300px;\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px){\r\n    .endeavours-preview-wrap > * {\r\n        margin: 10px 0px;\r\n    }\r\n\r\n    .endeavours-img-prev-wrap{\r\n        flex-wrap: wrap;\r\n        justify-content:center;\r\n    }\r\n    \r\n    .left-nav-button, .right-nav-button{\r\n        order: 2;\r\n        width: auto;\r\n\r\n        margin: 0px 5px;\r\n    }\r\n    \r\n    .endeavours-img-prev-wrap .end-img{\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kZWF2b3VyLWl0ZW0vZW5kZWF2b3VyLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTttQkFDZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxnQkFBZ0I7O0lBRWhCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7O0lBR1osZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPOztJQUVQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixVQUFVOztJQUVWLHNDQUFzQzs7SUFFdEMseUVBQXlFO0FBQzdFOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLFdBQVc7SUFDWCxZQUFZOztJQUVaLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQzs7SUFFbkMsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxnQkFBZ0I7O0lBRWhCLFNBQVM7QUFDYjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLG9DQUFvQzs7SUFFcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsOEZBQThGO0FBQ2xHOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7O1FBRVgsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lbmRlYXZvdXItaXRlbS9lbmRlYXZvdXItaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnQtbmF2LWJ1dHRvbiwgLnJpZ2h0LW5hdi1idXR0b24sIC5lbmRlYXZvdXJzLXByZXZpZXctd3JhcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1uYXYtYnV0dG9uLCAucmlnaHQtbmF2LWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5sZWZ0LW5hdi1idXR0b24gaW1nOmhvdmVyLCAucmlnaHQtbmF2LWJ1dHRvbiBpbWc6aG92ZXJ7XHJcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWx0ZXI6IG5vbmU7ICovXHJcbn1cclxuXHJcbi5lbmRlYXZvdXJzLXByZXZpZXctd3JhcHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5lbmRlYXZvdXJzLWltZy1wcmV2LXdyYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuXHJcbi5lbmRlYXZvdXJzLWltZy1wcmV2LXdyYXAgLmVuZC1pbWd7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uZW5kZWF2b3Vycy1kZXNjLXByZXYtd3JhcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZW5kZWF2b3Vycy1kZXNjLXByZXYtd3JhcCBoMntcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZjs7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDsgICAgXHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVuZGVhdm91cnMtZGVzYy1wcmV2LXdyYXAsIC5tb3JlLWluZm8tYnV0dHtcclxuICAgIGNvbG9yOiAjNjM2OTc5OyAgXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZW5kZWF2b3Vycy1kZXNjLXByZXYtd3JhcCBwLCAubW9yZS1pbmZvLWJ1dHQgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vcmUtaW5mby1idXR0IHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sZWZ0LW5hdi1idXR0b24gaW1nLCAucmlnaHQtbmF2LWJ1dHRvbiBpbWd7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuLm1vcmUtaW5mby1idXR0LXdyYXAsIC5tb3JlLWluZm8tYnV0dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3JlLWluZm8tYnV0dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMEUyRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8qIGNvbG9yOiAjN2Q3ZjgxOyAqL1xyXG4gICAgLyogbWFyZ2luOiAxNXB4IDBweDsgKi9cclxuICAgIC8qIGZvbnQtc2l6ZTogMTJweDsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiBKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2U7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDUwLDUwLDkzLC4xKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vcmUtaW5mby1idXR0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0N2ZlMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNEMEUyRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi52aWV3LWFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udmlldy1pbmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucmVhZG1vcmUtZmFrZS13cmFwe1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIFxyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlLWluLW91dCwgZGlzcGxheSAuMjVzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWFkbW9yZS13cmFwe1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgaGVpZ2h0OiA3NXZoO1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoNTAsNTAsOTMsLjI1KTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZW5kLWV4aXQtd3JhcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZW5kLWV4aXQtd3JhcCBpbWd7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5lbmQtZXhpdC13cmFwIGltZzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4ucmVhZG1vcmUtZGV0YWlscy13cmFwe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4ucmVhZG1vcmUtZGV0YWlscy13cmFwIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxdncsIDIuNXZ3LCAyLjV2dyk7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmOztcclxuICAgIGNvbG9yOiAjNzQ3ZmUwOyAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLnJlYWRtb3JlLWRldGFpbHMtd3JhcCBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEpldEJyYWlucyBNb25vLG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIC44NXZ3LCAuODV2dyk7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW5kZWF2b3VyLW5hdi1hY3RpdmV7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgLjI1cyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5lbmRlYXZvdXItbmF2LWluYWN0aXZle1xyXG4gICAgb3BhY2l0eTogLjI1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbmRlYXZvdXItbmF2LWFjdGl2ZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoNDUlKSBzZXBpYSg4MCUpIHNhdHVyYXRlKDExJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDAlKTtcclxufVxyXG5cclxuLmVuZGVhdm91ci1uYXYtaW5hY3RpdmU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIC5lbmRlYXZvdXJzLWltZy1wcmV2LXdyYXAgLmVuZC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAuZW5kZWF2b3Vycy1wcmV2aWV3LXdyYXAgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbmRlYXZvdXJzLWltZy1wcmV2LXdyYXB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWZ0LW5hdi1idXR0b24sIC5yaWdodC1uYXYtYnV0dG9ue1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbmRlYXZvdXJzLWltZy1wcmV2LXdyYXAgLmVuZC1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/endeavour-item/endeavour-item.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/endeavour-item/endeavour-item.component.ts ***!
      \************************************************************/

    /*! exports provided: EndeavourItemComponent */

    /***/
    function srcAppEndeavourItemEndeavourItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndeavourItemComponent", function () {
        return EndeavourItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EndeavourItemComponent = /*#__PURE__*/function () {
        function EndeavourItemComponent() {
          _classCallCheck(this, EndeavourItemComponent);

          this.nav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.canReadMore = false;
        }

        _createClass(EndeavourItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleRightNavClick",
          value: function handleRightNavClick() {
            console.log("right click working");
            var currIdx = parseInt(this.endObj.index);
            this.nav.emit(++currIdx);
          }
        }, {
          key: "handleLeftNavClick",
          value: function handleLeftNavClick() {
            console.log("left click working");
            var currIdx = parseInt(this.endObj.index);
            this.nav.emit(--currIdx);
          }
        }, {
          key: "hasLeftEnd",
          value: function hasLeftEnd() {
            if (this.endeavourLen > 0) {
              if (parseInt(this.endObj.index) - 1 >= 0) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          }
        }, {
          key: "hasRightEnd",
          value: function hasRightEnd() {
            if (this.endeavourLen > 0) {
              if (parseInt(this.endObj.index) + 1 <= this.endeavourLen - 1) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          } //possibly move this to endeavours svc

        }, {
          key: "displayEndeavour",
          value: function displayEndeavour(index) {
            var idx = parseInt(index);
            var item = document.getElementById("end-" + (idx + 1) + "-more");
            this.canReadMore = true; // if(item){
            //   item.style.display = "flex";
            //   setTimeout(() => {
            //     item.style.opacity = "1";
            //     this.currEnd = item;
            //   }, 100);
            // }
          }
        }, {
          key: "closeCurrEndeavour",
          value: function closeCurrEndeavour() {
            this.canReadMore = false; // if(this.currEnd){
            //   this.currEnd.style.opacity = "0";
            //   setTimeout(() => {
            //     this.currEnd.style.display = "none";
            //     this.currEnd = null;
            //   }, 100);
            // }
          }
        }]);

        return EndeavourItemComponent;
      }();

      EndeavourItemComponent.ctorParameters = function () {
        return [];
      };

      EndeavourItemComponent.propDecorators = {
        nav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        endObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        endeavourLen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EndeavourItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-endeavour-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./endeavour-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/endeavour-item/endeavour-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./endeavour-item.component.css */
        "./src/app/endeavour-item/endeavour-item.component.css"))["default"]]
      })], EndeavourItemComponent);
      /***/
    },

    /***/
    "./src/app/endeavour.service.ts":
    /*!**************************************!*\
      !*** ./src/app/endeavour.service.ts ***!
      \**************************************/

    /*! exports provided: EndeavourService */

    /***/
    function srcAppEndeavourServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndeavourService", function () {
        return EndeavourService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EndeavourService = /*#__PURE__*/function () {
        function EndeavourService() {
          _classCallCheck(this, EndeavourService);

          this.endeavoursList = [{
            "index": "0",
            "image": "assets/proj5.gif",
            "title": "Down the Crevice",
            "prevDesc": "I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love.",
            "readMore": "I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love. I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love. I'm currently spending some of my free time developing a game! It's called Down the Crevice and incorporates features from all types of games I love."
          }, {
            "index": "1",
            "image": "assets/proj3.gif",
            "title": "Swappup",
            "prevDesc": "Over the years, the idea of bartering and free trading has always interested me. I'm currently developing a centralized and well-rounded place for all your bartering/free-trade needs, while also giving a good sense of security!",
            "readMore": "..."
          }];
        } //verify if there is anything to the right of the curr endeavour object


        _createClass(EndeavourService, [{
          key: "checkRightSide",
          value: function checkRightSide(index) {
            var idx = parseInt(index);

            if (this.endeavoursList.length - 1 > 0) {
              if (++idx <= this.endeavoursList.length - 1) {
                return true;
              } else {
                return false;
              }
            }
          }
        }, {
          key: "checkLeftSide",
          value: function checkLeftSide(index) {
            var idx = parseInt(index);

            if (this.endeavoursList.length - 1 > 0) {
              if (--idx >= 0) {
                return true;
              } else {
                return false;
              }
            }
          }
        }, {
          key: "getEndeavours",
          value: function getEndeavours() {
            return this.endeavoursList;
          }
        }]);

        return EndeavourService;
      }();

      EndeavourService.ctorParameters = function () {
        return [];
      };

      EndeavourService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EndeavourService);
      /***/
    },

    /***/
    "./src/app/endeavours-list/endeavours-list.component.css":
    /*!***************************************************************!*\
      !*** ./src/app/endeavours-list/endeavours-list.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEndeavoursListEndeavoursListComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#endeavours-index-wrap{\r\n    width: 400px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#endeavours-index-wrap p{\r\n    font-family: JetBrains Mono,monospace;\r\n    color: #636979;  \r\n    font-weight: normal;\r\n    font-size: 23px;\r\n    padding: 5px;\r\n}\r\n\r\n#index-divider{\r\n    content: '';\r\n    border-top: 1.5px solid #636979;\r\n    margin-top: 0px;\r\n    width: 50%;\r\n}\r\n\r\n#endeavours-list-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kZWF2b3Vycy1saXN0L2VuZGVhdm91cnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZW5kZWF2b3Vycy1saXN0L2VuZGVhdm91cnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jZW5kZWF2b3Vycy1pbmRleC13cmFwe1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNlbmRlYXZvdXJzLWluZGV4LXdyYXAgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIzYzNjk3OTsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuI2luZGV4LWRpdmlkZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICM2MzY5Nzk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jZW5kZWF2b3Vycy1saXN0LXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/endeavours-list/endeavours-list.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/endeavours-list/endeavours-list.component.ts ***!
      \**************************************************************/

    /*! exports provided: EndeavoursListComponent */

    /***/
    function srcAppEndeavoursListEndeavoursListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndeavoursListComponent", function () {
        return EndeavoursListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _endeavour_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../endeavour.service */
      "./src/app/endeavour.service.ts");

      var EndeavoursListComponent = /*#__PURE__*/function () {
        function EndeavoursListComponent(endeavourService) {
          _classCallCheck(this, EndeavoursListComponent);

          this.endeavourService = endeavourService;
          this.currIdx = 0;
        }

        _createClass(EndeavoursListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleNavClick",
          value: function handleNavClick(i) {
            // console.log(event);
            this.currIdx = i;
          }
        }, {
          key: "getEndeavours",
          value: function getEndeavours() {
            return this.endeavourService.getEndeavours();
          }
        }]);

        return EndeavoursListComponent;
      }();

      EndeavoursListComponent.ctorParameters = function () {
        return [{
          type: _endeavour_service__WEBPACK_IMPORTED_MODULE_2__["EndeavourService"]
        }];
      };

      EndeavoursListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-endeavours-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./endeavours-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/endeavours-list/endeavours-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./endeavours-list.component.css */
        "./src/app/endeavours-list/endeavours-list.component.css"))["default"]]
      })], EndeavoursListComponent);
      /***/
    },

    /***/
    "./src/app/extras-page/extras-page.component.css":
    /*!*******************************************************!*\
      !*** ./src/app/extras-page/extras-page.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExtrasPageExtrasPageComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#extras-content-wrap{\r\n    height:100%;\r\n\r\n    /* display: flex;\r\n    flex-direction: column; */\r\n\r\n    /* flex: 1 1 auto; */\r\n    /* align-items: center; */\r\n    /* justify-content: center; */\r\n}\r\n\r\n.extra-section{\r\n    width: 100%;\r\n    min-height: 90%;\r\n    /* min-height: calc(var(--vh, 1vh) * 90); */\r\n\r\n    /* flex: 1 1 auto; */\r\n    /* height: 100%; */\r\n}\r\n\r\n#endeavours{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#extras-content-nav-wrap{\r\n    position: fixed;\r\n    left: -75px;\r\n    top: 50%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.nav-ele{\r\n    margin: 0px 15px;\r\n    padding: 5px;\r\n\r\n    font-family: JetBrains Mono,monospace;\r\n    font-weight: normal;\r\n    font-size: 17px;\r\n\r\n    transition: color .25s ease-in-out;\r\n}\r\n\r\n.nav-ele:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-ele.inactive p:hover{\r\n    color:black !important;\r\n}\r\n\r\n.nav-ele.inactive p{\r\n    color: lightgrey !important;\r\n    -webkit-text-decoration: underline 1px solid lightgrey;\r\n            text-decoration: underline 1px solid lightgrey;\r\n}\r\n\r\n.nav-ele.active p{\r\n    color: black !important;\r\n    -webkit-text-decoration: underline 1px solid black;\r\n            text-decoration: underline 1px solid black;\r\n}\r\n\r\n#art-wrap{\r\n    margin: 0px;\r\n    padding: 0px;\r\n\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.art-item{\r\n    margin: 20px;\r\n}\r\n\r\n.art-item:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.art-detail-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.art-detail-wrap img{\r\n    background: grey;\r\n    border-radius: 10px;\r\n    width: 192px;\r\n    height: 222px;\r\n\r\n    border-radius: 10px;\r\n}\r\n\r\n.bottom-lip-wrap{\r\n    text-align: center;\r\n    border-radius: 0px 0px 10px 10px;\r\n    padding: 5px;\r\n    width: 80%;\r\n\r\n    background-color: white;\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.15);\r\n\r\n}\r\n\r\n.bottom-lip-wrap h2{\r\n    color: #747fe0;\r\n    font-family: Inter var,sans-serif !important;\r\n    margin: 0;\r\n    font-size: 16px;\r\n}\r\n\r\n.bottom-lip-wrap p{\r\n    font-family: JetBrains Mono,monospace;\r\n    color: #636979;\r\n    margin: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n@media screen and (max-width: 1050px){\r\n    #extras-content-nav-wrap{\r\n        left: -125px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px){\r\n    .extra-section{\r\n        box-sizing: border-box;\r\n        padding: 50px 0px;\r\n        /* min-height: auto; */\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px){\r\n    .extra-section {\r\n        /* min-height: 100vh; */\r\n    }\r\n}\r\n\r\n/* ---------------put this in hobbies component ------------------- */\r\n\r\n#hobbies{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    /* align-items: center;  */\r\n\r\n    width: 100%;\r\n}\r\n\r\n#hobbies > * {\r\n    margin: 0px 50px;\r\n}\r\n\r\n#hobbies-left-wrap{\r\n    width: 60%;\r\n\r\n}\r\n\r\n#hobbies-right-wrap{\r\n    width: 40%;\r\n\r\n}\r\n\r\n#hobbies-left-wrap, #hobbies-right-wrap{\r\n    display: flex;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n}\r\n\r\n#hobbies-right-wrap{\r\n    height: 50%\r\n}\r\n\r\n#hobbies-right-centerer{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#hobbies-left-inner h2, .hobby-details h3{\r\n    font-family: Inter var,sans-serif;;\r\n    color: #747fe0;    \r\n    /* text-align: center; */\r\n}\r\n\r\n#hobbies-left-inner p, .hobby-details p{\r\n    /* text-align: center; */\r\n    font-weight: normal;\r\n    font-size: clamp(12px, .85vw, .85vw);\r\n}\r\n\r\n#hobbies-left-inner h2{\r\n    font-size: clamp(3vw, 5vw, 6vw);\r\n    font-weight: 800;\r\n\r\n    line-height: 1.25;\r\n\r\n    margin: 0;\r\n}\r\n\r\n#hobbies-left-inner p{\r\n    font-weight: normal;\r\n    font-size: clamp(17px, 1vw, 1vw);\r\n    font-family: \"Open Sans\";\r\n}\r\n\r\n.hobby-details p{\r\n    font-family: JetBrains Mono,monospace;\r\n}\r\n\r\n.hobby-details h3{\r\n    font-size: clamp(.75vw, 2vw, 2vw);\r\n    font-weight: 800;\r\n}\r\n\r\n#hobbies-right-inner{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    /* height: 100%; */\r\n    width: 100%;\r\n\r\n}\r\n\r\n#hobby1, #hobby2, #hobby3{\r\n    display: none;\r\n    opacity: 0;\r\n}\r\n\r\n.hobby-item {\r\n    width: 40%;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    background-color: black;\r\n\r\n    border-radius: 10px;\r\n    margin: 2.5%;\r\n\r\n    transition: filter .25s ease-in-out, width .25s ease-in-out;\r\n}\r\n\r\n.hobby-item:hover{\r\n    cursor: pointer;\r\n\r\n    filter: grayscale(.5);\r\n\r\n    /* border: .5px solid rgba(50,50,93,.15); */\r\n}\r\n\r\n.hobby-item img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media screen and (max-width: 810px){\r\n    #hobbies{\r\n        flex-direction: column;\r\n    }\r\n\r\n    .hobby-item{\r\n        /* width: 10% !important; */\r\n    }\r\n\r\n    #hobbies > * {\r\n        margin: 0px;\r\n        height: auto;\r\n    }\r\n\r\n    #hobbies-left-wrap, #hobbies-right-wrap{\r\n        width: 100%;\r\n    }\r\n\r\n    #hobbies-left-wrap, #hobbies-right-wrap{\r\n        /* height: 50%; */\r\n    }\r\n\r\n    #hobbies-left-inner, #hobbies-right-inner{\r\n        box-sizing: border-box;\r\n        padding: 0px 75px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 550px){\r\n    .hobby-item{\r\n        /* width: 25% !important; */\r\n    }\r\n}\r\n\r\n/* \r\n.hobby-details p{\r\n    font-weight: normal;\r\n    font-size: clamp(12px, .85vw, .85vw);\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXh0cmFzLXBhZ2UvZXh0cmFzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7O0lBRVg7NkJBQ3lCOztJQUV6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkNBQTJDOztJQUUzQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFFBQVE7O0lBRVIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixzREFBOEM7WUFBOUMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtEQUEwQztZQUExQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhOztJQUViLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFVBQVU7O0lBRVYsdUJBQXVCO0lBQ3ZCLDBDQUEwQzs7QUFFOUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFLQSxxRUFBcUU7O0FBQ3JFO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCOztJQUUxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVOztBQUVkOztBQUVBO0lBQ0ksVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjs7SUFFaEIsaUJBQWlCOztJQUVqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVOztJQUVWLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLHVCQUF1Qjs7SUFFdkIsbUJBQW1CO0lBQ25CLFlBQVk7O0lBRVosMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixxQkFBcUI7O0lBRXJCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2V4dHJhcy1wYWdlL2V4dHJhcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNleHRyYXMtY29udGVudC13cmFwe1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcblxyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcblxyXG4gICAgLyogZmxleDogMSAxIGF1dG87ICovXHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi5leHRyYS1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogOTApOyAqL1xyXG5cclxuICAgIC8qIGZsZXg6IDEgMSBhdXRvOyAqL1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG4jZW5kZWF2b3Vyc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2V4dHJhcy1jb250ZW50LW5hdi13cmFwe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTc1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuXHJcbi5uYXYtZWxle1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2LWVsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1lbGUuaW5hY3RpdmUgcDpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtZWxlLmluYWN0aXZlIHB7XHJcbiAgICBjb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG4ubmF2LWVsZS5hY3RpdmUgcHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jYXJ0LXdyYXB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmFydC1pdGVte1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYXJ0LWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnQtZGV0YWlsLXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnQtZGV0YWlsLXdyYXAgaW1ne1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTkycHg7XHJcbiAgICBoZWlnaHQ6IDIyMnB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tbGlwLXdyYXB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDUwLDUwLDkzLC4xNSk7XHJcblxyXG59XHJcblxyXG4uYm90dG9tLWxpcC13cmFwIGgye1xyXG4gICAgY29sb3I6ICM3NDdmZTA7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIgdmFyLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJvdHRvbS1saXAtd3JhcCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IEpldEJyYWlucyBNb25vLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiAjNjM2OTc5O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpe1xyXG4gICAgI2V4dHJhcy1jb250ZW50LW5hdi13cmFwe1xyXG4gICAgICAgIGxlZnQ6IC0xMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgLmV4dHJhLXNlY3Rpb257XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgICAgICAvKiBtaW4taGVpZ2h0OiBhdXRvOyAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAuZXh0cmEtc2VjdGlvbiB7XHJcbiAgICAgICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLXB1dCB0aGlzIGluIGhvYmJpZXMgY29tcG9uZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuI2hvYmJpZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgICovXHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNob2JiaWVzID4gKiB7XHJcbiAgICBtYXJnaW46IDBweCA1MHB4O1xyXG59XHJcblxyXG4jaG9iYmllcy1sZWZ0LXdyYXB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG5cclxufVxyXG5cclxuI2hvYmJpZXMtcmlnaHQtd3JhcHtcclxuICAgIHdpZHRoOiA0MCU7XHJcblxyXG59XHJcblxyXG4jaG9iYmllcy1sZWZ0LXdyYXAsICNob2JiaWVzLXJpZ2h0LXdyYXB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2hvYmJpZXMtcmlnaHQtd3JhcHtcclxuICAgIGhlaWdodDogNTAlXHJcbn1cclxuXHJcbiNob2JiaWVzLXJpZ2h0LWNlbnRlcmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNob2JiaWVzLWxlZnQtaW5uZXIgaDIsIC5ob2JieS1kZXRhaWxzIGgze1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmOztcclxuICAgIGNvbG9yOiAjNzQ3ZmUwOyAgICBcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuI2hvYmJpZXMtbGVmdC1pbm5lciBwLCAuaG9iYnktZGV0YWlscyBwe1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgLjg1dncsIC44NXZ3KTtcclxufVxyXG5cclxuI2hvYmJpZXMtbGVmdC1pbm5lciBoMntcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3Z3LCA1dncsIDZ2dyk7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2hvYmJpZXMtbGVmdC1pbm5lciBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTdweCwgMXZ3LCAxdncpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbn1cclxuXHJcbi5ob2JieS1kZXRhaWxzIHB7XHJcbiAgICBmb250LWZhbWlseTogSmV0QnJhaW5zIE1vbm8sbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uaG9iYnktZGV0YWlscyBoM3tcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoLjc1dncsIDJ2dywgMnZ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbiNob2JiaWVzLXJpZ2h0LWlubmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4jaG9iYnkxLCAjaG9iYnkyLCAjaG9iYnkze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5ob2JieS1pdGVtIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMi41JTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgLjI1cyBlYXNlLWluLW91dCwgd2lkdGggLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvYmJ5LWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoLjUpO1xyXG5cclxuICAgIC8qIGJvcmRlcjogLjVweCBzb2xpZCByZ2JhKDUwLDUwLDkzLC4xNSk7ICovXHJcbn1cclxuXHJcbi5ob2JieS1pdGVtIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTBweCl7XHJcbiAgICAjaG9iYmllc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob2JieS1pdGVte1xyXG4gICAgICAgIC8qIHdpZHRoOiAxMCUgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAjaG9iYmllcyA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAjaG9iYmllcy1sZWZ0LXdyYXAsICNob2JiaWVzLXJpZ2h0LXdyYXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2hvYmJpZXMtbGVmdC13cmFwLCAjaG9iYmllcy1yaWdodC13cmFwe1xyXG4gICAgICAgIC8qIGhlaWdodDogNTAlOyAqL1xyXG4gICAgfVxyXG5cclxuICAgICNob2JiaWVzLWxlZnQtaW5uZXIsICNob2JiaWVzLXJpZ2h0LWlubmVye1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDc1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KXtcclxuICAgIC5ob2JieS1pdGVte1xyXG4gICAgICAgIC8qIHdpZHRoOiAyNSUgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxufVxyXG5cclxuLyogXHJcbi5ob2JieS1kZXRhaWxzIHB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAuODV2dywgLjg1dncpO1xyXG59ICovIl19 */";
      /***/
    },

    /***/
    "./src/app/extras-page/extras-page.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/extras-page/extras-page.component.ts ***!
      \******************************************************/

    /*! exports provided: ExtrasPageComponent */

    /***/
    function srcAppExtrasPageExtrasPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtrasPageComponent", function () {
        return ExtrasPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _art_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../art.service */
      "./src/app/art.service.ts");

      var ExtrasPageComponent = /*#__PURE__*/function () {
        function ExtrasPageComponent(artService) {
          _classCallCheck(this, ExtrasPageComponent);

          this.artService = artService; // complicated way

          this.idxToTabMappings = {
            0: "endeavours",
            1: "art",
            2: "hobbies"
          };
          this.tabToIdxMappings = {
            "endeavours": 0,
            "art": 1,
            "hobbies": 2
          };
          this.activeTabIdx = 0;
          this.tabsToListenTo = [];
          this.scrollRef = document.getElementsByTagName("body")[0];
          this.buttonPressed = false;
        }

        _createClass(ExtrasPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            // set up tabsToWatch... we will loop thru this list of tabs whenever the user scrolls and check to see which ele is in view
            // seems like a pretty... bad way to check for this, but seeing as there is only 3 tabs to check each time, should be fine for now...
            for (var i = 0; i < Object.keys(this.idxToTabMappings).length; i++) {
              this.tabsToListenTo.push(document.getElementById(this.idxToTabMappings[i]));
            } // modularize scroll logic so we can easily use it or pause it with the event listeners.


            this.scrollListener = function () {
              //if the button was pressed, we should pause the logic for tab finding... and simply just call the function which intiailizes our timeout for determing when the buttonPress scroll has stopped
              if (_this4.buttonPressed) {
                _this4.checkIfEnded();
              } else {
                //loop thru the tab elements, get their bounding box, and then implement logic to determine if the tab is in the window/document viewport
                for (var _i3 = 0; _i3 < _this4.tabsToListenTo.length; _i3++) {
                  var currItem = _this4.tabsToListenTo[_i3].getBoundingClientRect(); // logic to check if a tab/section is in the viewport, give or take 20px for the nav bar on top...
                  // although, I know that nav bar is NOT 20px... so -\(._.)/-


                  if (Math.floor(currItem.top) >= 0 && Math.floor(currItem.bottom) <= window.innerHeight) {
                    _this4.activeTabIdx = _this4.tabToIdxMappings[_this4.idxToTabMappings[_i3]]; //awful awful way to try and handle when sections have a height
                    //larger than the window inner height...
                  }
                }
              }
            }; // initialization of event listener on component init


            this.scrollRef.addEventListener("scroll", this.scrollListener);
          }
          /* this function will be called if the buttonPressed bool has been set to true(which should only happen on explicit click of a side tab button)
           it will set a timeout each time, which will come to be overrided if the window is still scrolling... if the window is no longer scrolling, the timeout function
           will have time to execute, where it will be able to set buttonPressed bool to false
          */

        }, {
          key: "checkIfEnded",
          value: function checkIfEnded() {
            var _this5 = this;

            if (this.scrollTimeout) {
              clearTimeout(this.scrollTimeout);
            }
            /* HOLY FUCKING FUCK, IT TOOK ME 2 DAYS TO REALIZE THAT THE REASON
               THIS TIMEOUT CALLBACK FUNCTION WASNT UPDATING THE GLOBAL SCOPED "BUTTONPRESSED"
               VAL WAS BCUZ THE LEXICAL SCOPE WAS COMPLETELY DIFFERENT WHEN NOT USING
               AND ANON FUNCTION AS THE CALLBACK... WOW... lesson learned I guess
            */


            this.scrollTimeout = setTimeout(function () {
              _this5.buttonPressed = false;
            }, 100);
          } // function for scrolling to specific section, depending on idx given + mapping value

        }, {
          key: "scrollTo",
          value: function scrollTo(sectionIdx) {
            this.activeTabIdx = sectionIdx;
            this.buttonPressed = true;
            var scrollToEle = document.getElementById(this.idxToTabMappings[this.activeTabIdx]);
            scrollToEle.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          } // TODO: move this from teh extras component into the svc that manages art...
          // the art svc, that is!

        }, {
          key: "displayArt",
          value: function displayArt(idx) {
            this.artService.displayProj(idx);
          }
        }, {
          key: "getArt",
          value: function getArt() {
            return this.artService.getArt();
          }
        }, {
          key: "hideThatShit",
          value: function hideThatShit(element) {
            element.style.width = "20%";
            element.style.order = "1";
          }
        }, {
          key: "expandThatShit",
          value: function expandThatShit(element) {
            element.style.width = "0%";
            element.style.order = "3";
            setTimeout(function () {
              element.style.width = "100%";
            }, 500);
          } // move to hobby component

        }, {
          key: "handleHobby",
          value: function handleHobby(event) {
            var ele = event.path[1]; // evidently, this is what holds the element that was clicked, in the case of these hobby elements

            var hobbyElements = Array.from(document.getElementsByClassName("hobby-item"));

            for (var i = 0; i < hobbyElements.length; i++) {
              if (hobbyElements[i] != ele) {
                this.hideThatShit(hobbyElements[i]);
              } else {
                this.expandThatShit(ele);
              }
            }
          }
        }]);

        return ExtrasPageComponent;
      }();

      ExtrasPageComponent.ctorParameters = function () {
        return [{
          type: _art_service__WEBPACK_IMPORTED_MODULE_2__["ArtService"]
        }];
      };

      ExtrasPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extras-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./extras-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/extras-page/extras-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./extras-page.component.css */
        "./src/app/extras-page/extras-page.component.css"))["default"]]
      })], ExtrasPageComponent);
      /***/
    },

    /***/
    "./src/app/nav-bar/nav-bar.component.css":
    /*!***********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\r\n    width:100%;\r\n    /* height: 10%; */\r\n\r\n    margin: 2.5% 0px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#about-header{\r\n    font-family: Inter var,sans-serif;\r\n\r\n    width:100%;\r\n    height:100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    /* padding:20px 0px;\r\n    margin: 0px 0px 5% 0px; */\r\n}\r\n\r\n#about-header div, #about-header nav{\r\n    z-index: 2;\r\n}\r\n\r\n#header-logo-wrap, #header-nav-wrap{\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#header-logo-wrap h1{\r\n    font-size: 1.5em !important;\r\n}\r\n\r\n#header-logo-wrap h1 a{\r\n    border-radius: 10px;\r\n}\r\n\r\n#header-nav-wrap ul{\r\n    list-style-type: none;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#header-nav-wrap ul li{\r\n    /* padding: 4px 10px; */\r\n    margin: 0px 5px;\r\n    font-size: .75em;\r\n    font-weight: 800;\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.text-link{\r\n    text-decoration: none;\r\n    /* color:rgb(58,103,178); */\r\n    /* padding:4px 10px; */\r\n    /* border-radius: 1em; */\r\n    /* background: #d6e2fa; */\r\n\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* transition: color .25s linear; */\r\n}\r\n\r\n#text-splash-link{\r\n    border-radius: 10px !important;\r\n}\r\n\r\n#logo-literal{\r\n    width:100px;\r\n    height:100px;\r\n\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 950px){\r\n    #about-header{\r\n        justify-content: space-around;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    /* :host{\r\n        margin: 5% 0px;\r\n    } */\r\n\r\n    #header-logo-wrap h1{\r\n        display: none;\r\n    }\r\n\r\n    #logo-literal{\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 570px){\r\n    #header-nav-wrap ul{\r\n        flex-direction: column;\r\n    }\r\n\r\n    #header-nav-wrap ul li{\r\n        margin: 5px 0px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCOztJQUVqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDOztJQUVqQyxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5COzZCQUN5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCOztJQUVyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5QkFBeUI7O0lBRXpCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJOztPQUVHOztJQUVIO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDEwJTsgKi9cclxuXHJcbiAgICBtYXJnaW46IDIuNSUgMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhYm91dC1oZWFkZXJ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIgdmFyLHNhbnMtc2VyaWY7XHJcblxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAvKiBwYWRkaW5nOjIwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDUlIDBweDsgKi9cclxufVxyXG5cclxuI2Fib3V0LWhlYWRlciBkaXYsICNhYm91dC1oZWFkZXIgbmF2e1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuI2hlYWRlci1sb2dvLXdyYXAsICNoZWFkZXItbmF2LXdyYXB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNoZWFkZXItbG9nby13cmFwIGgxe1xyXG4gICAgZm9udC1zaXplOiAxLjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jaGVhZGVyLWxvZ28td3JhcCBoMSBhe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2hlYWRlci1uYXYtd3JhcCB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI2hlYWRlci1uYXYtd3JhcCB1bCBsaXtcclxuICAgIC8qIHBhZGRpbmc6IDRweCAxMHB4OyAqL1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAuNzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLyogY29sb3I6cmdiKDU4LDEwMywxNzgpOyAqL1xyXG4gICAgLyogcGFkZGluZzo0cHggMTBweDsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDFlbTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQ6ICNkNmUyZmE7ICovXHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC8qIHRyYW5zaXRpb246IGNvbG9yIC4yNXMgbGluZWFyOyAqL1xyXG59XHJcblxyXG4jdGV4dC1zcGxhc2gtbGlua3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2xvZ28tbGl0ZXJhbHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgICNhYm91dC1oZWFkZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAvKiA6aG9zdHtcclxuICAgICAgICBtYXJnaW46IDUlIDBweDtcclxuICAgIH0gKi9cclxuXHJcbiAgICAjaGVhZGVyLWxvZ28td3JhcCBoMXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICNsb2dvLWxpdGVyYWx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KXtcclxuICAgICNoZWFkZXItbmF2LXdyYXAgdWx7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAjaGVhZGVyLW5hdi13cmFwIHVsIGxpe1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/nav-bar/nav-bar.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/nav-bar/nav-bar.component.ts ***!
      \**********************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { Context } from 'vm';


      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);

          this.navOptions = ["about", "projects", "contact", "extras"];
          this.navOptionsContext = [];
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.navOptionsContext = this.navOptions.filter(function (ele) {
              return ele !== _this6.context;
            });
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ctorParameters = function () {
        return [];
      };

      NavBarComponent.propDecorators = {
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nav-bar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nav-bar.component.css */
        "./src/app/nav-bar/nav-bar.component.css"))["default"]]
      })], NavBarComponent);
      /***/
    },

    /***/
    "./src/app/project-list/project-list.component.css":
    /*!*********************************************************!*\
      !*** ./src/app/project-list/project-list.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProjectListProjectListComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#close-project-wrap{\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 25px;\r\n}\r\n\r\n#close-project-wrap:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n#close-project-wrap img{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n.proj-wrap picture{\r\n    position: absolute;\r\n}\r\n\r\n.proj-outter-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.proj-wrap{\r\n    z-index: 2;\r\n\r\n    position: absolute;\r\n    left:0;\r\n    bottom:100%;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background: #e3ecf5;\r\n\r\n    transition: bottom .5s ease-out;\r\n    /* opacity: .5; */\r\n}\r\n\r\n.dynamic-proj-info-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.proj-left{\r\n    width: 50%;\r\n    height: 100%;\r\n\r\n    /* background-color: blue; */\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.proj-right{\r\n    width: 50%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.proj-right-content{\r\n    padding: 20px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: center; */\r\n    flex-direction: column;\r\n\r\n    max-width: 550px;\r\n}\r\n\r\n.proj-right-content h2{\r\n    font-family: Inter var,sans-serif;\r\n    font-size: 4.1em;\r\n    font-weight: 800;\r\n    line-height: 1.1;\r\n    color: #747fe0;\r\n    margin:0px 0px 5px 0px;\r\n}\r\n\r\n#proj-description{\r\n    font-size: 18px;\r\n    line-height: 1.35;\r\n    font-weight: 100;\r\n    font-family: Open Sans;\r\n    color: #525f7f;\r\n\r\n    background-color: #f6f9fc;\r\n    padding: 25px;\r\n    margin: 5px 0px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.1);\r\n}\r\n\r\n.proj-left img{\r\n    width: 85%;\r\n    /* height: 85%; */\r\n\r\n    transform: rotateZ(-15deg);\r\n\r\n    min-width: 250px;\r\n    min-height: 250px;\r\n}\r\n\r\n.tech-stack-wrap{\r\n    list-style-type: none;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    padding: 0px;\r\n    margin: 5px 0px;\r\n}\r\n\r\n.tech-stack-wrap li{\r\n    font-size: 16px;\r\n    line-height: 1.35;\r\n    font-weight: 100;\r\n    /* font-family: Open Sans; */\r\n    color: #636979;\r\n\r\n    /* border-radius: 10px; */\r\n    margin: 0 10px 0px 0px;\r\n    /* border: 1px solid black; */\r\n}\r\n\r\n.tech-stack-wrap li p{\r\n    font-family: 'JetBrains Mono', monospace;\r\n\r\n    padding: 0px 5px;\r\n    margin: 0px;\r\n}\r\n\r\n.links-wrap{\r\n    margin: 5px 0px 0px 0px;\r\n\r\n    list-style-type: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0px;\r\n}\r\n\r\n.links-wrap li{\r\n    margin: 0 20px 0px 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.links-wrap li img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n@media only screen and (max-width: 900px){\r\n    .dynamic-proj-info-wrap{\r\n        flex-direction: column;\r\n    }\r\n\r\n    .proj-left, .proj-right{\r\n        height: 50%;\r\n\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .proj-right{\r\n        height: 60%;\r\n        width: 100%;\r\n\r\n        justify-content: normal;\r\n    }\r\n\r\n    .proj-left{\r\n        justify-content: center;\r\n\r\n        height: 40%;\r\n        width: 100%;\r\n    }\r\n\r\n    .proj-left img{\r\n        width: 40%;\r\n        /* height: 100%; */\r\n        transform: rotateZ(0deg);\r\n    }\r\n\r\n    .proj-right-content{\r\n        padding: 20px;\r\n    }\r\n\r\n    .proj-right-content h2{\r\n        font-size: 3.5em;\r\n    }\r\n\r\n    #proj-description{\r\n        font-size: 16px;\r\n    }\r\n\r\n    .tech-stack-wrap{\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 350px){\r\n    .links-wrap li img{\r\n        width:25px;\r\n        height: 25px;\r\n    }\r\n\r\n    .tech-stack-wrap li{\r\n        font-size: 14px;\r\n    }\r\n\r\n    .proj-right-content h2{\r\n        font-size: 3em;\r\n\r\n    }\r\n\r\n    #proj-description{\r\n        font-size: 14px;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7O0lBRVYsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXOztJQUVYLFdBQVc7SUFDWCxZQUFZOztJQUVaLG1CQUFtQjs7SUFFbkIsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZOztJQUVaLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNCQUFzQjs7SUFFdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYzs7SUFFZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjs7SUFFakIsMEJBQTBCOztJQUUxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCOztJQUVyQixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixjQUFjOztJQUVkLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0NBQXdDOztJQUV4QyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUdBO0lBQ0ksdUJBQXVCOztJQUV2QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVzs7UUFFWCxtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7O1FBRVgsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksdUJBQXVCOztRQUV2QixXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtRQUNsQix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYzs7SUFFbEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nsb3NlLXByb2plY3Qtd3JhcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4jY2xvc2UtcHJvamVjdC13cmFwOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jY2xvc2UtcHJvamVjdC13cmFwIGltZ3tcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucHJvai13cmFwIHBpY3R1cmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wcm9qLW91dHRlci13cmFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qLXdyYXB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJvdHRvbToxMDAlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNlM2VjZjU7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIC41cyBlYXNlLW91dDtcclxuICAgIC8qIG9wYWNpdHk6IC41OyAqL1xyXG59XHJcblxyXG4uZHluYW1pYy1wcm9qLWluZm8td3JhcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvai1sZWZ0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvai1yaWdodHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2otcmlnaHQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxufVxyXG5cclxuLnByb2otcmlnaHQtY29udGVudCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNC4xZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiAjNzQ3ZmUwO1xyXG4gICAgbWFyZ2luOjBweCAwcHggNXB4IDBweDtcclxufVxyXG5cclxuI3Byb2otZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6ICM1MjVmN2Y7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDUwLDUwLDkzLC4xKTtcclxufVxyXG5cclxuLnByb2otbGVmdCBpbWd7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgLyogaGVpZ2h0OiA4NSU7ICovXHJcblxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNWRlZyk7XHJcblxyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4udGVjaC1zdGFjay13cmFwe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5cclxuLnRlY2gtc3RhY2std3JhcCBsaXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7ICovXHJcbiAgICBjb2xvcjogIzYzNjk3OTtcclxuXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMHB4IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xyXG59XHJcblxyXG4udGVjaC1zdGFjay13cmFwIGxpIHB7XHJcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xyXG5cclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuXHJcbi5saW5rcy13cmFwe1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XHJcblxyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5saW5rcy13cmFwIGxpe1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmxpbmtzLXdyYXAgbGkgaW1ne1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgLmR5bmFtaWMtcHJvai1pbmZvLXdyYXB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvai1sZWZ0LCAucHJvai1yaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvai1yaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2otbGVmdHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2otbGVmdCBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qLXJpZ2h0LWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvai1yaWdodC1jb250ZW50IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2otZGVzY3JpcHRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWNoLXN0YWNrLXdyYXB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAgIC5saW5rcy13cmFwIGxpIGltZ3tcclxuICAgICAgICB3aWR0aDoyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaC1zdGFjay13cmFwIGxpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvai1yaWdodC1jb250ZW50IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjcHJvai1kZXNjcmlwdGlvbntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/project-list/project-list.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/project-list/project-list.component.ts ***!
      \********************************************************/

    /*! exports provided: ProjectListComponent */

    /***/
    function srcAppProjectListProjectListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function () {
        return ProjectListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../projects.service */
      "./src/app/projects.service.ts");

      var ProjectListComponent = /*#__PURE__*/function () {
        function ProjectListComponent(projectsService) {
          _classCallCheck(this, ProjectListComponent);

          this.projectsService = projectsService;
        }

        _createClass(ProjectListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeCurrentProj",
          value: function closeCurrentProj() {
            this.projectsService.closeCurrentProj();
          }
        }, {
          key: "getProjs",
          value: function getProjs() {
            return this.projectsService.getProjs();
          }
        }]);

        return ProjectListComponent;
      }();

      ProjectListComponent.ctorParameters = function () {
        return [{
          type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
        }];
      };

      ProjectListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./project-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./project-list.component.css */
        "./src/app/project-list/project-list.component.css"))["default"]]
      })], ProjectListComponent);
      /***/
    },

    /***/
    "./src/app/projects-page/projects-page.component.css":
    /*!***********************************************************!*\
      !*** ./src/app/projects-page/projects-page.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppProjectsPageProjectsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host{\r\n    width: 100%;\r\n    height:100%;\r\n\r\n    z-index: 0;\r\n\r\n    /* overflow: hidden; */\r\n}\r\n\r\n#projects-inner ul{\r\n    list-style: none;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n\r\n    padding: 0px;\r\n}\r\n\r\n#projects-inner li{\r\n    margin: 30px;\r\n}\r\n\r\n#projects-inner img{\r\n    width:150px;\r\n    height:150px;\r\n}\r\n\r\n#projects-inner img:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n#projects-content .project-main{\r\n    background: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n\r\n    box-shadow: 0 2px 8px 0 rgba(50,50,93,.15);\r\n\r\n    min-width: 225px;\r\n    max-width: 225px;\r\n\r\n    box-sizing:border-box;\r\n}\r\n\r\n#projects-content li h3{\r\n    color: #747fe0;\r\n    font-family: Inter var,sans-serif !important;\r\n    font-weight: 800;\r\n\r\n    margin: 0px;\r\n}\r\n\r\n#mini-tech-wrap{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n\r\n    /* margin: 2.5px 2.5px; */\r\n}\r\n\r\n#mini-tech-wrap li{\r\n    margin: 5px;\r\n}\r\n\r\n#mini-tech-wrap li p{\r\n    font-family: JetBrains Mono,monospace;\r\n    color: #636979;\r\n    font-weight: 100;\r\n    font-size: 12px;\r\n    margin: 0px;\r\n}\r\n\r\n#proj1{\r\n    -webkit-animation: twist1 4s linear infinite;\r\n            animation: twist1 4s linear infinite;\r\n}\r\n\r\n#proj2{\r\n    -webkit-animation: twist1 12s linear infinite;\r\n            animation: twist1 12s linear infinite;\r\n}\r\n\r\n#proj3{\r\n    -webkit-animation: twist1 7s linear infinite;\r\n            animation: twist1 7s linear infinite;\r\n}\r\n\r\n#proj4{\r\n    -webkit-animation: twist1 9s linear infinite;\r\n            animation: twist1 9s linear infinite;\r\n}\r\n\r\n#proj5{\r\n    -webkit-animation: twist1 6s linear infinite;\r\n            animation: twist1 6s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes twist1{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@keyframes twist1{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes twist3{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(-180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(-360deg);\r\n    }\r\n}\r\n\r\n@keyframes twist3{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(-180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(-360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes twist5{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@keyframes twist5{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes twist7{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@keyframes twist7{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes twist9{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n@keyframes twist9{\r\n    0%{\r\n        transform: rotateZ(0deg)\r\n    }\r\n    50%{\r\n        transform: rotateZ(180deg);\r\n    }\r\n    100%{\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n#bg-blob-wrap{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    z-index: -1;\r\n}\r\n\r\n.bg-blob{\r\n    position: absolute;\r\n}\r\n\r\n#circle1-wrap{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    left: 58%;\r\n    top: 78%;\r\n}\r\n\r\n#blob1-wrap{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    left: -50%;\r\n    top: 25%;\r\n    transform: rotate(-15deg) scale(1.5)\r\n}\r\n\r\n#blob2-wrap{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    right: -60%;\r\n    top: 70%;\r\n\r\n    /* opacity: 0; */\r\n}\r\n\r\n#blob3-wrap{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    right: -55%;\r\n    top: -30%;\r\n    transform: rotate(235deg) scaleX(1.75);\r\n}\r\n\r\n#bg-blob-wrap #circle1{\r\n    position: relative;\r\n\r\n    width: 100%;\r\n    height:100%;\r\n    \r\n    transform: scale(.75);\r\n}\r\n\r\n#bg-blob-wrap #blob1{\r\n    position: relative;\r\n\r\n    width: 100%;\r\n    height:100%;\r\n    \r\n    transform: scale(1.75);\r\n    /* left: 50%;\r\n    top: 50%; */\r\n}\r\n\r\n#bg-blob-wrap #blob2{\r\n    position: relative;\r\n\r\n    width: 100%;\r\n    height:100%;\r\n    \r\n    transform: scale(1.75);\r\n    /* right: 50%;\r\n    top: 50%; */\r\n}\r\n\r\n#bg-blob-wrap #blob3{\r\n    position: relative;\r\n\r\n    width: 100%;\r\n    height:100%;\r\n    \r\n    transform: scale(1.75);\r\n    /* right: 50%;\r\n    top: 75%; */\r\n}\r\n\r\n@media only screen and (max-width: 400px){\r\n    #bg-blob-wrap #blob1, #bg-blob-wrap #blob2, #bg-blob-wrap #blob3{\r\n        position: relative;\r\n    \r\n        width: 100%;\r\n        height:100%;\r\n        \r\n        transform: scale(2.75);\r\n        /* right: 50%;\r\n        top: 75%; */\r\n    }\r\n\r\n    #blob1-wrap{\r\n        left: -75%;\r\n        top: 10%;\r\n\r\n        transform: rotate(0deg) scaleX(1);\r\n    }\r\n\r\n    #blob2-wrap{\r\n        right: -115%;\r\n        top: 0%;\r\n        transform: rotate(-85deg);\r\n    }\r\n\r\n    #blob3-wrap{\r\n        right: -105%;\r\n        top: -40%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 780px){\r\n    #blob1-wrap{\r\n        left: -85%;\r\n        top: 25%;\r\n        transform: rotate(-15deg) scale(1.75);\r\n    }\r\n\r\n    #blob2-wrap{\r\n        right: -85%;\r\n        top: 60%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7SUFFWCxVQUFVOztJQUVWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLDBDQUEwQzs7SUFFMUMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRDQUE0QztJQUM1QyxnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFHQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0FBQ3hDOztBQUdBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQVZBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOztBQVZBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQVZBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQVZBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQVZBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNOztJQUVOLFdBQVc7SUFDWCxZQUFZOztJQUVaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZOztJQUVaLFVBQVU7SUFDVixRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixXQUFXO0lBQ1gsUUFBUTs7SUFFUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7O0lBRVosV0FBVztJQUNYLFNBQVM7SUFDVCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxXQUFXOztJQUVYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCO2VBQ1c7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCO2VBQ1c7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCO2VBQ1c7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCOztRQUVsQixXQUFXO1FBQ1gsV0FBVzs7UUFFWCxzQkFBc0I7UUFDdEI7bUJBQ1c7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixRQUFROztRQUVSLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLFlBQVk7UUFDWixPQUFPO1FBQ1AseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFNBQVM7SUFDYjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsUUFBUTtRQUNSLHFDQUFxQztJQUN6Qzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxRQUFRO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzLXBhZ2UvcHJvamVjdHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgIHotaW5kZXg6IDA7XHJcblxyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuI3Byb2plY3RzLWlubmVyIHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1pbm5lciBsaXtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuI3Byb2plY3RzLWlubmVyIGltZ3tcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG59XHJcblxyXG4jcHJvamVjdHMtaW5uZXIgaW1nOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcHJvamVjdHMtY29udGVudCAucHJvamVjdC1tYWlue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSg1MCw1MCw5MywuMTUpO1xyXG5cclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xyXG5cclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxufVxyXG5cclxuI3Byb2plY3RzLWNvbnRlbnQgbGkgaDN7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciB2YXIsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuI21pbmktdGVjaC13cmFwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC8qIG1hcmdpbjogMi41cHggMi41cHg7ICovXHJcbn1cclxuXHJcbiNtaW5pLXRlY2gtd3JhcCBsaXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jbWluaS10ZWNoLXdyYXAgbGkgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBKZXRCcmFpbnMgTW9ubyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIzYzNjk3OTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuXHJcbiNwcm9qMXtcclxuICAgIGFuaW1hdGlvbjogdHdpc3QxIDRzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuI3Byb2oye1xyXG4gICAgYW5pbWF0aW9uOiB0d2lzdDEgMTJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuI3Byb2oze1xyXG4gICAgYW5pbWF0aW9uOiB0d2lzdDEgN3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jcHJvajR7XHJcbiAgICBhbmltYXRpb246IHR3aXN0MSA5cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNwcm9qNXtcclxuICAgIGFuaW1hdGlvbjogdHdpc3QxIDZzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgdHdpc3Qxe1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpXHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR3aXN0M3tcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKVxyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0zNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR3aXN0NXtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKVxyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0d2lzdDd7XHJcbiAgICAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZylcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHdpc3Q5e1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpXHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jYmctYmxvYi13cmFwe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5iZy1ibG9ie1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jY2lyY2xlMS13cmFwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgbGVmdDogNTglO1xyXG4gICAgdG9wOiA3OCU7XHJcbn1cclxuXHJcbiNibG9iMS13cmFwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIGxlZnQ6IC01MCU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZykgc2NhbGUoMS41KVxyXG59XHJcblxyXG4jYmxvYjItd3JhcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICByaWdodDogLTYwJTtcclxuICAgIHRvcDogNzAlO1xyXG5cclxuICAgIC8qIG9wYWNpdHk6IDA7ICovXHJcbn1cclxuXHJcbiNibG9iMy13cmFwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAtNTUlO1xyXG4gICAgdG9wOiAtMzAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjM1ZGVnKSBzY2FsZVgoMS43NSk7XHJcbn1cclxuXHJcbiNiZy1ibG9iLXdyYXAgI2NpcmNsZTF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xyXG59XHJcblxyXG4jYmctYmxvYi13cmFwICNibG9iMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xyXG4gICAgLyogbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7ICovXHJcbn1cclxuXHJcbiNiZy1ibG9iLXdyYXAgI2Jsb2Iye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XHJcbiAgICAvKiByaWdodDogNTAlO1xyXG4gICAgdG9wOiA1MCU7ICovXHJcbn1cclxuXHJcbiNiZy1ibG9iLXdyYXAgI2Jsb2Ize1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XHJcbiAgICAvKiByaWdodDogNTAlO1xyXG4gICAgdG9wOiA3NSU7ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgI2JnLWJsb2Itd3JhcCAjYmxvYjEsICNiZy1ibG9iLXdyYXAgI2Jsb2IyLCAjYmctYmxvYi13cmFwICNibG9iM3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNzUpO1xyXG4gICAgICAgIC8qIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA3NSU7ICovXHJcbiAgICB9XHJcblxyXG4gICAgI2Jsb2IxLXdyYXB7XHJcbiAgICAgICAgbGVmdDogLTc1JTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGVYKDEpO1xyXG4gICAgfVxyXG5cclxuICAgICNibG9iMi13cmFwe1xyXG4gICAgICAgIHJpZ2h0OiAtMTE1JTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgI2Jsb2IzLXdyYXB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMDUlO1xyXG4gICAgICAgIHRvcDogLTQwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCl7XHJcbiAgICAjYmxvYjEtd3JhcHtcclxuICAgICAgICBsZWZ0OiAtODUlO1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZykgc2NhbGUoMS43NSk7XHJcbiAgICB9XHJcblxyXG4gICAgI2Jsb2IyLXdyYXB7XHJcbiAgICAgICAgcmlnaHQ6IC04NSU7XHJcbiAgICAgICAgdG9wOiA2MCU7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/projects-page/projects-page.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/projects-page/projects-page.component.ts ***!
      \**********************************************************/

    /*! exports provided: ProjectsPageComponent */

    /***/
    function srcAppProjectsPageProjectsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function () {
        return ProjectsPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../projects.service */
      "./src/app/projects.service.ts");

      var ProjectsPageComponent = /*#__PURE__*/function () {
        function ProjectsPageComponent(projectsService) {
          _classCallCheck(this, ProjectsPageComponent);

          this.projectsService = projectsService;
        }

        _createClass(ProjectsPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "displayProj",
          value: function displayProj(projName) {
            this.projectsService.displayProj(projName);
          }
        }, {
          key: "getProjs",
          value: function getProjs() {
            return this.projectsService.getProjs();
          }
        }]);

        return ProjectsPageComponent;
      }();

      ProjectsPageComponent.ctorParameters = function () {
        return [{
          type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
        }];
      };

      ProjectsPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./projects-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/projects-page/projects-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./projects-page.component.css */
        "./src/app/projects-page/projects-page.component.css"))["default"]]
      })], ProjectsPageComponent);
      /***/
    },

    /***/
    "./src/app/projects.service.ts":
    /*!*************************************!*\
      !*** ./src/app/projects.service.ts ***!
      \*************************************/

    /*! exports provided: ProjectsService */

    /***/
    function srcAppProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService() {
          _classCallCheck(this, ProjectsService);

          this.projTemplateMappings = {
            "1": "proj1-wrap",
            "2": "proj2-wrap",
            "3": "proj3-wrap",
            "4": "proj4-wrap",
            "5": "proj5-wrap"
          };
          this.htmlRef = document.getElementsByTagName("html")[0];
          this.projects = [{
            "index": "1",
            "title": "Mymyc",
            "description": "Mymyc is a reusable test data management solution, providing a pleasing UX for those who need to generate synthetic test data for varying business scenarios.",
            "img": "assets/proj1.gif",
            "stack": ["Python", "Flask", "Angular"],
            "links": [{
              "name": "github",
              "link": "https://github.com/Musilix/Mymyc"
            }, {
              "name": "external",
              "link": "www.youtube.com"
            }]
          }, {
            "index": "2",
            "title": "BBTransit",
            "description": "BBTransit is a web based transport alert app that aims to simplify the daily life of a commuter by offering access to simple yet meaningful info such as bus arrival times, destinations, locations, and their adherence to the schedule; all in real time.",
            "img": "assets/proj2.gif",
            "stack": ["PHP", "JavaScript", "HTML"],
            "links": [{
              "name": "github",
              "link": "https://github.com/Musilix/BBTransit"
            }, {
              "name": "external",
              "link": "www.youtube.com"
            }]
          }, {
            "index": "3",
            "title": "Queuetube",
            "description": "A Google Chrome extension which serves to improve users' experiences on YouTube by providing a means to queue up various videos they are interested, all at once! Circa: before Youtube added this functionality itself.",
            "img": "assets/proj3.gif",
            "stack": ["Angular", "Express", "Node"],
            "links": [{
              "name": "github",
              "link": "https://github.com/Musilix/QueueTube"
            }, {
              "name": "external",
              "link": "www.youtube.com"
            }]
          }, {
            "index": "4",
            "title": "On the Cuff",
            "description": "A web app which aims to centralize crowd sourced info on food competitions, events with free food, and simply everything food. ",
            "img": "assets/proj4.gif",
            "stack": ["Angular", "Express", "Node"],
            "links": [{
              "name": "github",
              "link": "https://github.com/Musilix/On-The-Cuff"
            }, {
              "name": "external",
              "link": "www.youtube.com"
            }]
          }, {
            "index": "5",
            "title": "Swappup",
            "description": "An app which provides a centralized place to barter with others around the world, while offering an easy means to sending and recieving items.",
            "img": "assets/proj5.gif",
            "stack": ["React", "Express", "Mongo", "Node"],
            "links": [{
              "name": "github",
              "link": "https://github.com/Musilix/On-The-Cuff"
            }, {
              "name": "external",
              "link": "www.youtube.com"
            }]
          }];
        }

        _createClass(ProjectsService, [{
          key: "displayProj",
          value: function displayProj(projName) {
            // console.log(this.htmlRef);
            // trying out a hacky way to allow scrolling on a page,
            // but also hide overflow on the click of a project... and it magically worked... cool
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
            this.htmlRef.style.overflow = "hidden";
            var projTemplate = document.getElementById(this.projTemplateMappings[projName]);

            if (projTemplate) {
              projTemplate.style.bottom = "0%";
              this.currProj = projTemplate;
            }
          }
        }, {
          key: "closeCurrentProj",
          value: function closeCurrentProj() {
            var _this7 = this;

            if (this.currProj) {
              this.currProj.style.bottom = "100%";
              setTimeout(function () {
                _this7.htmlRef.style.overflow = "auto";
              }, 500); // this.currProj = null;
            }
          }
        }, {
          key: "getProjs",
          value: function getProjs() {
            return this.projects;
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ctorParameters = function () {
        return [];
      };

      ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProjectsService);
      /***/
    },

    /***/
    "./src/app/splash-page/splash-page.component.css":
    /*!*******************************************************!*\
      !*** ./src/app/splash-page/splash-page.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSplashPageSplashPageComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#splash-content-wrap{\r\n    height:100%;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    overflow: hidden;\r\n\r\n    background:#e3ecf5;\r\n}\r\n\r\n#nav-wrap{\r\n    /* background-color: rgba(0,0,0,0); */\r\n    width:100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    position:absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.nav#left, .nav#right{\r\n    /* width: 50%; */\r\n    height: inherit;\r\n}\r\n\r\n.nav#right{\r\n    width: 50%;\r\n}\r\n\r\n.nav#left{\r\n    /* background: #e3ecf5; */\r\n    width: 50%;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.nav#left picture{\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#bg-accent{\r\n    width: 400%;\r\n    height: 400%;\r\n    /* height: 1000px; */\r\n    position: absolute;\r\n    left: -175%;\r\n    bottom: -200%;\r\n    z-index: -1;\r\n    transform: rotateX(-170deg);\r\n}\r\n\r\n#follower{\r\n    width:100%;\r\n    /* height: 90%; */\r\n}\r\n\r\n.nav#right{\r\n    background-color: rgb(0,0,0,0);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    /* z-index: 1; */\r\n}\r\n\r\n/* #nav-wrap::after{\r\n    content: '';\r\n    position: absolute;\r\n    background-image: url(../../assets/blobs/subblobs/blob3.svg);\r\n\r\n    left: -70%;\r\n    top: -75%;\r\n    z-index: -1;\r\n    transform: rotateX(-170deg);\r\n} */\r\n\r\n.nav#right ul{\r\n    display: flex;\r\n    flex-direction: row;\r\n    list-style: none;\r\n\r\n    padding: 0px;\r\n}\r\n\r\n.nav#right h2{\r\n    font-family: Inter var,sans-serif;\r\n    font-size: 5.2em;\r\n    font-weight: 800 !important;\r\n    line-height: 1.1;\r\n    color: #747fe0;\r\n\r\n    max-width: 530px;\r\n    margin: 0px;\r\n}\r\n\r\n.nav#right p{\r\n    font-size: 18px;\r\n    line-height: 1.35;\r\n    font-weight: 100;\r\n    font-family: \"Open Sans\";\r\n    color: #525f7f;\r\n\r\n    max-width: 400px;\r\n}\r\n\r\n#splash-intro-text{\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n\r\n.nav#right ul li{\r\n    color: #525f7f;\r\n\r\n    font-family: Inter var,sans-serif;\r\n    font-size: 1em;\r\n\r\n    padding: 7.5px;\r\n    margin: 10px;\r\n\r\n    font-weight: bold;\r\n\r\n    position: relative;\r\n\r\n    text-align: center;\r\n\r\n    background: #f6f9fc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 4px 8px 0 rgba(50,50,93,.1);\r\n\r\n    transition: background .25s linear, color .25s linear;\r\n}\r\n\r\n.nav#right ul li:hover{\r\n    background: #f3e9e4;\r\n    /* color: #525f7f !important; */\r\n}\r\n\r\n.nav#right ul li a{\r\n    text-decoration: none;\r\n    color: #525f7f;\r\n}\r\n\r\n#left-wrap{\r\n    position: absolute;\r\n}\r\n\r\n.nav#right ul li a::after {    \r\n    background: none repeat scroll 0 0 transparent;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left:50%;\r\n\r\n    content: \"\";\r\n    display: block;\r\n    height: 5px;\r\n\r\n    background: black;\r\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n    width: 0;\r\n    /* margin: 2px 0px; */\r\n}\r\n\r\n@media only screen and (max-width: 950px){\r\n\r\n    #bg-accent{\r\n        left: -125%;\r\n        bottom: -180%;\r\n    }\r\n\r\n    #nav-wrap{\r\n        flex-direction: column;\r\n        flex-flow: column-reverse;\r\n    }\r\n\r\n    .nav#left{\r\n        width: 100%;\r\n        height: 0%;\r\n    }\r\n    \r\n    .nav#right{\r\n        width: 100%;\r\n        height: 80%;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    #splash-intro-text{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 0px 20px;\r\n        margin: 0px;\r\n    }\r\n\r\n    #right-nav-wrap{\r\n        width: 100%;\r\n    }\r\n\r\n    #right-nav-wrap nav{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n\r\n\r\n    .nav#right h2{\r\n        font-size: 4.5em;\r\n        text-align: center;\r\n    }\r\n    \r\n    .nav#right p{\r\n        font-size: 15px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 450px){\r\n    .nav#right ul{\r\n        width: 100%;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n    }\r\n\r\n    .nav#right ul li{\r\n        width: 25%;\r\n    }\r\n\r\n    .nav#right{\r\n        height: 90%;\r\n    }\r\n}\r\n\r\n/* //disabling for now */\r\n\r\n/* .nav#right ul li a:hover::after { \r\n    width: 100%; \r\n    left: 0%; \r\n} */\r\n\r\n/* color: #747fe0; */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoLXBhZ2Uvc3BsYXNoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsTUFBTTtJQUNOLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixZQUFZOztJQUVaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7O0lBRVYsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCOztJQUU5QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjs7SUFFaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjOztJQUVkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYzs7SUFFZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGlDQUFpQztJQUNqQyxjQUFjOztJQUVkLGNBQWM7SUFDZCxZQUFZOztJQUVaLGlCQUFpQjs7SUFFakIsa0JBQWtCOztJQUVsQixrQkFBa0I7O0lBRWxCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUNBQXlDOztJQUV6QyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFROztJQUVSLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELFFBQVE7SUFDUixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7OztJQUlBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQSx3QkFBd0I7O0FBQ3hCOzs7R0FHRzs7QUFDSCxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9zcGxhc2gtcGFnZS9zcGxhc2gtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NwbGFzaC1jb250ZW50LXdyYXB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiNlM2VjZjU7XHJcbn1cclxuXHJcbiNuYXYtd3JhcHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7ICovXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdiNsZWZ0LCAubmF2I3JpZ2h0e1xyXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLm5hdiNyaWdodHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5uYXYjbGVmdHtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNlM2VjZjU7ICovXHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYjbGVmdCBwaWN0dXJle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2JnLWFjY2VudHtcclxuICAgIHdpZHRoOiA0MDAlO1xyXG4gICAgaGVpZ2h0OiA0MDAlO1xyXG4gICAgLyogaGVpZ2h0OiAxMDAwcHg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTc1JTtcclxuICAgIGJvdHRvbTogLTIwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMTcwZGVnKTtcclxufVxyXG5cclxuI2ZvbGxvd2Vye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8qIGhlaWdodDogOTAlOyAqL1xyXG59XHJcblxyXG4ubmF2I3JpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDApO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC8qIHotaW5kZXg6IDE7ICovXHJcbn1cclxuXHJcbi8qICNuYXYtd3JhcDo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmxvYnMvc3ViYmxvYnMvYmxvYjMuc3ZnKTtcclxuXHJcbiAgICBsZWZ0OiAtNzAlO1xyXG4gICAgdG9wOiAtNzUlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE3MGRlZyk7XHJcbn0gKi9cclxuXHJcbi5uYXYjcmlnaHQgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubmF2I3JpZ2h0IGgye1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA1LjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBjb2xvcjogIzc0N2ZlMDtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDUzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYjcmlnaHQgcHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgY29sb3I6ICM1MjVmN2Y7XHJcblxyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuI3NwbGFzaC1pbnRyby10ZXh0e1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4ubmF2I3JpZ2h0IHVsIGxpe1xyXG4gICAgY29sb3I6ICM1MjVmN2Y7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IEludGVyIHZhcixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcblxyXG4gICAgcGFkZGluZzogNy41cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmOWZjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg1MCw1MCw5MywuMSk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzIGxpbmVhciwgY29sb3IgLjI1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5uYXYjcmlnaHQgdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNlOWU0O1xyXG4gICAgLyogY29sb3I6ICM1MjVmN2YgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLm5hdiNyaWdodCB1bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1MjVmN2Y7XHJcbn1cclxuXHJcbiNsZWZ0LXdyYXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5uYXYjcmlnaHQgdWwgbGkgYTo6YWZ0ZXIgeyAgICBcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OjUwJTtcclxuXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIC8qIG1hcmdpbjogMnB4IDBweDsgKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XHJcblxyXG4gICAgI2JnLWFjY2VudHtcclxuICAgICAgICBsZWZ0OiAtMTI1JTtcclxuICAgICAgICBib3R0b206IC0xODAlO1xyXG4gICAgfVxyXG5cclxuICAgICNuYXYtd3JhcHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdiNsZWZ0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYjcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjc3BsYXNoLWludHJvLXRleHR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3JpZ2h0LW5hdi13cmFwe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNyaWdodC1uYXYtd3JhcCBuYXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLm5hdiNyaWdodCBoMntcclxuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdiNyaWdodCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgLm5hdiNyaWdodCB1bHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdiNyaWdodCB1bCBsaXtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYjcmlnaHR7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC8vZGlzYWJsaW5nIGZvciBub3cgKi9cclxuLyogLm5hdiNyaWdodCB1bCBsaSBhOmhvdmVyOjphZnRlciB7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgbGVmdDogMCU7IFxyXG59ICovXHJcbi8qIGNvbG9yOiAjNzQ3ZmUwOyAqLyJdfQ== */";
      /***/
    },

    /***/
    "./src/app/splash-page/splash-page.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/splash-page/splash-page.component.ts ***!
      \******************************************************/

    /*! exports provided: SplashPageComponent */

    /***/
    function srcAppSplashPageSplashPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageComponent", function () {
        return SplashPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SplashPageComponent = /*#__PURE__*/function () {
        function SplashPageComponent() {
          _classCallCheck(this, SplashPageComponent);
        }

        _createClass(SplashPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SplashPageComponent;
      }();

      SplashPageComponent.ctorParameters = function () {
        return [];
      };

      SplashPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./splash-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/splash-page/splash-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./splash-page.component.css */
        "./src/app/splash-page/splash-page.component.css"))["default"]]
      })], SplashPageComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\ChimoBoi\Desktop\portfolio-website\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map