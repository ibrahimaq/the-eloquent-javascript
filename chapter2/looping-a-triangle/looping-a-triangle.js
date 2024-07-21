/* 
  Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

let hash = ''
let i = 0
while (i <= 7) {
  hash += '#'
  console.log(hash)
  i++
}
