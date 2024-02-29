import Search from './Search'

export default function Banner() {
  return (
    <div
      className='w-screen h-banner flex flex-col justify-start pt-6 font-rubik items-center gap-y-6 bg-cover bg-[url(./pattern-bg-desktop.png)] bg-center text-gray-very-dark'
      id='banner'
    >
      <h1 className='text-3xl font-medium text-zinc-50'>IP Address Tracker</h1>
      <Search />
    </div>
  )
}
