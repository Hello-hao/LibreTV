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
    "dyttzy": {
        "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "name": "电影天堂资源",
        "detail": "http://caiji.dyttzyapi.com",
        "adult": false
    },
    "heimuer": {
        "api": "https://json.heimuer.xyz/api.php/provide/vod",
        "name": "黑木耳",
        "detail": "https://heimuer.tv",
        "adult": false
    },
    "ruyi": {
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
        "name": "如意资源",
        "adult": false
    },
    "bfzy": {
        "api": "https://bfzyapi.com/api.php/provide/vod",
        "name": "暴风资源",
        "adult": false
    },
    "tyyszy": {
        "api": "https://tyyszy.com/api.php/provide/vod",
        "name": "天涯资源",
        "adult": false
    },
    "ffzy": {
        "api": "http://ffzy5.tv/api.php/provide/vod",
        "name": "非凡影视",
        "detail": "http://ffzy5.tv",
        "adult": false
    },
    "zy360": {
        "api": "https://360zy.com/api.php/provide/vod",
        "name": "360资源",
        "adult": false
    },
    "maotaizy": {
        "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
        "name": "茅台资源",
        "adult": false
    },
    "wolong": {
        "api": "https://wolongzyw.com/api.php/provide/vod",
        "name": "卧龙资源",
        "adult": false
    },
    "jisu": {
        "api": "https://jszyapi.com/api.php/provide/vod",
        "name": "极速资源",
        "detail": "https://jszyapi.com",
        "adult": false
    },
    "dbzy": {
        "api": "https://dbzy.tv/api.php/provide/vod",
        "name": "豆瓣资源",
        "adult": false
    },
    "mozhua": {
        "api": "https://mozhuazy.com/api.php/provide/vod",
        "name": "魔爪资源",
        "adult": false
    },
    "mdzy": {
        "api": "https://www.mdzyapi.com/api.php/provide/vod",
        "name": "魔都资源",
        "adult": false
    },
    "zuid": {
        "api": "https://api.zuidapi.com/api.php/provide/vod",
        "name": "最大资源",
        "adult": false
    },
    "yinghua": {
        "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
        "name": "樱花资源",
        "adult": false
    },
    "wujin": {
        "api": "https://api.wujinapi.me/api.php/provide/vod",
        "name": "无尽资源",
        "adult": false
    },
    "wwzy": {
        "api": "https://wwzy.tv/api.php/provide/vod",
        "name": "旺旺短剧",
        "adult": false
    },
    "ikun": {
        "api": "https://ikunzyapi.com/api.php/provide/vod",
        "name": "iKun资源",
        "adult": false
    },
    "lzi": {
        "api": "https://cj.lziapi.com/api.php/provide/vod",
        "name": "量子资源站",
        "adult": false
    },
    "xiaomaomi": {
        "api": "https://zy.xmm.hk/api.php/provide/vod",
        "name": "小猫咪资源",
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
