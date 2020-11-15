"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Tab1Page = void 0;
var core_1 = require("@angular/core");
var Tab1Page = /** @class */ (function () {
    function Tab1Page(toastController, alertController) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.title = "Groceries";
        this.items = [
            {
                name: "Spam",
                qty: 2,
                unit: "Cases",
                imgUrl: "assets/img/spam.png"
            },
            {
                name: "Sardines",
                qty: 12,
                unit: "Cans",
                imgUrl: "assets/img/sardines.png"
            },
            {
                name: "Fish Sauce",
                qty: 2,
                unit: "Bottles",
                imgUrl: "assets/img/patis.png"
            },
            {
                name: "Salted Eggs",
                qty: 1,
                unit: "Dozen",
                imgUrl: "assets/img/itlog.png"
            },
            {
                name: "Pork Skin",
                qty: 3,
                unit: "Bags",
                imgUrl: "assets/img/chicharon.png"
            },
        ];
    }
    Tab1Page.prototype.editItem = function (item, index) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Editing Item: ' + item.name,
                            duration: 5000,
                            position: 'bottom',
                            animated: true,
                            color: 'warning'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present(); // displays toast 
                        this.editItemPopup(item, index);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.removeItem = function (item, index) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            header: 'Removing...',
                            message: 'Item removed: ' + item.name,
                            duration: 2000,
                            position: 'middle',
                            animated: true,
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present(); // displays toast 
                        this.items.splice(index, 1); // remove item from array
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.addItemPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add Grocery Item',
                            // subHeader: 'Subtitle',
                            message: 'Enter item, quantity, unit and imgUrl (if any, blank for default)',
                            inputs: [
                                {
                                    name: 'name',
                                    placeholder: 'Item'
                                },
                                {
                                    name: 'qty',
                                    placeholder: 'Quantity'
                                },
                                {
                                    name: 'unit',
                                    placeholder: 'Unit'
                                },
                                {
                                    name: 'imgUrl',
                                    placeholder: 'Image Url'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Cancel item entry');
                                    }
                                }, {
                                    text: 'Add',
                                    handler: function (item) {
                                        if (item.name != '')
                                            if (item.imgUrl == '')
                                                item.imgUrl = 'assets/img/grocery.png';
                                        _this.items.push(item);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent(); // Present Alert
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.editItemPopup = function (item, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Edit Grocery Item',
                            // subHeader: 'Subtitle',
                            message: 'Enter updated values',
                            inputs: [
                                {
                                    name: 'name',
                                    placeholder: 'Item',
                                    value: item.name
                                },
                                {
                                    name: 'qty',
                                    placeholder: 'Quantity',
                                    value: item.qty
                                },
                                {
                                    name: 'unit',
                                    placeholder: 'Unit',
                                    value: item.unit
                                },
                                {
                                    name: 'imgUrl',
                                    placeholder: 'Image Url',
                                    value: item.imgUrl
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Cancel item entry');
                                    }
                                }, {
                                    text: 'Save',
                                    handler: function (item) {
                                        if (item.name != '')
                                            if (item.imgUrl == '')
                                                item.imgUrl = 'assets/img/grocery.png';
                                        _this.items[index] = item;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent(); // Present Alert
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = __decorate([
        core_1.Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        })
    ], Tab1Page);
    return Tab1Page;
}());
exports.Tab1Page = Tab1Page;
