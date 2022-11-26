import { PrismaClient } from '@prisma/client'
import Navbar from './components/Navbar'

const prisma = new PrismaClient()

export async function getStaticProps() {
  const objects1 = await prisma.firstBlock.findMany()
  const objects2 = await prisma.secondBlock.findMany()

  return {
    props: { objects1, objects2 }
  }
}

export default function vocabulario({ objects1, objects2 }) {
  return (
    <>
      <Navbar page='vocabulario' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5'>
        Vocabulario
      </h2>

      <main className='px-7 flex flex-col w-full lg:flex-row'>
        <div className='pb-10'>
          <h3 className='text-xl underline'>Bloque 1 y 2</h3>
          <ul>
            {objects1.map((e) => {
              return (
                <li key={e.id} className='pb-2'>
                  <h4 className='font-semibold text-lg'>{e.name}</h4>
                  <p>- {e.definition}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='divider lg:divider-horizontal' />
        <div>
          <h3 className='text-xl underline'>Bloque 3 y 4</h3>
          <ul>
            {objects2.map((e) => {
              return (
                <li key={e.id} className='pb-2'>
                  <h4 className='font-semibold text-lg'>{e.name}</h4>
                  <p>- {e.definition}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}
