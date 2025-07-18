import { prisma } from '@/lib/prisma'
import { Prisma } from 'generated/prisma'
import { UserRepository } from '../users-repository'

/**
 * Este arquivo define o repositório de usuários utilizando o Prisma ORM.
 *
 * - Importa a instância do Prisma configurada em '@/lib/prisma'.
 * - Importa os tipos do Prisma gerados automaticamente, em especial o tipo 'UserCreateInput'.
 *
 * Classe:
 *
 * PrismaUsersRepository:
 *   - Método 'create(data: Prisma.UserCreateInput)':
 *     - Recebe os dados necessários para criar um novo usuário no banco de dados.
 *     - Utiliza o método 'prisma.user.create' para inserir o usuário.
 *     - Retorna o usuário criado.
 *
 * Este repositório serve como uma camada de abstração para operações relacionadas a usuários,
 * facilitando a manutenção e possíveis trocas de implementação futura.
 */

export class PrismaUsersRepository implements UserRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
