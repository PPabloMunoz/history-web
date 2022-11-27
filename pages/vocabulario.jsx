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

  return (
    <>
      <Navbar page='vocabulario' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5'>
        Vocabulario
      </h2>

      <main className='px-7 py-5 flex flex-col w-full lg:flex-row'>
        <div className='pb-10 lg:w-[49%]'>
          <h3 className='text-xl underline'>Bloque 1 y 2</h3>
          <div className='my-6 form-control'>
            <div className='justify-center items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                className='input input-bordered w-full rounded-lg'
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

        <div className='divider lg:divider-horizontal' />

        <div className='lg:w-[49%]'>
          <h3 className='text-xl underline'>Bloque 3 y 4</h3>
          <div className='my-6 form-control'>
            <div className='justify-center items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                className='input input-bordered w-full rounded-lg'
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
        </div>
      </main>
    </>
  )
}
