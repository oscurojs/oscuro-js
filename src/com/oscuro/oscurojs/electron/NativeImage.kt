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
   * @description Natively wrap images such as tray, dock, and application icons.
   * @see http://electron.atom.io/docs/api/native-image
   * @see https://github.com/electron/electron/blob/v1.4.1/docs/api/native-image.md
   * @date 2019-11-23
   */
  external class NativeImage {
    companion object {
  
    }
  
    /**
     * @see https://nodejs.org/api/events.html#events_class_eventemitter
     */
    fun on(event: String, listener: Function<Any>): Unit
  
  /**
   * Returns a Buffer that contains the image's PNG encoded data.
   * @date 2019-11-23
   */
  fun toPNG(): Any
  
  /**
   * Returns a Buffer that contains the image's JPEG encoded data.
   * @date 2019-11-23
   */
  fun toJPEG(quality: Int): Any
  
  /**
   * Returns a Buffer that contains a copy of the image's raw bitmap pixel data.
   * @date 2019-11-23
   */
  fun toBitmap(): Any
  
  /**
   * Returns the data URL of the image.
   * @date 2019-11-23
   */
  fun toDataURL(): Any
  
  /**
   * Returns a Buffer that contains the image's raw bitmap pixel data. The difference
   * between getBitmap() and toBitmap() is, getBitmap() does not copy the bitmap
   * data, so you have to use the returned Buffer immediately in current event loop
   * tick, otherwise the data might be changed or destroyed.
   * @date 2019-11-23
   */
  fun getBitmap(): Any
  
  /**
   * Returns a Buffer that stores C pointer to underlying native handle of the image.
   * On macOS, a pointer to NSImage instance would be returned. Notice that the
   * returned pointer is a weak pointer to the underlying native image instead of a
   * copy, so you must ensure that the associated nativeImage instance is kept around.
   * @date 2019-11-23
   */
  fun getNativeHandle(): Any
  
  /**
   * Returns a boolean whether the image is empty.
   * @date 2019-11-23
   */
  fun isEmpty(): Boolean
  
  /**
   * Returns the size of the image.
   * @date 2019-11-23
   */
  fun getSize(): Any
  
  /**
   * Marks the image as a template image.
   * @date 2019-11-23
   */
  fun setTemplateImage(option: Boolean): Any
  
  /**
   * Returns a boolean whether the image is a template image.
   * @date 2019-11-23
   */
  fun isTemplateImage(): Boolean
  
  }