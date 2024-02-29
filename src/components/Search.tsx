import { ChangeEvent, MouseEvent, useState } from 'react'
interface GeoApi {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
  }
  domains: string[]
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
}

const fetchIp = async (ip: string) => {
  const apiKey = import.meta.env.VITE_IPIFY_KEY as string
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`

  // const URL =
  //   'https://geo.ipify.org/api/v2/country,city?apiKey=at_pqhdG7WhhtOLtNA9ufGmSAQOvJwwH&ipAddress=38.0.101.76'
  try {
    const response = await fetch(url)
    const data = (await response.json()) as GeoApi
    console.log(url)
    return data
  } catch (error) {
    console.log(error)
  }
}
export default function Search() {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value ?? '')
  }
  const handleClick = async (e: MouseEvent) => {
    e.preventDefault()
    const data = await fetchIp(inputValue)
    if (data) {
      console.log(data)
    } else {
      console.log('error loading data')
    }
    setInputValue('')
  }

  return (
    <form className='flex flex-row w-5/12 justify-center items-center'>
      <input
        onChange={handleChange}
        className='p-input font-rubik rounded-l-2xl border-none outline-none w-full text-xl'
        placeholder='Search for any IP Address or domain'
        type='search'
        value={inputValue}
      />
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
        title='Search'
        className='bg-black p-btn cursor-pointer hover:bg-gray-very-dark transition ease-in-out delay-150 rounded-e-2xl bg-center bg-no-repeat '
      >
        <img className='w-full' src='./icon-arrow.svg' alt='search button' />
      </button>
    </form>
  )
}
