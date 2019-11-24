/*
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
package com.oscuro.oscurojs.electron
  
  /**
   * Generated from ElectronJS docs
   * @description Add items to native application menus and context menus.
   * @see http://electron.atom.io/docs/api/menu-item
   * @see https://github.com/electron/electron/blob/v1.4.1/docs/api/menu-item.md
   * @date 2019-11-23
   */
  external class MenuItem {
    companion object {
  
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  
  
  /**
   * A Boolean indicating whether the item is enabled, this property can be
   * dynamically changed.
   * @date 2019-11-23
   */
  val enabled: Any
  
  /**
   * A Boolean indicating whether the item is visible, this property can be
   * dynamically changed.
   * @date 2019-11-23
   */
  val visible: Any
  
  /**
   * A Boolean indicating whether the item is checked, this property can be
   * dynamically changed. A checkbox menu item will toggle the checked property on
   * and off when selected. A radio menu item will turn on its checked property when
   * clicked, and will turn off that property for all adjacent items in the same
   * menu. You can add a click function for additional behavior.
   * @date 2019-11-23
   */
  val checked: Any
  }