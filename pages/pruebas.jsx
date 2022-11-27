import { PrismaClient } from '@prisma/client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const prisma = new PrismaClient()

export async function getStaticProps() {
  const objects1 = await prisma.firstBlock.findMany()
  const objects2 = await prisma.secondBlock.findMany()

  return {
    props: { objects1, objects2 }
  }
}

function aleatory(data) {
  const random = []
  let temp = data

  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * temp.length)
    let rValue = temp[rand]

    while (random.includes(rValue)) {
      rand = Math.floor(Math.random() * temp.length)
      rValue = temp[rand]
    }
    random.push(rValue)

    temp = temp.filter((e) => e !== rValue)
  }

  // console.log(random, 'random')

  return random
}

export default function Bloque1_2({ objects1, objects2 }) {
  const [firstBlock, updateFirst] = useState([])
  const [secondBlock, updateSecond] = useState([])

  useEffect(() => {
    updateFirst(aleatory(objects1))
    updateSecond(aleatory(objects2))
  }, [])

  // console.log(firstBlock, 'first')

  return (
    <>
      <Navbar page='pruebas' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5 text-gray-900 dark:text-inherit'>
        Pruebas
      </h2>

      <main className='px-7 grid grid-cols-2 gap-10 text-gray-800 dark:text-inherit'>
        <div>
          <h3 className='text-center underline pb-5 text-xl'>Bloque 1 y 2</h3>
          <div className='flex flex-col gap-2 pb-9'>
            {firstBlock.map((e) => {
              return (
                <p
                  key={e.id}
                  className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-sm dark:text-white'
                >
                  {e.name}
                </p>
              )
            })}
          </div>
          <button
            type='btn'
            className='btn btn-primary w-full bg-[#865ad1] dark:bg-primary'
            onClick={() => {
              updateFirst(aleatory(objects1))
            }}
          >
            Resetear
          </button>
        </div>

        <div>
          <h3 className='text-center underline pb-5 text-xl'>Bloque 3 y 4</h3>
          <div className='flex flex-col gap-2 pb-9'>
            {secondBlock.map((e) => {
              return (
                <p
                  key={e.id}
                  className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-sm dark:text-white'
                >
                  {e.name}
                </p>
              )
            })}
          </div>
          <button
            type='btn'
            className='btn btn-primary w-full bg-[#865ad1] dark:bg-primary'
            onClick={() => {
              updateSecond(aleatory(objects2))
            }}
          >
            Resetear
          </button>
        </div>
      </main>
    </>
  )
}
