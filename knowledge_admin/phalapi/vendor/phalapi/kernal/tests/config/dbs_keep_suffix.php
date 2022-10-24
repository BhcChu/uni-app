<?php
// +----------------------------------------------------------------------
// |万岳科技开源系统 [山东万岳信息科技有限公司]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2022 https://www.sdwanyue.com All rights reserved.
// +----------------------------------------------------------------------
// | 万岳科技相关开源系统代码并不是自由软件，未经授权许可不能去掉wanyue【万岳科技】相关版权并商用
// +----------------------------------------------------------------------
// | Author: 万岳科技开源官方 < wanyuekj2020@163.com >
// +----------------------------------------------------------------------

/**
 * 分库分表的自定义数据库路由配置
 * 
 * @author: dogstar
 */

return array(
    /**
     * DB数据库服务器集群
     */
    'servers' => array(
        'DB_A' => array(
            'host'      => '127.0.0.1',           //数据库域名
            'name'      => 'phalapi_test',                  //数据库名字
            'user'      => 'dogstar',                  //数据库用户名
            'password'  => '123',                //数据库密码
            'port'      => '3306',                  //数据库端口
        ),
        'DB_DEMO' => array(
            'host'      => '127.0.0.1',           //数据库域名
            'name'      => 'phalapi_test',                  //数据库名字
            'user'      => 'dogstar',                  //数据库用户名
            'password'  => '123',                //数据库密码
            'port'      => '3306',                  //数据库端口
        ),
    ),

    /**
     * 自定义路由表
     */
    'tables' => array(
        '__default__' => array(
            'prefix' => 'tbl_',
            'key' => 'id',
            'keep_suffix_if_no_map' => true,        // 当分表未匹配时依然保留数字作为表后缀
            'map' => array(
                array('db' => 'DB_A'),
            ),
        ),
        'demo' => array(
            'prefix' => 'tbl_',
            'key' => 'id',
            'map' => array(
                array('db' => 'DB_A'),
                array('start' => 0, 'end' => 2, 'db' => 'DB_A'),
                array('start' => 3, 'end' => 5, 'db' => 'DB_DEMO'),
            ),
        ),
    ),
);
