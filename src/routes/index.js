const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log('before debug')
  debugger
  console.log('after debugger')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
}) 

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const {userName} = ctx.params
  ctx.body = {
    title: "this is profile page",
    userName
  }
})
module.exports = router
