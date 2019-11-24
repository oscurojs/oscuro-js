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
package com.oscuro.oscurojs.core

import com.argochamber.oscurojs.createBrowserWindow
import com.oscuro.oscurojs.core.commands.CommandRouter
import com.oscuro.oscurojs.core.messaging.InboundMessage
import com.oscuro.oscurojs.core.messaging.Message
import com.oscuro.oscurojs.core.messaging.Parser
import com.oscuro.oscurojs.node.BrowserWindow
import com.oscuro.oscurojs.node.Socket

/**
 * Handles the client's connection.
 */
class ClientApplication(val client: Socket) {
    private val windows: MutableMap<String, BrowserWindow> = mutableMapOf()
    private val parser = Parser(client)
    private val router = CommandRouter.of(
            "MKWIN" to ::makeWindow
    )
    init {
        parser.add {
            async {
                router.dispatch(it)
            }
        }

    }

    suspend fun makeWindow(msg: InboundMessage) = msg.readAsync().await().let {
        println("Making window")
        val win: dynamic = createBrowserWindow()
        val width = it["Width"]?.toInt() ?: 0
        val height = it["Height"]?.toInt() ?: 0
        win.setSize(width, height, false)
        win.loadFile(it["File"] ?: "")
        win.webContents.on("did-finish-load") {
            win.show()
        }
        windows[win.id] = win
        Message.create("OK",
            "Command" to "MKWIN",
            "Id" to win.id
        ).sendTo(client)
        Unit
    }
}