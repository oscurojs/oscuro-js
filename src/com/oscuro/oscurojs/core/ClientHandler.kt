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

import com.argochamber.oscurojs.BrowserWindow
import com.oscuro.oscurojs.node.Socket

/**
 * Handles the client's connection.
 */
class ClientHandler(host: AppHost) {
    init {
        host.add { event ->
            when (event.target) {
                HostEvent.CLIENT_CONNECTED -> addClient(event.client)
                HostEvent.CLIENT_DISCONNECTED -> removeClient(event.client)
            }
        }
    }

    private val clients: MutableSet<Socket> = mutableSetOf()

    /**
     * Called when client connections occur.
     */
    private fun addClient(client: Socket) {
        clients.add(client)
//        client.on("data") { chunk ->
//            println("msg = $chunk")
//            val win = BrowserWindow()
//            win.loadURL("https://kotlinlang.org/docs/reference/object-declarations.html")
//            win.show()
//        }
    }

    /**
     * Called when the client disconnects, for client cleanup.
     */
    private fun removeClient(client: Socket) {
        clients.remove(client)
    }
}