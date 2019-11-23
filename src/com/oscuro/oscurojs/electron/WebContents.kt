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
   * @description Render and control the contents of a BrowserWindow instance.
   * @see http://electron.atom.io/docs/api/web-contents
   * @see https://github.com/electron/electron/blob/v1.4.1/docs/api/web-contents.md
   * @date 2019-11-23
   */
  external class WebContents {
    companion object {
  
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  
  /**
   * Loads the url in the window. The url must contain the protocol prefix, e.g. the
   * http:// or file://. If the load should bypass http cache then use the pragma
   * header to achieve it.
   * @date 2019-11-23
   */
  fun loadURL(url: String, options: Any): Any
  
  /**
   * Initiates a download of the resource at url without navigating. The
   * will-download event of session will be triggered.
   * @date 2019-11-23
   */
  fun downloadURL(url: String): Any
  
  /**
   * Returns URL of the current web page.
   * @date 2019-11-23
   */
  fun getURL(): Any
  
  /**
   * Returns the title of the current web page.
   * @date 2019-11-23
   */
  fun getTitle(): Any
  
  /**
   * Returns a Boolean, whether the web page is destroyed.
   * @date 2019-11-23
   */
  fun isDestroyed(): Boolean
  
  /**
   * Returns a Boolean, whether the web page is focused.
   * @date 2019-11-23
   */
  fun isFocused(): Boolean
  
  /**
   * Returns whether web page is still loading resources.
   * @date 2019-11-23
   */
  fun isLoading(): Boolean
  
  /**
   * Returns whether the main frame (and not just iframes or frames within it) is
   * still loading.
   * @date 2019-11-23
   */
  fun isLoadingMainFrame(): Boolean
  
  /**
   * Returns whether the web page is waiting for a first-response from the main
   * resource of the page.
   * @date 2019-11-23
   */
  fun isWaitingForResponse(): Boolean
  
  /**
   * Stops any pending navigation.
   * @date 2019-11-23
   */
  fun stop(): Any
  
  /**
   * Reloads the current web page.
   * @date 2019-11-23
   */
  fun reload(): Any
  
  /**
   * Reloads current page and ignores cache.
   * @date 2019-11-23
   */
  fun reloadIgnoringCache(): Any
  
  /**
   * Returns whether the browser can go back to previous web page.
   * @date 2019-11-23
   */
  fun canGoBack(): Any
  
  /**
   * Returns whether the browser can go forward to next web page.
   * @date 2019-11-23
   */
  fun canGoForward(): Any
  
  /**
   * Returns whether the web page can go to offset.
   * @date 2019-11-23
   */
  fun canGoToOffset(offset: Int): Any
  
  /**
   * Clears the navigation history.
   * @date 2019-11-23
   */
  fun clearHistory(): Any
  
  /**
   * Makes the browser go back a web page.
   * @date 2019-11-23
   */
  fun goBack(): Any
  
  /**
   * Makes the browser go forward a web page.
   * @date 2019-11-23
   */
  fun goForward(): Any
  
  /**
   * Navigates browser to the specified absolute web page index.
   * @date 2019-11-23
   */
  fun goToIndex(index: Int): Any
  
  /**
   * Navigates to the specified offset from the "current entry".
   * @date 2019-11-23
   */
  fun goToOffset(offset: Int): Any
  
  /**
   * Whether the renderer process has crashed.
   * @date 2019-11-23
   */
  fun isCrashed(): Boolean
  
  /**
   * Overrides the user agent for this web page.
   * @date 2019-11-23
   */
  fun setUserAgent(userAgent: String): Any
  
  /**
   * Returns a String representing the user agent for this web page.
   * @date 2019-11-23
   */
  fun getUserAgent(): Any
  
  /**
   * Injects CSS into the current web page.
   * @date 2019-11-23
   */
  fun insertCSS(css: String): Any
  
  /**
   * Evaluates code in page. In the browser window some HTML APIs like
   * requestFullScreen can only be invoked by a gesture from the user. Setting
   * userGesture to true will remove this limitation.
   * @date 2019-11-23
   */
  fun executeJavaScript(code: String, userGesture: Boolean, callback: Function<Any>): Any
  
  /**
   * Mute the audio on the current web page.
   * @date 2019-11-23
   */
  fun setAudioMuted(muted: Boolean): Any
  
  /**
   * Returns whether this page has been muted.
   * @date 2019-11-23
   */
  fun isAudioMuted(): Boolean
  
  /**
   * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
   * divided by 100, so 300% = 3.0.
   * @date 2019-11-23
   */
  fun setZoomFactor(factor: Number): Any
  
  /**
   * Sends a request to get current zoom factor, the callback will be called with callback(zoomFactor).
   * @date 2019-11-23
   */
  fun getZoomFactor(callback: Function<Any>): Any
  
  /**
   * Changes the zoom level to the specified level. The original size is 0 and each
   * increment above or below represents zooming 20% larger or smaller to default
   * limits of 300% and 50% of original size, respectively.
   * @date 2019-11-23
   */
  fun setZoomLevel(level: Number): Any
  
  /**
   * Sends a request to get current zoom level, the callback will be called with callback(zoomLevel).
   * @date 2019-11-23
   */
  fun getZoomLevel(callback: Function<Any>): Any
  
  /**
   * Sets the maximum and minimum zoom level.
   * @date 2019-11-23
   */
  fun setZoomLevelLimits(minimumLevel: Number, maximumLevel: Number): Any
  
  /**
   * Executes the editing command undo in web page.
   * @date 2019-11-23
   */
  fun undo(): Any
  
  /**
   * Executes the editing command redo in web page.
   * @date 2019-11-23
   */
  fun redo(): Any
  
  /**
   * Executes the editing command cut in web page.
   * @date 2019-11-23
   */
  fun cut(): Any
  
  /**
   * Executes the editing command copy in web page.
   * @date 2019-11-23
   */
  fun copy(): Any
  
  /**
   * Copy the image at the given position to the clipboard.
   * @date 2019-11-23
   */
  fun copyImageAt(x: Int, y: Int): Any
  
  /**
   * Executes the editing command paste in web page.
   * @date 2019-11-23
   */
  fun paste(): Any
  
  /**
   * Executes the editing command pasteAndMatchStyle in web page.
   * @date 2019-11-23
   */
  fun pasteAndMatchStyle(): Any
  
  /**
   * Executes the editing command delete in web page.
   * @date 2019-11-23
   */
  fun delete(): Any
  
  /**
   * Executes the editing command selectAll in web page.
   * @date 2019-11-23
   */
  fun selectAll(): Any
  
  /**
   * Executes the editing command unselect in web page.
   * @date 2019-11-23
   */
  fun unselect(): Any
  
  /**
   * Executes the editing command replace in web page.
   * @date 2019-11-23
   */
  fun replace(text: String): Any
  
  /**
   * Executes the editing command replaceMisspelling in web page.
   * @date 2019-11-23
   */
  fun replaceMisspelling(text: String): Any
  
  /**
   * Inserts text to the focused element.
   * @date 2019-11-23
   */
  fun insertText(text: String): Any
  
  /**
   * Starts a request to find all matches for the text in the web page and returns an
   * Integer representing the request id used for the request. The result of the
   * request can be obtained by subscribing to found-in-page event.
   * @date 2019-11-23
   */
  fun findInPage(text: String, options: Any): Any
  
  /**
   * Stops any findInPage request for the webContents with the provided action.
   * @date 2019-11-23
   */
  fun stopFindInPage(action: String): Any
  
  /**
   * Captures a snapshot of the page within rect. Upon completion callback will be
   * called with callback(image). The image is an instance of NativeImage that stores
   * data of the snapshot. Omitting rect will capture the whole visible page.
   * @date 2019-11-23
   */
  fun capturePage(rect: Any, callback: Function<Any>): Any
  
  /**
   * Checks if any ServiceWorker is registered and returns a boolean as response to callback.
   * @date 2019-11-23
   */
  fun hasServiceWorker(callback: Function<Any>): Any
  
  /**
   * Unregisters any ServiceWorker if present and returns a boolean as response to
   * callback when the JS promise is fulfilled or false when the JS promise is rejected.
   * @date 2019-11-23
   */
  fun unregisterServiceWorker(callback: Function<Any>): Any
  
  /**
   * Prints window's web page. When silent is set to true, Electron will pick up
   * system's default printer and default settings for printing. Calling
   * window.print() in web page is equivalent to calling webContents.print({silent:
   * false, printBackground: false}). Use page-break-before: always; CSS style to
   * force to print to a new page.
   * @date 2019-11-23
   */
  fun print(options: Any): Any
  
  /**
   * Prints window's web page as PDF with Chromium's preview printing custom
   * settings. The callback will be called with callback(error, data) on completion.
   * The data is a Buffer that contains the generated PDF data. By default, an empty
   * options will be regarded as: Use page-break-before: always; CSS style to force
   * to print to a new page. An example of webContents.printToPDF:
   * @date 2019-11-23
   */
  fun printToPDF(options: Any, callback: Function<Any>): Any
  
  /**
   * Adds the specified path to DevTools workspace. Must be used after DevTools creation:
   * @date 2019-11-23
   */
  fun addWorkSpace(path: String): Any
  
  /**
   * Removes the specified path from DevTools workspace.
   * @date 2019-11-23
   */
  fun removeWorkSpace(path: String): Any
  
  /**
   * Opens the devtools.
   * @date 2019-11-23
   */
  fun openDevTools(options: Any): Any
  
  /**
   * Closes the devtools.
   * @date 2019-11-23
   */
  fun closeDevTools(): Any
  
  /**
   * Returns whether the devtools is opened.
   * @date 2019-11-23
   */
  fun isDevToolsOpened(): Boolean
  
  /**
   * Returns whether the devtools view is focused .
   * @date 2019-11-23
   */
  fun isDevToolsFocused(): Boolean
  
  /**
   * Toggles the developer tools.
   * @date 2019-11-23
   */
  fun toggleDevTools(): Any
  
  /**
   * Starts inspecting element at position (x, y).
   * @date 2019-11-23
   */
  fun inspectElement(x: Int, y: Int): Any
  
  /**
   * Opens the developer tools for the service worker context.
   * @date 2019-11-23
   */
  fun inspectServiceWorker(): Any
  
  /**
   * Send an asynchronous message to renderer process via channel, you can also send
   * arbitrary arguments. Arguments will be serialized in JSON internally and hence
   * no functions or prototype chain will be included. The renderer process can
   * handle the message by listening to channel with the ipcRenderer module. An
   * example of sending messages from the main process to the renderer process:
   * @date 2019-11-23
   */
  fun send(channel: String): Any
  
  /**
   * Enable device emulation with the given parameters.
   * @date 2019-11-23
   */
  fun enableDeviceEmulation(parameters: Any): Any
  
  /**
   * Disable device emulation enabled by webContents.enableDeviceEmulation.
   * @date 2019-11-23
   */
  fun disableDeviceEmulation(): Any
  
  /**
   * Sends an input event to the page. For keyboard events, the event object also
   * have following properties: For mouse events, the event object also have
   * following properties: For the mouseWheel event, the event object also have
   * following properties:
   * @date 2019-11-23
   */
  fun sendInputEvent(event: Any): Any
  
  /**
   * Begin subscribing for presentation events and captured frames, the callback will
   * be called with callback(frameBuffer, dirtyRect) when there is a presentation
   * event. The frameBuffer is a Buffer that contains raw pixel data. On most
   * machines, the pixel data is effectively stored in 32bit BGRA format, but the
   * actual representation depends on the endianness of the processor (most modern
   * processors are little-endian, on machines with big-endian processors the data is
   * in 32bit ARGB format). The dirtyRect is an object with x, y, width, height
   * properties that describes which part of the page was repainted. If onlyDirty is
   * set to true, frameBuffer will only contain the repainted area. onlyDirty
   * defaults to false.
   * @date 2019-11-23
   */
  fun beginFrameSubscription(onlyDirty: Boolean, callback: Function<Any>): Any
  
  /**
   * End subscribing for frame presentation events.
   * @date 2019-11-23
   */
  fun endFrameSubscription(): Any
  
  /**
   * Sets the item as dragging item for current drag-drop operation, file is the
   * absolute path of the file to be dragged, and icon is the image showing under the
   * cursor when dragging.
   * @date 2019-11-23
   */
  fun startDrag(item: Any): Any
  
  /**
   * Returns true if the process of saving page has been initiated successfully.
   * @date 2019-11-23
   */
  fun savePage(fullPath: String, saveType: String, callback: Function<Any>): Any
  
  /**
   * Shows pop-up dictionary that searches the selected word on the page.
   * @date 2019-11-23
   */
  fun showDefinitionForSelection(): Any
  
  /**
   * Indicates whether offscreen rendering is enabled.
   * @date 2019-11-23
   */
  fun isOffscreen(): Boolean
  
  /**
   * If offscreen rendering is enabled and not painting, start painting.
   * @date 2019-11-23
   */
  fun startPainting(): Any
  
  /**
   * If offscreen rendering is enabled and painting, stop painting.
   * @date 2019-11-23
   */
  fun stopPainting(): Any
  
  /**
   * If offscreen rendering is enabled returns whether it is currently painting.
   * @date 2019-11-23
   */
  fun isPainting(): Boolean
  
  /**
   * If offscreen rendering is enabled sets the frame rate to the specified number.
   * Only values between 1 and 60 are accepted.
   * @date 2019-11-23
   */
  fun setFrameRate(fps: Int): Any
  
  /**
   * If offscreen rendering is enabled returns the current frame rate.
   * @date 2019-11-23
   */
  fun getFrameRate(): Any
  
  /**
   * If offscreen rendering is enabled invalidates the frame and generates a new one
   * through the 'paint' event.
   * @date 2019-11-23
   */
  fun invalidate(): Any
  
  /**
   * The unique ID of this WebContents.
   * @date 2019-11-23
   */
  val id: Any
  
  /**
   * Returns the session object used by this webContents.
   * @date 2019-11-23
   */
  val session: Any
  
  /**
   * Returns the WebContents that might own this WebContents.
   * @date 2019-11-23
   */
  val hostWebContents: Any
  
  /**
   * Get the WebContents of DevTools for this WebContents. Note: Users should never
   * store this object because it may become null when the DevTools has been closed.
   * @date 2019-11-23
   */
  val devToolsWebContents: Any
  
  /**
   * Get the debugger instance for this webContents.
   * @date 2019-11-23
   */
  val debugger: Any
  }