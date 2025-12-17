const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    mt: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台',
    }
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速',
    }
    heiliao: {
        api: 'https://www.heiliaozyapi.com/api.php/provide/vod',
        name: '黑料',
    }
    xj: {
        api: 'https://www.xiangjiaozyw.com/api.php/provide/vod/',
        name: '香蕉',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
