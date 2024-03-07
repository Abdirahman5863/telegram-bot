import { Markup, Telegraf, Context } from "telegraf";
import { config } from "../config/config";

const bot = new Telegraf(config.BOT_TOKEN);
// bot.start((ctx) => {
//   ctx.reply("Hello " + ctx.from.first_name + "!");
// });
bot.start((ctx) => {
  ctx.reply(
    `Welcome to the ULTIMATE Trading Bot
    Please Select A Platform:`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📊 BYBIT 📊", callback_data: "bybit" },
            { text: "📊 BINANCE 📊", callback_data: "binance" },
          ],
        ],
      },
    }
  );
});

bot.command("BYBIT", async (ctx: Context) => {
  return await ctx.reply(
    "Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"], // Row1 with 2 buttons
      ["Get Price", "Cancel Orders"], // Row2 with 2 buttons
      ["Wallet Balance", "Active Orders"], // Row3 with 2 buttons
      ["Historical Orders"], // Row4 with 1 button
    ])
      .oneTime()
      .resize()
  );
});
bot.command("BINANCE", async (ctx: Context) => {
  return await ctx.reply(
    "Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"], // Row1 with 2 buttons
      ["Get Price", "Cancel Orders"], // Row2 with 2 buttons
      ["Wallet Balance", "Active Orders"], // Row3 with 2 buttons
      ["Historical Orders"], // Row4 with 1 button
    ])
      .oneTime()
      .resize()
  );
});
bot.hears("menu", async (ctx: Context) => {
  return await ctx.reply(
    "Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"], // Row1 with 2 buttons
      ["Get Price", "Cancel Orders"], // Row2 with 2 buttons
      ["Wallet Balance", "Active Orders"], // Row3 with 2 buttons
      ["Historical Orders"], // Row4 with 1 button
    ])
      .oneTime()
      .resize()
  );
});
bot.command("menu", async (ctx: Context) => {
  return await ctx.reply(
    "Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"], // Row1 with 2 buttons
      ["Get Price", "Cancel Orders"], // Row2 with 2 buttons
      ["Wallet Balance", "Active Orders"], // Row3 with 2 buttons
      ["Historical Orders"], // Row4 with 1 button
    ])
      .oneTime()
      .resize()
  );
});

bot.action("bybit", async (ctx: Context) => {
  await ctx.answerCbQuery();
  return await ctx.reply(
    "You have selected BYBIT. Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"], // Row1 with 2 buttons
      ["Get Price", "Cancel Orders"], // Row2 with 2 buttons
      ["Wallet Balance", "Active Orders"], // Row3 with 2 buttons
      ["Historical Orders"], // Row4 with 1 button
    ])
      .oneTime()
      .resize()
  );
});

bot.action("binance", async (ctx: Context) => {
  await ctx.answerCbQuery();
  return await ctx.reply(
    "You have selected BINANCE. Choose an option:",
    Markup.keyboard([
      ["Place Orders", "View Orders"],
      ["Get Price", "Cancel Orders"],
      ["Wallet Balance", "Active Orders"],
      ["Historical Orders"],
    ])
      .oneTime()
      .resize()
  );
});
// bot.command("menu", (ctx) => {
//   return ctx.reply(
//     "random example",
//     Markup.inlineKeyboard([
//       Markup.button.callback("Place Orders", "View Orders"),
//       Markup.button.callback("Get Price", "Cancel Orders"),
//       Markup.button.callback("Wallet Balance", "Active Orders"),
//       Markup.button.callback("Historical Orders", ""),
//     ])
//   );
// });
export { bot };
