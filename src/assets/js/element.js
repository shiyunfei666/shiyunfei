import Vue from 'vue';
import {
	Input,
	Button,
	Radio,
	Select,
	Checkbox,
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
	CarouselItem,
	MessageBox,
    Dialog,
    Alert,
} from 'element-ui';

Vue.use(Input)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Checkbox)
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
Vue.use(Dialog);
Vue.use(Alert);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;