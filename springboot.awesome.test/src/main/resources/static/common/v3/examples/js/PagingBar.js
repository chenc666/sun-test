/**
 * 声明Cmp扩展模块的位置
 */
Cmp.config([{
	//模块标识: 只需要定义一级模块的名字就行了。
	module : 'Cmp',
	//模块资源位置，注意：路径是相对这个脚本的。
	baseUrl : '../../cmps/ext/src',
	//CSS资源的位置，因为不是一个目录的，所以要另行配置
	baseCssUrl : '../../cmps/css/src'
},{
	module : 'Exp',
	baseUrl : '../src'
}]);

Cmp.require([
	'Exp.WidgetViewer'
],
function(viewClazz){
	var view = new viewClazz({
		module : 'Cmp.PagingBar',
		initConfig : {
		}
	});	
	view.render(Cmp.getBody());
}
);