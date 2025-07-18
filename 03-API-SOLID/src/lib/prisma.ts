import { env } from '@/env'
import { PrismaClient } from 'generated/prisma'

export const prisma = new PrismaClient({
  // Se o ambiente for de desenvolvimento,
  // mostra as queries no console
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
