exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Vous n'êtes pas dans un canal vocal!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Aucune musique en cours de lecture!`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - La musique actuelle vient d'être **ignorée** !`);

};
