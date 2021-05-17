var g_items = [
    [
        { "项目名称": "南泰大厦", "区域": "鼓楼区", "项目地址": "云南北路77号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "2000", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "20-20", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "700m" },
        { "项目名称": "中商万豪中心公寓", "区域": "鼓楼区", "项目地址": "中山北路215号", "项目等级": "AAA级", "社区分类": "商务社区", "平均价格": "35214", "住户数": "1822", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "54-54", "楼栋数": "1", "单元数": "1", "电梯总数": "9", "直线距离": "1300m" },
        { "项目名称": "金桥市场", "区域": "鼓楼区", "项目地址": "建宁路12号", "项目等级": "AA级", "社区分类": "其他", "平均价格": "0", "住户数": "1800", "社区居住规模（人）": "3960", "入住率": "100.00%", "楼层": "5-5", "楼栋数": "3", "单元数": "3", "电梯总数": "8", "直线距离": "2100m" },
        { "项目名称": "凤凰广场", "区域": "鼓楼区", "项目地址": "湖南路1号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "900", "社区居住规模（人）": "10560", "入住率": "100.00%", "楼层": "7-20", "楼栋数": "3", "单元数": "3", "电梯总数": "8", "直线距离": "400m" },
        { "项目名称": "金桥装饰城", "区域": "鼓楼区", "项目地址": "建宁路38号", "项目等级": "AA级", "社区分类": "其他", "平均价格": "0", "住户数": "900", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "3-3", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "2800m" },
        { "项目名称": "厚德苑", "区域": "鼓楼区", "项目地址": "新门口43号", "项目等级": "A级", "社区分类": "商务社区", "平均价格": "31000", "住户数": "850", "社区居住规模（人）": "1320", "入住率": "83.53%", "楼层": "16-16", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2100m" },
        { "项目名称": "金茂广场(一期)", "区域": "鼓楼区", "项目地址": "中央路201号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "800", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "8-38", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "0m" },
        { "项目名称": "华利国际", "区域": "玄武区", "项目地址": "珠江路67号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "595", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "42-42", "楼栋数": "1", "单元数": "2", "电梯总数": "9", "直线距离": "2500m" },
        { "项目名称": "先锋广场南京", "区域": "鼓楼区", "项目地址": "中央路417号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "550", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "17-17", "楼栋数": "1", "单元数": "2", "电梯总数": "6", "直线距离": "1700m" },
        { "项目名称": "御湖国际大厦", "区域": "玄武区", "项目地址": "龙蟠路153号", "项目等级": "AAA级", "社区分类": "商务社区", "平均价格": "35000", "住户数": "520", "社区居住规模（人）": "2640", "入住率": "92.31%", "楼层": "32-32", "楼栋数": "2", "单元数": "2", "电梯总数": "10", "直线距离": "2300m" },
        { "项目名称": "云峰大厦(南京)", "区域": "鼓楼区", "项目地址": "中山北路8号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "500", "社区居住规模（人）": "3520", "入住率": "80.00%", "楼层": "25-29", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "1300m" },
        { "项目名称": "汇林绿洲一期", "区域": "鼓楼区", "项目地址": "黑龙江路17号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "48107", "住户数": "414", "社区居住规模（人）": "2070", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "3", "单元数": "8", "电梯总数": "8", "直线距离": "1500m" },
        { "项目名称": "利奥大厦", "区域": "鼓楼区", "项目地址": "中央路323号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "400", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "27-27", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "500m" },
        { "项目名称": "中南园", "区域": "鼓楼区", "项目地址": "福建路23号", "项目等级": "A级", "社区分类": "住宅", "平均价格": "31603", "住户数": "370", "社区居住规模（人）": "1850", "入住率": "100.00%", "楼层": "25-25", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2200m" },
        { "项目名称": "南邮大厦", "区域": "鼓楼区", "项目地址": "新模范马路66号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "368", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "1300m" },
        { "项目名称": "创意中央", "区域": "玄武区", "项目地址": "中央路302号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "356", "社区居住规模（人）": "14080", "入住率": "100.00%", "楼层": "6-8", "楼栋数": "3", "单元数": "3", "电梯总数": "4", "直线距离": "1700m" },
        { "项目名称": "华夏大厦", "区域": "鼓楼区", "项目地址": "中山路81号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "350", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "32-32", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "2900m" },
        { "项目名称": "市级机关住宅楼（成贤街）", "区域": "玄武区", "项目地址": "成贤街115、117号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "29000", "住户数": "331", "社区居住规模（人）": "1655", "入住率": "100.00%", "楼层": "33-33", "楼栋数": "2", "单元数": "2", "电梯总数": "6", "直线距离": "2500m" },
        { "项目名称": "市级机关住宅楼（沙塘园）", "区域": "玄武区", "项目地址": "沙塘园5号、7号、9号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "82183", "住户数": "330", "社区居住规模（人）": "1650", "入住率": "100.00%", "楼层": "33-33", "楼栋数": "3", "单元数": "7", "电梯总数": "7", "直线距离": "2600m" },
        { "项目名称": "颐和商厦", "区域": "鼓楼区", "项目地址": "山西路68号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "300", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "32-32", "楼栋数": "1", "单元数": "1", "电梯总数": "7", "直线距离": "1200m" },
        { "项目名称": "世界贸易中心大厦A座", "区域": "鼓楼区", "项目地址": "山西路67号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "300", "社区居住规模（人）": "7040", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "2", "单元数": "2", "电梯总数": "8", "直线距离": "1500m" },
        { "项目名称": "南京华富大厦", "区域": "鼓楼区", "项目地址": "福建路31号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "300", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "30-30", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "2200m" },
        { "项目名称": "绿城花园", "区域": "鼓楼区", "项目地址": "建宁路57号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "38365", "住户数": "292", "社区居住规模（人）": "1460", "入住率": "100.00%", "楼层": "7-17", "楼栋数": "3", "单元数": "4", "电梯总数": "5", "直线距离": "2400m" },
        { "项目名称": "江苏议事大厦", "区域": "鼓楼区", "项目地址": "中山北路95号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "280", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "33-33", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "1100m" },
        { "项目名称": "中山骏景", "区域": "鼓楼区", "项目地址": "中山北路333号", "项目等级": "AA级", "社区分类": "商务社区", "平均价格": "27482", "住户数": "279", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "29-29", "楼栋数": "1", "单元数": "2", "电梯总数": "8", "直线距离": "3000m" },
        { "项目名称": "苏宁银河国际广场", "区域": "鼓楼区", "项目地址": "山西路1号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "278", "社区居住规模（人）": "3520", "入住率": "100%", "楼层": "47-47", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "1200m" },
        { "项目名称": "万和尊邸", "区域": "玄武区", "项目地址": "中央路70号", "项目等级": "AAA级", "社区分类": "商务社区", "平均价格": "50046", "住户数": "274", "社区居住规模（人）": "2640", "入住率": "87.59%", "楼层": "8-15", "楼栋数": "2", "单元数": "3", "电梯总数": "7", "直线距离": "600m" },
        { "项目名称": "成贤公寓", "区域": "玄武区", "项目地址": "成贤街39号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "36272", "住户数": "270", "社区居住规模（人）": "1350", "入住率": "100.00%", "楼层": "10-32", "楼栋数": "2", "单元数": "6", "电梯总数": "8", "直线距离": "2800m" },
        { "项目名称": "华侨路26号小区", "区域": "鼓楼区", "项目地址": "华侨路26号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "38000", "住户数": "270", "社区居住规模（人）": "1350", "入住率": "100.00%", "楼层": "27-27", "楼栋数": "1", "单元数": "3", "电梯总数": "6", "直线距离": "2900m" },
        { "项目名称": "木马公寓", "区域": "玄武区", "项目地址": "卫巷1号  ", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "44435", "住户数": "260", "社区居住规模（人）": "1300", "入住率": "100.00%", "楼层": "7-24", "楼栋数": "3", "单元数": "3", "电梯总数": "9", "直线距离": "2400m" },
        { "项目名称": "长江花园", "区域": "玄武区", "项目地址": "估衣廊28号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "49079", "住户数": "252", "社区居住规模（人）": "1260", "入住率": "100.00%", "楼层": "13-13", "楼栋数": "4", "单元数": "6", "电梯总数": "6", "直线距离": "2800m" },
        { "项目名称": "时代华府", "区域": "玄武区", "项目地址": "进香河路33号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "250", "社区居住规模（人）": "", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "1900m" },
        { "项目名称": "民防大厦（南京）", "区域": "鼓楼区", "项目地址": "广州路189号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "240", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "30-30", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "2700m" },
        { "项目名称": "世界贸易中心大厦", "区域": "鼓楼区", "项目地址": "江苏路60号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "29000", "住户数": "220", "社区居住规模（人）": "1100", "入住率": "100.00%", "楼层": "32-32", "楼栋数": "2", "单元数": "2", "电梯总数": "6", "直线距离": "1500m" },
        { "项目名称": "华侨公寓（华侨路）", "区域": "鼓楼区", "项目地址": "华侨路33号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "41000", "住户数": "211", "社区居住规模（人）": "1055", "入住率": "100.00%", "楼层": "21-21", "楼栋数": "1", "单元数": "2", "电梯总数": "2", "直线距离": "3000m" },
        { "项目名称": "泰润公寓", "区域": "鼓楼区", "项目地址": "福建路12号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "46002", "住户数": "204", "社区居住规模（人）": "1020", "入住率": "100.00%", "楼层": "6-11", "楼栋数": "5", "单元数": "10", "电梯总数": "10", "直线距离": "2300m" },
        { "项目名称": "珠江一号", "区域": "玄武区", "项目地址": "珠江路1号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "203", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "56-56", "楼栋数": "1", "单元数": "1", "电梯总数": "9", "直线距离": "2400m" },
        { "项目名称": "紫峰", "区域": "鼓楼区", "项目地址": "中山北路1号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "200", "社区居住规模（人）": "3520", "入住率": "80.00%", "楼层": "89-89", "楼栋数": "1", "单元数": "1", "电梯总数": "9", "直线距离": "1300m" },
        { "项目名称": "华丰大厦", "区域": "鼓楼区", "项目地址": "北四卫头8号", "项目等级": "AA级", "社区分类": "商务社区", "平均价格": "32054", "住户数": "200", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "24-24", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1500m" },
        { "项目名称": "万谷京东云智慧产业园", "区域": "鼓楼区", "项目地址": "水佑岗8号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "200", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "3", "电梯总数": "8", "直线距离": "2000m" },
        { "项目名称": "紫府铭居", "区域": "鼓楼区", "项目地址": "广州路209号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "78403", "住户数": "200", "社区居住规模（人）": "1000", "入住率": "100.00%", "楼层": "25-25", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "2800m" },
        { "项目名称": "南京空军住宅小区", "区域": "玄武区", "项目地址": "曹后村30号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "28000", "住户数": "200", "社区居住规模（人）": "1000", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "3", "单元数": "9", "电梯总数": "9", "直线距离": "2800m" },
        { "项目名称": "春风大厦", "区域": "鼓楼区", "项目地址": "华侨路37号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "186", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "31-31", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "3000m" },
        { "项目名称": "金峰大厦", "区域": "鼓楼区", "项目地址": "中央路19号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "184", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "33-33", "楼栋数": "1", "单元数": "2", "电梯总数": "6", "直线距离": "1200m" },
        { "项目名称": "星汉城市花园", "区域": "鼓楼区", "项目地址": "水佐岗35号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "55846", "住户数": "180", "社区居住规模（人）": "900", "入住率": "100.00%", "楼层": "12-12", "楼栋数": "3", "单元数": "9", "电梯总数": "9", "直线距离": "1900m" },
        { "项目名称": "华能城市花园", "区域": "玄武区", "项目地址": "太平北路108号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "62334", "住户数": "180", "社区居住规模（人）": "900", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "4", "单元数": "9", "电梯总数": "9", "直线距离": "2800m" },
        { "项目名称": "开元新寓", "区域": "鼓楼区", "项目地址": "模范马路130号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "44672", "住户数": "176", "社区居住规模（人）": "880", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "2", "电梯总数": "2", "直线距离": "1500m" },
        { "项目名称": "海苑大厦", "区域": "鼓楼区", "项目地址": "广州路99号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "36135", "住户数": "176", "社区居住规模（人）": "880", "入住率": "100.00%", "楼层": "25-25", "楼栋数": "2", "单元数": "2", "电梯总数": "6", "直线距离": "2600m" },
        { "项目名称": "时尚空间", "区域": "鼓楼区", "项目地址": "马台街137号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "168", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "1100m" },
        { "项目名称": "五台东苑", "区域": "鼓楼区", "项目地址": "上海路36号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "29166", "住户数": "168", "社区居住规模（人）": "840", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "3", "电梯总数": "6", "直线距离": "2800m" },
        { "项目名称": "河海大厦", "区域": "鼓楼区", "项目地址": "西康路1-8号", "项目等级": "AA级", "社区分类": "商务社区", "平均价格": "56894", "住户数": "163", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "23-23", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "2500m" },
        { "项目名称": "金茂汇购物中心", "区域": "鼓楼区", "项目地址": "中央路201号", "项目等级": "AAA级", "社区分类": "高档百货商厦", "平均价格": "0", "住户数": "160", "社区居住规模（人）": "1320", "入住率": "97.50%", "楼层": "10-10", "楼栋数": "1", "单元数": "3", "电梯总数": "6", "直线距离": "0m" },
        { "项目名称": "工业大学教师公寓", "区域": "鼓楼区", "项目地址": "青石村199号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "25000", "住户数": "160", "社区居住规模（人）": "800", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "2", "单元数": "2", "电梯总数": "4", "直线距离": "1100m" },
        { "项目名称": "中储股份南京分公司宿舍楼", "区域": "鼓楼区", "项目地址": "小市新村42号", "项目等级": "A级", "社区分类": "住宅", "平均价格": "30252", "住户数": "160", "社区居住规模（人）": "800", "入住率": "100.00%", "楼层": "8-11", "楼栋数": "3", "单元数": "8", "电梯总数": "8", "直线距离": "2400m" },
        { "项目名称": "易发科技大厦（南京）", "区域": "鼓楼区", "项目地址": "广州路228号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "160", "社区居住规模（人）": "3520", "入住率": "96.88%", "楼层": "16-16", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2600m" },
        { "项目名称": "江苏国贸大厦（南京）", "区域": "鼓楼区", "项目地址": "山西路120号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "156", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1300m" },
        { "项目名称": "华侨大厦", "区域": "鼓楼区", "项目地址": "中山北路241号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "156", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "26-26", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "1500m" },
        { "项目名称": "核工桂花园", "区域": "鼓楼区", "项目地址": "察哈尔路16号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "42243", "住户数": "156", "社区居住规模（人）": "780", "入住率": "100.00%", "楼层": "16-16", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "2700m" },
        { "项目名称": "南京科技大厦", "区域": "鼓楼区", "项目地址": "新模范马路5号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "150", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "25-25", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "600m" },
        { "项目名称": "龙吟广场", "区域": "鼓楼区", "项目地址": "中山北路217号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "150", "社区居住规模（人）": "7040", "入住率": "100.00%", "楼层": "30-30", "楼栋数": "2", "单元数": "4", "电梯总数": "10", "直线距离": "1300m" },
        { "项目名称": "经典家园", "区域": "鼓楼区", "项目地址": "三牌楼大街109号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "47872", "住户数": "150", "社区居住规模（人）": "750", "入住率": "100.00%", "楼层": "11-18", "楼栋数": "4", "单元数": "4", "电梯总数": "5", "直线距离": "1800m" },
        { "项目名称": "中储股份南京生资市场", "区域": "鼓楼区", "项目地址": "中央北路河路道1号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "150", "社区居住规模（人）": "10560", "入住率": "100.00%", "楼层": "5-5", "楼栋数": "2", "单元数": "2", "电梯总数": "2", "直线距离": "2700m" },
        { "项目名称": "金山大厦A楼", "区域": "鼓楼区", "项目地址": "山西路8号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "140", "社区居住规模（人）": "3520", "入住率": "96.43%", "楼层": "34-34", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "1200m" },
        { "项目名称": "百盛国际大厦", "区域": "鼓楼区", "项目地址": "中央路233号", "项目等级": "AAA级", "社区分类": "商务社区", "平均价格": "42000", "住户数": "140", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "30-30", "楼栋数": "1", "单元数": "2", "电梯总数": "2", "直线距离": "200m" },
        { "项目名称": "宏景公寓", "区域": "鼓楼区", "项目地址": "新模范马路17号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "38041", "住户数": "135", "社区居住规模（人）": "675", "入住率": "81.48%", "楼层": "18-18", "楼栋数": "2", "单元数": "5", "电梯总数": "7", "直线距离": "1200m" },
        { "项目名称": "高楼门公寓", "区域": "玄武区", "项目地址": "高楼门66号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "54930", "住户数": "130", "社区居住规模（人）": "650", "入住率": "100.00%", "楼层": "14-18", "楼栋数": "1", "单元数": "4", "电梯总数": "6", "直线距离": "1000m" },
        { "项目名称": "南京长江电子集团综合楼", "区域": "鼓楼区", "项目地址": "芦席营97号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "130", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "13-13", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1300m" },
        { "项目名称": "云岭居", "区域": "鼓楼区", "项目地址": "厚载巷29号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "50824", "住户数": "127", "社区居住规模（人）": "635", "入住率": "100.00%", "楼层": "11-16", "楼栋数": "2", "单元数": "5", "电梯总数": "7", "直线距离": "1200m" },
        { "项目名称": "八一公寓", "区域": "鼓楼区", "项目地址": "华侨路81-1号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "46000", "住户数": "122", "社区居住规模（人）": "610", "入住率": "100.00%", "楼层": "24-24", "楼栋数": "1", "单元数": "3", "电梯总数": "4", "直线距离": "3000m" },
        { "项目名称": "欣芝园", "区域": "鼓楼区", "项目地址": "中央北路8号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "35536", "住户数": "121", "社区居住规模（人）": "605", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "4", "电梯总数": "4", "直线距离": "2500m" },
        { "项目名称": "天星翠琅大厦", "区域": "鼓楼区", "项目地址": "云南北路49号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "22-22", "楼栋数": "1", "单元数": "2", "电梯总数": "6", "直线距离": "800m" },
        { "项目名称": "南京中央城市奥莱", "区域": "鼓楼区", "项目地址": "中山北路86号", "项目等级": "AAA级", "社区分类": "高档百货商厦", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "5-5", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "1000m" },
        { "项目名称": "金山大厦B座", "区域": "鼓楼区", "项目地址": "山西路8号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "30-30", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "1200m" },
        { "项目名称": "江苏机械大厦", "区域": "鼓楼区", "项目地址": "中山北路49号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "33-33", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "1200m" },
        { "项目名称": "鸿德大厦", "区域": "鼓楼区", "项目地址": "云南路20号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "17-17", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "1300m" },
        { "项目名称": "蓁巷15号小区", "区域": "玄武区", "项目地址": "蓁巷15号", "项目等级": "A级", "社区分类": "住宅", "平均价格": "64880", "住户数": "120", "社区居住规模（人）": "600", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2400m" },
        { "项目名称": "东南大学教师公寓", "区域": "玄武区", "项目地址": "太平北路122号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "36000", "住户数": "120", "社区居住规模（人）": "600", "入住率": "100.00%", "楼层": "22-22", "楼栋数": "1", "单元数": "2", "电梯总数": "2", "直线距离": "2800m" },
        { "项目名称": "中南国际大厦", "区域": "鼓楼区", "项目地址": "中山路129号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "120", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "20-20", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "2800m" },
        { "项目名称": "亚都大厦", "区域": "鼓楼区", "项目地址": "建宁路22号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "116", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "2", "电梯总数": "5", "直线距离": "2400m" },
        { "项目名称": "兴江公寓", "区域": "玄武区", "项目地址": "高楼门51号", "项目等级": "A级", "社区分类": "住宅", "平均价格": "54954", "住户数": "112", "社区居住规模（人）": "560", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1200m" },
        { "项目名称": "香居美苑", "区域": "玄武区", "项目地址": "进香河31号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "47742", "住户数": "111", "社区居住规模（人）": "555", "入住率": "100.00%", "楼层": "15-15", "楼栋数": "2", "单元数": "4", "电梯总数": "8", "直线距离": "2300m" },
        { "项目名称": "博爱佳苑", "区域": "鼓楼区", "项目地址": "汉口西路21号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "50000", "住户数": "108", "社区居住规模（人）": "540", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "2300m" },
        { "项目名称": "玉麒麟雅苑", "区域": "鼓楼区", "项目地址": "四卫头88号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "53007", "住户数": "106", "社区居住规模（人）": "530", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "4", "电梯总数": "4", "直线距离": "1400m" },
        { "项目名称": "工业大学宿舍6号楼", "区域": "鼓楼区", "项目地址": "中山北路200号-2", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "30266", "住户数": "102", "社区居住规模（人）": "510", "入住率": "100.00%", "楼层": "22-22", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1300m" },
        { "项目名称": "北京西路八号办公楼", "区域": "鼓楼区", "项目地址": "北京西路8号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "3520", "入住率": "98.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1600m" },
        { "项目名称": "汉口路48号小区", "区域": "鼓楼区", "项目地址": "汉口路48号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "96061", "住户数": "100", "社区居住规模（人）": "500", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "4", "电梯总数": "4", "直线距离": "2200m" },
        { "项目名称": "熊猫金陵大酒店", "区域": "鼓楼区", "项目地址": "建宁路37号", "项目等级": "AA级", "社区分类": "酒店", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "1320", "入住率": "70%", "楼层": "23-23", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2300m" },
        { "项目名称": "红桥市场", "区域": "鼓楼区", "项目地址": "建宁路22号", "项目等级": "AA级", "社区分类": "其他", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "3-3", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2400m" },
        { "项目名称": "易发信息大厦", "区域": "鼓楼区", "项目地址": "广州路1号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "3520", "入住率": "90%", "楼层": "14-14", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2500m" },
        { "项目名称": "核工商务楼", "区域": "鼓楼区", "项目地址": "察哈尔路16号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2700m" },
        { "项目名称": "中山路99号", "区域": "鼓楼区", "项目地址": "中山路99号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "100", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2900m" },
        { "项目名称": "国展中央花园", "区域": "玄武区", "项目地址": "中央路278号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "75000", "住户数": "98", "社区居住规模（人）": "490", "入住率": "100.00%", "楼层": "7-11", "楼栋数": "2", "单元数": "5", "电梯总数": "5", "直线距离": "1000m" },
        { "项目名称": "星汉成贤大厦", "区域": "玄武区", "项目地址": "成贤街50号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "95", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "16-16", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2800m" },
        { "项目名称": "和平大厦(南京)", "区域": "玄武区", "项目地址": "北京东路22号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "92", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "23-23", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2200m" },
        { "项目名称": "汇杰公寓(南京)", "区域": "玄武区", "项目地址": "中山路268号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "47000", "住户数": "90", "社区居住规模（人）": "450", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "2100m" },
        { "项目名称": "虎踞北路10-2综合楼", "区域": "鼓楼区", "项目地址": "虎踞北路10-2号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "52492", "住户数": "90", "社区居住规模（人）": "450", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "3", "电梯总数": "3", "直线距离": "2700m" },
        { "项目名称": "蓝山国际公寓（南京）", "区域": "鼓楼区", "项目地址": "黑龙江路2号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "42689", "住户数": "88", "社区居住规模（人）": "440", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "2", "单元数": "2", "电梯总数": "2", "直线距离": "1700m" },
        { "项目名称": "匡芦花园", "区域": "鼓楼区", "项目地址": "匡芦路17号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "85362", "住户数": "88", "社区居住规模（人）": "440", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "2", "单元数": "5", "电梯总数": "5", "直线距离": "2200m" },
        { "项目名称": "天鹤文云大厦", "区域": "鼓楼区", "项目地址": "云南北路83号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "85", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "13-13", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "600m" },
        { "项目名称": "富升大厦", "区域": "玄武区", "项目地址": "傅厚岗1号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "21-21", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1000m" },
        { "项目名称": "长江科技大厦", "区域": "鼓楼区", "项目地址": "南昌路40号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "14-14", "楼栋数": "1", "单元数": "2", "电梯总数": "5", "直线距离": "1300m" },
        { "项目名称": "先锋奥特莱斯(南京)", "区域": "鼓楼区", "项目地址": "中央路417号", "项目等级": "AAA级", "社区分类": "高档百货商厦", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "1320", "入住率": "100.00%", "楼层": "5-5", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1700m" },
        { "项目名称": "汇杰广场", "区域": "玄武区", "项目地址": "中山路268号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "27-27", "楼栋数": "1", "单元数": "3", "电梯总数": "10", "直线距离": "2100m" },
        { "项目名称": "新世界百货_南京", "区域": "玄武区", "项目地址": "珠江路88号", "项目等级": "AAA级", "社区分类": "高档百货商厦", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "1320", "入住率": "93.75%", "楼层": "5-5", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2600m" },
        { "项目名称": "天诚大厦", "区域": "鼓楼区", "项目地址": "广州路199号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "80", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "22-22", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2800m" },
        { "项目名称": "金川国际科技园", "区域": "鼓楼区", "项目地址": "建宁路65号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "72", "社区居住规模（人）": "14080", "入住率": "97.22%", "楼层": "6-6", "楼栋数": "4", "单元数": "6", "电梯总数": "9", "直线距离": "2800m" },
        { "项目名称": "随园大厦(南京)", "区域": "鼓楼区", "项目地址": "广州路140号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "70", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "2", "电梯总数": "3", "直线距离": "2500m" },
        { "项目名称": "建伟大厦", "区域": "鼓楼区", "项目地址": "中山北路88号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "60", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "1", "电梯总数": "6", "直线距离": "1000m" },
        { "项目名称": "工业大学虹桥图书馆", "区域": "鼓楼区", "项目地址": "中山北路200号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "60", "社区居住规模（人）": "7040", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "2", "单元数": "2", "电梯总数": "3", "直线距离": "1400m" },
        { "项目名称": "苏州路17号公寓", "区域": "鼓楼区", "项目地址": "苏州路17号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "38598", "住户数": "60", "社区居住规模（人）": "300", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "3", "电梯总数": "3", "直线距离": "2200m" },
        { "项目名称": "科技大厦", "区域": "鼓楼区", "项目地址": "广州路37号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "60", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2600m" },
        { "项目名称": "牛顿公园文创产业园", "区域": "鼓楼区", "项目地址": "虎踞北路10-2号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "60", "社区居住规模（人）": "3520", "入住率": "96.67%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2700m" },
        { "项目名称": "珠江大厦(南京)", "区域": "玄武区", "项目地址": "珠江路280号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "60", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "27-27", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2800m" },
        { "项目名称": "鱼市街59_1号", "区域": "玄武区", "项目地址": "鱼市街59-1号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "56", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2300m" },
        { "项目名称": "南京朗诗寓建宁路店", "区域": "鼓楼区", "项目地址": "建宁路65号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "37000", "住户数": "56", "社区居住规模（人）": "280", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2600m" },
        { "项目名称": "朗诗寓建宁路店", "区域": "鼓楼区", "项目地址": "建宁路65号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "37000", "住户数": "56", "社区居住规模（人）": "280", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2600m" },
        { "项目名称": "百脑汇科技商城", "区域": "玄武区", "项目地址": "珠江路333号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "55", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2800m" },
        { "项目名称": "百脑汇科技城", "区域": "玄武区", "项目地址": "珠江路333号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "55", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2800m" },
        { "项目名称": "上海路82_3号小区", "区域": "鼓楼区", "项目地址": "上海路82-3号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "26000", "住户数": "54", "社区居住规模（人）": "270", "入住率": "100.00%", "楼层": "11-11", "楼栋数": "1", "单元数": "3", "电梯总数": "3", "直线距离": "2300m" },
        { "项目名称": "中盈福邸家园", "区域": "玄武区", "项目地址": "长江路90号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "48473", "住户数": "54", "社区居住规模（人）": "270", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "3", "电梯总数": "3", "直线距离": "3000m" },
        { "项目名称": "天将孝门", "区域": "鼓楼区", "项目地址": "将军庙40号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "42000", "住户数": "52", "社区居住规模（人）": "260", "入住率": "76.92%", "楼层": "27-27", "楼栋数": "1", "单元数": "4", "电梯总数": "10", "直线距离": "1400m" },
        { "项目名称": "西家大塘文化创意产业园", "区域": "玄武区", "项目地址": "天山路39号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "3-3", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "1000m" },
        { "项目名称": "名人城市广场(南京)", "区域": "鼓楼区", "项目地址": "中山北路30号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "34-34", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1100m" },
        { "项目名称": "鼓楼文化产业发展中心", "区域": "鼓楼区", "项目地址": "中山北路99号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "13-13", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1100m" },
        { "项目名称": "南京邮政大厦", "区域": "鼓楼区", "项目地址": "中山路366号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "34-34", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "1700m" },
        { "项目名称": "乾宁公寓28号", "区域": "鼓楼区", "项目地址": "马家街28号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "45689", "住户数": "50", "社区居住规模（人）": "250", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "3", "电梯总数": "3", "直线距离": "200m" },
        { "项目名称": "湖畔居商务楼", "区域": "玄武区", "项目地址": "龙蟠路151-1号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "10-10", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2200m" },
        { "项目名称": "公用金卡大厦", "区域": "玄武区", "项目地址": "龙蟠路167号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2700m" },
        { "项目名称": "金桥商务楼", "区域": "玄武区", "项目地址": "北京东路77-2号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2800m" },
        { "项目名称": "华侨路75号办公楼", "区域": "鼓楼区", "项目地址": "华侨路75号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "50", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "3000m" },
        { "项目名称": "市政府台城办公楼", "区域": "玄武区", "项目地址": "北京东路43-2号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "48", "社区居住规模（人）": "7040", "入住率": "100.00%", "楼层": "6-12", "楼栋数": "2", "单元数": "2", "电梯总数": "5", "直线距离": "2100m" },
        { "项目名称": "长发科技大厦", "区域": "玄武区", "项目地址": "珠江路222号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "47", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "18-18", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2700m" },
        { "项目名称": "苏粮国际大厦", "区域": "玄武区", "项目地址": "中山路338号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "45", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "32-32", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "1900m" },
        { "项目名称": "天和大厦（南京）", "区域": "鼓楼区", "项目地址": "中山北路216号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "45", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2200m" },
        { "项目名称": "人和佳园", "区域": "鼓楼区", "项目地址": "人和街13号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "54018", "住户数": "42", "社区居住规模（人）": "210", "入住率": "100.00%", "楼层": "10-10", "楼栋数": "2", "单元数": "2", "电梯总数": "4", "直线距离": "1300m" },
        { "项目名称": "江苏省省级机关管理干部学院", "区域": "鼓楼区", "项目地址": "湖北路42号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "40", "社区居住规模（人）": "7040", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "2", "单元数": "2", "电梯总数": "2", "直线距离": "900m" },
        { "项目名称": "苏建大厦", "区域": "鼓楼区", "项目地址": "云南路31号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "40", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "28-28", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "1600m" },
        { "项目名称": "市级机关住宅楼", "区域": "玄武区", "项目地址": "北京东路24号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "37000", "住户数": "40", "社区居住规模（人）": "200", "入住率": "100.00%", "楼层": "8-8", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2300m" },
        { "项目名称": "南空营院家属楼", "区域": "玄武区", "项目地址": "北京东路38号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "80237", "住户数": "40", "社区居住规模（人）": "200", "入住率": "100.00%", "楼层": "12-12", "楼栋数": "2", "单元数": "4", "电梯总数": "8", "直线距离": "2500m" },
        { "项目名称": "长发数码大厦", "区域": "玄武区", "项目地址": "洪武北路188号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "40", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "20-20", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "2700m" },
        { "项目名称": "新宁商务楼", "区域": "玄武区", "项目地址": "杨将军巷46号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "40", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "3000m" },
        { "项目名称": "永达集团商务楼", "区域": "鼓楼区", "项目地址": "湖南路6-7号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "38", "社区居住规模（人）": "3520", "入住率": "92.11%", "楼层": "9-9", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "400m" },
        { "项目名称": "天目华庭", "区域": "鼓楼区", "项目地址": "天目路19号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "68333", "住户数": "36", "社区居住规模（人）": "180", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "2", "电梯总数": "4", "直线距离": "2200m" },
        { "项目名称": "北东瓜市12、13号小区", "区域": "鼓楼区", "项目地址": "北东瓜市12、13号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "84076", "住户数": "36", "社区居住规模（人）": "180", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "2", "电梯总数": "2", "直线距离": "2300m" },
        { "项目名称": "龙全花园", "区域": "鼓楼区", "项目地址": "北京西路8号", "项目等级": "AAA级", "社区分类": "住宅", "平均价格": "37055", "住户数": "35", "社区居住规模（人）": "175", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1600m" },
        { "项目名称": "丹凤新寓(商务楼)", "区域": "玄武区", "项目地址": "大石桥街59号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "35", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2200m" },
        { "项目名称": "新月大厦", "区域": "玄武区", "项目地址": "珠江路48号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "35", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "12-12", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2600m" },
        { "项目名称": "宏图大厦", "区域": "鼓楼区", "项目地址": "中山北路219号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "34", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "23-23", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "1300m" },
        { "项目名称": "联通大厦(南京)", "区域": "玄武区", "项目地址": "中央路32号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "32", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "21-21", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "1200m" },
        { "项目名称": "南汽商务大厦", "区域": "鼓楼区", "项目地址": "芦席营68号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "30", "社区居住规模（人）": "3520", "入住率": "93.33%", "楼层": "16-16", "楼栋数": "1", "单元数": "1", "电梯总数": "4", "直线距离": "700m" },
        { "项目名称": "新联创业园", "区域": "鼓楼区", "项目地址": "马台街70号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "30", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "9-9", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "900m" },
        { "项目名称": "金建大厦", "区域": "鼓楼区", "项目地址": "水佐岗64号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "30", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "15-15", "楼栋数": "1", "单元数": "1", "电梯总数": "5", "直线距离": "1800m" },
        { "项目名称": "兴隆大厦", "区域": "玄武区", "项目地址": "龙蟠路9号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "30", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "22-22", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2000m" },
        { "项目名称": "燕语华庭商务楼", "区域": "鼓楼区", "项目地址": "和燕路5号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "30", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "5-5", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2600m" },
        { "项目名称": "省总工会科技楼", "区域": "鼓楼区", "项目地址": "中山北路202号", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "29", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "6-6", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1700m" },
        { "项目名称": "百新大厦", "区域": "玄武区", "项目地址": "百子亭6号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "24", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "900m" },
        { "项目名称": "金源大厦", "区域": "鼓楼区", "项目地址": "虎踞北路181号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "23", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "25-25", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "3000m" },
        { "项目名称": "省级机关办公综合楼", "区域": "鼓楼区", "项目地址": "西康路7号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "21", "社区居住规模（人）": "3520", "入住率": "95.24%", "楼层": "21-21", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "2400m" },
        { "项目名称": "金盛家居建宁路广场", "区域": "鼓楼区", "项目地址": "建宁路31号", "项目等级": "AA级", "社区分类": "高档百货商厦", "平均价格": "0", "住户数": "20", "社区居住规模（人）": "2640", "入住率": "100.00%", "楼层": "7-11", "楼栋数": "2", "单元数": "2", "电梯总数": "9", "直线距离": "2100m" },
        { "项目名称": "民主党派楼", "区域": "玄武区", "项目地址": "成贤街43号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "20", "社区居住规模（人）": "3520", "入住率": "100%", "楼层": "4-4", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "2700m" },
        { "项目名称": "五环大厦", "区域": "鼓楼区", "项目地址": "广州路191号", "项目等级": "AAA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "20", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "21-21", "楼栋数": "1", "单元数": "1", "电梯总数": "8", "直线距离": "2700m" },
        { "项目名称": "国鹏产业园", "区域": "鼓楼区", "项目地址": "虎踞北路72号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "20", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "2-5", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2700m" },
        { "项目名称": "太平商务大厦南京", "区域": "玄武区", "项目地址": "太平北路51号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "20", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "15-15", "楼栋数": "1", "单元数": "1", "电梯总数": "3", "直线距离": "3000m" },
        { "项目名称": "兴源商务中心", "区域": "鼓楼区", "项目地址": "山西路72号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "18", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "6-6", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "1300m" },
        { "项目名称": "南京金谷创客空间中心", "区域": "玄武区", "项目地址": "中央路284号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "18", "社区居住规模（人）": "3520", "入住率": "100%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1400m" },
        { "项目名称": "高云岭小区", "区域": "鼓楼区", "项目地址": "高云岭38号", "项目等级": "AA级", "社区分类": "住宅", "平均价格": "41815", "住户数": "14", "社区居住规模（人）": "70", "入住率": "100.00%", "楼层": "7-7", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "1100m" },
        { "项目名称": "江苏化工大厦", "区域": "鼓楼区", "项目地址": "北京西路17号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "12", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "10-10", "楼栋数": "1", "单元数": "1", "电梯总数": "2", "直线距离": "1900m" },
        { "项目名称": "南京市规划建设展览馆", "区域": "玄武区", "项目地址": "玄武路22号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "10", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "4-4", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "300m" },
        { "项目名称": "中山北路212号-1大院", "区域": "鼓楼区", "项目地址": "中山北路212号-1", "项目等级": "A级", "社区分类": "写字楼", "平均价格": "0", "住户数": "10", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "6-6", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "2000m" },
        { "项目名称": "苏菜大厦", "区域": "玄武区", "项目地址": "太平门街81号", "项目等级": "AA级", "社区分类": "写字楼", "平均价格": "0", "住户数": "7", "社区居住规模（人）": "3520", "入住率": "100.00%", "楼层": "6-6", "楼栋数": "1", "单元数": "1", "电梯总数": "1", "直线距离": "3000m" },
    ]
]