import Head from 'next/head'

export default function Home() {
  return (
    <div class="bg-gray-100 text-xs md:text-sm lg:text-base">
      <Head>
        <title>Market List</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main class="flex flex-col mx-auto px-4 md:w-1/2 h-screen">
        <div class="w-full flex flex-row">
          <button class="bg-gray-600 my-2 px-4 font-semibold text-white shadow-lg appearence-none focus:outline-none hover:bg-gray-800 rounded-xl"
              >Anterior</button>
          <div class="mx-auto">
            <h1 class="mx-auto font-bold text-xl my-4"> de </h1>
          </div>
          <button class="bg-gray-600 my-2 px-4 font-semibold text-white shadow-lg appearence-none focus:outline-none hover:bg-gray-800 rounded-xl" 
              >Próximo</button>
        </div> 
        <div class="flex flex-col flex-grow overflow-auto">
          
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
