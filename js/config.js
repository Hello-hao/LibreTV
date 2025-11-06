// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: '村口王铁柱',
    url: '/',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    // testSource: {
    //     api: 'https://www.example.com/api.php/provide/vod',
    //     name: '空内容测试源',
    //     adult: true
    // },
    "1080zyku": {
      "api": "https://api.1080zyku.com/inc/api_mac10.php",
      "name": "TV-1080资源",
      "detail": "https://api.1080zyku.com",
      "adult": false
    },
    "360zy": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "TV-360资源",
      "detail": "https://360zy.com",
      "adult": false
    },
    "ckzy": {
      "api": "https://ckzy.me/api.php/provide/vod",
      "name": "TV-CK资源",
      "detail": "https://ckzy.me",
      "adult": false
    },
    "ukuapi": {
      "api": "https://api.ukuapi.com/api.php/provide/vod",
      "name": "TV-U酷资源",
      "detail": "https://api.ukuapi.com",
      "adult": false
    },
    "ukuapi88": {
      "api": "https://api.ukuapi88.com/api.php/provide/vod",
      "name": "TV-U酷资源88",
      "detail": "https://api.ukuapi88.com",
      "adult": false
    },
    "ikunzy": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "TV-ikun资源",
      "detail": "https://ikunzyapi.com",
      "adult": false
    },
    "wujinapi_cc": {
      "api": "https://api.wujinapi.cc/api.php/provide/vod",
      "name": "TV-无尽",
      "detail": "",
      "adult": false
    },
    "yayazy": {
      "api": "https://cj.yayazy.net/api.php/provide/vod",
      "name": "TV-丫丫点播",
      "detail": "https://cj.yayazy.net",
      "adult": false
    },
    "guangsuapi": {
      "api": "https://api.guangsuapi.com/api.php/provide/vod",
      "name": "TV-光速资源",
      "detail": "https://api.guangsuapi.com",
      "adult": false
    },
    "wolongzyw": {
      "api": "https://collect.wolongzyw.com/api.php/provide/vod",
      "name": "TV-卧龙点播",
      "detail": "https://collect.wolongzyw.com",
      "adult": false
    },
    "wolongzy_cc": {
      "api": "https://collect.wolongzy.cc/api.php/provide/vod",
      "name": "TV-卧龙资源",
      "detail": "",
      "adult": false
    },
    "wolongzyw_com": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "TV-卧龙资源",
      "detail": "https://wolongzyw.com",
      "adult": false
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "TV-天涯资源",
      "detail": "https://tyyszy.com",
      "adult": false
    },
    "rycjapi": {
      "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "TV-如意资源",
      "detail": "",
      "adult": false
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "TV-小猫咪资源",
      "detail": "https://zy.xmm.hk",
      "adult": false
    },
    "xinlangapi": {
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      "name": "TV-新浪点播",
      "detail": "https://api.xinlangapi.com",
      "adult": false
    },
    "wujinapi_com": {
      "api": "https://api.wujinapi.com/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": "",
      "adult": false
    },
    "wujinapi_me": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": "",
      "adult": false
    },
    "wujinapi_net": {
      "api": "https://api.wujinapi.net/api.php/provide/vod",
      "name": "TV-无尽资源",
      "detail": "",
      "adult": false
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "TV-旺旺短剧",
      "detail": "https://wwzy.tv",
      "adult": false
    },
    "wwzy_api": {
      "api": "https://api.wwzy.tv/api.php/provide/vod",
      "name": "TV-旺旺资源",
      "detail": "https://api.wwzy.tv",
      "adult": false
    },
    "bfzyapi": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "TV-暴风资源",
      "detail": "",
      "adult": false
    },
    "zuidazy": {
      "api": "http://zuidazy.me/api.php/provide/vod",
      "name": "TV-最大点播",
      "detail": "http://zuidazy.me",
      "adult": false
    },
    "zuidapi": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "TV-最大资源",
      "detail": "https://api.zuidapi.com",
      "adult": false
    },
    "apiyhzy": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "TV-樱花资源",
      "detail": "",
      "adult": false
    },
    "yparse": {
      "api": "https://api.yparse.com/api/json",
      "name": "TV-步步高资源",
      "detail": "",
      "adult": false
    },
    "niuniuzy": {
      "api": "https://api.niuniuzy.me/api.php/provide/vod",
      "name": "TV-牛牛点播",
      "detail": "https://api.niuniuzy.me",
      "adult": false
    },
    "dyttzyapi": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "TV-电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com",
      "adult": false
    },
    "apibdzy": {
      "api": "https://api.apibdzy.com/api.php/provide/vod",
      "name": "TV-百度云资源",
      "detail": "https://api.apibdzy.com",
      "adult": false
    },
    "1080zyku_json": {
      "api": "https://api.1080zyku.com/inc/apijson.php/",
      "name": "TV-神马云",
      "detail": "https://api.1080zyku.com",
      "adult": false
    },
    "suoniapi": {
      "api": "https://suoniapi.com/api.php/provide/vod",
      "name": "TV-索尼资源",
      "detail": "",
      "adult": false
    },
    "hongniuzy2": {
      "api": "https://www.hongniuzy2.com/api.php/provide/vod",
      "name": "TV-红牛资源",
      "detail": "https://www.hongniuzy2.com",
      "adult": false
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "TV-茅台资源",
      "detail": "https://caiji.maotaizy.cc",
      "adult": false
    },
    "huyaapi": {
      "api": "https://www.huyaapi.com/api.php/provide/vod",
      "name": "TV-虎牙资源",
      "detail": "https://www.huyaapi.com",
      "adult": false
    },
    "dbzy_caiji": {
      "api": "https://caiji.dbzy.tv/api.php/provide/vod",
      "name": "TV-豆瓣资源",
      "detail": "https://caiji.dbzy.tv",
      "adult": false
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "TV-豆瓣资源",
      "detail": "https://dbzy.tv",
      "adult": false
    },
    "hhzyapi": {
      "api": "https://hhzyapi.com/api.php/provide/vod",
      "name": "TV-豪华资源",
      "detail": "https://hhzyapi.com",
      "adult": false
    },
    "subocaiji": {
      "api": "https://subocaiji.com/api.php/provide/vod",
      "name": "TV-速博资源",
      "detail": "",
      "adult": false
    },
    "lziapi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod",
      "name": "TV-量子资源",
      "detail": "",
      "adult": false
    },
    "jinyingzy": {
      "api": "https://jinyingzy.com/api.php/provide/vod",
      "name": "TV-金鹰点播",
      "detail": "https://jinyingzy.com",
      "adult": false
    },
    "jyzyapi": {
      "api": "https://jyzyapi.com/api.php/provide/vod",
      "name": "TV-金鹰资源",
      "detail": "https://jyzyapi.com",
      "adult": false
    },
    "sdzyapi": {
      "api": "https://sdzyapi.com/api.php/provide/vod",
      "name": "TV-闪电资源",
      "detail": "https://sdzyapi.com",
      "adult": false
    },
    "ffzyapi": {
      "api": "https://cj.ffzyapi.com/api.php/provide/vod",
      "name": "TV-非凡资源",
      "detail": "https://cj.ffzyapi.com",
      "adult": false
    },
    "p2100": {
      "api": "https://p2100.net/api.php/provide/vod",
      "name": "TV-飘零资源",
      "detail": "https://p2100.net",
      "adult": false
    },
    "mozhuazy": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "TV-魔爪资源",
      "detail": "https://mozhuazy.com",
      "adult": false
    },
    "moduapi": {
      "api": "https://caiji.moduapi.cc/api.php/provide/vod",
      "name": "TV-魔都动漫",
      "detail": "https://caiji.moduapi.cc",
      "adult": false
    },
    "mdzyapi": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "TV-魔都资源",
      "detail": "https://www.mdzyapi.com",
      "adult": false
    },
    "heimuer": {
      "api": "https://json.heimuer.xyz/api.php/provide/vod",
      "name": "TV-黑木耳",
      "detail": "https://json.heimuer.xyz",
      "adult": false
    },
    "heimuer02": {
      "api": "https://json02.heimuer.xyz/api.php/provide/vod",
      "name": "TV-黑木耳点播",
      "detail": "https://json02.heimuer.xyz",
      "adult": false
    },
    "ffzynew": {
      "api": "https://api.ffzyapi.com/api.php/provide/vod",
      "name": "非凡影视new",
      "detail": "http://ffzy5.tv",
      "adult": false
    },
    "jszyapi": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com",
      "adult": false
    },
    "gayapi": {
      "api": "https://gayapi.com/api.php/provide/vod",
      "name": "快播资源网站",
      "adult": false
    },
    "aiduanju": {
      "api": "https://www.aiduanju.cc/",
      "name": "爱短剧.cc",
      "adult": false
    },
    "huawei8": {
      "api": "https://huawei8.live/api.php/provide/vod",
      "name": "华为吧资源",
      "adult": false
    },
    "taopianapi": {
      "api": "https://taopianapi.com/cjapi/sda/vod",
      "name": "淘片资源",
      "adult": false
    },
    "hongniuzy3": {
      "api": "https://www.hongniuzy3.com/api.php/provide/vod",
      "name": "红牛资源",
      "adult": false
    },
    "xsd_sdzyapi": {
      "api": "https://xsd.sdzyapi.com/api.php/provide/vod",
      "name": "索尼-闪电资源",
      "adult": false
    },
    "jyzyapi_provide": {
      "api": "https://jyzyapi.com/provide/vod",
      "name": "金鹰资源采集网",
      "adult": false
    },
    "fczy888": {
      "api": "https://api.fczy888.me/api.php/provide/vod",
      "name": "蜂巢片库",
      "adult": false
    },
    "jmzy": {
      "api": "https://api.jmzy.com/api.php/provide/vod",
      "name": "金马资源网",
      "adult": false
    },
    "dadiapi": {
      "api": "https://dadiapi.com/api.php/provide/vod",
      "name": "大地资源网络",
      "adult": false
    },
    "xiaojizy": {
      "api": "https://api.xiaojizy.live/provide/vod",
      "name": "小鸡资源",
      "adult": false
    },
    "kuaichezy": {
      "api": "https://caiji.kuaichezy.org/api.php/provide",
      "name": "快车资源阿",
      "adult": false
    },
    "xinlangapi_provide": {
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      "name": "新浪资源阿",
      "adult": false
    },
    "apilj_provide": {
      "api": "https://apilj.com/api.php/provide",
      "name": "辣椒资源黄黄",
      "adult": false
    },
    "yzzy_api": {
      "api": "https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod",
      "name": "优质资源库1080zyk6.com高清",
      "adult": false
    },
    "iqiyizyapi": {
      "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
      "name": "iqiyi资源",
      "adult": false
    },
    "qiqidys": {
      "api": "https://www.qiqidys.com/api.php/provide/vod/",
      "name": "七七影视",
      "adult": false
    },
    "91md": {
      "api": "https://91md.me/api.php/provide/vod",
      "name": "AV-91麻豆",
      "detail": "https://91md.me",
      "adult": true
    },
    "155api": {
      "api": "https://155api.com/api.php/provide/vod",
      "name": "AV-155资源",
      "detail": "https://155api.com",
      "adult": true
    },
    "bwzyz": {
      "api": "https://api.bwzyz.com/api.php/provide/vod",
      "name": "AV-百万资源",
      "detail": "https://api.bwzyz.com",
      "adult": true
    },
    "lbapiby": {
      "api": "http://lbapiby.com/api.php/provide/vod",
      "name": "AV-AIvin",
      "detail": "",
      "adult": true
    },
    "jkunzyapi": {
      "api": "https://jkunzyapi.com/api.php/provide/vod",
      "name": "AV-JKUN资源",
      "detail": "https://jkunzyapi.com",
      "adult": true
    },
    "souavzy": {
      "api": "https://api.souavzy.vip/api.php/provide/vod",
      "name": "AV-souav资源",
      "detail": "https://api.souavzy.vip",
      "adult": true
    },
    "lbapi9": {
      "api": "https://lbapi9.com/api.php/provide/vod",
      "name": "AV-乐播资源",
      "detail": "",
      "adult": true
    },
    "aosikazy": {
      "api": "https://aosikazy.com/api.php/provide/vod",
      "name": "AV-奥斯卡资源",
      "detail": "https://aosikazy.com",
      "adult": true
    },
    "naixxzy": {
      "api": "https://Naixxzy.com/api.php/provide/vod",
      "name": "AV-奶香香",
      "detail": "https://Naixxzy.com",
      "adult": true
    },
    "slapibf": {
      "api": "https://slapibf.com/api.php/provide/vod",
      "name": "AV-森林资源",
      "detail": "https://slapibf.com",
      "adult": true
    },
    "xrbsp": {
      "api": "https://www.xrbsp.com/api/json.php",
      "name": "AV-淫水机资源",
      "detail": "https://www.xrbsp.com",
      "adult": true
    },
    "apiyutu": {
      "api": "https://apiyutu.com/api.php/provide/vod",
      "name": "AV-玉兔资源",
      "detail": "https://apiyutu.com",
      "adult": true
    },
    "fhapi9": {
      "api": "http://fhapi9.com/api.php/provide/vod",
      "name": "AV-番号资源",
      "detail": "",
      "adult": true
    },
    "kxgav": {
      "api": "https://www.kxgav.com/api/json.php",
      "name": "AV-白嫖资源",
      "detail": "https://www.kxgav.com",
      "adult": true
    },
    "jingpinx": {
      "api": "https://www.jingpinx.com/api.php/provide/vod",
      "name": "AV-精品资源",
      "detail": "https://www.jingpinx.com",
      "adult": true
    },
    "msnii": {
      "api": "https://www.msnii.com/api/json.php",
      "name": "AV-美少女资源",
      "detail": "https://www.msnii.com",
      "adult": true
    },
    "apilsbzy1": {
      "api": "https://apilsbzy1.com/api.php/provide/vod",
      "name": "AV-老色逼资源",
      "detail": "https://apilsbzy1.com",
      "adult": true
    },
    "sexnguon": {
      "api": "https://api.sexnguon.com/api.php/provide/vod",
      "name": "AV-色嗨国",
      "detail": "https://api.sexnguon.com",
      "adult": true
    },
    "maozyapi": {
      "api": "https://api.maozyapi.com/inc/apijson_vod.php",
      "name": "AV-色猫资源",
      "detail": "https://api.maozyapi.com",
      "adult": true
    },
    "apilj": {
      "api": "https://apilj.com/api.php/provide/vod",
      "name": "AV-辣椒资源",
      "detail": "https://apilj.com",
      "adult": true
    },
    "gdlsp": {
      "api": "https://www.gdlsp.com/api/json.php",
      "name": "AV-香奶儿资源",
      "detail": "https://www.gdlsp.com",
      "adult": true
    },
    "shayuapi": {
      "api": "https://shayuapi.com/api.php/provide/vod",
      "name": "AV-鲨鱼资源",
      "detail": "https://shayuapi.com",
      "adult": true
    },
    "pgxdy": {
      "api": "https://www.pgxdy.com/api/json.php",
      "name": "AV-黄AV资源",
      "detail": "https://www.pgxdy.com",
      "adult": true
    },
    "xingba111": {
      "api": "https://xingba111.com/api.php/provide/vod",
      "name": "性吧资源",
      "adult": true
    },
    "xxibaozyw": {
      "api": "https://www.xxibaozyw.com/api.php/provide/vod",
      "name": "细胞采集黄色",
      "adult": true
    },
    "hsckzy888": {
      "api": "https://hsckzy888.com/api.php/provide/vod",
      "name": "黄色资源啊啊",
      "adult": true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
