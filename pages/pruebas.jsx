import { PrismaClient } from '@prisma/client'

import { useState, useEffect } from 'react'
import { Reorder } from 'framer-motion'
import Navbar from '../components/Navbar'
import { useUserContext } from '../context/userContext'

const prisma = new PrismaClient()

export async function getStaticProps() {
  const objects1 = await prisma.firstBlock.findMany()
  const objects2 = await prisma.secondBlock.findMany()

  for (let i = 0; i < objects1.length; i++) {
    objects1[i] = objects1[i].name
  }

  for (let i = 0; i < objects2.length; i++) {
    objects2[i] = objects2[i].name
  }

  return {
    props: { objects1, objects2 }
  }
}

function aleatory(data, iterations) {
  const random = []
  let temp = data
  temp = temp.filter((item) => item !== undefined)

  for (let i = 0; i < iterations; i++) {
    let rand = Math.floor(Math.random() * temp.length)
    let rValue = temp[rand]

    while (random.includes(rValue)) {
      rand = Math.floor(Math.random() * temp.length)
      rValue = temp[rand]
    }
    random.push(rValue)

    temp = temp.filter((e) => {
      return e !== rValue
    })
  }

  return random
}

export default function Pruebas({ objects1, objects2 }) {
  const { dark } = useUserContext()
  const [firstBlock, updateFirst] = useState([])
  const [secondBlock, updateSecond] = useState([])
  const [num, updateNum] = useState(7)

  useEffect(() => {
    updateFirst(aleatory(objects1, num))
    updateSecond(aleatory(objects2, num))
  }, [num, objects1, objects2])

  console.log(firstBlock, 'f')
  console.log(secondBlock, 's')

  return (
    <div className={dark ? 'dark bg-[#181818] h-screen' : 'bg-white h-screen'}>
      <Navbar page='pruebas' />
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5 text-gray-900 dark:text-inherit'>
        Pruebas
      </h2>

      {/* Rango */}
      <div className='mx-24 mb-10'>
        <p>Numero de palabras: {num}</p>
        <input
          type='range'
          min='3'
          max={objects1.length}
          defaultValue='7'
          className='range range-xs lg:range-sm my-3'
          onChange={(e) => updateNum(e.target.value)}
        />
      </div>

      <main className='px-7 pb-7 grid grid-cols-2 gap-10 text-gray-800 dark:text-inherit'>
        <div>
          <h3 className='text-center underline text-xl mb-5'>Bloque 1 y 2</h3>
          <button
            type='btn'
            className='btn btn-primary w-full bg-[#865ad1] dark:bg-primary'
            onClick={() => {
              updateFirst(aleatory(objects1, num))
            }}
          >
            Resetear
          </button>
          <div className='flex flex-col gap-2 pb-9'>
            <Reorder.Group
              axis='y'
              values={firstBlock}
              onReorder={updateFirst}
              className='py-2'
            >
              {firstBlock.map((item) => (
                <Reorder.Item
                  key={item}
                  value={item}
                  className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-sm dark:text-white my-2'
                >
                  {item}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>

        <div>
          <h3 className='text-center underline text-xl mb-5'>Bloque 3 y 4</h3>
          <button
            type='btn'
            className='btn btn-primary w-full bg-[#865ad1] dark:bg-primary'
            onClick={() => {
              updateSecond(aleatory(objects2, num))
            }}
          >
            Resetear
          </button>
          <div className='flex flex-col gap-2 pb-9'>
            <Reorder.Group
              axis='y'
              values={secondBlock}
              onReorder={updateSecond}
              className='py-2'
            >
              {secondBlock.map((item) => (
                <Reorder.Item
                  key={item}
                  value={item}
                  className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-sm dark:text-white my-2'
                >
                  {item}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      </main>
    </div>
  )
}
