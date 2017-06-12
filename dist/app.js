'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/playstory', 'pages/playsongs'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#fff',
        'navigationBarTitleText': '球球的儿歌',
        'navigationBarTextStyle': 'black'
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var logs = _wepy2.default.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      _wepy2.default.setStorageSync('logs', logs);
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        typeof cb === 'function' && cb(this.globalData.userInfo);
      } else {
        _wepy2.default.login({
          success: function success() {
            _wepy2.default.getUserInfo({
              success: function success(res) {
                that.globalData.userInfo = res.userInfo;
                typeof cb === 'function' && cb(that.globalData.userInfo);
              }
            });
          }
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImxvZ3MiLCJnZXRTdG9yYWdlU3luYyIsInVuc2hpZnQiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJjYiIsInRoYXQiLCJsb2dpbiIsInN1Y2Nlc3MiLCJnZXRVc2VySW5mbyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxpQkFGSyxFQUdMLGlCQUhLLENBREE7QUFNUEMsY0FBUTtBQUNOLCtCQUF1QixPQURqQjtBQUVOLHdDQUFnQyxNQUYxQjtBQUdOLGtDQUEwQixPQUhwQjtBQUlOLGtDQUEwQjtBQUpwQjtBQU5ELEssUUFjVEMsVSxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsSzs7Ozs7K0JBSUY7QUFDVCxVQUFJQyxPQUFPLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsS0FBK0IsRUFBMUM7QUFDQUQsV0FBS0UsT0FBTCxDQUFhQyxLQUFLQyxHQUFMLEVBQWI7QUFDQSxxQkFBS0MsY0FBTCxDQUFvQixNQUFwQixFQUE0QkwsSUFBNUI7QUFDRDs7O2dDQUVXTSxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFHLEtBQUtULFVBQUwsQ0FBZ0JDLFFBQW5CLEVBQTZCO0FBQzNCLGVBQU9PLEVBQVAsS0FBYyxVQUFkLElBQTRCQSxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JDLFFBQW5CLENBQTVCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsdUJBQUtTLEtBQUwsQ0FBVztBQUNUQyxtQkFBUyxtQkFBWTtBQUNuQiwyQkFBS0MsV0FBTCxDQUFpQjtBQUNmRCxxQkFEZSxtQkFDUEUsR0FETyxFQUNGO0FBQ1hKLHFCQUFLVCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQlksSUFBSVosUUFBL0I7QUFDQSx1QkFBT08sRUFBUCxLQUFjLFVBQWQsSUFBNEJBLEdBQUdDLEtBQUtULFVBQUwsQ0FBZ0JDLFFBQW5CLENBQTVCO0FBQ0Q7QUFKYyxhQUFqQjtBQU1EO0FBUlEsU0FBWDtBQVVEO0FBQ0Y7Ozs7RUF6QzBCLGVBQUthLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3BsYXlzdG9yeScsXG4gICAgICAncGFnZXMvcGxheXNvbmdzJyxcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmZicsXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfnkIPnkIPnmoTlhL/mrYwnLFxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGxldCBsb2dzID0gd2VweS5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdO1xuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKTtcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncyk7XG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nICYmIGNiKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgJiYgY2IodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=