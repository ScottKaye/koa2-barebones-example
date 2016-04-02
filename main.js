// Start using koa2 as normal

import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const MainRouter = new Router();

app.use(MainRouter.routes());

MainRouter.get("/", async (ctx, next) => {
	ctx.body = [1, 2, 3, 4, 5];
	await next();
});

app.listen(3000, () => {
	console.log("App listening on port 3000.");
});