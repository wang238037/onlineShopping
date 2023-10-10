// 引入mockjs模块
import Mock from 'mockjs';
// 把json数据格式引入
// webpack默认对外暴露的：图片、json数据格式
import banners from './banners.json';
import floors from './floors.json';

// 提供广告位轮播数据的接口
Mock.mock('/mock/banners', {
    code: 200,
    data: banners
})

// 提供所有楼层数据的接口
Mock.mock('/mock/floors', {
    code: 200,
    data: floors
})

