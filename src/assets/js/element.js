import Vue from 'vue';
import {
	Button,
	Select,
	Message,
	Container,
	Header,
	Aside,
	Main
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.prototype.$message = Message;