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
   * @description Create native application menus and context menus.
   * @see http://electron.atom.io/docs/api/menu
   * @see https://github.com/electron/electron/blob/v1.4.1/docs/api/menu.md
   * @date 2019-11-23
   */
  external class Menu {
    companion object {
  
    /**
     * Sets menu as the application menu on macOS. On Windows and Linux, the menu will
     * be set as each window's top menu. Note: This API has to be called after the
     * ready event of app module.
     * @date 2019-11-23
     */
    fun setApplicationMenu(menu: Menu): Any
    
    /**
     * Returns the application menu (an instance of Menu), if set, or null, if not set.
     * @date 2019-11-23
     */
    fun getApplicationMenu(): Any
    
    /**
     * Sends the action to the first responder of application. This is used for
     * emulating default Cocoa menu behaviors, usually you would just use the role
     * property of MenuItem. See the macOS Cocoa Event Handling Guide for more
     * information on macOS' native actions.
     * @date 2019-11-23
     */
    fun sendActionToFirstResponder(action: String): Any
    
    /**
     * Generally, the template is just an array of options for constructing a MenuItem.
     * The usage can be referenced above. You can also attach other fields to the
     * element of the template and they will become properties of the constructed menu items.
     * @date 2019-11-23
     */
    fun buildFromTemplate(template: Array<Any>): Any
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  
  /**
   * Pops up this menu as a context menu in the browserWindow.
   * @date 2019-11-23
   */
  fun popup(browserWindow: BrowserWindow, x: Number, y: Number, positioningItem: Number): Any
  
  /**
   * Appends the menuItem to the menu.
   * @date 2019-11-23
   */
  fun append(menuItem: MenuItem): Any
  
  /**
   * Inserts the menuItem to the pos position of the menu.
   * @date 2019-11-23
   */
  fun insert(pos: Int, menuItem: MenuItem): Any
  
  /**
   * Get an array containing the menu's items.
   * @date 2019-11-23
   */
  val items: Any
  }