import Vue from 'vue';
import {
	Input,
	Button,
	Radio,
	Select,
	Message,
	Container,
	Header,
	Aside,
	Main,
	Menu,
	Submenu,
	MenuItemGroup,
	MenuItem,
	Table,
	TableColumn,
	Pagination
} from 'element-ui';

Vue.use(Input)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.prototype.$message = Message;