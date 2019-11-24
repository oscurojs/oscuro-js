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

import com.oscuro.oscurojs.node.Socket

/**
 * A message is an in-memory message data, stored as a map of key-values plus some additional
 * protocol data.
 */
data class Message(val command: String, val version: String, val fields: Map<String, String>) {
    companion object {
        val CURRENT_VERSION = "1.0"

        /**
         * Creates a new message.
         */
        fun create(command: String, vararg fields: Pair<String, String>) =
                Message(command, CURRENT_VERSION, mapOf(*fields))
    }

    /**
     * Get a field value.
     */
    operator fun get(key: String) = fields[key]

    /**
     * Serializes the message to the given socket.
     */
    fun sendTo(socket: Socket) {
        val writer = OutboundMessage(socket, command, version, fields.size).start()
        for ((key, value) in fields) writer.write(key, value)
    }
}
