import { useEffect, useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Week />,
  },
  {
    path: '/day',
    element: <Day />,
  },
  {
    path: '/week',
    element: <Week />,
  },
  {
    path: '/month',
    element: <Month />,
  },
  {
    path: '/hour',
    element: <Hour />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

function makeLifeDay() {
  const startDate = new Date('2002-002-07')
  // End is 60 years from now
  const now = new Date()
  const endDate = new Date(now.getFullYear() + 60, now.getMonth(), now.getDate())

  const lifeArray: boolean[] = []
  const oneDay = 24 * 60 * 60 * 1000
  for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneDay)) {
    lifeArray.push(date <= now)
  }

  return lifeArray
}
function makeLifeWeek() {
  const startDate = new Date('2002-02-07')
  const now = new Date()
  const endDate = new Date(now.getFullYear() + 60, now.getMonth(), now.getDate())

  const lifeArray: boolean[] = []
  const oneDay = 24 * 60 * 60 * 1000
  const oneWeek = oneDay * 7
  for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneWeek)) {
    lifeArray.push(date <= now)
  }

  return lifeArray
}
function makeLifeMonth() {
  const startDate = new Date('2002-02-07')
  const now = new Date()
  const endDate = new Date(now.getFullYear() + 60, now.getMonth(), now.getDate())

  const lifeArray: boolean[] = []
  const oneMonth = 30 * 24 * 60 * 60 * 1000
  for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneMonth)) {
    lifeArray.push(date <= now)
  }

  return lifeArray
}

function makeLifeHour() {
  const startDate = new Date('2002-02-07')
  const now = new Date()
  const endDate = new Date(now.getFullYear() + 60, now.getMonth(), now.getDate())

  const lifeArray: boolean[] = []
  const oneHour = 60 * 60 * 1000
  for (let date = startDate; date <= endDate; date = new Date(date.getTime() + oneHour)) {
    lifeArray.push(date <= now)
  }

  return lifeArray
}

function Week() {
  const lifeArray = useMemo(makeLifeWeek, [])
  return (
    <div className='flex min-h-[100dvh] bg-bg'>
      <div className='flex h-[100dvh] w-[100dvw] flex-col flex-wrap gap-[10px] p-5'>
        {lifeArray.map((isAlive, index) => (
          // <div key={index} className={`size-1 rounded-[1px] ${isAlive ? 'bg-red-500' : 'bg-accent'}`}></div>
          <div key={index} className={`size-[11px] rounded-[3px] ${isAlive ? 'bg-accent' : 'bg-gray-700'}`}></div>
        ))}
      </div>
    </div>
  )
}
function Month() {
  const lifeArray = useMemo(makeLifeMonth, [])
  return (
    <div className='flex min-h-[100dvh] bg-bg'>
      <div className='flex h-[100dvh] w-[100dvw] flex-col flex-wrap gap-[17px] p-8'>
        {lifeArray.map((isAlive, index) => (
          // <div key={index} className={`size-1 rounded-[1px] ${isAlive ? 'bg-red-500' : 'bg-accent'}`}></div>
          <div key={index} className={`size-[26px] rounded-[3px] ${isAlive ? 'bg-accent' : 'bg-gray-700'}`}></div>
        ))}
      </div>
    </div>
  )
}

function Day() {
  const lifeArray = useMemo(makeLifeDay, [])
  return (
    <div className='flex min-h-[100dvh] bg-bg'>
      <div className='flex h-[100dvh] w-[100vw] flex-col flex-wrap gap-1 p-5'>
        {lifeArray.map((isAlive, index) => (
          // <div key={index} className={`size-1 rounded-[1px] ${isAlive ? 'bg-red-500' : 'bg-accent'}`}></div>
          <div key={index} className={`size-1 rounded-[1px] ${isAlive ? 'bg-accent' : 'bg-gray-700'}`}></div>
        ))}
      </div>
    </div>
  )
}

function Hour() {
  const lifeArray = useMemo(makeLifeHour, [])
  useEffect(() => {
    console.log(lifeArray.length)
  }, [])
  return (
    <div className='flex min-h-[100dvh] bg-bg'>
      <div className='flex h-[100dvh] w-[100vw] flex-col flex-wrap gap-[0.4px] p-1'>
        {lifeArray.map((isAlive, index) => (
          // <div key={index} className={`size-1 rounded-[1px] ${isAlive ? 'bg-red-500' : 'bg-accent'}`}></div>
          <div key={index} className={`size-[1px] rounded-[0.2px] ${isAlive ? 'bg-accent' : 'bg-gray-700'}`}></div>
        ))}
      </div>
    </div>
  )
}

export default App
