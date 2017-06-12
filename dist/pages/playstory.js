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
      songs: (0, _audio.getAudioData)()
    }, _this.computed = {}, _this.events = {}, _this.methods = {
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/playstory'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlzdG9yeS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInBsYXlCdG5DbGFzcyIsInNvbmdzIiwiY29tcHV0ZWQiLCJldmVudHMiLCJtZXRob2RzIiwic2V0Q3VyQXVkaW8iLCJlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImN1ckF1ZGlvSW5kZXgiLCJhdWRpb0N0eCIsInBhdXNlIiwic2VlayIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsImF1ZGlvQ3RybCIsImN1ckF1ZGlvIiwic3RhdHVzIiwicGxheVN0YXR1cyIsInNldERhdGEiLCJwbGF5IiwiYXVkaW9SZVN0YXJ0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLG9CQUFjLDBCQURUO0FBRUxDLGFBQU87QUFGRixLLFFBS1BDLFEsR0FBVyxFLFFBRVhDLE0sR0FBUyxFLFFBRVRDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsQ0FESixFQUNPO0FBQ2IsWUFBTUMsUUFBUSxDQUFDRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdkM7QUFDQSxZQUFHQSxVQUFVLEtBQUtHLGFBQWxCLEVBQWlDO0FBQy9CLGVBQUtDLFFBQUwsQ0FBY0MsS0FBZDtBQUNBLGVBQUtELFFBQUwsQ0FBY0UsSUFBZCxDQUFtQixDQUFuQjtBQUNEOztBQUVELGFBQUtGLFFBQUwsR0FBZ0IsZUFBS0csa0JBQUwsQ0FBd0JQLFFBQVEsRUFBaEMsQ0FBaEI7QUFDQSxhQUFLRyxhQUFMLEdBQXFCSCxLQUFyQjtBQUNELE9BVk87O0FBV1JRLGlCQUFXLHFCQUFZO0FBQ3JCLFlBQU1DLFdBQVcsS0FBS2pCLElBQUwsQ0FBVUUsS0FBVixDQUFnQixDQUFDLEtBQUtTLGFBQXRCLENBQWpCO0FBQ0EsWUFBTU8sU0FBU0QsU0FBU0UsVUFBeEI7QUFDQSxZQUFHRCxXQUFXLE1BQWQsRUFBc0I7QUFDcEIsZUFBS04sUUFBTCxDQUFjQyxLQUFkO0FBQ0FJLG1CQUFTRSxVQUFULEdBQXNCLE1BQXRCO0FBQ0EsZUFBS0MsT0FBTCxDQUFhO0FBQ1huQiwwQkFBYztBQURILFdBQWI7QUFHRCxTQU5ELE1BTU87QUFDTCxlQUFLVyxRQUFMLENBQWNTLElBQWQ7QUFDQUosbUJBQVNFLFVBQVQsR0FBc0IsTUFBdEI7QUFDQSxlQUFLQyxPQUFMLENBQWE7QUFDWG5CLDBCQUFjO0FBREgsV0FBYjtBQUdEO0FBQ0YsT0EzQk87QUE0QlJxQixvQkFBYyx3QkFBWTtBQUN4QixhQUFLVixRQUFMLENBQWNFLElBQWQsQ0FBbUIsQ0FBbkI7QUFDRDtBQTlCTyxLOzs7Ozs0QkFpQ0ZQLEMsRUFBRztBQUNULFdBQUtLLFFBQUwsR0FBZ0IsZUFBS0csa0JBQUwsQ0FBd0IsR0FBeEIsQ0FBaEI7QUFDQSxXQUFLSixhQUFMLEdBQXFCLENBQXJCO0FBQ0Q7Ozs7RUFwRGdDLGVBQUtZLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoicGxheXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7Z2V0QXVkaW9EYXRhLCBnZXRQb3N0ZXJ9IGZyb20gJy4uL3V0aWxzL2F1ZGlvJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5q2M5puy5YiX6KGoJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHBsYXlCdG5DbGFzczogJ2J0biBpY29uZm9udCBpY29uLWJvZmFuZycsXG4gICAgICBzb25nczogZ2V0QXVkaW9EYXRhKCksXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZXRDdXJBdWRpbyhlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICBpZihpbmRleCAhPT0gdGhpcy5jdXJBdWRpb0luZGV4KSB7XG4gICAgICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpO1xuICAgICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dChpbmRleCArICcnKTtcbiAgICAgICAgdGhpcy5jdXJBdWRpb0luZGV4ID0gaW5kZXg7XG4gICAgICB9LFxuICAgICAgYXVkaW9DdHJsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1ckF1ZGlvID0gdGhpcy5kYXRhLnNvbmdzWyt0aGlzLmN1ckF1ZGlvSW5kZXhdO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBjdXJBdWRpby5wbGF5U3RhdHVzO1xuICAgICAgICBpZihzdGF0dXMgPT09ICdwbGF5Jykge1xuICAgICAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKVxuICAgICAgICAgIGN1ckF1ZGlvLnBsYXlTdGF0dXMgPSAnc3RvcCc7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHBsYXlCdG5DbGFzczogJ2J0biBpY29uZm9udCBpY29uLWJvZmFuZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKTtcbiAgICAgICAgICBjdXJBdWRpby5wbGF5U3RhdHVzID0gJ3BsYXknO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBwbGF5QnRuQ2xhc3M6ICdidG4gaWNvbmZvbnQgaWNvbi10aW5nemhpJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXVkaW9SZVN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoZSkge1xuICAgICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCcwJyk7XG4gICAgICB0aGlzLmN1ckF1ZGlvSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuIl19