'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _audio = require('./../utils/audio.js');

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
      navigationBarTitleText: '歌曲列表'
    }, _this.components = {}, _this.data = {
      playBtnClass: 'btn iconfont icon-bofang',
      songs: (0, _audio.getAudioData)(),
      poster: (0, _audio.getPoster)()
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      setCurAudio: function setCurAudio(e) {
        var index = +e.currentTarget.dataset.index;
        if (index !== this.curAudioIndex) {
          this.audioCtx.pause();
          this.audioCtx.seek(0);
        }

        this.audioCtx = _wepy2.default.createAudioContext(index + '');
        this.curAudioIndex = index;
      },

      audioCtrl: function audioCtrl() {
        var curAudio = this.data.songs[+this.curAudioIndex];
        var status = curAudio.playStatus;
        if (status === 'play') {
          this.audioCtx.pause();
          curAudio.playStatus = 'stop';
          this.setData({
            playBtnClass: 'btn iconfont icon-bofang'
          });
        } else {
          this.audioCtx.play();
          curAudio.playStatus = 'play';
          this.setData({
            playBtnClass: 'btn iconfont icon-tingzhi'
          });
        }
      },
      audioReStart: function audioReStart() {
        this.audioCtx.seek(0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady(e) {
      this.audioCtx = _wepy2.default.createAudioContext('0');
      this.curAudioIndex = 0;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/playsongs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlzb25ncy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInBsYXlCdG5DbGFzcyIsInNvbmdzIiwicG9zdGVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwic2V0Q3VyQXVkaW8iLCJlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImN1ckF1ZGlvSW5kZXgiLCJhdWRpb0N0eCIsInBhdXNlIiwic2VlayIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsImF1ZGlvQ3RybCIsImN1ckF1ZGlvIiwic3RhdHVzIiwicGxheVN0YXR1cyIsInNldERhdGEiLCJwbGF5IiwiYXVkaW9SZVN0YXJ0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLG9CQUFjLDBCQURUO0FBRUxDLGFBQU8sMEJBRkY7QUFHTEMsY0FBUTtBQUhILEssUUFNUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTO0FBQ1BDLGlCQURPLHVCQUNLQyxDQURMLEVBQ1E7QUFDYixZQUFNQyxRQUFRLENBQUNELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixLQUF2QztBQUNBLFlBQUdBLFVBQVUsS0FBS0csYUFBbEIsRUFBaUM7QUFDL0IsZUFBS0MsUUFBTCxDQUFjQyxLQUFkO0FBQ0EsZUFBS0QsUUFBTCxDQUFjRSxJQUFkLENBQW1CLENBQW5CO0FBQ0Q7O0FBRUQsYUFBS0YsUUFBTCxHQUFnQixlQUFLRyxrQkFBTCxDQUF3QlAsUUFBUSxFQUFoQyxDQUFoQjtBQUNBLGFBQUtHLGFBQUwsR0FBcUJILEtBQXJCO0FBQ0QsT0FWTTs7QUFXUFEsaUJBQVcscUJBQVk7QUFDckIsWUFBTUMsV0FBVyxLQUFLbEIsSUFBTCxDQUFVRSxLQUFWLENBQWdCLENBQUMsS0FBS1UsYUFBdEIsQ0FBakI7QUFDQSxZQUFNTyxTQUFTRCxTQUFTRSxVQUF4QjtBQUNBLFlBQUdELFdBQVcsTUFBZCxFQUFzQjtBQUNwQixlQUFLTixRQUFMLENBQWNDLEtBQWQ7QUFDQUksbUJBQVNFLFVBQVQsR0FBc0IsTUFBdEI7QUFDQSxlQUFLQyxPQUFMLENBQWE7QUFDWHBCLDBCQUFjO0FBREgsV0FBYjtBQUdELFNBTkQsTUFNTztBQUNMLGVBQUtZLFFBQUwsQ0FBY1MsSUFBZDtBQUNBSixtQkFBU0UsVUFBVCxHQUFzQixNQUF0QjtBQUNBLGVBQUtDLE9BQUwsQ0FBYTtBQUNYcEIsMEJBQWM7QUFESCxXQUFiO0FBR0Q7QUFDRixPQTNCTTtBQTRCUHNCLG9CQUFjLHdCQUFZO0FBQ3hCLGFBQUtWLFFBQUwsQ0FBY0UsSUFBZCxDQUFtQixDQUFuQjtBQUNEO0FBOUJNLEs7Ozs7OzRCQWlDRFAsQyxFQUFHO0FBQ1QsV0FBS0ssUUFBTCxHQUFnQixlQUFLRyxrQkFBTCxDQUF3QixHQUF4QixDQUFoQjtBQUNBLFdBQUtKLGFBQUwsR0FBcUIsQ0FBckI7QUFDRDs7OztFQXJEZ0MsZUFBS1ksSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJwbGF5c29uZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHtnZXRBdWRpb0RhdGEsIGdldFBvc3Rlcn0gZnJvbSAnLi4vdXRpbHMvYXVkaW8nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmrYzmm7LliJfooagnXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAgcGxheUJ0bkNsYXNzOiAnYnRuIGljb25mb250IGljb24tYm9mYW5nJyxcbiAgICAgIHNvbmdzOiBnZXRBdWRpb0RhdGEoKSxcbiAgICAgIHBvc3RlcjogZ2V0UG9zdGVyKClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgIHNldEN1ckF1ZGlvKGUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSArZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGlmKGluZGV4ICE9PSB0aGlzLmN1ckF1ZGlvSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKCk7XG4gICAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KGluZGV4ICsgJycpO1xuICAgICAgICB0aGlzLmN1ckF1ZGlvSW5kZXggPSBpbmRleDtcbiAgICAgIH0sXG4gICAgICBhdWRpb0N0cmw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VyQXVkaW8gPSB0aGlzLmRhdGEuc29uZ3NbK3RoaXMuY3VyQXVkaW9JbmRleF07XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGN1ckF1ZGlvLnBsYXlTdGF0dXM7XG4gICAgICAgIGlmKHN0YXR1cyA9PT0gJ3BsYXknKSB7XG4gICAgICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgICAgICAgY3VyQXVkaW8ucGxheVN0YXR1cyA9ICdzdG9wJztcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgcGxheUJ0bkNsYXNzOiAnYnRuIGljb25mb250IGljb24tYm9mYW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpO1xuICAgICAgICAgIGN1ckF1ZGlvLnBsYXlTdGF0dXMgPSAncGxheSc7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHBsYXlCdG5DbGFzczogJ2J0biBpY29uZm9udCBpY29uLXRpbmd6aGknXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhdWRpb1JlU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25SZWFkeShlKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4ID0gd2VweS5jcmVhdGVBdWRpb0NvbnRleHQoJzAnKTtcbiAgICAgIHRoaXMuY3VyQXVkaW9JbmRleCA9IDA7XG4gICAgfVxuICB9XG4iXX0=