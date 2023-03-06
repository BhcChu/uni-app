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

namespace app\view\controller\tpl;

use cmf\controller\AdminBaseController;

class SystemController extends AdminBaseController {

	public function about() {
		return $this->fetch();
	}
	public function get() {
		return $this->fetch();
	}
	public function theme() {
		return $this->fetch();
	}
	public function more() {
		return $this->fetch();
	}

}
