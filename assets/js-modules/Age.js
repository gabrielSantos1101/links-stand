const dob = new Date("2003-01-11")
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970

export function DaysFromBirthday() {
  const RelativeTimeFormatter = new Intl.RelativeTimeFormat("pt-BR", {
    numeric: "auto",
  })

  const hasHadBirthdayThisYear =
    new Date().getMonth() >= dob.getMonth() &&
    new Date().getDate() >= dob.getDate()

  const nextBirthdayYear =
    new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0)

  const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
    Math.floor(
      (new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() -
        Date.now()) /
        1000 /
        60 /
        60 /
        24
    ),
    "day"
  )[1].value.toString()

  console.log(daysUntilBirthday)

  // if (daysUntilBirthday == 0) {
  //   return
  // }

  document.querySelector("#birthday").textContent = daysUntilBirthday

  return daysUntilBirthday
}
