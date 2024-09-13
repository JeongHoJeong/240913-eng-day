import { User } from './types'

/**
 * # 제약
 * - 입력된 값이 바뀌면 안 됩니다! */
export function updateUser(input: {
  id: string
  users: User[]
  newName: string
}): User[] {
  console.log(input)
  return []
}

/**
 * # 제약
 * - 입력된 값이 바뀌면 안 됩니다!
 * - 날짜가 오름차순 정렬되어야 합니다.
 * - 날짜는 YYYY-MM-DD 포맷으로 합니다. */
export function sumByDays(input: {
  startDate?: Date
  endDate?: Date
  data: {
    date: Date
    value: number
  }[]
}): Array<{
  date: `${number}-${number}-${number}`
  sum: number
}> {
  console.log(input)
  return []
}
