import { setTimeout } from 'timers/promises'
import { hrtime } from 'process'

// Define functions

function func1 (a, b) {
  return a * b
}

const func2 = (a, b) => a * b

// Benchmark

const data = []

for (let round = 0; round < 9; round++) {
  const Max = 10 ** round
  console.group('Round', round + 1, 'loop', Max)

  // func1
  const start_func1 = hrtime.bigint()
  for (let i = 0; i < Max; i++) {
    func1(10, 10)
  }
  const end_func1 = hrtime.bigint()
  data.push({ name: 'func1', time: (end_func1 - start_func1) / 1000n })

  await setTimeout(100)

  // func2
  const start_func2 = hrtime.bigint()
  for (let i = 0; i < Max; i++) {
    func2(10, 10)
  }
  const end_func2 = hrtime.bigint()
  data.push({ name: 'func2', time: (end_func2 - start_func2) / 1000n })
  await setTimeout(100)

  // func3
  const start_func3 = hrtime.bigint()
  for (let i = 0; i < Max; i++) {
    ;(function (a, b) {
      return a * b
    })(10, 10)
  }
  const end_func3 = hrtime.bigint()
  data.push({ name: 'func3', time: (end_func3 - start_func3) / 1000n })
  await setTimeout(100)

  // func4
  const start_func4 = hrtime.bigint()
  for (let i = 0; i < Max; i++) {
    ;((a, b) => a * b)(10, 10)
  }
  const end_func4 = hrtime.bigint()
  data.push({ name: 'func4', time: (end_func4 - start_func4) / 1000n })

  console.groupEnd('Round', round, 'loop', Max)
  await setTimeout(1000)
}

data.filter(x => x.name === 'func1').forEach(x => console.log(x))
data.filter(x => x.name === 'func2').forEach(x => console.log(x))
