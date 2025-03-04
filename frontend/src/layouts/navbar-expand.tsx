export function NavBarExpand() {
  return (
    <div className="flex h-full min-h-screen w-56 flex-col items-center overflow-hidden rounded-r bg-white text-gray-600 shadow-sm dark:border-gray-800 dark:border-r dark:bg-gray-900 dark:text-gray-400">
      <a className="mt-3 flex w-full items-center px-3" href="#">
        <svg
          className="h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="ml-2 font-bold text-sm">Project Management</span>
      </a>
      <div className="w-full px-2">
        <div className="mt-3 flex w-full flex-col items-center border-gray-200 border-t dark:border-gray-700">
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">Projects</span>
          </a>
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg 
              className="h-6 w-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" />
            </svg>
            <span className="ml-2 font-medium text-sm">Notifications</span>
          </a>
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" fill="#080341"/>
            </svg>
            <span className="ml-2 font-medium text-sm">Clients</span>
          </a>
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">Reports</span>
          </a>
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">Billings</span>
          </a>
          <a
            className="relative mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">Templates</span>
          </a>
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">Settings</span>
          </a>
        </div>
      </div>

      <div className="mt-auto mb-2 w-full px-2">
        <div className="mt-3 flex w-full flex-col items-center border-gray-200 border-t dark:border-gray-700">
          <a
            className="mt-2 flex h-12 w-full items-center rounded px-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              className="h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 font-medium text-sm">My Account</span>
          </a>
        </div>
      </div>
    </div>
  )
}
