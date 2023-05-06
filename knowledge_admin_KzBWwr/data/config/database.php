<?php

// +----------------------------------------------------------------------
// | 万岳科技开源系统 [由山东万岳信息科技有限公司提供]
// +----------------------------------------------------------------------
// | 版权所有 © 2020~2022 https://git.sdwanyue.com，保留所有权利
// +----------------------------------------------------------------------
// | 本开源系统为万岳科技提供的教育行业解决方案，旨在帮助教育机构快速搭建高效便捷的教学管理系统
// +----------------------------------------------------------------------
// | 该开源系统可免费学习使用或自用运营，但在展示前端内容时需注明“代码来源于万岳科技开源项目”，并且不得使用万岳科技相关信息.
// +----------------------------------------------------------------------
// | 作者：万岳科技开源官方 wanyuekj2020@163.com
// +----------------------------------------------------------------------

/**
 * 配置文件
 */

return [
    // 数据库类型
    'type'     => 'mysql',
    // 服务器地址
    'hostname' => '127.0.0.1',
    // 数据库名
    'database' => '',
    // 用户名
    'username' => '',
    // 密码
    'password' => '',
    // 端口
    'hostport' => '3306',
    // 数据库编码默认采用utf8
    'charset'  => 'utf8mb4',
    // 数据库表前缀
    'prefix'   => 'cmf_',
    "authcode" => 'uV1sDvmUeV9Lcva00i',
    //#COOKIE_PREFIX#
	
	/* redis */
	'REDIS_HOST' => "127.0.0.1",
	'REDIS_AUTH' => "",
	'REDIS_PORT' => "6379",
	 'REDIS_SELECT' => 0,
];
