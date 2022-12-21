import { PrismaClient } from '@prisma/client'
import { useState } from 'react'
import Navbar from './components/Navbar'

const prisma = new PrismaClient()

export async function getStaticProps() {
  const objects1 = await prisma.firstBlock.findMany()
  const objects2 = await prisma.secondBlock.findMany()

  return {
    props: { objects1, objects2 }
  }
}

export default function Vocabulario({ objects1, objects2 }) {
  const [query, updateQuery] = useState('')
  const [query2, updateQuery2] = useState('')
  const [bloque, setBloque] = useState(1)

  return (
    <>
      <Navbar page='vocabulario' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5 text-gray-800 dark:text-inherit'>
        Vocabulario
      </h2>
      <div className='flex justify-around items-center text-xl'>
        <h4
          className={
            bloque === 1 ? 'underline cursor-pointer' : 'cursor-pointer'
          }
          onClick={() => setBloque(1)}
        >
          Bloque 1 y 2
        </h4>
        <h4
          className={
            bloque === 2 ? 'underline cursor-pointer' : 'cursor-pointer'
          }
          onClick={() => setBloque(2)}
        >
          Bloque 3 y 4
        </h4>
      </div>

      <main className='px-5 py-5 flex flex-col w-full text-gray-800 dark:text-inherit'>
        <div className='pb-10'>
          <h3 className='text-xl underline'>Bloque 1 y 2</h3>
          <div className='my-6 form-control'>
            <div className='justify-center items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                className='input input-bordered w-full rounded-lg bg-gray-200 dark:bg-[#2A303C] placeholder:text-gray-800 dark:placeholder:text-inherit'
                onChange={(e) => updateQuery(e.target.value)}
              />
            </div>
          </div>

          <ul>
            {objects1
              .filter((data) => data.name.toLowerCase().includes(query))
              .map((e) => {
                return (
                  <li key={e.id} className='pb-2'>
                    <h4 className='font-semibold text-lg'>{e.name}</h4>
                    <p>- {e.definition}</p>
                  </li>
                )
              })}
          </ul>
        </div>

        {/* <div className='lg:w-[49%]'>
          <h3 className='text-xl underline'>Bloque 3 y 4</h3>
          <div className='my-6 form-control'>
            <div className='justify-center items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                className='input input-bordered w-full rounded-lg bg-gray-200 dark:bg-[#2A303C] placeholder:text-gray-800 dark:placeholder:text-inherit'
                onChange={(e) => updateQuery2(e.target.value)}
              />
            </div>
          </div>
          <ul>
            {objects2
              .filter((data) => data.name.toLowerCase().includes(query2))
              .map((e) => {
                return (
                  <li key={e.id} className='pb-2'>
                    <h4 className='font-semibold text-lg'>{e.name}</h4>
                    <p>- {e.definition}</p>
                  </li>
                )
              })}
          </ul>
        </div> */}
      </main>
    </>
  )
}
