
## taskmgr
angular6实现企业级协作平台

#### 版本
angular 6.0.3
material 6.4.5

#### 新建项目
ng new taskmgr --skip-install --style=scss  // 创建项目时不自动安装nodmodules依赖库, 并使用scss

#### 依赖安装
  date-fns安装
    npm install date-fns --save
    npm i --save-dev @types/date-fns

#### 错误集锦
##### 1. material 导入出错
导入material组件库时单独建一个material.module.ts文件，将用到的组建都导进去并导出来，然后在一个share.module.ts文件导入，并导出，然后将share.module.ts文件在app.moudle.ts导入，material.module.ts文件不要直接在app.module.ts文件中导入，会出错。

##### 2. 错误：RROR Error: StaticInjectorError(AppModule)[RouterOutlet -> ChildrenOutletContexts]: 
StaticInjectorError(Platform: core)[RouterOutlet -> ChildrenOutletContexts]: 
    NullInjectorError: No provider for ChildrenOutletContexts!
	
   解决： RouterModule.forChild(routes)  改为  RouterModule.forRoot(routes)

##### 3. scss文件引入样式不起作用
styles: ['./sidebar.component.scss'] 改为 styleUrls: ['./sidebar.component.scss']


