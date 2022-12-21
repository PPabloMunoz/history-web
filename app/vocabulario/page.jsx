
export default function Vocabulario() {
  // const [query, updateQuery] = useState('')
  // const [query2, updateQuery2] = useState('')

  return (
    <>
      <h2 className='text-center my-7 uppercase font-bold text-3xl px-5 text-gray-800 dark:text-inherit'>
        Vocabulario
      </h2>
      <div className='flex justify-around items-center text-xl'>
        <h4 className='cursor-pointer'>Bloque 1 y 2</h4>
        <h4 className='cursor-pointer'>Bloque 3 y 4</h4>
      </div>

      <main className='px-5 py-5 flex flex-col w-full text-gray-800 dark:text-inherit'>
        <div className='pb-10'>
          <h3 className='text-xl underline'>Bloque 1 y 2</h3>
        </div>
      </main>
    </>
  )
}
