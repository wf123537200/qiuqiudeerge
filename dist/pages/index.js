'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '球球的儿歌'
    }, _this.components = {}, _this.data = {
      motto: '',
      userInfo: {}
    }, _this.computed = {}, _this.event = {}, _this.methods = {
      playsongs: function playsongs(event) {
        _wepy2.default.navigateTo({
          url: '/pages/playsongs'
        });
      },
      playstory: function playstory(event) {
        _wepy2.default.navigateTo({
          url: '/pages/playstory'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      this.$parent.getUserInfo(function (userInfo) {
        _this2.setData({
          userInfo: userInfo,
          motto: '您好！' + userInfo.nickName
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibW90dG8iLCJ1c2VySW5mbyIsImNvbXB1dGVkIiwiZXZlbnQiLCJtZXRob2RzIiwicGxheXNvbmdzIiwibmF2aWdhdGVUbyIsInVybCIsInBsYXlzdG9yeSIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInNldERhdGEiLCJuaWNrTmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBS1BDLFEsR0FBVyxFLFFBRVhDLEssR0FBUSxFLFFBRVJDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFRixLQURGLEVBQ1M7QUFDZix1QkFBS0csVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGVBTlEscUJBTUVMLEtBTkYsRUFNUztBQUNmLHVCQUFLRyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBVk8sSzs7Ozs7NkJBYUQ7QUFBQTs7QUFDUCxXQUFLRSxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBQ1QsUUFBRCxFQUFjO0FBQ3JDLGVBQUtVLE9BQUwsQ0FBYTtBQUNYVixvQkFBVUEsUUFEQztBQUVYRCxpQkFBTyxRQUFRQyxTQUFTVztBQUZiLFNBQWI7QUFJRCxPQUxEO0FBTUQ7Ozs7RUFwQ2dDLGVBQUtDLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eQg+eQg+eahOWEv+atjCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbW90dG86ICcnLFxuICAgICAgdXNlckluZm86IHt9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgZXZlbnQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHBsYXlzb25ncyhldmVudCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9wbGF5c29uZ3MnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcGxheXN0b3J5KGV2ZW50KSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3BsYXlzdG9yeSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKHVzZXJJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHVzZXJJbmZvLFxuICAgICAgICAgIG1vdHRvOiAn5oKo5aW977yBJyArIHVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19