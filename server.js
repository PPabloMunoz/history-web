const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()

  //* Queries
  const find = await prisma.secondBlock.findMany()
  console.log(find)

  // const create = await prisma.secondBlock.create({
  //   data: {
  //     name: 'Concilio de Trento',
  //     year: '1545-1563',
  //     definition:
  //       'Concilio de la Iglesia católica, celebrado entre 1545 y 1563 en la ciudad italiana de Trento, convocado por el papa Pablo III. Fue la respuesta de la Iglesia Católica a la reforma protestante y sus conclusiones configuraron la actuación eclesial durante los tres siglos siguientes'
  //   }
  // })
  // console.log(create)

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
