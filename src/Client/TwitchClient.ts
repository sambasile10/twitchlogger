import * as tmi from 'tmi.js'

export class TwitchClient {

    private client: tmi.Client;
    private channelList: string[];

    constructor(channelList: string[]) {
        this.channelList = channelList;
        this.client = new tmi.Client({
            options: { debug: true },
            connection: {
                secure: true,
                reconnect: true
            },
            //TODO identity
            channels: channelList
        });
    }

    protected async start(): Promise<void> {
        await this.connect();
        this.listen();
    }

    private connect(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.client.connect().then((res) => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    private listen(): void {
        this.client.on("chat", (channel, userstate, message, self) => {
            if(self) { return; }

            //const username: string = userstate['display-name'];
        });
    }
}