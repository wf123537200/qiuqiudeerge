'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAudioData = exports.getAudioData = function getAudioData() {
  var baseObj = {
    poster: getPoster(),
    playStatus: 'stop'
  };

  var audioData = [{
    name: '一个黄色的蛋',
    author: '赵柯',
    src: 'http://ating.info:81/child/baobao1/vhtl5kmj.mp3',
    maxTime: '03:17'
  }, {
    name: '“神奇牌”水彩笔',
    author: '赵柯',
    src: 'http://ating.info:81/child/baobao1/31dhildc.mp3',
    maxTime: '02:42'
  }, {
    name: '三只小猪盖房子',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/13171170351869756463.mp3',
    maxTime: '06:00'
  }, {
    name: '小兔子乖乖',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/13171170221463076238.mp3',
    maxTime: '03:13'
  }, {
    name: '拔萝卜',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/12937893401740825525.mp3',
    maxTime: '02:28'
  }];

  audioData.forEach(function (t) {
    Object.assign(t, baseObj);
  });

  return audioData;
};
var getPoster = exports.getPoster = function getPoster() {
  return 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001ZaCQY2OxVMg.jpg?max_age=2592000';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLmpzIl0sIm5hbWVzIjpbImdldEF1ZGlvRGF0YSIsImJhc2VPYmoiLCJwb3N0ZXIiLCJnZXRQb3N0ZXIiLCJwbGF5U3RhdHVzIiwiYXVkaW9EYXRhIiwibmFtZSIsImF1dGhvciIsInNyYyIsIm1heFRpbWUiLCJmb3JFYWNoIiwiT2JqZWN0IiwiYXNzaWduIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlLEdBQVc7QUFDckMsTUFBTUMsVUFBVTtBQUNkQyxZQUFRQyxXQURNO0FBRWRDLGdCQUFZO0FBRkUsR0FBaEI7O0FBS0EsTUFBTUMsWUFBWSxDQUFDO0FBQ2pCQyxVQUFNLFFBRFc7QUFFakJDLFlBQVEsSUFGUztBQUdqQkMsU0FBSyxpREFIWTtBQUlqQkMsYUFBUztBQUpRLEdBQUQsRUFLZjtBQUNESCxVQUFNLFVBREw7QUFFREMsWUFBUSxJQUZQO0FBR0RDLFNBQUssaURBSEo7QUFJREMsYUFBUztBQUpSLEdBTGUsRUFVZjtBQUNESCxVQUFNLFNBREw7QUFFREMsWUFBUSxLQUZQO0FBR0RDLFNBQUsscUVBSEo7QUFJREMsYUFBUztBQUpSLEdBVmUsRUFlZjtBQUNESCxVQUFNLE9BREw7QUFFREMsWUFBUSxLQUZQO0FBR0RDLFNBQUsscUVBSEo7QUFJREMsYUFBUztBQUpSLEdBZmUsRUFvQmY7QUFDREgsVUFBTSxLQURMO0FBRURDLFlBQVEsS0FGUDtBQUdEQyxTQUFLLHFFQUhKO0FBSURDLGFBQVM7QUFKUixHQXBCZSxDQUFsQjs7QUEyQkFKLFlBQVVLLE9BQVYsQ0FBa0IsYUFBSztBQUNyQkMsV0FBT0MsTUFBUCxDQUFjQyxDQUFkLEVBQWlCWixPQUFqQjtBQUNELEdBRkQ7O0FBSUEsU0FBT0ksU0FBUDtBQUNELENBdENNO0FBdUNBLElBQU1GLGdDQUFZLFNBQVpBLFNBQVksR0FBWTtBQUNuQyxTQUFPLHNGQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJhdWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRBdWRpb0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYmFzZU9iaiA9IHtcbiAgICBwb3N0ZXI6IGdldFBvc3RlcigpLFxuICAgIHBsYXlTdGF0dXM6ICdzdG9wJyxcbiAgfTtcblxuICBjb25zdCBhdWRpb0RhdGEgPSBbe1xuICAgIG5hbWU6ICfkuIDkuKrpu4ToibLnmoTom4snLFxuICAgIGF1dGhvcjogJ+i1teafrycsXG4gICAgc3JjOiAnaHR0cDovL2F0aW5nLmluZm86ODEvY2hpbGQvYmFvYmFvMS92aHRsNWttai5tcDMnLFxuICAgIG1heFRpbWU6ICcwMzoxNycsXG4gIH0sIHtcbiAgICBuYW1lOiAn4oCc56We5aWH54mM4oCd5rC05b2p56yUJyxcbiAgICBhdXRob3I6ICfotbXmn68nLFxuICAgIHNyYzogJ2h0dHA6Ly9hdGluZy5pbmZvOjgxL2NoaWxkL2Jhb2JhbzEvMzFkaGlsZGMubXAzJyxcbiAgICBtYXhUaW1lOiAnMDI6NDInLFxuICB9LCB7XG4gICAgbmFtZTogJ+S4ieWPquWwj+eMquebluaIv+WtkCcsXG4gICAgYXV0aG9yOiAn5pyJ5Ly0572RJyxcbiAgICBzcmM6ICdodHRwOi8vbWVkaWEueW91YmFuLmNvbS9nc21wMy9tcXVhbGl0eXQzMDAvMTMxNzExNzAzNTE4Njk3NTY0NjMubXAzJyxcbiAgICBtYXhUaW1lOiAnMDY6MDAnLFxuICB9LCB7XG4gICAgbmFtZTogJ+Wwj+WFlOWtkOS5luS5licsXG4gICAgYXV0aG9yOiAn5pyJ5Ly0572RJyxcbiAgICBzcmM6ICdodHRwOi8vbWVkaWEueW91YmFuLmNvbS9nc21wMy9tcXVhbGl0eXQzMDAvMTMxNzExNzAyMjE0NjMwNzYyMzgubXAzJyxcbiAgICBtYXhUaW1lOiAnMDM6MTMnLFxuICB9LCB7XG4gICAgbmFtZTogJ+aLlOiQneWNnCcsXG4gICAgYXV0aG9yOiAn5pyJ5Ly0572RJyxcbiAgICBzcmM6ICdodHRwOi8vbWVkaWEueW91YmFuLmNvbS9nc21wMy9tcXVhbGl0eXQzMDAvMTI5Mzc4OTM0MDE3NDA4MjU1MjUubXAzJyxcbiAgICBtYXhUaW1lOiAnMDI6MjgnLFxuICB9XTtcblxuICBhdWRpb0RhdGEuZm9yRWFjaCh0ID0+IHtcbiAgICBPYmplY3QuYXNzaWduKHQsIGJhc2VPYmopO1xuICB9KTtcblxuICByZXR1cm4gYXVkaW9EYXRhO1xufTtcbmV4cG9ydCBjb25zdCBnZXRQb3N0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDFaYUNRWTJPeFZNZy5qcGc/bWF4X2FnZT0yNTkyMDAwJztcbn07XG4iXX0=