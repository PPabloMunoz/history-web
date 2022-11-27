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

export default function Cronologia({ objects1, objects2 }) {
  // console.log(objects1, objects2)
  return (
    <>
      <Navbar page='cronologia' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5 text-gray-800 dark:text-inherit'>
        Cronología
      </h2>

      <main className='px-7 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='overflow-x-auto'>
          <h3 className='text-center text-xl mb-3 underline text-gray-800 dark:text-inherit'>
            Bloques 1 y 2
          </h3>
          <table className='table w-full table-zebra table-compact'>
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Año</th>
                {/* <th>Definición</th> */}
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {objects1.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    {/* <td>{item.definition}</td> */}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* Bloque 3 y 4 */}
        <div className='overflow-x-auto'>
          <h3 className='text-center text-xl mb-3 underline text-gray-800 dark:text-inherit'>
            Bloques 3 y 4
          </h3>
          <table className='table w-full table-zebra table-compact'>
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Año</th>
                {/* <th>Definición</th> */}
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {objects2.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    {/* <td>{item.definition}</td> */}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
