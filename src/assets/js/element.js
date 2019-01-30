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
	Pagination,
	Form,
	FormItem,
	Carousel,
	CarouselItem
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
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$message = Message;