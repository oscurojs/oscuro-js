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
import kotlin.js.Promise

/**
 * This is a message stream reader, which can be used to read the whole message if desired, asynchronously or
 * use the callback style to read each message's parameter.
 */
class InboundMessage(private val rl: dynamic, val fieldCount: Int, val command: String, val version: String)
    : Subscribable<Pair<String, String>, Unit>
{
    companion object {
        private val fieldRegex = "([^:]+?) *: *(.*)".toRegex()
    }

    init {
        rl.on("line", ::onLine)
    }

    private fun onLine(line: String) {
        val result = fieldRegex.matchEntire(line) ?: return
        val values = result.groupValues
        if (values.size != 3) throw Error("Bad match ${result.groupValues}")
        val (_, key, value) = values
        consumed++
        events.dispatch(Pair(key, value))
        if (ended) rl.off("line", ::onLine)
    }

    private var consumed = 0

    val ended get() = consumed >= fieldCount

    private val events = EventDispatcher<Pair<String, String>, Unit>()

    override fun add(listener: (event: Pair<String, String>) -> Unit) = events.add(listener)

    override fun remove(listener: (event: Pair<String, String>) -> Unit) = events.remove(listener)

    fun readAsync(): Promise<Message> {
        return Promise { resolve, reject ->
            if (ended) reject(Error("Message already consumed!"))
            val pairs = mutableMapOf<String, String>()
            add { (key, value) ->
                pairs[key] = value
                if (ended) {
                    resolve(Message(command, version, pairs.toMap()))
                }
            }
        }
    }
}