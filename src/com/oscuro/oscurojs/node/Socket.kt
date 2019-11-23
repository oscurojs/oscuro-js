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

external class Socket {

    /**
     * <p><code>net.Socket</code> has the property that <code>socket.write()</code>
     * always works. This is to
     * help users get up and running quickly. The computer cannot always keep up
     * with the amount of data that is written to a socket. The network connection
     * simply might be too slow. Node.js will internally queue up the data written to a
     * socket and send it out over the wire when it is possible. (Internally it is
     * polling on the socket's file descriptor for being writable).</p>
     * <p>The consequence of this internal buffering is that memory may grow. This
     * property shows the number of characters currently buffered to be written.
     * (Number of characters is approximately equal to the number of bytes to be
     * written, but the buffer may contain strings, and the strings are lazily
     * encoded, so the exact number of bytes is not known.)</p>
     * <p>Users who experience large or growing <code>bufferSize</code> should attempt to
     * "throttle" the data flows in their program with
     * <a href="#net_socket_pause"><code>socket.pause()</code></a> and <a href="#net_socket_resume"><code>socket.resume()</code></a>.</p>
     */
    val bufferSize: Int

    /**
     * <p>The amount of received bytes.</p>
     */
    val bytesRead: Int

    /**
     * <p>The amount of bytes sent.</p>
     */
    val bytesWritten: Int

    /**
     * <p>If <code>true</code>,
     * <a h
     * ref="#net_socket_connect_options_connectlistener"><code>socket.connect(options[,
     * connectListener])</code></a> was
     * called and has not yet finished. It will stay <code>true</code> until the socket becomes
     * connected, then it is set to <code>false</code> and the <code>'connect'</code>
     * event is emitted.  Note
     * that the
     * <a h
     * ref="#net_socket_connect_options_connectlistener"><code>socket.connect(options[, connectListener])</code></a>
     * callback is a listener for the <code>'connect'</code> event.</p>
     */
    val connecting: Boolean

    /**
     * Indicates if the connection is destroyed or not. Once a connection is destroyed
     * no further data can be transferred using it.
     */
    val destroyed: Boolean

    /**
     * <p>The string representation of the local IP address the remote client is
     * connecting on. For example, in a server listening on <code>'0.0.0.0'</code>, if
     * a client
     * connects on <code>'192.168.1.1'</code>, the value of
     * <code>socket.localAddress</code> would be
    <code>'192.168.1.1'</code>.</p>
     */
    val localAddress: String

    /**
     * <p>The numeric representation of the local port. For example, <code>80</code> or <code>21</code>.</p>
     */
    val localPort: Int

    /**
     * <p>This is <code>true</code> if the socket is not connected yet, either because <code>.connect()</code>
     * has not yet been called or because it is still in the process of connecting
     * (see <a href="#net_socket_connecting"><code>socket.connecting</code></a>).</p>
     */
    val pending: Boolean

    /**
     * <p>The string representation of the remote IP address. For example,
     * <code>'74.125.127.100'</code> or <code>'2001:4860:a005::68'</code>. Value may be
     * <code>undefined</code> if
     * the socket is destroyed (for example, if the client disconnected).</p>
     */
    val remoteAddress: String

    /**
     * <p>The string representation of the remote IP family. <code>'IPv4'</code> or <code>'IPv6'</code>.</p>
     */
    val remoteFamily: String

    /**
     * <p>The numeric representation of the remote port. For example, <code>80</code>
     * or <code>21</code>.</p>
     */
    val remotePort: Int

    /**
     * <p>Returns the bound <code>address</code>, the address <code>family</code> name
     * and <code>port</code> of the
     * socket as reported by the operating system:
     * <code>{ port: 12346, family: 'IPv4', address: '127.0.0.1' }</code></p>
     */
    fun address(vararg args: Any): Any

    /**
     * <p>Initiate a connection on a given socket.</p>
     * <p>Possible signatures:</p>
    <ul>
     * <li><a h
     * ref="#net_socket_connect_options_connectlistener"><code>socket.connect(options[, connectListener])</code></a></li>
     * <li><a
     * href="#net_socket_connect_path_connectlistener"><code>socket.connect(path[, connectListener])</code></a>
     * for <a href="#net_ipc_support">IPC</a> connections.</li>
     * <li><a
     * href="#net_socket_connect_port_host_connectlistener"><code>socket.connect(port[,
     * host][, connectListener])</code></a>
     * for TCP connections.</li>
     * <li>Returns: <a href="net.html#net_class_net_socket"
     * class="type">&lt;net.Socket&gt;</a> The socket itself.</li>
    </ul>
     * <p>This function is asynchronous. When the connection is established, the
     * <a href="#net_event_connect"><code>'connect'</code></a> event will be emitted.
     * If there is a problem connecting,
     * instead of a <a href="#net_event_connect"><code>'connect'</code></a> event, an
     * <a href="#net_event_error_1"><code>'error'</code></a> event will be emitted with
     * the error passed to the <a href="#net_event_error_1"><code>'error'</code></a> listener.
     * The last parameter <code>connectListener</code>, if supplied, will be added as a listener
     * for the <a href="#net_event_connect"><code>'connect'</code></a> event <strong>once</strong>.</p>
     */
    fun connect(vararg args: Any): Any

    /**
     * <p>Ensures that no more I/O activity happens on this socket. Only necessary in
     * case of errors (parse error or so).</p>
     * <p>If <code>exception</code> is specified, an <a
     * href="#net_event_error_1"><code>'error'</code></a> event will be emitted and any
     * listeners for that event will receive <code>exception</code> as an argument.</p>
     */
    fun destroy(vararg args: Any): Any

    /**
     * <p>Half-closes the socket. i.e., it sends a FIN packet. It is possible the
     * server will still send some data.</p>
     * <p>If <code>data</code> is specified, it is equivalent to calling
     * <code>socket.write(data, encoding)</code> followed by <a href="#net_socket_end_data_encoding_callback"><code>socket.end()</code></a>.</p>
     */
    fun end(vararg args: Any): Any

    /**
     * <p>Pauses the reading of data. That is, <a
     * href="#net_event_data"><code>'data'</code></a> events will not be emitted.
     * Useful to throttle back an upload.</p>
     */
    fun pause(vararg args: Any): Any

    /**
     * <p>Opposite of <code>unref()</code>, calling <code>ref()</code> on a previously
     * <code>unref</code>ed socket will
     * <em>not</em> let the program exit if it's the only socket left (the default behavior).
     * If the socket is <code>ref</code>ed calling <code>ref</code> again will have no effect.</p>
     */
    fun ref(vararg args: Any): Any

    /**
     * <p>Resumes reading after a call to <a href="#net_socket_pause"><code>socket.pause()</code></a>.</p>
     */
    fun resume(vararg args: Any): Any

    /**
     * <p>Set the encoding for the socket as a <a
     * href="stream.html#stream_class_stream_readable">Readable Stream</a>. See
     * <a href="stream.ht
     * ml#stream_readable_setencoding_encoding"><code>readable.setEncoding()</code></a>
     * for more information.</p>
     */
    fun setEncoding(vararg args: Any): Any

    /**
     * <p>Enable/disable keep-alive functionality, and optionally set the initial
     * delay before the first keepalive probe is sent on an idle socket.</p>
     * <p>Set <code>initialDelay</code> (in milliseconds) to set the delay between the last
     * data packet received and the first keepalive probe. Setting <code>0</code> for
     * <code>initialDelay</code> will leave the value unchanged from the default
     * (or previous) setting.</p>
     */
    fun setKeepAlive(vararg args: Any): Any

    /**
     * <p>Disables the Nagle algorithm. By default TCP connections use the Nagle
     * algorithm, they buffer data before sending it off. Setting <code>true</code> for
     * <code>noDelay</code> will immediately fire off data each time
     * <code>socket.write()</code> is called.</p>
     */
    fun setNoDelay(vararg args: Any): Any

    /**
     * <p>Sets the socket to timeout after <code>timeout</code> milliseconds of
     * inactivity on
     * the socket. By default <code>net.Socket</code> do not have a timeout.</p>
     * <p>When an idle timeout is triggered the socket will receive a <a href="#net_event_timeout"><code>'timeout'</code></a>
     * event but the connection will not be severed. The user must manually call
     * <a href="#net_socket_end_data_encoding_callback"><code>socket.end()</code></a>
     * or <a href="#net_socket_destroy_exception"><code>socket.destroy()</code></a> to
     * end the connection.</p>
     * <pre><code class="language-js">socket.setTimeout(3000);
     * socket.on('timeout', () => {
     *   console.log('socket timeout');
     *   socket.end();
    });
    </code></pre>
     * <p>If <code>timeout</code> is 0, then the existing idle timeout is disabled.</p>
     * <p>The optional <code>callback</code> parameter will be added as a one-time
     * listener for the
     * <a href="#net_event_timeout"><code>'timeout'</code></a> event.</p>
     */
    fun setTimeout(vararg args: Any): Any

    /**
     * <p>Calling <code>unref()</code> on a socket will allow the program to exit if
     * this is the only
     * active socket in the event system. If the socket is already <code>unref</code>ed calling
     * <code>unref()</code> again will have no effect.</p>
     */
    fun unref(vararg args: Any): Any

    /**
     * <p>Sends data on the socket. The second parameter specifies the encoding in the
     * case of a string ÔÇö it defaults to UTF8 encoding.</p>
     * <p>Returns <code>true</code> if the entire data was flushed successfully to the kernel
     * buffer. Returns <code>false</code> if all or part of the data was queued in user memory.
     * <a href="#net_event_drain"><code>'drain'</code></a> will be emitted when the
     * buffer is again free.</p>
     * <p>The optional <code>callback</code> parameter will be executed when the data
     * is finally
     * written out, which may not be immediately.</p>
     * <p>See <code>Writable</code> stream <a href="str
     * eam.html#stream_writable_write_chunk_encoding_callback"><code>write()</code></a>
     * method for more
    information.</p>
     */
    fun write(vararg args: Any): Any
}
