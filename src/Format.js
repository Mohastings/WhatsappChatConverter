import fs from 'fs'
class Format {
  /**
   * @type {{ original: 'phone or name', replacement: 'new name' }[]}
   */
  #replacement = null
  constructor () {
    const file = fs.readFileSync('replacement.json').toString()
    this.#replacement = JSON.parse(file)
  }

  cleanContact (contact) {
    const clean = contact
      .replace(/\s/g, ' ')
      .replace(/‑/g, '-')
      .replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F-\x9F]/g, '')
      .replace(String.fromCharCode(8234), '')
      .replace(String.fromCharCode(8236), '')
    return clean
  }

  replaceContact (contact) {
    const replacement = this.#replacement.filter(r => r.original === contact)
    if (replacement.length > 0) {
      const replaced = replacement[0].replacement
      return replaced
    }
    const clean = this.#finalCleanup(contact)
    return clean
  }

  #finalCleanup (contact) {
    const clean = contact
      .replace(/,/g, '')
      .replace(/\./g, '')
    return clean
  }

  static plural (count, text, displayNumber = true, irregularPlural = null) {
    let plural = irregularPlural === null ? `${text}s` : irregularPlural
    plural = count === 1 ? text : plural

    return `${displayNumber ? `${count} ` : ''}${plural}`
  }
}

export { Format }
