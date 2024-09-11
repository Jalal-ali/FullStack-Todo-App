import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="shadow-lg shadow-blue-300/50 bg-white border-gray-200 dark:bg-gray-950">
    <div className="max-w-screen-xl flex flex-wrap text-center justify-center mx-auto p-4">

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            
          <button id="hambrgr" data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div id="hdnli" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" itemID="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-950 dark:border-gray-700" >
            <li>
              <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  aria-current="page" to="login">SignIn</Link>
            </li>
            <li>
              <Link className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  aria-current="page" to="register">SignUp</Link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar