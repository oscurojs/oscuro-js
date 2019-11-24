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
package com.oscuro.oscurojs.core.messaging

import com.oscuro.oscurojs.core.events.EventDispatcher
import com.oscuro.oscurojs.core.events.Subscribable
import com.oscuro.oscurojs.node.Socket
import com.oscuro.oscurojs.node.readline

/**
 * This message parser parses a custom protocol, emitting a message handler when the message is intercepted.
 */
class Parser(input: Socket): Subscribable<InboundMessage, Unit> {
    private val reader = readline.createInterface(input)
    init {
        reader.on("line", ::handleMessage)
    }

    private fun handleMessage(line: String) {
        val parts = line.split(" ")
        if (parts.size != 4) return
        val (transact, version, argc, command) = parts
        if (transact != "TRANSACTION") return
        if (version != "1.0") throw Error("Unsupported protocol version $version")
        val count = argc.toInt()
        events.dispatch(InboundMessage(reader, count, command, version))
    }

    private val events = EventDispatcher<InboundMessage, Unit>()

    override fun add(listener: (event: InboundMessage) -> Unit) = events.add(listener)

    override fun remove(listener: (event: InboundMessage) -> Unit) = events.remove(listener)
}