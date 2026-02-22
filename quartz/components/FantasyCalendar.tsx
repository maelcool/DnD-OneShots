import calendar from "../data/LiwenCalander.json"

function getMoonPhase(dayOfYear: number, cycle: number, shift: number) {
  const adjusted = (dayOfYear + shift) % cycle
  const phaseLength = cycle / 4

  if (adjusted < phaseLength) return "🌑"
  if (adjusted < phaseLength * 2) return "🌓"
  if (adjusted < phaseLength * 3) return "🌕"
  return "🌗"
}

export default function FantasyCalendar() {
  let dayCounter = 0

  return (
    <div className="calendar-wrapper">
      <h1>Year {calendar.year}</h1>

      {calendar.months.map((month: string) => {
        const length = calendar.month_len[month]

        return (
          <div key={month} className="month-block">
            <h2>{month}</h2>

            <div className="grid">
              {Array.from({ length }).map((_, i) => {
                const day = i + 1
                dayCounter++

                const key = `${calendar.year}-${calendar.months.indexOf(month)+1}-${day}`
                const event = calendar.notes[key]

                const lubb = getMoonPhase(
                  dayCounter,
                  calendar.lunar_cyc.Lubb,
                  calendar.lunar_shf.Lubb
                )

                const fath = getMoonPhase(
                  dayCounter,
                  calendar.lunar_cyc.Fath,
                  calendar.lunar_shf.Fath
                )

                return (
                  <div
                    key={day}
                    className={`day ${event ? "event" : ""}`}
                    onClick={() => {
                      if (event) {
                        alert(event)
                      }
                    }}
                  >
                    <div className="day-number">{day}</div>
                    <div className="moons">
                      <span>{lubb}</span>
                      <span>{fath}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}