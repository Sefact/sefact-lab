import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routesList } from './router';
import { createPinia } from 'pinia';

export const createApp = ViteSSG(App, { routes: routesList }, ({ app, router, routes, isClient, initialState }) => {
	const pinia = createPinia();
	app.use(pinia);

	router.beforeEach((to, from, next) => {
		next();
	});
});
