const Discord = require("discord.js");
const client = new Discord.Client();

//1. Import coingecko-api
const CoinGecko = require("coingecko-api");

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var callFunction = async (coinToSearch) => {
  try {
    let returnData = await CoinGeckoClient.coins.fetch(coinToSearch, {});
    return returnData;
  } catch (error) {
    console.log(error);
  }
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  // client.on('message', message => {
  if (!message.content.startsWith("!") || message.author.bot) return;

  const args = message.content.slice(1).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command == "coin") {
    for (const Coin in args) {
      console.log(args[Coin]);
    }
  }
  if (command == "twitterUpdate") {
    for (const User in args) {
    }
  }
});

client.login(process.env.discord_token);
