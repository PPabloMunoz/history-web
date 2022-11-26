// import Head from 'next/head'
import Image from 'next/image'

import Navbar from './components/Navbar'

import prueba from './assets/prueba.jpg'
import vocabulario from './assets/vocabulario.jpg'
import crono from './assets/cronologia.jpg'
import Link from 'next/link'

export default function Home({ objects1 }) {
  return (
    <div>
      {/* <Head>
        <title>Historia 2º BACH</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Historia 2º bach con cronologia, vocabulario y ejercicios para practicar'
        />
        <link rel='icon' href='/PM.svg' />
      </Head> */}

      <Navbar page='home' />

      <h1 className='text-center my-9 uppercase font-bold text-4xl px-5'>
        Cronología y Vocabulario - Historia 2º BACH
      </h1>

      <main className='px-7 mt-24 pb-7 h-100'>
        <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          <div className='card max-w-md bg-base-100 shadow-xl'>
            <figure>
              <Image
                src={vocabulario}
                alt='Shoes'
                className='h-80 object-cover rounded-2xl'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5'>
              <h2 className='card-title justify-center'>Vocabulario</h2>
              <div className='flex flex-row justify-center items-center gap-2'>
                <Link href='/vocabulario' className='w-full'>
                  <button className='btn btn-primary w-full'>Repasar</button>
                </Link>
              </div>
            </div>
          </div>

          <div className='card max-w-md bg-base-100 shadow-xl md:col-span-2 lg:col-span-1'>
            <figure>
              <Image
                src={crono}
                alt='Shoes'
                className='h-80  object-cover rounded-2xl'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5'>
              <h2 className='card-title justify-center'>Cronologia</h2>
              <Link href='/cronologia' className='w-full'>
                <button className='btn btn-primary w-full'>Repasar</button>
              </Link>
            </div>
          </div>

          <div className='card max-w-md bg-base-100 shadow-xl'>
            <figure>
              <Image
                src={prueba}
                alt='Shoes'
                className='h-80 object-cover rounded-2xl'
                width={1000}
                height={1000}
                priority
              />
            </figure>
            <div className='card-body p-5'>
              <h2 className='card-title justify-center'>Pruebas</h2>
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
