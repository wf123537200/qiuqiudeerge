export const getAudioData = function() {
  const baseObj = {
    poster: getPoster(),
    playStatus: 'stop',
  };

  const audioData = [{
    name: '一个黄色的蛋',
    author: '赵柯',
    src: 'http://ating.info:81/child/baobao1/vhtl5kmj.mp3',
    maxTime: '03:17',
  }, {
    name: '“神奇牌”水彩笔',
    author: '赵柯',
    src: 'http://ating.info:81/child/baobao1/31dhildc.mp3',
    maxTime: '02:42',
  }, {
    name: '三只小猪盖房子',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/13171170351869756463.mp3',
    maxTime: '06:00',
  }, {
    name: '小兔子乖乖',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/13171170221463076238.mp3',
    maxTime: '03:13',
  }, {
    name: '拔萝卜',
    author: '有伴网',
    src: 'http://media.youban.com/gsmp3/mqualityt300/12937893401740825525.mp3',
    maxTime: '02:28',
  }];

  audioData.forEach(t => {
    Object.assign(t, baseObj);
  });

  return audioData;
};
export const getPoster = function () {
  return 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001ZaCQY2OxVMg.jpg?max_age=2592000';
};
