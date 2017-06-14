export const getAudioData = function() {
  const baseObj = {
    poster: getPoster(),
    playStatus: 'stop',
  };

  const audioData = [
    {
      "name": "“小绒球”和“大乌龟”",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hp5pc3co.mp3",
      "maxTime": "2:40"
    },
    {
      "name": "“神奇牌”水彩笔8",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/31dhildc.mp3",
      "maxTime": "2:42"
    },
    {
      "name": "一个黄色的蛋",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/vhtl5kmj.mp3",
      "maxTime": "3:18"
    },
    {
      "name": "一只被吵醒的鸡蛋",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/1cwkn453.mp3",
      "maxTime": "4:28"
    },
    {
      "name": "一百个新同学",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/odk31ukn.mp3",
      "maxTime": "2:09"
    },
    {
      "name": "一筐青草",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/djqqkmkw.mp3",
      "maxTime": "1:43"
    },
    {
      "name": "三扇门",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/pdfik9hl.mp3",
      "maxTime": "1:56"
    },
    {
      "name": "不会唱歌的蝉",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/kqomjtmy.mp3",
      "maxTime": "2:43"
    },
    {
      "name": "不当电视迷傻瓜",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/qm2m7jmb.mp3",
      "maxTime": "1:55"
    },
    {
      "name": "两个邮递员",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/5couzpgf.mp3",
      "maxTime": "2:14"
    },
    {
      "name": "五颗蜜蜜甜的葡萄",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/8xiplwv5.mp3",
      "maxTime": "1:32"
    },
    {
      "name": "企鹅寄冰",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/laqw1bfg.mp3",
      "maxTime": "2:05"
    },
    {
      "name": "会咬人的被子",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/g5ca43b1.mp3",
      "maxTime": "1:42"
    },
    {
      "name": "会走路的雪人",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/tu3hprf5.mp3",
      "maxTime": "00:00"
    },
    {
      "name": "伞屋",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/azvzdhux.mp3",
      "maxTime": "1:36"
    },
    {
      "name": "作香水儿",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/qmpbzoju.mp3",
      "maxTime": "2:23"
    },
    {
      "name": "冒冒失失的流星",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/0b4jyxjr.mp3",
      "maxTime": "3:08"
    },
    {
      "name": "冬天里的故事",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/6kk944xd.mp3",
      "maxTime": "3:00"
    },
    {
      "name": "刚出壳的鹅",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hm00gnes.mp3",
      "maxTime": "2:22"
    },
    {
      "name": "半小时爸爸",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/t0kk9zef.mp3",
      "maxTime": "2:57"
    },
    {
      "name": "卖大米的小猫",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/w1d5la9f.mp3",
      "maxTime": "2:34"
    },
    {
      "name": "另一个城市和另一片森林",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/9mxadyde.mp3",
      "maxTime": "2:50"
    },
    {
      "name": "听得懂树语的熊",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/y3kjnpf4.mp3",
      "maxTime": "3:50"
    },
    {
      "name": "吱吱叫的帽子",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/bmcr31ex.mp3",
      "maxTime": "2:45"
    },
    {
      "name": "周周和红雀妈妈",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/9nb4sdrg.mp3",
      "maxTime": "3:39"
    },
    {
      "name": "圆月亮",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/woxkkpu6.mp3",
      "maxTime": "2:21"
    },
    {
      "name": "大海龟",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/5ntgkxyf.mp3",
      "maxTime": "2:07"
    },
    {
      "name": "大狗和小狗",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/bsk79chy.mp3",
      "maxTime": "2:56"
    },
    {
      "name": "大花伞和小花伞",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/p7gpbzmz.mp3",
      "maxTime": "2:38"
    },
    {
      "name": "天上有朵紫色的云",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/bs2dux5y.mp3",
      "maxTime": "2:17"
    },
    {
      "name": "太阳球",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/1du9c17x.mp3",
      "maxTime": "3:46"
    },
    {
      "name": "好心眼儿的妖怪",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/v2c1qkax.mp3",
      "maxTime": "2:40"
    },
    {
      "name": "安安和闹钟",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/r14owk2a.mp3",
      "maxTime": "3:00"
    },
    {
      "name": "宝月亮花",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/sn8x0jlu.mp3",
      "maxTime": "2:31"
    },
    {
      "name": "宝石",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/7ky1nvai.mp3",
      "maxTime": "2:52"
    },
    {
      "name": "寄自己",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hahtdrwe.mp3",
      "maxTime": "2:15"
    },
    {
      "name": "小丑鱼",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/fljefm5m.mp3",
      "maxTime": "3:19"
    },
    {
      "name": "小傻瓜",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/6acouf3w.mp3",
      "maxTime": "2:41"
    },
    {
      "name": "小小树精",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/0668auyc.mp3",
      "maxTime": "2:09"
    },
    {
      "name": "小熊洗澡",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/ne42hhuk.mp3",
      "maxTime": "2:50"
    },
    {
      "name": "小猴看戏",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/wuhiz192.mp3",
      "maxTime": "2:46"
    },
    {
      "name": "小老虎的大屁股",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/3he7jrf9.mp3",
      "maxTime": "3:15"
    },
    {
      "name": "小老鼠和老茶壶",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/5w4fyilb.mp3",
      "maxTime": "3:10"
    },
    {
      "name": "小雨滴看世界",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/334znktr.mp3",
      "maxTime": "3:36"
    },
    {
      "name": "小鸟和机器猫",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/ic6ze21o.mp3",
      "maxTime": "1:55"
    },
    {
      "name": "巴士小狗",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/upy369nh.mp3",
      "maxTime": "3:06"
    },
    {
      "name": "巴豆当妈妈",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/q8s4d3oo.mp3",
      "maxTime": "3:18"
    },
    {
      "name": "幻想家",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/w4454ck5.mp3",
      "maxTime": "2:37"
    },
    {
      "name": "广告猪",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/ri8jiery.mp3",
      "maxTime": "2:41"
    },
    {
      "name": "彩虹小巫婆",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/qs5bdipw.mp3",
      "maxTime": "2:46"
    },
    {
      "name": "快乐老猫",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/1jab3edw.mp3",
      "maxTime": "3:19"
    },
    {
      "name": "恐龙妈妈藏蛋",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/83dor6fc.mp3",
      "maxTime": "3:41"
    },
    {
      "name": "戴在最高处的眼镜",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/gia7z1oc.mp3",
      "maxTime": "3:25"
    },
    {
      "name": "戴项链的比赛",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/dde8a3nl.mp3",
      "maxTime": "3:19"
    },
    {
      "name": "打碗碗花",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/x69ctkjt.mp3",
      "maxTime": "1:42"
    },
    {
      "name": "把尾巴晾起来",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/2xsgw1os.mp3",
      "maxTime": "3:41"
    },
    {
      "name": "挤在一起很暖和",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/ql0pmrwf.mp3",
      "maxTime": "1:32"
    },
    {
      "name": "救鱼",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/t5qpjtuh.mp3",
      "maxTime": "2:03"
    },
    {
      "name": "旱乌鸦",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/zymwal9n.mp3",
      "maxTime": "3:53"
    },
    {
      "name": "春风带我去散步",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/denswjkn.mp3",
      "maxTime": "1:57"
    },
    {
      "name": "月亮掉进烟囱里",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/faawfdwj.mp3",
      "maxTime": "1:53"
    },
    {
      "name": "永远的糊涂虫",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/k17resaw.mp3",
      "maxTime": "3:30"
    },
    {
      "name": "洛卡的树叶",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/7p5sfsgc.mp3",
      "maxTime": "2:32"
    },
    {
      "name": "渡河",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/kwag5frs.mp3",
      "maxTime": "1:57"
    },
    {
      "name": "照相",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hp5r1vlf.mp3",
      "maxTime": "2:42"
    },
    {
      "name": "爱听故事的月亮",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/mqrdxfvb.mp3",
      "maxTime": "3:00"
    },
    {
      "name": "狐狸鸟",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/mp5uzc5b.mp3",
      "maxTime": "3:07"
    },
    {
      "name": "狮子卡卡",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/ri2dmpnv.mp3",
      "maxTime": "3:25"
    },
    {
      "name": "狮子的森林",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/4tpegzux.mp3",
      "maxTime": "3:38"
    },
    {
      "name": "猫的早餐",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/p2jssa4n.mp3",
      "maxTime": "3:10"
    },
    {
      "name": "甜甜的风铃",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/geb888fg.mp3",
      "maxTime": "2:04"
    },
    {
      "name": "白兔们的地",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/jw262dg7.mp3",
      "maxTime": "3:18"
    },
    {
      "name": "白雪公主的小木屋",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/taffkyye.mp3",
      "maxTime": "2:41"
    },
    {
      "name": "神奇小火车",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/plrws7jk.mp3",
      "maxTime": "2:50"
    },
    {
      "name": "稻草人",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/1epgum0v.mp3",
      "maxTime": "2:34"
    },
    {
      "name": "窗下的小蚂蚁",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/8ci1nrig.mp3",
      "maxTime": "2:05"
    },
    {
      "name": "笨爸爸",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hj336k7c.mp3",
      "maxTime": "2:18"
    },
    {
      "name": "笨狼当上了售票员",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/0qabmg0q.mp3",
      "maxTime": "4:08"
    },
    {
      "name": "籽儿吐吐",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/4mnpj99f.mp3",
      "maxTime": "3:08"
    },
    {
      "name": "红女巫",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/jh5aauy0.mp3",
      "maxTime": "2:59"
    },
    {
      "name": "红魔椅和蓝精灵",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hc75ztmj.mp3",
      "maxTime": "2:02"
    },
    {
      "name": "红黄蓝",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/vlnaelnx.mp3",
      "maxTime": "2:37"
    },
    {
      "name": "给狗熊奶奶读信",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/zv4e7amg.mp3",
      "maxTime": "3:20"
    },
    {
      "name": "胡萝卜先生的胡子",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/5uf1jxl6.mp3",
      "maxTime": "2:57"
    },
    {
      "name": "苹果香皂和薄荷香皂",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/1s90wo7c.mp3",
      "maxTime": "1:59"
    },
    {
      "name": "落汤鸡",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/r1jzfgee.mp3",
      "maxTime": "1:35"
    },
    {
      "name": "葡萄架下的小房子",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/tujr5tud.mp3",
      "maxTime": "3:01"
    },
    {
      "name": "蚂蚁小黑豆儿",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/417i2ync.mp3",
      "maxTime": "1:57"
    },
    {
      "name": "蝴蝶的小饭桌",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/6d436soi.mp3",
      "maxTime": "1:46"
    },
    {
      "name": "谁当喇叭",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/vgyalbfr.mp3",
      "maxTime": "3:17"
    },
    {
      "name": "调皮的云",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/h9g37d10.mp3",
      "maxTime": "4:23"
    },
    {
      "name": "豆豆兵去打仗",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/05n8m71m.mp3",
      "maxTime": "2:17"
    },
    {
      "name": "超级小猪",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/5zedmz9m.mp3",
      "maxTime": "2:52"
    },
    {
      "name": "长脚和矮脚",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/znkih7ts.mp3",
      "maxTime": "2:51"
    },
    {
      "name": "门铃和梯子",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/v3p0tf7l.mp3",
      "maxTime": "2:32"
    },
    {
      "name": "阿拖的尾巴",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/9vv3ui4t.mp3",
      "maxTime": "2:53"
    },
    {
      "name": "风儿来找小胖猪",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/7afrt01j.mp3",
      "maxTime": "2:20"
    },
    {
      "name": "魔帕",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/l9yeqxaq.mp3",
      "maxTime": "1:47"
    },
    {
      "name": "鸡和小鸡",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/3tqpe505.mp3",
      "maxTime": "1:52"
    },
    {
      "name": "黑熊进城",
      "author": "赵柯",
      "src": "http://ating.info/child/baobao1/hbubdt3a.mp3",
      "maxTime": "3:12"
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
    }
  ];

  audioData.forEach(t => {
    Object.assign(t, baseObj);
  });

  return audioData;
};
export const getPoster = function () {
  return 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001ZaCQY2OxVMg.jpg?max_age=2592000';
};
