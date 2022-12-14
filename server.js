const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()

  //* Queries
  const find = await prisma.secondBlock.findMany()
  console.log(find)

  const create = await prisma.secondBlock.create({
    data: {
      name: 'Canal de Castilla',
      year: 'XVIII-XIX',
      definition: ''
    }
  })
  console.log(create)

  // const update = await prisma.firstBlock.update({
  //   where: {
  //     id:
  //   },
  //   data: {
  //     // year: '',
  //     // definition: ''
  //   }
  // })
  // console.log(update)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
