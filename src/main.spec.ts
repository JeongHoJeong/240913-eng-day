import { sumByDays, updateUser } from './main'
import { User } from './types'

/*

## 제약 조건
- 완전히 타입 세이프해야 함
- 모든 예외가 다루어져야 함
- 주어진 함수의 인터페이스를 바꾸면 안 됨

## 최대화 목표
- 가독성
  - 얼마나 의미를 쉽게 파악할 수 있는가?
- 유지보수성
  - 이 코드를 바꿀 때 실수하기 쉬운가?
- 효율성 (퍼포먼스)

## 써도 되는 것
- AI 솔루션
- 외부 패키지

## 하면 안 되는 것
- 컨닝
- 다른 사람과의 협업
- 불법 행위

*/

describe(updateUser.name, () => {
  it('updates', () => {
    const users: User[] = [
      {
        id: '1',
        name: 'Alice',
      },
      {
        id: '2',
        name: 'Bob',
      },
    ]

    const original = [...users]

    const updated = updateUser({
      id: '2',
      users,
      newName: 'Charlie',
    })

    expect(updated).toEqual([
      {
        id: '1',
        name: 'Alice',
      },
      {
        id: '2',
        name: 'Charlie',
      },
    ])

    // Original must not be changed
    expect(users).toEqual(original)
  })
})

describe(sumByDays.name, () => {
  type Input = Parameters<typeof sumByDays>[0]
  type Output = ReturnType<typeof sumByDays>

  it('sums', () => {
    const input: Input = {
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-03'),
      data: [
        {
          date: new Date('2021-01-01'),
          value: 1,
        },
        {
          date: new Date('2021-01-02'),
          value: 2,
        },
        {
          date: new Date('2021-01-04'),
          value: 3,
        },
        {
          date: new Date('2021-01-02'),
          value: 4,
        },
      ],
    }

    const original = [...input.data]

    const output: Output = sumByDays(input)

    expect(output).toEqual([
      {
        date: '2021-01-01',
        sum: 1,
      },
      {
        date: '2021-01-02',
        sum: 6,
      },
    ])

    // Original must not be changed
    expect(input.data).toEqual(original)
  })
})
