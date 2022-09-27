/**
 * E = mc²
 *
 * By:      Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let sSs: number | undefined
const subTime = 2
const pizzaTime = 3
const soupTime = 4

const item = prompt('Are you heating sub, pizza, or soup? ')
const sNumberOfItems = prompt(`How many ${item}(s) are you cooking(max:3)? `)

try {
  let numberOfItems = parseInt(sNumberOfItems)
  if ((numberOfItems = 1)) {
    console.log('1')
  } else if ((numberOfItems = 2)) {
    console.log('2')
  } else if ((numberOfItems = 3)) {
    console.log('3')
  } else {
    console.log('4')
  }
} catch (err) {
  console.log('\nInvalid number!')
}
console.log('\nDone.')
