const nameInverter  = (name) => {
  let split = name.split(' ').filter(name => name !== '');
  let honorific = ""
  let honorCheck = false
  if (name === '') {
    return '';
  } if(split[0] === "Dr." || split[0] === "Mr." || split[0] === "Mrs." || split[0] === "Ms.") {
    honorific = split[0]
    split.shift()
    honorCheck = true
  } if(split.length === 0) {
    return ''
  } if (split.length === 1 && honorCheck === true) {
    console.log(`${honorific} ${split}`)
    return `${honorific} ${split}`
  } if (split.length === 1) {
    return split
  }  if(split.length === 2 && honorCheck === true) {
    return `${honorific} ${split.reverse().join(", ")}`
  } if(split.length === 2) {
    return split.reverse().join(", ")
  } if(name === undefined) {
    return Error
  }
};

module.exports = nameInverter
