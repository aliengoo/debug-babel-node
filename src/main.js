import _ from 'lodash'

async function fooAsync () {
  return 'hello, World!'
}

async function main () {
  console.log(_.capitalize(await fooAsync()))
}

main()

