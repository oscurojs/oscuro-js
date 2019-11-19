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
package com.argochamber.oscurojs

class BrowserWindow {
    private val win = js("""new electron.BrowserWindow({ show: false })""")

    /**
     *
     */
    fun loadURL(url: String) = win.loadURL(url)

    /**
     *
     */
    fun loadFile(file: String) = win.loadFile(file)

    fun destroy() = win.destroy()

    fun close() = win.close()

    fun focus() = win.focus()

    fun blur() = win.blur()

    fun show() = win.show()

    fun hide() = win.hide()

    /**
     * A Integer property representing the unique ID of the window.
     */
    var id: Int
        get() = win.id
        set(value) { win.id = value }

    /**
     * A Boolean property that determines whether the window menu bar should hide itself automatically.
     * Once set, the menu bar will only show when users press the single Alt key.
     * If the menu bar is already visible, setting this property to true won't hide it immediately.
     */
    var autoHideMenuBar: Boolean
        get() = win.autoHideMenuBar
        set(value) { win.autoHideMenuBar = value }

    /**
     * A Boolean property that determines whether the window can be manually minimized by user.
     * On Linux the setter is a no-op, although the getter returns true.
     */
    var minimizable: Boolean
        get() = win.minimizable
        set(value) { win.minimizable = value }

    var maximizable: Boolean
      get() = win.maximizable
      set(value) { win.maximizable = value }

    var fullScreenable: Boolean
      get() = win.fullScreenable
      set(value) { win.fullScreenable = value }

    var resizable: Boolean
      get() = win.resizable
      set(value) { win.resizable = value }

    var closable: Boolean
      get() = win.closable
      set(value) { win.closable = value }

    var movable: Boolean
      get() = win.movable
      set(value) { win.movable = value }
}
