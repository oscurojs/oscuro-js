const root = require('./net')

const socket = root.modules[0].classes[1]

const TYPES = {
  Integer: 'Int'
}

function sanitize(type) {
  const t = type.trim()
  const sane = t[0].toUpperCase() + t.slice(1)
  return TYPES[sane] || sane
}

function parseType(type) {
  const types = type.split('|').filter(t => t.length)
  if (types.length === 1) return sanitize(types[0])
  const kind = types.filter(t => t !== 'null' && t !== 'undefined')[0] + '?'
  return sanitize(kind)
}

/** @param {string} str */
function wrapDoc(str) {
  return str.replace(/.{1,80} /g, s => `\n   * ${s}`).split('\n').map(s => s.trim()).filter(Boolean).join('\n   ')
}

function prop({ name, type, desc }) {
  return `
  /**
   ${wrapDoc(desc)}
   */
  val ${name}: ${parseType(type)}`
}

function methods({ name, desc }) {
  return `
  /**
   ${wrapDoc(desc)}
   */
  fun ${name}(vararg args: Any): Any`
}

console.log(`/*
MIT License

Copyright (c) 2019 Pablo Blanco Celdrán

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
package com.oscuro.oscurojs.node

external class Socket {
  /**
   * @see https://nodejs.org/api/events.html#events_class_eventemitter
   */
  fun on(event: String, listener: Function<Any>): Unit
${socket.properties.map(prop).join('\n  ')}
${socket.methods.map(methods).join('\n  ')}
}`)
