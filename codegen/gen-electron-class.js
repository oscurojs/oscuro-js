const { CodeGen, TYPES } = require('./utils')

module.exports = function (obj) {
  const genStat = new CodeGen(4)
  const genNormal = new CodeGen(2)

  /**
   * @param {{name: string, type: string}[]} parameters
   */
  function computeSignature(parameters) {
    return parameters.map(p => `${p.name}: ${TYPES[p.type] || p.type}`).join(', ')
  }

  /**
   * @param {CodeGen} gen 
   */
  function mapMethod(gen) {
    return m => gen.method(
      m.name,
      m.description,
      m.name.match(/^is/) ? 'Boolean' : undefined,
      computeSignature(m.parameters)
    )
  }

  /**
   * @param {CodeGen} gen 
   */
  function mapProp(gen) {
    return p => gen.prop(p.name, 'Any', p.description)
  }

  return (`/*
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
  
  /**
   * Generated from ElectronJS docs
   * @description ${obj.description}
   * @see ${obj.websiteUrl}
   * @see ${obj.repoUrl}
   * @date ${new Date().toLocaleDateString()}
   */
  external class ${obj.name} {
    companion object {
  ${obj.staticMethods.map(mapMethod(genStat)).join('\n    ')}
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  ${obj.instanceMethods.map(mapMethod(genNormal)).join('\n  ')}
  ${obj.instanceProperties.map(mapProp(genNormal)).join('\n  ')}
  }`)
}
