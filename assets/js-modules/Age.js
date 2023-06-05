const dob = new Date("2003-01-11")
export function Age() {
  const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970

  return age
}

export function DaysFromBirthday() {
  const hasHadBirthdayThisYear =
    new Date().getMonth() >= dob.getMonth() &&
    new Date().getDate() >= dob.getDate()
  const nextBirthdayYear =
    new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0)

  const nextBirthday = Math.floor(
    (new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() -
      Date.now()) /
      1000 /
      60 /
      60 /
      24
  )

  return nextBirthday
}
