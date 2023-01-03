import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar'
import { cronologia, prueba, vocabulario } from '../assets'

import { useUserContext } from '../context/userContext'

export default function Home() {
  const { dark } = useUserContext()
  return (
    <div className={dark ? 'dark bg-[#181818] h-screen' : 'bg-white h-screen'}>
      <Navbar page='home' />

      <h1 className='text-center my-9 uppercase font-bold text-4xl px-5 text-gray-800 dark:text-inherit'>
        Cronología y Vocabulario - Historia 2º BACH
      </h1>

      <main className='px-7 mt-24 pb-7 h-100'>
        <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          <div
            className='card bg-base-100 bg-transparent'
            style={{ 'box-shadow': '0px -24px 31px 9px rgba(0,0,0,0.1)' }}
          >
            <figure>
              <Image
                src={vocabulario}
                alt='Shoes'
                className='h-80 object-cover'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5 dark:bg-base-100 bg-[#c1c1c1] rounded-b-2xl'>
              <h2 className='card-title justify-center dark:text-inherit text-gray-800'>
                Vocabulario
              </h2>
              <div className='flex flex-row justify-center items-center gap-2'>
                <Link href='/vocabulario' className='w-full'>
                  <button className='btn btn-primary w-full'>Repasar</button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className='card bg-base-100 bg-transparent'
            style={{ 'box-shadow': '0px -24px 31px 9px rgba(0,0,0,0.1)' }}
          >
            <figure>
              <Image
                src={cronologia}
                alt='Shoes'
                className='h-80 object-cover'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5 dark:bg-base-100 bg-[#c1c1c1] rounded-b-2xl'>
              <h2 className='card-title justify-center dark:text-inherit text-gray-800'>
                Cronologia
              </h2>
              <Link href='/cronologia' className='w-full'>
                <button className='btn btn-primary w-full'>Repasar</button>
              </Link>
            </div>
          </div>

          <div
            className='card bg-base-100 bg-transparent md:col-span-2 lg:col-span-1'
            style={{ 'box-shadow': '0px -24px 31px 9px rgba(0,0,0,0.1)' }}
          >
            <figure>
              <Image
                src={prueba}
                alt='Shoes'
                className='h-80 object-cover'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5 dark:bg-base-100 bg-[#c1c1c1] rounded-b-2xl'>
              <h2 className='card-title justify-center dark:text-inherit text-gray-800'>
                Pruebas
              </h2>
              <div className='flex flex-row justify-center items-center gap-2'>
                <Link href='/pruebas' className='w-full'>
                  <button className='btn btn-primary w-full'>Practicar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
