import { Client } from 'pg';

export async function getClient() {
   // const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
    const client = new Client("postgres://yjfxcxei:3TYIUgLjvvN74-MxXtL-97UaT9hQdeVd@john.db.elephantsql.com/yjfxcxei");
    await client.connect();
    return client;
}