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

import com.oscuro.oscurojs.client.Producer
import com.oscuro.oscurojs.core.events.CoreEvent
import com.oscuro.oscurojs.core.events.EventDispatcher
import com.oscuro.oscurojs.core.events.Subscribable
import com.oscuro.oscurojs.node.ServerBuilder

/**
 * Contains the main application routing, client connection handling and message passing nexus.
 */
class AppHost(private val coreEvents: EventDispatcher<CoreEvent, Unit>) : Subscribable<CoreEvent, Unit> by coreEvents {
    /**
     * Called when the host is ready to serve windows.
     */
    fun ready() {
        ServerBuilder.createServer { client ->
            coreEvents.dispatch(CoreEvent(client, HostEvent.CLIENT_CONNECTED))
        }
        println("Server created, producing data...")
        Producer.test()
    }
}