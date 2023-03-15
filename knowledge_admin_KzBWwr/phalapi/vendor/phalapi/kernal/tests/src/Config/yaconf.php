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


if (!class_exists('Yaconf', false)) {
    class Yaconf {
        public static function __callStatic($method, $params) {
            if (empty($_ENV['silence'])) {
                echo "Yaconf::$method()...\n";
            }

            if ($method == 'get') {
                return 'PhalApi';
            } else if ($method == 'has') {
                return true;
            }
        }
    }
}
