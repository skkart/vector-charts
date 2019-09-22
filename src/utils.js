import moment from 'moment-timezone'

export function isString (data) {
  return (typeof data === 'string')
}

export function isNumber (data) {
  return (typeof data === 'number')
}

export function isDate (dt) {
  return dt instanceof Date
}

export function isObject (data) {
  return (typeof data === 'object')
}

export function isBoolean (data) {
  return (typeof data === 'boolean')
}

export function isFunction (data) {
  return (typeof data === 'function')
}

export function emptyFn (s) {
  return s
}

export function getDateInUserTimezone (dt, isEpoc = true, userTz) {
  isEpoc = !!isEpoc
  userTz = userTz || 'Etc/GMT'

  if (dt instanceof Date) {
    return dt
  } else if (isNaN(dt)) {
    dt = 0
  }

  if (isEpoc) {
    dt = dt * 1000
  }

  var mtTz = moment.tz(dt, userTz)
  return new Date(mtTz.year(), mtTz.month(), mtTz.date(), mtTz.hours(), mtTz.minutes(), mtTz.seconds())
}

export function refineString (realName, replaceChar) {
  // Removes all special characters in String and uses Alphanumeric string
  replaceChar = replaceChar || ''
  realName = (isString(realName) && realName.length > 0) ? realName : ''
  const filteredName = realName.replace(/[^\w]/gi, replaceChar)
  return filteredName.toLowerCase()
}

export function getObject (obj, dotKey, def = null) {

  var mdl = obj
  var keySplit = dotKey.split('.')

  for (var i = 0; i < keySplit.length; i++) {
    if (mdl) {
      mdl = mdl[keySplit[i]]
    } else {
      // console.log("Unable to find nested key : ", keySplit[i], " inside model", obj);
      mdl = def
      break
    }
  }

  return mdl
}

export function throttle (fun, wait) {
  let trotMe = true
  return function (...args) {
    if (trotMe) {
      trotMe = false
      setTimeout(() => {
        trotMe = true
      }, wait)
      fun.apply(this, args)
    }
  }
}

export function debounce (fun, wait) {
  let debouceTimer = null
  return function (...args) {
    const ctx = this
    clearTimeout(debouceTimer)
    debouceTimer = setTimeout(() => {
      fun.apply(ctx, args)
    }, wait)
  }
}

export function truncateText (str, length = 50, ending = '...') {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}