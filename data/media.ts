export type MediaType = 'anime' | 'book' | 'movie' | 'drama' | 'game' | 'song'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: '鋼の錬金術師 FULLMETAL ALCHEMIST',
    creator: '荒川弘',
  },
  {
    name: '葬送のフリーレン',
    creator: '山田鐘人',
  },
  {
    name: 'Cyberpunk: Edgerunners',
    creator: 'CD Projekt Red',
  },
  {
    name: 'Fate/Zero',
    creator: '虚淵玄',
  },
  {
    name: 'ID:INVADED イド：インヴェイデッド',
    creator: '舞城王太郎',
  },
  {
    name: '咒術廻戦',
    creator: '芥見下々',
  },
  {
    name: '青春ブタ野郎シリーズ',
    creator: '鴨志田一',
  },
  {
    name: '鬼滅の刃',
    creator: '吾峠呼世晴',
  },
  {
    name: 'ヴァイオレット・エヴァーガーデン Violet Evergarden',
    creator: '暁佳奈',
  },
  {
    name: 'Steins;Gate',
    creator: '林直孝',
  },
  {
    name: 'ぼっち・ざ・ろっく!',
    creator: 'はまじあき',
  },
  {
    name: '冰菓',
    creator: '米澤穗信',
  },
  {
    name: 'Evangelion',
    creator: '庵野秀明',
  },
  {
    name: '四月は君の嘘',
    creator: '新川直司',
  },
  {
    name: 'やはり俺の青春ラブコメはまちがっている',
    creator: '渡航',
  },
  {
    name: '食戟のソーマ',
    creator: '附田祐斗',
  },
  {
    name: 'チェンソーマン Chainsaw Man',
    creator: '藤本タツキ',
  },
  {
    name: 'ノラガミ 野良神',
    creator: 'あだちとか',
  },
  {
    name: 'かぐや様は告らせたい',
    creator: '赤坂アカ',
  },
  {
    name: 'Re:ゼロから始める異世界生活',
    creator: '長月達平',
  },
  {
    name: 'ソードアート・オンライン Sword Art Online',
    creator: '川原礫',
  },
  {
    name: '進撃の巨人',
    creator: '諫山創',
  },
  {
    name: 'SPY x FAMILY',
    creator: '遠藤達哉',
  },
  {
    name: 'ダンジョン飯',
    creator: '九井諒子',
  },
  {
    name: '無職転生',
    creator: '理不尽な孫の手',
  },
  {
    name: 'Dr.STONE',
    creator: '稻垣理一郎',
  },
  {
    name: 'サマータイムレンダ Summer Time Rendering',
    creator: '田中靖規',
  },
  {
    name: 'メイドインアビス Made in Abyss',
    creator: 'つくしあきひと',
  },
  {
    name: '虚構推理',
    creator: '城平京',
  },
  {
    name: 'アカメが斬る!',
    creator: 'タカヒロ',
  },
  {
    name: '夏目友人帳',
    creator: '緑川ゆき',
  },
  {
    name: 'とある科学の超電磁砲',
    creator: '鎌池和馬',
  },
  {
    name: 'とある魔術の禁書目録',
    creator: '鎌池和馬',
  },
  {
    name: 'ゆるキャン△',
    creator: 'あfろ',
  },
  {
    name: 'はたらく細胞',
    creator: '清水茜',
  },
  {
    name: '化物語',
    creator: '西尾維新',
  },
  {
    name: 'Overlord',
    creator: '丸山くがね',
  },
  {
    name: '転生したらスライムだった件',
    creator: '伏瀬',
  },
  {
    name: '나 혼자만 레벨업 - 俺だけレベルアップな件',
    creator: '추공',
  },
]

export const book: MediaRecord[] = [
  {
    name: '三体',
    creator: '刘慈欣',
    lang: 'zh-cn',
  },
]

export const movie: MediaRecord[] = [
  {
    name: 'The Lord of the Rings',
    creator: 'Peter Jackson',
  },
  {
    name: 'The Hobbit',
    creator: 'Peter Jackson',
  },
  {
    name: 'F1 The Movie',
    creator: 'Joseph Kosinski',
  },
  {
    name: '君の名は。',
    creator: '新海誠',
  },
  {
    name: 'Master and Commander: The Far Side of the World',
    creator: 'Peter Weir',
  },
  {
    name: 'Inception',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Tenet',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Dune',
    creator: 'Denis Villeneuve',
  },
  {
    name: 'Napoleon',
    creator: 'Ridley Scott',
  },
]

export const drama: MediaRecord[] = [
  {
    name: 'Hamilton',
  },
  {
    name: 'Silo',
  },
  {
    name: 'Fallout',
  },
  {
    name: 'Masters of the Air',
  },
  {
    name: 'Ted Lasso',
  },
  {
    name: 'Pluribus',
  },
  {
    name: 'For all Mankind',
  },
  {
    name: 'Foundation',
  },
  {
    name: 'The Lord of the Rings: The Rings of Power',
  },
  {
    name: 'Game of Thrones',
  },
  {
    name: 'The Man in the High Castle',
  },
  {
    name: 'The Chernobyl Disaster',
  },

]

export const game: MediaRecord[] = [
  {
    name: 'Minecraft',
    creator: 'Mojang',
  },
  {
    name: 'ELDEN RING',
    creator: 'FromSoftware',
  },
  {
    name: 'Dark Souls 3',
    creator: 'FromSoftware',
  },
  {
    name: 'Baldur\'s Gate 3',
    creator: 'Larian Studios',
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    creator: 'CD Projekt Red',
  },
  {
    name: 'Frostpunk',
    creator: '11 bit studios',
  },
  {
    name: 'Terraria',
    creator: 'Re-Logic',
  },
  {
    name: 'Slay the Spire',
    creator: 'Mega Crit Games',
  },
  {
    name: 'Sekiro: Shadows Die Twice',
    creator: 'FromSoftware',
  },
  {
    name: 'Split Fiction',
    creator: 'Hazelight Studios',
  },
  {
    name: 'SHENZHEN I/O',
    creator: 'Zachtronics',
  },
  {
    name: 'Overcooked! 2',
    creator: 'Team17',
  },
  {
    name: 'Assassin\'s Creed (every version)',
    creator: 'Ubisoft',
  },
  {
    name: 'FC 24 25 26',
    creator: 'EA Sports',
  },
  {
    name: 'F1 25',
    creator: 'EA Sports',
  },
]

export const song = [
  {
    name: '陀飛輪',
    creator: '陳奕迅',
    lang: 'zh-Hant',
  },
  {
    name: '不用去猜',
    creator: 'Jony J',
    lang: 'zh-Hans',
  },
  {
    name: '知道',
    creator: '宋冬野',
    lang: 'zh-Hans',
  },
  {
    name: '山脚',
    creator: 'Jony J',
    lang: 'zh-Hans',
  },
  {
    name: '晚餐歌',
    creator: 'tuki.',
  },
  {
    name: '群青',
    creator: 'YOASOBI',
  },
  {
    name: 'たぶん',
    creator: 'YOASOBI',
  },
  {
    name: '博物館',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: 'Lemon',
    creator: '米津玄師',
  },
  {
    name: '說得簡單',
    creator: '脆樂團',
    lang: 'zh-Hant',
  },
  {
    name: '十年一刻',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: '帶你飛',
    creator: '告五人',
    lang: 'zh-Hant',
  },
  {
    name: '唯一',
    creator: '告五人',
    lang: 'zh-Hant',
  },
  {
    name: '致姍姍來遲的你',
    creator: 'Asi & 林宥嘉',
    lang: 'zh-Hant',
  },
  {
    name: '藍眼睛',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: 'Ordinary Days',
    creator: 'milet',
  },
  {
    name: '空港曲',
    creator: '宋冬野',
    lang: 'zh-Hans',
  },
  {
    name: '梦遗少年',
    creator: '宋冬野',
    lang: 'zh-Hans',
  },
  {
    name: 'Mightnight Talk',
    creator: '幾田りら',
  },
  {
    name: '體面',
    creator: '于文文',
    lang: 'zh-Hant',
  },
  {
    name: 'Instagram',
    creator: 'DEAN',
  },
  {
    name: 'No Time to Die',
    creator: 'Billie Eilish',
  },
  {
    name: '想自由',
    creator: '林宥嘉',
    lang: 'zh-Hant',
  },
  {
    name: '耳朵',
    creator: '李荣浩',
    lang: 'zh-Hans',
  },
  {
    name: '大雨',
    creator: 'deca joins',
    lang: 'zh-Hant',
  },
  {
    name: 'idontwannabeyouanymore',
    creator: 'Billie Eilish',
  },
  {
    name: '烂俗的歌',
    creator: '汉堡黄',
    lang: 'zh-Hans',
  },
  {
    name: '乌鸦',
    creator: '汉堡黄',
    lang: 'zh-Hans',
  },
  {
    name: '頻率',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: '喜歡寂寞',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: '這天',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: '被雨困住的城市',
    creator: '蘇打綠',
    lang: 'zh-Hant',
  },
  {
    name: '刚刚好',
    creator: '薛之谦',
    lang: 'zh-Hans',
  },
  {
    name: 'My Man',
    creator: 'Jony J',
    lang: 'zh-Hans',
  },
  {
    name: '前前前世',
    creator: 'RADWIMPS',
  },
  {
    name: 'Creep',
    creator: '蘇打綠',
  },
  {
    name: '有心論',
    creator: 'RADWIMPS',
  },
  {
    name: 'すずめ',
    creator: 'RADWIMPS',
  },
  {
    name: 'SPECIALZ',
    creator: 'King Gnu',
  },
  {
    name: '都是 Weather 你',
    creator: 'JOYCE 就以斯 & CAsPER',
    lang: 'zh-Hant',
  },
  {
    name: '百視達',
    creator: '黃玠瑋',
    lang: 'zh-Hant',
  },
  {
    name: '崇拜',
    creator: '薛之谦',
    lang: 'zh-Hans',
  },
  {
    name: 'Inside You',
    creator: 'milet',
  },
  {
    name: '打上花火',
    creator: 'DAOKO & 米津玄師',
  },
  {
    name: '易燃易爆炸',
    creator: '陈粒',
    lang: 'zh-Hans',
  },
  {
    name: '奇妙能力歌',
    creator: '陈粒',
    lang: 'zh-Hans',
  },
  {
    name: '路过人间',
    creator: '郁可唯',
    lang: 'zh-Hant',
  },
  {
    name: 'Encore un soir',
    creator: 'Céline Dion',
  },
  {
    name: 'masshiro',
    creator: '藤井風',
  },
  {
    name: 'I still',
    creator: 'milet',
  },
  {
    name: 'Les Champs-Élysées',
    creator: 'Joe Dassin',
  },
  {
    name: '黑暗的盡頭',
    creator: '脆樂團',
    lang: 'zh-Hant',
  },
  {
    name: '披星戴月的想你',
    creator: '告五人',
    lang: 'zh-Hant',
  },
  {
    name: '暧昧',
    creator: '薛之谦',
    lang: 'zh-Hans',
  },
  {
    name: 'Hello',
    creator: 'Adele',
  },
  {
    name: '走马',
    creator: '陈粒',
    lang: 'zh-Hans',
  },
  {
    name: '斑马,斑马',
    creator: '宋冬野',
    lang: 'zh-Hans',
  },
  {
    name: '遲到千年',
    creator: 'sodagreen',
    lang: 'zh-Hant',
  },
  {
    name: 'Normal',
    creator: 'Rouquine',
  },
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  drama,
  movie,
  game,
  song,
  book,
}
