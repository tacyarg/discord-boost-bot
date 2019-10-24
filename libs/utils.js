exports.envToConfig = env => {
  return {
    discord: {
      key: env.DISCORD_TOKEN,
      channel: env.DISCORD_CHANNEL
    }
  }
}
