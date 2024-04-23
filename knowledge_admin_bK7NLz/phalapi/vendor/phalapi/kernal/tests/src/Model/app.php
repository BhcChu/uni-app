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


namespace App\Model;

use PhalApi\Tests\NotORMTest;

class Tmp extends NotORMTest {

    public function getTableName($id = NULL) {
        return 'tmp2';
    }
}

class Test extends NotORMTest {

    public function getTableName($id) {
        return parent::getTableName($id);
    }
}

class DefaultTbl extends NotORMTest {
}

class UserFriends extends NotORMTest {
}

