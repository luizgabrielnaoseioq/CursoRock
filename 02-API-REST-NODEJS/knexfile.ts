import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      extension: 'ts'
    },
  },
}

export default config