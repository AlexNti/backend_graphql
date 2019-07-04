const {forwardTo} =require('prisma-binding');

const Query = {
    items:forwardTo('db'),
    item:forwardTo('db'),
    itemsConnection: forwardTo('db')
}; //forward to prism without athenctication etc...


// const Query = {
// async items(parent,args,ctx,info){
//     const items = await ctx.db.query.items();
//     return items;

// }

// };

module.exports = Query;
