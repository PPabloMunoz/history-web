import Link from 'next/link'

export default function Navbar({ page }) {
  return (
    <>
      <nav className='navbar bg-gray-300 dark:bg-[#282A3A] justify-around text-gray-800 dark:text-white'>
        <div className='navbar-start w-full lg:w-auto'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#282A3A] rounded-box w-52'
            >
              <li>
                <Link
                  href='/'
                  className={
                    page === 'home'
                      ? 'text-[#865ad1] rounded-xl underline'
                      : 'rounded-xl'
                  }
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/vocabulario'
                  className={
                    page === 'vocabulario'
                      ? 'text-[#865ad1] rounded-xl underline'
                      : 'rounded-xl'
                  }
                >
                  Vocabulario
                </Link>
              </li>
              <li>
                <Link
                  href='/cronologia'
                  className={
                    page === 'cronologia'
                      ? 'text-[#865ad1] rounded-xl underline'
                      : 'rounded-xl'
                  }
                >
                  Cronologia
                </Link>
              </li>
              <li>
                <Link
                  href='/pruebas'
                  className={
                    page === 'pruebas'
                      ? 'text-[#865ad1] rounded-xl underline justify-between'
                      : 'rounded-xl justify-between'
                  }
                >
                  Pruebas
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href='/'
            className='btn btn-ghost normal-case text-xl font-bold'
          >
            Historia 2º Bach
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0 font-medium'>
            <li>
              <Link
                href='/'
                className={
                  page === 'home'
                    ? 'text-[#865ad1] rounded-xl underline'
                    : 'rounded-xl'
                }
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href='/vocabulario'
                className={
                  page === 'vocabulario'
                    ? 'text-[#865ad1] rounded-xl underline'
                    : 'rounded-xl'
                }
              >
                Vocabulario
              </Link>
            </li>

            <li>
              <Link
                href='/cronologia'
                className={
                  page === 'cronologia'
                    ? 'text-[#865ad1] rounded-xl underline'
                    : 'rounded-xl'
                }
              >
                Cronologia
              </Link>
            </li>
            <li>
              <Link
                href='pruebas'
                className={
                  page === 'pruebas'
                    ? 'text-[#865ad1] rounded-xl underline'
                    : 'rounded-xl'
                }
              >
                Pruebas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
