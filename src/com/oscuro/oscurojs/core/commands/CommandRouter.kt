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
package com.oscuro.oscurojs.core.commands

import com.oscuro.oscurojs.core.messaging.InboundMessage

/**
 * Asynchronous command routing.
 */
class CommandRouter {
    companion object {
        /**
         * Makes a new command router with predefined routes.
         */
        fun of(vararg pairs: Pair<String, suspend (msg: InboundMessage) -> Unit>) = CommandRouter().also {
            for ((key, value) in pairs) it.add(key, value)
        }
    }

    /**
     * Dispatch a command order.
     */
    suspend fun dispatch(msg: InboundMessage) = routes[msg.command]?.let { it.map { it(msg) } }

    /**
     * Adds a listener to a command-bound incoming message.
     */
    fun add(command: String, fn: suspend (msg: InboundMessage) -> Unit) {
        val handlers = routes[command]
        if (handlers === null) {
            routes[command] = mutableSetOf(fn)
        } else {
            handlers.add(fn)
        }
    }

    private val routes: MutableMap<String, MutableSet<suspend (msg: InboundMessage) -> Unit>> = mutableMapOf()
}