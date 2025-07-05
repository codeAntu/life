import React from 'react'

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()

const Year2025: React.FC = () => {
  const months = Array.from({ length: 12 }, (_, i) => i)
  const today = new Date()
  const isPast = (month: number, day: number) => {
    const date = new Date(2025, month, day + 1)
    return date < today
  }

  const start = new Date(today > new Date(2025, 0, 1) ? today : new Date(2025, 0, 1))
  const end = new Date(2025, 11, 31)
  const remainingDays = Math.max(0, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) )

  return (
    <div className='flex min-h-[100dvh] flex-col items-center bg-bg p-8 text-white/90'>
      <div className='py-5 sm:py-12 space-y-5 sm:space-y-8'>
        <h1 className='text-center text-2xl font-bold sm:text-4xl'>
          2026 mai to duniya
          <span className='px-2 text-red-500/90'>khatam</span>
          hai 💀
        </h1>
        <div className='text-center text-lg font-semibold sm:text-2xl pb-3'>
          Days Remaining:
          <span className='px-1.5 font-bold text-green-500'>{remainingDays}</span>/ 365
        </div>
      </div>
      <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4'>
        {months.map((month) => {
          const days = daysInMonth(2025, month)
          const firstDay = new Date(2025, month, 1).getDay()
          return (
            <div key={month} className='flex flex-col items-center'>
              <div className='grid grid-cols-7 gap-1'>
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: days }, (_, day) => (
                  <div
                    key={day}
                    className={`size-4 rounded ${isPast(month, day) ? 'bg-red-500' : 'bg-green-500'}`}
                    title={`2025-${month + 1}-${day + 1}`}
                  ></div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Year2025
