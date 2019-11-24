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
package com.oscuro.oscurojs.client

import com.oscuro.oscurojs.core.async
import com.oscuro.oscurojs.core.await
import com.oscuro.oscurojs.core.messaging.Parser
import com.oscuro.oscurojs.node.ServerBuilder
import com.oscuro.oscurojs.node.net

/**
 * This driver is used to produce messages on the host.
 */
object Producer {
    fun test(): Unit {
        val socket = net.createConnection(ServerBuilder.SOCKET_PATH)
        Parser(socket).add {
            async {
                val msg = it.readAsync().await()
                println(msg)
            }
        }
        socket.write("""
                TRANSACTION 1.0 3 MKWIN
                Width:800
                Height:600
                File:../../../sample-view.html
            """.trimIndent() + "\n")
    }
}