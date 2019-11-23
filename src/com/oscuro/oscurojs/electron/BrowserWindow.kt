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
  package com.oscuro.oscurojs.node
  
  /**
   * Generated from ElectronJS docs
   * @description Create and control browser windows.
   * @see http://electron.atom.io/docs/api/browser-window
   * @see https://github.com/electron/electron/blob/v1.4.1/docs/api/browser-window.md
   * @date 2019-11-23
   */
  external class BrowserWindow {
    companion object {
  
    /**
     * Returns an array of all opened browser windows.
     * @date 2019-11-23
     */
    fun getAllWindows(): Any
    
    /**
     * Returns the window that is focused in this application, otherwise returns null.
     * @date 2019-11-23
     */
    fun getFocusedWindow(): Any
    
    /**
     * Find a window according to the webContents it owns.
     * @date 2019-11-23
     */
    fun fromWebContents(webContents: WebContents): Any
    
    /**
     * Find a window according to its ID.
     * @date 2019-11-23
     */
    fun fromId(id: Int): Any
    
    /**
     * Adds DevTools extension located at path, and returns extension's name. The
     * extension will be remembered so you only need to call this API once, this API is
     * not for programming use. If you try to add an extension that has already been
     * loaded, this method will not return and instead log a warning to the console.
     * The method will also not return if the extension's manifest is missing or
     * incomplete. Note: This API cannot be called before the ready event of the app
     * module is emitted.
     * @date 2019-11-23
     */
    fun addDevToolsExtension(path: String): Any
    
    /**
     * Remove a DevTools extension by name. Note: This API cannot be called before the
     * ready event of the app module is emitted.
     * @date 2019-11-23
     */
    fun removeDevToolsExtension(name: String): Any
    
    /**
     * Returns an Object where the keys are the extension names and each value is an
     * Object containing name and version properties. To check if a DevTools extension
     * is installed you can run the following: Note: This API cannot be called before
     * the ready event of the app module is emitted.
     * @date 2019-11-23
     */
    fun getDevToolsExtensions(): Any
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  
  /**
   * Force closing the window, the unload and beforeunload event won't be emitted for
   * the web page, and close event will also not be emitted for this window, but it
   * guarantees the closed event will be emitted.
   * @date 2019-11-23
   */
  fun destroy(): Any
  
  /**
   * Try to close the window. This has the same effect as a user manually clicking
   * the close button of the window. The web page may cancel the close though. See
   * the close event.
   * @date 2019-11-23
   */
  fun close(): Any
  
  /**
   * Focuses on the window.
   * @date 2019-11-23
   */
  fun focus(): Any
  
  /**
   * Removes focus from the window.
   * @date 2019-11-23
   */
  fun blur(): Any
  
  /**
   * Returns a boolean, whether the window is focused.
   * @date 2019-11-23
   */
  fun isFocused(): Boolean
  
  /**
   * Returns a boolean, whether the window is destroyed.
   * @date 2019-11-23
   */
  fun isDestroyed(): Boolean
  
  /**
   * Shows and gives focus to the window.
   * @date 2019-11-23
   */
  fun show(): Any
  
  /**
   * Shows the window but doesn't focus on it.
   * @date 2019-11-23
   */
  fun showInactive(): Any
  
  /**
   * Hides the window.
   * @date 2019-11-23
   */
  fun hide(): Any
  
  /**
   * Returns a boolean, whether the window is visible to the user.
   * @date 2019-11-23
   */
  fun isVisible(): Boolean
  
  /**
   * Returns a boolean, whether current window is a modal window.
   * @date 2019-11-23
   */
  fun isModal(): Boolean
  
  /**
   * Maximizes the window.
   * @date 2019-11-23
   */
  fun maximize(): Any
  
  /**
   * Unmaximizes the window.
   * @date 2019-11-23
   */
  fun unmaximize(): Any
  
  /**
   * Returns a boolean, whether the window is maximized.
   * @date 2019-11-23
   */
  fun isMaximized(): Boolean
  
  /**
   * Minimizes the window. On some platforms the minimized window will be shown in
   * the Dock.
   * @date 2019-11-23
   */
  fun minimize(): Any
  
  /**
   * Restores the window from minimized state to its previous state.
   * @date 2019-11-23
   */
  fun restore(): Any
  
  /**
   * Returns a boolean, whether the window is minimized.
   * @date 2019-11-23
   */
  fun isMinimized(): Boolean
  
  /**
   * Sets whether the window should be in fullscreen mode.
   * @date 2019-11-23
   */
  fun setFullScreen(flag: Boolean): Any
  
  /**
   * Returns a boolean, whether the window is in fullscreen mode.
   * @date 2019-11-23
   */
  fun isFullScreen(): Boolean
  
  /**
   * This will make a window maintain an aspect ratio. The extra size allows a
   * developer to have space, specified in pixels, not included within the aspect
   * ratio calculations. This API already takes into account the difference between a
   * window's size and its content size. Consider a normal window with an HD video
   * player and associated controls. Perhaps there are 15 pixels of controls on the
   * left edge, 25 pixels of controls on the right edge and 50 pixels of controls
   * below the player. In order to maintain a 16:9 aspect ratio (standard aspect
   * ratio for HD @1920x1080) within the player itself we would call this function
   * with arguments of 16/9 and [ 40, 50 ]. The second argument doesn't care where
   * the extra width and height are within the content view--only that they exist.
   * Just sum any extra width and height areas you have within the overall content view.
   * @date 2019-11-23
   */
  fun setAspectRatio(aspectRatio: Float, extraSize: Any): Any
  
  /**
   * Resizes and moves the window to width, height, x, y.
   * @date 2019-11-23
   */
  fun setBounds(options: Any, animate: Boolean): Any
  
  /**
   * Returns an object that contains window's width, height, x and y values.
   * @date 2019-11-23
   */
  fun getBounds(): Any
  
  /**
   * Resizes and moves the window's client area (e.g. the web page) to width, height,
   * x, y.
   * @date 2019-11-23
   */
  fun setContentBounds(options: Any, animate: Boolean): Any
  
  /**
   * Returns an object that contains the window's client area (e.g. the web page)
   * width, height, x and y values.
   * @date 2019-11-23
   */
  fun getContentBounds(): Any
  
  /**
   * Resizes the window to width and height.
   * @date 2019-11-23
   */
  fun setSize(width: Int, height: Int, animate: Boolean): Any
  
  /**
   * Returns an array that contains window's width and height.
   * @date 2019-11-23
   */
  fun getSize(): Any
  
  /**
   * Resizes the window's client area (e.g. the web page) to width and height.
   * @date 2019-11-23
   */
  fun setContentSize(width: Int, height: Int, animate: Boolean): Any
  
  /**
   * Returns an array that contains window's client area's width and height.
   * @date 2019-11-23
   */
  fun getContentSize(): Any
  
  /**
   * Sets the minimum size of window to width and height.
   * @date 2019-11-23
   */
  fun setMinimumSize(width: Int, height: Int): Any
  
  /**
   * Returns an array that contains window's minimum width and height.
   * @date 2019-11-23
   */
  fun getMinimumSize(): Any
  
  /**
   * Sets the maximum size of window to width and height.
   * @date 2019-11-23
   */
  fun setMaximumSize(width: Int, height: Int): Any
  
  /**
   * Returns an array that contains window's maximum width and height.
   * @date 2019-11-23
   */
  fun getMaximumSize(): Any
  
  /**
   * Sets whether the window can be manually resized by user.
   * @date 2019-11-23
   */
  fun setResizable(resizable: Boolean): Any
  
  /**
   * Returns whether the window can be manually resized by user.
   * @date 2019-11-23
   */
  fun isResizable(): Boolean
  
  /**
   * Sets whether the window can be moved by user. On Linux does nothing.
   * @date 2019-11-23
   */
  fun setMovable(movable: Boolean): Any
  
  /**
   * Returns whether the window can be moved by user. On Linux always returns true.
   * @date 2019-11-23
   */
  fun isMovable(): Boolean
  
  /**
   * Sets whether the window can be manually minimized by user. On Linux does nothing.
   * @date 2019-11-23
   */
  fun setMinimizable(minimizable: Boolean): Any
  
  /**
   * Returns whether the window can be manually minimized by user. On Linux always
   * returns true.
   * @date 2019-11-23
   */
  fun isMinimizable(): Boolean
  
  /**
   * Sets whether the window can be manually maximized by user. On Linux does nothing.
   * @date 2019-11-23
   */
  fun setMaximizable(maximizable: Boolean): Any
  
  /**
   * Returns whether the window can be manually maximized by user. On Linux always
   * returns true.
   * @date 2019-11-23
   */
  fun isMaximizable(): Boolean
  
  /**
   * Sets whether the maximize/zoom window button toggles fullscreen mode or
   * maximizes the window.
   * @date 2019-11-23
   */
  fun setFullScreenable(fullscreenable: Boolean): Any
  
  /**
   * Returns whether the maximize/zoom window button toggles fullscreen mode or
   * maximizes the window.
   * @date 2019-11-23
   */
  fun isFullScreenable(): Boolean
  
  /**
   * Sets whether the window can be manually closed by user. On Linux does nothing.
   * @date 2019-11-23
   */
  fun setClosable(closable: Boolean): Any
  
  /**
   * Returns whether the window can be manually closed by user. On Linux always
   * returns true.
   * @date 2019-11-23
   */
  fun isClosable(): Boolean
  
  /**
   * Sets whether the window should show always on top of other windows. After
   * setting this, the window is still a normal window, not a toolbox window which
   * can not be focused on.
   * @date 2019-11-23
   */
  fun setAlwaysOnTop(flag: Boolean): Any
  
  /**
   * Returns whether the window is always on top of other windows.
   * @date 2019-11-23
   */
  fun isAlwaysOnTop(): Boolean
  
  /**
   * Moves window to the center of the screen.
   * @date 2019-11-23
   */
  fun center(): Any
  
  /**
   * Moves window to x and y.
   * @date 2019-11-23
   */
  fun setPosition(x: Int, y: Int, animate: Boolean): Any
  
  /**
   * Returns an array that contains window's current position.
   * @date 2019-11-23
   */
  fun getPosition(): Any
  
  /**
   * Changes the title of native window to title.
   * @date 2019-11-23
   */
  fun setTitle(title: String): Any
  
  /**
   * Returns the title of the native window. Note: The title of web page can be
   * different from the title of the native window.
   * @date 2019-11-23
   */
  fun getTitle(): Any
  
  /**
   * Changes the attachment point for sheets on macOS. By default, sheets are
   * attached just below the window frame, but you may want to display them beneath a
   * HTML-rendered toolbar. For example:
   * @date 2019-11-23
   */
  fun setSheetOffset(offsetY: Float, offsetX: Float): Any
  
  /**
   * Starts or stops flashing the window to attract user's attention.
   * @date 2019-11-23
   */
  fun flashFrame(flag: Boolean): Any
  
  /**
   * Makes the window not show in the taskbar.
   * @date 2019-11-23
   */
  fun setSkipTaskbar(skip: Boolean): Any
  
  /**
   * Enters or leaves the kiosk mode.
   * @date 2019-11-23
   */
  fun setKiosk(flag: Boolean): Any
  
  /**
   * Returns whether the window is in kiosk mode.
   * @date 2019-11-23
   */
  fun isKiosk(): Boolean
  
  /**
   * Returns the platform-specific handle of the window as Buffer. The native type of
   * the handle is HWND on Windows, NSView* on macOS, and Window (unsigned long) on Linux.
   * @date 2019-11-23
   */
  fun getNativeWindowHandle(): Any
  
  /**
   * Hooks a windows message. The callback is called when the message is received in
   * the WndProc.
   * @date 2019-11-23
   */
  fun hookWindowMessage(message: Int, callback: Function<Any>): Any
  
  /**
   * Returns true or false depending on whether the message is hooked.
   * @date 2019-11-23
   */
  fun isWindowMessageHooked(message: Int): Boolean
  
  /**
   * Unhook the window message.
   * @date 2019-11-23
   */
  fun unhookWindowMessage(message: Int): Any
  
  /**
   * Unhooks all of the window messages.
   * @date 2019-11-23
   */
  fun unhookAllWindowMessages(): Any
  
  /**
   * Sets the pathname of the file the window represents, and the icon of the file
   * will show in window's title bar.
   * @date 2019-11-23
   */
  fun setRepresentedFilename(filename: String): Any
  
  /**
   * Returns the pathname of the file the window represents.
   * @date 2019-11-23
   */
  fun getRepresentedFilename(): Any
  
  /**
   * Specifies whether the window’s document has been edited, and the icon in title
   * bar will become gray when set to true.
   * @date 2019-11-23
   */
  fun setDocumentEdited(edited: Boolean): Any
  
  /**
   * Whether the window's document has been edited.
   * @date 2019-11-23
   */
  fun isDocumentEdited(): Boolean
  
  /**
   * <no doc found>
   * @date 2019-11-23
   */
  fun focusOnWebView(): Any
  
  /**
   * <no doc found>
   * @date 2019-11-23
   */
  fun blurWebView(): Any
  
  /**
   * Same as webContents.capturePage([rect, ]callback).
   * @date 2019-11-23
   */
  fun capturePage(rect: Any, callback: Function<Any>): Any
  
  /**
   * Same as webContents.loadURL(url[, options]). The url can be a remote address
   * (e.g. http://) or a path to a local HTML file using the file:// protocol. To
   * ensure that file URLs are properly formatted, it is recommended to use Node's
   * url.format method:
   * @date 2019-11-23
   */
  fun loadURL(url: String, options: Any): Any
  
  /**
   * Same as webContents.reload.
   * @date 2019-11-23
   */
  fun reload(): Any
  
  /**
   * Sets the menu as the window's menu bar, setting it to null will remove the menu bar.
   * @date 2019-11-23
   */
  fun setMenu(menu: Menu): Any
  
  /**
   * Sets progress value in progress bar. Valid range is [0, 1.0]. Remove progress
   * bar when progress < 0; Change to indeterminate mode when progress > 1. On Linux
   * platform, only supports Unity desktop environment, you need to specify the
   * *.desktop file name to desktopName field in package.json. By default, it will
   * assume app.getName().desktop. On Windows, a mode can be passed. Accepted values
   * are none, normal, indeterminate, error, and paused. If you call setProgressBar
   * without a mode set (but with a value within the valid range), normal will be assumed.
   * @date 2019-11-23
   */
  fun setProgressBar(progress: Double, options: Any): Any
  
  /**
   * Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to
   * convey some sort of application status or to passively notify the user.
   * @date 2019-11-23
   */
  fun setOverlayIcon(overlay: NativeImage, description: String): Any
  
  /**
   * Sets whether the window should have a shadow. On Windows and Linux does nothing.
   * @date 2019-11-23
   */
  fun setHasShadow(hasShadow: Boolean): Any
  
  /**
   * Returns whether the window has a shadow. On Windows and Linux always returns true.
   * @date 2019-11-23
   */
  fun hasShadow(): Any
  
  /**
   * Add a thumbnail toolbar with a specified set of buttons to the thumbnail image
   * of a window in a taskbar button layout. Returns a Boolean object indicates
   * whether the thumbnail has been added successfully. The number of buttons in
   * thumbnail toolbar should be no greater than 7 due to the limited room. Once you
   * setup the thumbnail toolbar, the toolbar cannot be removed due to the platform's
   * limitation. But you can call the API with an empty array to clean the buttons.
   * The buttons is an array of Button objects: The flags is an array that can
   * include following Strings:
   * @date 2019-11-23
   */
  fun setThumbarButtons(buttons: Array<Any>): Any
  
  /**
   * Sets the region of the window to show as the thumbnail image displayed when
   * hovering over the window in the taskbar. You can reset the thumbnail to be the
   * entire window by specifying an empty region: {x: 0, y: 0, width: 0, height: 0}.
   * @date 2019-11-23
   */
  fun setThumbnailClip(region: Any): Any
  
  /**
   * Sets the toolTip that is displayed when hovering over the window thumbnail in
   * the taskbar.
   * @date 2019-11-23
   */
  fun setThumbnailToolTip(toolTip: String): Any
  
  /**
   * Same as webContents.showDefinitionForSelection().
   * @date 2019-11-23
   */
  fun showDefinitionForSelection(): Any
  
  /**
   * Changes window icon.
   * @date 2019-11-23
   */
  fun setIcon(icon: NativeImage): Any
  
  /**
   * Sets whether the window menu bar should hide itself automatically. Once set the
   * menu bar will only show when users press the single Alt key. If the menu bar is
   * already visible, calling setAutoHideMenuBar(true) won't hide it immediately.
   * @date 2019-11-23
   */
  fun setAutoHideMenuBar(hide: Boolean): Any
  
  /**
   * Returns whether menu bar automatically hides itself.
   * @date 2019-11-23
   */
  fun isMenuBarAutoHide(): Boolean
  
  /**
   * Sets whether the menu bar should be visible. If the menu bar is auto-hide, users
   * can still bring up the menu bar by pressing the single Alt key.
   * @date 2019-11-23
   */
  fun setMenuBarVisibility(visible: Boolean): Any
  
  /**
   * Returns whether the menu bar is visible.
   * @date 2019-11-23
   */
  fun isMenuBarVisible(): Boolean
  
  /**
   * Sets whether the window should be visible on all workspaces. Note: This API does
   * nothing on Windows.
   * @date 2019-11-23
   */
  fun setVisibleOnAllWorkspaces(visible: Boolean): Any
  
  /**
   * Returns whether the window is visible on all workspaces. Note: This API always
   * returns false on Windows.
   * @date 2019-11-23
   */
  fun isVisibleOnAllWorkspaces(): Boolean
  
  /**
   * Makes the window ignore all mouse events. All mouse events happened in this
   * window will be passed to the window below this window, but if this window has
   * focus, it will still receive keyboard events.
   * @date 2019-11-23
   */
  fun setIgnoreMouseEvents(ignore: Boolean): Any
  
  /**
   * Prevents the window contents from being captured by other apps. On macOS it sets
   * the NSWindow's sharingType to NSWindowSharingNone. On Windows it calls
   * SetWindowDisplayAffinity with WDA_MONITOR.
   * @date 2019-11-23
   */
  fun setContentProtection(enable: Boolean): Any
  
  /**
   * Changes whether the window can be focused.
   * @date 2019-11-23
   */
  fun setFocusable(focusable: Boolean): Any
  
  /**
   * Sets parent as current window's parent window, passing null will turn current
   * window into a top-level window.
   * @date 2019-11-23
   */
  fun setParentWindow(parent: BrowserWindow): Any
  
  /**
   * Returns the parent window.
   * @date 2019-11-23
   */
  fun getParentWindow(): Any
  
  /**
   * Returns all child windows.
   * @date 2019-11-23
   */
  fun getChildWindows(): Any
  
  /**
   * The WebContents object this window owns. All web page related events and
   * operations will be done via it. See the webContents documentation for its
   * methods and events.
   * @date 2019-11-23
   */
  val webContents: Any
  
  /**
   * The unique ID of the window.
   * @date 2019-11-23
   */
  val id: Any
  }