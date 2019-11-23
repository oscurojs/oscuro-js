const https = require('https')
const http = require('http')

/**
 * Get something from the web.
 * @param {string} url
 * @param {http|https} agent
 */
function get(url, agent = https) {
  return new Promise((r, j) => {
    agent.get(String(url), res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => r(Buffer.concat(chunks).toString()));
      res.on('error', j);
    });
  });
}

const TYPES = {
  Integer: 'Int',
  Object: 'Any',
  object: 'Any',
  Function: 'Function<Any>',
  Array: 'Array<Any>',
  URL: 'String'
}

class CodeGen {
  /**
   * @param {number} indent Number of spaces.
   */
  constructor(indent = 2) {
    this.indent = indent
  }

  /**
   * @param {string} type 
   */
  sanitize(type) {
    const t = type.trim()
    const sane = t[0].toUpperCase() + t.slice(1)
    return TYPES[sane] || sane
  }

  /**
   * @param {string} type 
   */
  parseType(type) {
    const types = type.split('|').filter(t => t.length)
    if (types.length === 1) return this.sanitize(types[0])
    const kind = types.filter(t => t !== 'null' && t !== 'undefined')[0] + '?'
    return this.sanitize(kind)
  }

  /** @param {string} str */
  wrapDoc(str) {
    return '* ' + str.replace(/.{1,80} /g, s => `\n${s}`)
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean).join('\n ' + ' '.repeat(this.indent) + '* ')
  }

  /**
   * @param {string} name 
   * @param {string} type 
   * @param {string} docs 
   */
  prop(name, type, docs) {
    return `
${' '.repeat(this.indent)}/**
${' '.repeat(this.indent)} ${this.wrapDoc(docs)}
${' '.repeat(this.indent)} * @date ${new Date().toLocaleDateString()}
${' '.repeat(this.indent)} */
${' '.repeat(this.indent)}val ${name}: ${this.parseType(type)}`
  }

  /**
   * @param {string} name 
   * @param {string} docs 
   * @param {string} returns 
   * @param {string} params 
   */
  method(name, docs = '<no doc found>', returns = 'Any', params = 'vararg args: Any') {
    return `
${' '.repeat(this.indent)}/**
${' '.repeat(this.indent)} ${this.wrapDoc(docs)}
${' '.repeat(this.indent)} * @date ${new Date().toLocaleDateString()}
${' '.repeat(this.indent)} */
${' '.repeat(this.indent)}fun ${name}(${params}): ${returns}`
  }
}

module.exports = {
  CodeGen, TYPES, get
}
