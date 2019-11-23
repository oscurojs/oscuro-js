module.exports = {
  "type": "module",
  "source": "doc/api/net.md",
  "modules": [
    {
      "textRaw": "Net",
      "name": "net",
      "introduced_in": "v0.10.0",
      "desc": "<!--lint disable maximum-line-length-->\n<blockquote>\n<p>Stability: 2 - Stable</p>\n</blockquote>\n<p>The <code>net</code> module provides an asynchronous network API for creating stream-based\nTCP or <a href=\"#net_ipc_support\">IPC</a> servers (<a href=\"#net_net_createserver_options_connectionlistener\"><code>net.createServer()</code></a>) and clients\n(<a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>).</p>\n<p>It can be accessed using:</p>\n<pre><code class=\"language-js\">const net = require('net');\n</code></pre>",
      "modules": [
        {
          "textRaw": "IPC Support",
          "name": "ipc_support",
          "desc": "<p>The <code>net</code> module supports IPC with named pipes on Windows, and Unix domain\nsockets on other operating systems.</p>",
          "modules": [
            {
              "textRaw": "Identifying paths for IPC connections",
              "name": "identifying_paths_for_ipc_connections",
              "desc": "<p><a href=\"#net_net_connect\"><code>net.connect()</code></a>, <a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>, <a href=\"#net_server_listen\"><code>server.listen()</code></a> and\n<a href=\"#net_socket_connect\"><code>socket.connect()</code></a> take a <code>path</code> parameter to identify IPC endpoints.</p>\n<p>On Unix, the local domain is also known as the Unix domain. The path is a\nfilesystem pathname. It gets truncated to a length of\n<code>sizeof(sockaddr_un.sun_path) - 1</code>, which varies 91 and 107 bytes depending on\nthe operating system. The typical values are 107 on Linux and 103 on macOS. The\npath is subject to the same naming conventions and permissions checks as would\nbe done on file creation. If the Unix domain socket (that is visible as a file\nsystem path) is created and used in conjunction with one of Node.js' API\nabstractions such as <a href=\"#net_net_createserver_options_connectionlistener\"><code>net.createServer()</code></a>, it will be unlinked as part of\n<a href=\"#net_server_close_callback\"><code>server.close()</code></a>. On the other hand, if it is created and used outside of\nthese abstractions, the user will need to manually remove it. The same applies\nwhen the path was created by a Node.js API but the program crashes abruptly.\nIn short, a Unix domain socket once successfully created will be visible in the\nfilesystem, and will persist until unlinked.</p>\n<p>On Windows, the local domain is implemented using a named pipe. The path <em>must</em>\nrefer to an entry in <code>\\\\?\\pipe\\</code> or <code>\\\\.\\pipe\\</code>. Any characters are permitted,\nbut the latter may do some processing of pipe names, such as resolving <code>..</code>\nsequences. Despite how it might look, the pipe namespace is flat. Pipes will\n<em>not persist</em>. They are removed when the last reference to them is closed.\nUnlike Unix domain sockets, Windows will close and remove the pipe when the\nowning process exits.</p>\n<p>JavaScript string escaping requires paths to be specified with extra backslash\nescaping such as:</p>\n<pre><code class=\"language-js\">net.createServer().listen(\n  path.join('\\\\\\\\?\\\\pipe', process.cwd(), 'myctl'));\n</code></pre>",
              "type": "module",
              "displayName": "Identifying paths for IPC connections"
            }
          ],
          "type": "module",
          "displayName": "IPC Support"
        }
      ],
      "classes": [
        {
          "textRaw": "Class: net.Server",
          "type": "class",
          "name": "net.Server",
          "meta": {
            "added": [
              "v0.1.90"
            ],
            "changes": []
          },
          "desc": "<ul>\n<li>Extends: <a href=\"events.html#events_class_eventemitter\" class=\"type\">&lt;EventEmitter&gt;</a></li>\n</ul>\n<p>This class is used to create a TCP or <a href=\"#net_ipc_support\">IPC</a> server.</p>",
          "events": [
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "meta": {
                "added": [
                  "v0.5.0"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when the server closes. If connections exist, this\nevent is not emitted until all connections are ended.</p>"
            },
            {
              "textRaw": "Event: 'connection'",
              "type": "event",
              "name": "connection",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [
                {
                  "textRaw": "{net.Socket} The connection object",
                  "type": "net.Socket",
                  "desc": "The connection object"
                }
              ],
              "desc": "<p>Emitted when a new connection is made. <code>socket</code> is an instance of\n<code>net.Socket</code>.</p>"
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [
                {
                  "textRaw": "{Error}",
                  "type": "Error"
                }
              ],
              "desc": "<p>Emitted when an error occurs. Unlike <a href=\"#net_class_net_socket\"><code>net.Socket</code></a>, the <a href=\"#net_event_close\"><code>'close'</code></a>\nevent will <strong>not</strong> be emitted directly following this event unless\n<a href=\"#net_server_close_callback\"><code>server.close()</code></a> is manually called. See the example in discussion of\n<a href=\"#net_server_listen\"><code>server.listen()</code></a>.</p>"
            },
            {
              "textRaw": "Event: 'listening'",
              "type": "event",
              "name": "listening",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when the server has been bound after calling <a href=\"#net_server_listen\"><code>server.listen()</code></a>.</p>"
            }
          ],
          "methods": [
            {
              "textRaw": "server.address()",
              "type": "method",
              "name": "address",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {Object|string}",
                    "name": "return",
                    "type": "Object|string"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Returns the bound <code>address</code>, the address <code>family</code> name, and <code>port</code> of the server\nas reported by the operating system if listening on an IP socket\n(useful to find which port was assigned when getting an OS-assigned address):\n<code>{ port: 12346, family: 'IPv4', address: '127.0.0.1' }</code>.</p>\n<p>For a server listening on a pipe or Unix domain socket, the name is returned\nas a string.</p>\n<pre><code class=\"language-js\">const server = net.createServer((socket) => {\n  socket.end('goodbye\\n');\n}).on('error', (err) => {\n  // Handle errors here.\n  throw err;\n});\n\n// Grab an arbitrary unused port.\nserver.listen(() => {\n  console.log('opened server on', server.address());\n});\n</code></pre>\n<p>Don't call <code>server.address()</code> until the <code>'listening'</code> event has been emitted.</p>"
            },
            {
              "textRaw": "server.close([callback])",
              "type": "method",
              "name": "close",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Server}",
                    "name": "return",
                    "type": "net.Server"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Function} Called when the server is closed.",
                      "name": "callback",
                      "type": "Function",
                      "desc": "Called when the server is closed.",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Stops the server from accepting new connections and keeps existing\nconnections. This function is asynchronous, the server is finally closed\nwhen all connections are ended and the server emits a <a href=\"#net_event_close\"><code>'close'</code></a> event.\nThe optional <code>callback</code> will be called once the <code>'close'</code> event occurs. Unlike\nthat event, it will be called with an <code>Error</code> as its only argument if the server\nwas not open when it was closed.</p>"
            },
            {
              "textRaw": "server.getConnections(callback)",
              "type": "method",
              "name": "getConnections",
              "meta": {
                "added": [
                  "v0.9.7"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Server}",
                    "name": "return",
                    "type": "net.Server"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Function}",
                      "name": "callback",
                      "type": "Function"
                    }
                  ]
                }
              ],
              "desc": "<p>Asynchronously get the number of concurrent connections on the server. Works\nwhen sockets were sent to forks.</p>\n<p>Callback should take two arguments <code>err</code> and <code>count</code>.</p>"
            },
            {
              "textRaw": "server.listen()",
              "type": "method",
              "name": "listen",
              "signatures": [
                {
                  "params": []
                }
              ],
              "desc": "<p>Start a server listening for connections. A <code>net.Server</code> can be a TCP or\nan <a href=\"#net_ipc_support\">IPC</a> server depending on what it listens to.</p>\n<p>Possible signatures:</p>\n<ul>\n<li><a href=\"#net_server_listen_handle_backlog_callback\"><code>server.listen(handle[, backlog][, callback])</code></a></li>\n<li><a href=\"#net_server_listen_options_callback\"><code>server.listen(options[, callback])</code></a></li>\n<li><a href=\"#net_server_listen_path_backlog_callback\"><code>server.listen(path[, backlog][, callback])</code></a>\nfor <a href=\"#net_ipc_support\">IPC</a> servers</li>\n<li>\n<a href=\"#net_server_listen_port_host_backlog_callback\">\n<code>server.listen([port[, host[, backlog]]][, callback])</code></a>\nfor TCP servers\n</li>\n</ul>\n<p>This function is asynchronous. When the server starts listening, the\n<a href=\"#net_event_listening\"><code>'listening'</code></a> event will be emitted. The last parameter <code>callback</code>\nwill be added as a listener for the <a href=\"#net_event_listening\"><code>'listening'</code></a> event.</p>\n<p>All <code>listen()</code> methods can take a <code>backlog</code> parameter to specify the maximum\nlength of the queue of pending connections. The actual length will be determined\nby the OS through sysctl settings such as <code>tcp_max_syn_backlog</code> and <code>somaxconn</code>\non Linux. The default value of this parameter is 511 (not 512).</p>\n<p>All <a href=\"#net_class_net_socket\"><code>net.Socket</code></a> are set to <code>SO_REUSEADDR</code> (see <a href=\"http://man7.org/linux/man-pages/man7/socket.7.html\"><code>socket(7)</code></a> for\ndetails).</p>\n<p>The <code>server.listen()</code> method can be called again if and only if there was an\nerror during the first <code>server.listen()</code> call or <code>server.close()</code> has been\ncalled. Otherwise, an <code>ERR_SERVER_ALREADY_LISTEN</code> error will be thrown.</p>\n<p>One of the most common errors raised when listening is <code>EADDRINUSE</code>.\nThis happens when another server is already listening on the requested\n<code>port</code>/<code>path</code>/<code>handle</code>. One way to handle this would be to retry\nafter a certain amount of time:</p>\n<pre><code class=\"language-js\">server.on('error', (e) => {\n  if (e.code === 'EADDRINUSE') {\n    console.log('Address in use, retrying...');\n    setTimeout(() => {\n      server.close();\n      server.listen(PORT, HOST);\n    }, 1000);\n  }\n});\n</code></pre>",
              "methods": [
                {
                  "textRaw": "server.listen(handle[, backlog][, callback])",
                  "type": "method",
                  "name": "listen",
                  "meta": {
                    "added": [
                      "v0.5.10"
                    ],
                    "changes": []
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Server}",
                        "name": "return",
                        "type": "net.Server"
                      },
                      "params": [
                        {
                          "textRaw": "`handle` {Object}",
                          "name": "handle",
                          "type": "Object"
                        },
                        {
                          "textRaw": "`backlog` {number} Common parameter of [`server.listen()`][] functions",
                          "name": "backlog",
                          "type": "number",
                          "desc": "Common parameter of [`server.listen()`][] functions",
                          "optional": true
                        },
                        {
                          "textRaw": "`callback` {Function} Common parameter of [`server.listen()`][] functions",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Common parameter of [`server.listen()`][] functions",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Start a server listening for connections on a given <code>handle</code> that has\nalready been bound to a port, a Unix domain socket, or a Windows named pipe.</p>\n<p>The <code>handle</code> object can be either a server, a socket (anything with an\nunderlying <code>_handle</code> member), or an object with an <code>fd</code> member that is a\nvalid file descriptor.</p>\n<p>Listening on a file descriptor is not supported on Windows.</p>"
                },
                {
                  "textRaw": "server.listen(options[, callback])",
                  "type": "method",
                  "name": "listen",
                  "meta": {
                    "added": [
                      "v0.11.14"
                    ],
                    "changes": [
                      {
                        "version": "v11.4.0",
                        "pr-url": "https://github.com/nodejs/node/pull/23798",
                        "description": "The `ipv6Only` option is supported."
                      }
                    ]
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Server}",
                        "name": "return",
                        "type": "net.Server"
                      },
                      "params": [
                        {
                          "textRaw": "`options` {Object} Required. Supports the following properties:",
                          "name": "options",
                          "type": "Object",
                          "desc": "Required. Supports the following properties:",
                          "options": [
                            {
                              "textRaw": "`port` {number}",
                              "name": "port",
                              "type": "number"
                            },
                            {
                              "textRaw": "`host` {string}",
                              "name": "host",
                              "type": "string"
                            },
                            {
                              "textRaw": "`path` {string} Will be ignored if `port` is specified. See [Identifying paths for IPC connections][].",
                              "name": "path",
                              "type": "string",
                              "desc": "Will be ignored if `port` is specified. See [Identifying paths for IPC connections][]."
                            },
                            {
                              "textRaw": "`backlog` {number} Common parameter of [`server.listen()`][] functions.",
                              "name": "backlog",
                              "type": "number",
                              "desc": "Common parameter of [`server.listen()`][] functions."
                            },
                            {
                              "textRaw": "`exclusive` {boolean} **Default:** `false`",
                              "name": "exclusive",
                              "type": "boolean",
                              "default": "`false`"
                            },
                            {
                              "textRaw": "`readableAll` {boolean} For IPC servers makes the pipe readable for all users. **Default:** `false`.",
                              "name": "readableAll",
                              "type": "boolean",
                              "default": "`false`",
                              "desc": "For IPC servers makes the pipe readable for all users."
                            },
                            {
                              "textRaw": "`writableAll` {boolean} For IPC servers makes the pipe writable for all users. **Default:** `false`.",
                              "name": "writableAll",
                              "type": "boolean",
                              "default": "`false`",
                              "desc": "For IPC servers makes the pipe writable for all users."
                            },
                            {
                              "textRaw": "`ipv6Only` {boolean} For TCP servers, setting `ipv6Only` to `true` will disable dual-stack support, i.e., binding to host `::` won't make `0.0.0.0` be bound. **Default:** `false`.",
                              "name": "ipv6Only",
                              "type": "boolean",
                              "default": "`false`",
                              "desc": "For TCP servers, setting `ipv6Only` to `true` will disable dual-stack support, i.e., binding to host `::` won't make `0.0.0.0` be bound."
                            }
                          ]
                        },
                        {
                          "textRaw": "`callback` {Function} Common parameter of [`server.listen()`][] functions.",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Common parameter of [`server.listen()`][] functions.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>If <code>port</code> is specified, it behaves the same as\n<a href=\"#net_server_listen_port_host_backlog_callback\">\n<code>server.listen([port[, host[, backlog]]][, callback])</code></a>.\nOtherwise, if <code>path</code> is specified, it behaves the same as\n<a href=\"#net_server_listen_path_backlog_callback\"><code>server.listen(path[, backlog][, callback])</code></a>.\nIf none of them is specified, an error will be thrown.</p>\n<p>If <code>exclusive</code> is <code>false</code> (default), then cluster workers will use the same\nunderlying handle, allowing connection handling duties to be shared. When\n<code>exclusive</code> is <code>true</code>, the handle is not shared, and attempted port sharing\nresults in an error. An example which listens on an exclusive port is\nshown below.</p>\n<pre><code class=\"language-js\">server.listen({\n  host: 'localhost',\n  port: 80,\n  exclusive: true\n});\n</code></pre>\n<p>Starting an IPC server as root may cause the server path to be inaccessible for\nunprivileged users. Using <code>readableAll</code> and <code>writableAll</code> will make the server\naccessible for all users.</p>"
                },
                {
                  "textRaw": "server.listen(path[, backlog][, callback])",
                  "type": "method",
                  "name": "listen",
                  "meta": {
                    "added": [
                      "v0.1.90"
                    ],
                    "changes": []
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Server}",
                        "name": "return",
                        "type": "net.Server"
                      },
                      "params": [
                        {
                          "textRaw": "`path` {string} Path the server should listen to. See [Identifying paths for IPC connections][].",
                          "name": "path",
                          "type": "string",
                          "desc": "Path the server should listen to. See [Identifying paths for IPC connections][]."
                        },
                        {
                          "textRaw": "`backlog` {number} Common parameter of [`server.listen()`][] functions.",
                          "name": "backlog",
                          "type": "number",
                          "desc": "Common parameter of [`server.listen()`][] functions.",
                          "optional": true
                        },
                        {
                          "textRaw": "`callback` {Function} Common parameter of [`server.listen()`][] functions.",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Common parameter of [`server.listen()`][] functions.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Start an <a href=\"#net_ipc_support\">IPC</a> server listening for connections on the given <code>path</code>.</p>"
                },
                {
                  "textRaw": "server.listen([port[, host[, backlog]]][, callback])",
                  "type": "method",
                  "name": "listen",
                  "meta": {
                    "added": [
                      "v0.1.90"
                    ],
                    "changes": []
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Server}",
                        "name": "return",
                        "type": "net.Server"
                      },
                      "params": [
                        {
                          "textRaw": "`port` {number}",
                          "name": "port",
                          "type": "number",
                          "optional": true
                        },
                        {
                          "textRaw": "`host` {string}",
                          "name": "host",
                          "type": "string",
                          "optional": true
                        },
                        {
                          "textRaw": "`backlog` {number} Common parameter of [`server.listen()`][] functions.",
                          "name": "backlog",
                          "type": "number",
                          "desc": "Common parameter of [`server.listen()`][] functions.",
                          "optional": true
                        },
                        {
                          "textRaw": "`callback` {Function} Common parameter of [`server.listen()`][] functions.",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Common parameter of [`server.listen()`][] functions.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Start a TCP server listening for connections on the given <code>port</code> and <code>host</code>.</p>\n<p>If <code>port</code> is omitted or is 0, the operating system will assign an arbitrary\nunused port, which can be retrieved by using <code>server.address().port</code>\nafter the <a href=\"#net_event_listening\"><code>'listening'</code></a> event has been emitted.</p>\n<p>If <code>host</code> is omitted, the server will accept connections on the\n<a href=\"https://en.wikipedia.org/wiki/IPv6_address#Unspecified_address\">unspecified IPv6 address</a> (<code>::</code>) when IPv6 is available, or the\n<a href=\"https://en.wikipedia.org/wiki/0.0.0.0\">unspecified IPv4 address</a> (<code>0.0.0.0</code>) otherwise.</p>\n<p>In most operating systems, listening to the <a href=\"https://en.wikipedia.org/wiki/IPv6_address#Unspecified_address\">unspecified IPv6 address</a> (<code>::</code>)\nmay cause the <code>net.Server</code> to also listen on the <a href=\"https://en.wikipedia.org/wiki/0.0.0.0\">unspecified IPv4 address</a>\n(<code>0.0.0.0</code>).</p>"
                }
              ]
            },
            {
              "textRaw": "server.ref()",
              "type": "method",
              "name": "ref",
              "meta": {
                "added": [
                  "v0.9.1"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Server}",
                    "name": "return",
                    "type": "net.Server"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Opposite of <code>unref()</code>, calling <code>ref()</code> on a previously <code>unref</code>ed server will\n<em>not</em> let the program exit if it's the only server left (the default behavior).\nIf the server is <code>ref</code>ed calling <code>ref()</code> again will have no effect.</p>"
            },
            {
              "textRaw": "server.unref()",
              "type": "method",
              "name": "unref",
              "meta": {
                "added": [
                  "v0.9.1"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Server}",
                    "name": "return",
                    "type": "net.Server"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Calling <code>unref()</code> on a server will allow the program to exit if this is the only\nactive server in the event system. If the server is already <code>unref</code>ed calling\n<code>unref()</code> again will have no effect.</p>"
            }
          ],
          "properties": [
            {
              "textRaw": "`connections` {integer|null}",
              "type": "integer|null",
              "name": "connections",
              "meta": {
                "added": [
                  "v0.2.0"
                ],
                "deprecated": [
                  "v0.9.7"
                ],
                "changes": []
              },
              "stability": 0,
              "stabilityText": "Deprecated: Use [`server.getConnections()`][] instead.",
              "desc": "<p>The number of concurrent connections on the server.</p>\n<p>This becomes <code>null</code> when sending a socket to a child with\n<a href=\"child_process.html#child_process_child_process_fork_modulepath_args_options\"><code>child_process.fork()</code></a>. To poll forks and get current number of active\nconnections, use asynchronous <a href=\"#net_server_getconnections_callback\"><code>server.getConnections()</code></a> instead.</p>"
            },
            {
              "textRaw": "`listening` {boolean} Indicates whether or not the server is listening for connections.",
              "type": "boolean",
              "name": "listening",
              "meta": {
                "added": [
                  "v5.7.0"
                ],
                "changes": []
              },
              "desc": "Indicates whether or not the server is listening for connections."
            },
            {
              "textRaw": "`maxConnections` {integer}",
              "type": "integer",
              "name": "maxConnections",
              "meta": {
                "added": [
                  "v0.2.0"
                ],
                "changes": []
              },
              "desc": "<p>Set this property to reject connections when the server's connection count gets\nhigh.</p>\n<p>It is not recommended to use this option once a socket has been sent to a child\nwith <a href=\"child_process.html#child_process_child_process_fork_modulepath_args_options\"><code>child_process.fork()</code></a>.</p>"
            }
          ],
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {net.Server}",
                "name": "return",
                "type": "net.Server"
              },
              "params": [
                {
                  "textRaw": "`options` {Object} See [`net.createServer([options][, connectionListener])`][`net.createServer()`].",
                  "name": "options",
                  "type": "Object",
                  "desc": "See [`net.createServer([options][, connectionListener])`][`net.createServer()`].",
                  "optional": true
                },
                {
                  "textRaw": "`connectionListener` {Function} Automatically set as a listener for the [`'connection'`][] event.",
                  "name": "connectionListener",
                  "type": "Function",
                  "desc": "Automatically set as a listener for the [`'connection'`][] event.",
                  "optional": true
                }
              ],
              "desc": "<p><code>net.Server</code> is an <a href=\"events.html#events_class_eventemitter\"><code>EventEmitter</code></a> with the following events:</p>"
            }
          ]
        },
        {
          "textRaw": "Class: net.Socket",
          "type": "class",
          "name": "net.Socket",
          "meta": {
            "added": [
              "v0.3.4"
            ],
            "changes": []
          },
          "desc": "<ul>\n<li>Extends: <a href=\"stream.html#stream_class_stream_duplex\" class=\"type\">&lt;stream.Duplex&gt;</a></li>\n</ul>\n<p>This class is an abstraction of a TCP socket or a streaming <a href=\"#net_ipc_support\">IPC</a> endpoint\n(uses named pipes on Windows, and Unix domain sockets otherwise). It is also\nan <a href=\"events.html#events_class_eventemitter\"><code>EventEmitter</code></a>.</p>\n<p>A <code>net.Socket</code> can be created by the user and used directly to interact with\na server. For example, it is returned by <a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>,\nso the user can use it to talk to the server.</p>\n<p>It can also be created by Node.js and passed to the user when a connection\nis received. For example, it is passed to the listeners of a\n<a href=\"#net_event_connection\"><code>'connection'</code></a> event emitted on a <a href=\"#net_class_net_server\"><code>net.Server</code></a>, so the user can use\nit to interact with the client.</p>",
          "events": [
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [
                {
                  "textRaw": "`hadError` {boolean} `true` if the socket had a transmission error.",
                  "name": "hadError",
                  "type": "boolean",
                  "desc": "`true` if the socket had a transmission error."
                }
              ],
              "desc": "<p>Emitted once the socket is fully closed. The argument <code>hadError</code> is a boolean\nwhich says if the socket was closed due to a transmission error.</p>"
            },
            {
              "textRaw": "Event: 'connect'",
              "type": "event",
              "name": "connect",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when a socket connection is successfully established.\nSee <a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>.</p>"
            },
            {
              "textRaw": "Event: 'data'",
              "type": "event",
              "name": "data",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [
                {
                  "textRaw": "{Buffer|string}",
                  "type": "Buffer|string"
                }
              ],
              "desc": "<p>Emitted when data is received. The argument <code>data</code> will be a <code>Buffer</code> or\n<code>String</code>. Encoding of data is set by <a href=\"#net_socket_setencoding_encoding\"><code>socket.setEncoding()</code></a>.</p>\n<p>The data will be lost if there is no listener when a <code>Socket</code>\nemits a <code>'data'</code> event.</p>"
            },
            {
              "textRaw": "Event: 'drain'",
              "type": "event",
              "name": "drain",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when the write buffer becomes empty. Can be used to throttle uploads.</p>\n<p>See also: the return values of <code>socket.write()</code>.</p>"
            },
            {
              "textRaw": "Event: 'end'",
              "type": "event",
              "name": "end",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when the other end of the socket sends a FIN packet, thus ending the\nreadable side of the socket.</p>\n<p>By default (<code>allowHalfOpen</code> is <code>false</code>) the socket will send a FIN packet\nback and destroy its file descriptor once it has written out its pending\nwrite queue. However, if <code>allowHalfOpen</code> is set to <code>true</code>, the socket will\nnot automatically <a href=\"#net_socket_end_data_encoding_callback\"><code>end()</code></a> its writable side, allowing the\nuser to write arbitrary amounts of data. The user must call\n<a href=\"#net_socket_end_data_encoding_callback\"><code>end()</code></a> explicitly to close the connection (i.e. sending a\nFIN packet back).</p>"
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [
                {
                  "textRaw": "{Error}",
                  "type": "Error"
                }
              ],
              "desc": "<p>Emitted when an error occurs. The <code>'close'</code> event will be called directly\nfollowing this event.</p>"
            },
            {
              "textRaw": "Event: 'lookup'",
              "type": "event",
              "name": "lookup",
              "meta": {
                "added": [
                  "v0.11.3"
                ],
                "changes": [
                  {
                    "version": "v5.10.0",
                    "pr-url": "https://github.com/nodejs/node/pull/5598",
                    "description": "The `host` parameter is supported now."
                  }
                ]
              },
              "params": [],
              "desc": "<p>Emitted after resolving the hostname but before connecting.\nNot applicable to Unix sockets.</p>\n<ul>\n<li><code>err</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error\" class=\"type\">&lt;Error&gt;</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type\" class=\"type\">&lt;null&gt;</a> The error object. See <a href=\"dns.html#dns_dns_lookup_hostname_options_callback\"><code>dns.lookup()</code></a>.</li>\n<li><code>address</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> The IP address.</li>\n<li><code>family</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type\" class=\"type\">&lt;null&gt;</a> The address type. See <a href=\"dns.html#dns_dns_lookup_hostname_options_callback\"><code>dns.lookup()</code></a>.</li>\n<li><code>host</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> The hostname.</li>\n</ul>"
            },
            {
              "textRaw": "Event: 'ready'",
              "type": "event",
              "name": "ready",
              "meta": {
                "added": [
                  "v9.11.0"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted when a socket is ready to be used.</p>\n<p>Triggered immediately after <code>'connect'</code>.</p>"
            },
            {
              "textRaw": "Event: 'timeout'",
              "type": "event",
              "name": "timeout",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "params": [],
              "desc": "<p>Emitted if the socket times out from inactivity. This is only to notify that\nthe socket has been idle. The user must manually close the connection.</p>\n<p>See also: <a href=\"#net_socket_settimeout_timeout_callback\"><code>socket.setTimeout()</code></a>.</p>"
            }
          ],
          "methods": [
            {
              "textRaw": "socket.address()",
              "type": "method",
              "name": "address",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {Object}",
                    "name": "return",
                    "type": "Object"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Returns the bound <code>address</code>, the address <code>family</code> name and <code>port</code> of the\nsocket as reported by the operating system:\n<code>{ port: 12346, family: 'IPv4', address: '127.0.0.1' }</code></p>"
            },
            {
              "textRaw": "socket.connect()",
              "type": "method",
              "name": "connect",
              "signatures": [
                {
                  "params": []
                }
              ],
              "desc": "<p>Initiate a connection on a given socket.</p>\n<p>Possible signatures:</p>\n<ul>\n<li><a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a></li>\n<li><a href=\"#net_socket_connect_path_connectlistener\"><code>socket.connect(path[, connectListener])</code></a>\nfor <a href=\"#net_ipc_support\">IPC</a> connections.</li>\n<li><a href=\"#net_socket_connect_port_host_connectlistener\"><code>socket.connect(port[, host][, connectListener])</code></a>\nfor TCP connections.</li>\n<li>Returns: <a href=\"net.html#net_class_net_socket\" class=\"type\">&lt;net.Socket&gt;</a> The socket itself.</li>\n</ul>\n<p>This function is asynchronous. When the connection is established, the\n<a href=\"#net_event_connect\"><code>'connect'</code></a> event will be emitted. If there is a problem connecting,\ninstead of a <a href=\"#net_event_connect\"><code>'connect'</code></a> event, an <a href=\"#net_event_error_1\"><code>'error'</code></a> event will be emitted with\nthe error passed to the <a href=\"#net_event_error_1\"><code>'error'</code></a> listener.\nThe last parameter <code>connectListener</code>, if supplied, will be added as a listener\nfor the <a href=\"#net_event_connect\"><code>'connect'</code></a> event <strong>once</strong>.</p>",
              "methods": [
                {
                  "textRaw": "socket.connect(options[, connectListener])",
                  "type": "method",
                  "name": "connect",
                  "meta": {
                    "added": [
                      "v0.1.90"
                    ],
                    "changes": [
                      {
                        "version": "v12.10.0",
                        "pr-url": "https://github.com/nodejs/node/pull/25436",
                        "description": "Added `onread` option."
                      },
                      {
                        "version": "v6.0.0",
                        "pr-url": "https://github.com/nodejs/node/pull/6021",
                        "description": "The `hints` option defaults to `0` in all cases now. Previously, in the absence of the `family` option it would default to `dns.ADDRCONFIG | dns.V4MAPPED`."
                      },
                      {
                        "version": "v5.11.0",
                        "pr-url": "https://github.com/nodejs/node/pull/6000",
                        "description": "The `hints` option is supported now."
                      }
                    ]
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Socket} The socket itself.",
                        "name": "return",
                        "type": "net.Socket",
                        "desc": "The socket itself."
                      },
                      "params": [
                        {
                          "textRaw": "`options` {Object}",
                          "name": "options",
                          "type": "Object"
                        },
                        {
                          "textRaw": "`connectListener` {Function} Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "name": "connectListener",
                          "type": "Function",
                          "desc": "Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Initiate a connection on a given socket. Normally this method is not needed,\nthe socket should be created and opened with <a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>. Use\nthis only when implementing a custom Socket.</p>\n<p>For TCP connections, available <code>options</code> are:</p>\n<ul>\n<li><code>port</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\" class=\"type\">&lt;number&gt;</a> Required. Port the socket should connect to.</li>\n<li><code>host</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> Host the socket should connect to. <strong>Default:</strong> <code>'localhost'</code>.</li>\n<li><code>localAddress</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> Local address the socket should connect from.</li>\n<li><code>localPort</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\" class=\"type\">&lt;number&gt;</a> Local port the socket should connect from.</li>\n<li><code>family</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\" class=\"type\">&lt;number&gt;</a>: Version of IP stack. Must be <code>4</code>, <code>6</code>, or <code>0</code>. The value\n<code>0</code> indicates that both IPv4 and IPv6 addresses are allowed. <strong>Default:</strong> <code>0</code>.</li>\n<li><code>hints</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\" class=\"type\">&lt;number&gt;</a> Optional <a href=\"dns.html#dns_supported_getaddrinfo_flags\"><code>dns.lookup()</code> hints</a>.</li>\n<li><code>lookup</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function\" class=\"type\">&lt;Function&gt;</a> Custom lookup function. <strong>Default:</strong> <a href=\"dns.html#dns_dns_lookup_hostname_options_callback\"><code>dns.lookup()</code></a>.</li>\n</ul>\n<p>For <a href=\"#net_ipc_support\">IPC</a> connections, available <code>options</code> are:</p>\n<ul>\n<li><code>path</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type\" class=\"type\">&lt;string&gt;</a> Required. Path the client should connect to.\nSee <a href=\"#net_identifying_paths_for_ipc_connections\">Identifying paths for IPC connections</a>. If provided, the TCP-specific\noptions above are ignored.</li>\n</ul>\n<p>For both types, available <code>options</code> include:</p>\n<ul>\n<li>\n<p><code>onread</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\" class=\"type\">&lt;Object&gt;</a> If specified, incoming data is stored in a single <code>buffer</code>\nand passed to the supplied <code>callback</code> when data arrives on the socket.\nNote: this will cause the streaming functionality to not provide any data,\nhowever events like <code>'error'</code>, <code>'end'</code>, and <code>'close'</code> will still be emitted\nas normal and methods like <code>pause()</code> and <code>resume()</code> will also behave as\nexpected.</p>\n<ul>\n<li><code>buffer</code> <a href=\"buffer.html#buffer_class_buffer\" class=\"type\">&lt;Buffer&gt;</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array\" class=\"type\">&lt;Uint8Array&gt;</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function\" class=\"type\">&lt;Function&gt;</a> Either a reusable chunk of memory to\nuse for storing incoming data or a function that returns such.</li>\n<li><code>callback</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function\" class=\"type\">&lt;Function&gt;</a> This function is called for every chunk of incoming\ndata. Two arguments are passed to it: the number of bytes written to\n<code>buffer</code> and a reference to <code>buffer</code>. Return <code>false</code> from this function to\nimplicitly <code>pause()</code> the socket. This function will be executed in the\nglobal context.</li>\n</ul>\n</li>\n</ul>\n<p>Following is an example of a client using the <code>onread</code> option:</p>\n<pre><code class=\"language-js\">const net = require('net');\nnet.connect({\n  port: 80,\n  onread: {\n    // Reuses a 4KiB Buffer for every read from the socket.\n    buffer: Buffer.alloc(4 * 1024),\n    callback: function(nread, buf) {\n      // Received data is available in `buf` from 0 to `nread`.\n      console.log(buf.toString('utf8', 0, nread));\n    }\n  }\n});\n</code></pre>"
                },
                {
                  "textRaw": "socket.connect(path[, connectListener])",
                  "type": "method",
                  "name": "connect",
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Socket} The socket itself.",
                        "name": "return",
                        "type": "net.Socket",
                        "desc": "The socket itself."
                      },
                      "params": [
                        {
                          "textRaw": "`path` {string} Path the client should connect to. See [Identifying paths for IPC connections][].",
                          "name": "path",
                          "type": "string",
                          "desc": "Path the client should connect to. See [Identifying paths for IPC connections][]."
                        },
                        {
                          "textRaw": "`connectListener` {Function} Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "name": "connectListener",
                          "type": "Function",
                          "desc": "Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Initiate an <a href=\"#net_ipc_support\">IPC</a> connection on the given socket.</p>\n<p>Alias to\n<a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a>\ncalled with <code>{ path: path }</code> as <code>options</code>.</p>"
                },
                {
                  "textRaw": "socket.connect(port[, host][, connectListener])",
                  "type": "method",
                  "name": "connect",
                  "meta": {
                    "added": [
                      "v0.1.90"
                    ],
                    "changes": []
                  },
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {net.Socket} The socket itself.",
                        "name": "return",
                        "type": "net.Socket",
                        "desc": "The socket itself."
                      },
                      "params": [
                        {
                          "textRaw": "`port` {number} Port the client should connect to.",
                          "name": "port",
                          "type": "number",
                          "desc": "Port the client should connect to."
                        },
                        {
                          "textRaw": "`host` {string} Host the client should connect to.",
                          "name": "host",
                          "type": "string",
                          "desc": "Host the client should connect to.",
                          "optional": true
                        },
                        {
                          "textRaw": "`connectListener` {Function} Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "name": "connectListener",
                          "type": "Function",
                          "desc": "Common parameter of [`socket.connect()`][] methods. Will be added as a listener for the [`'connect'`][] event once.",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Initiate a TCP connection on the given socket.</p>\n<p>Alias to\n<a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a>\ncalled with <code>{port: port, host: host}</code> as <code>options</code>.</p>"
                }
              ]
            },
            {
              "textRaw": "socket.destroy([exception])",
              "type": "method",
              "name": "destroy",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket}",
                    "name": "return",
                    "type": "net.Socket"
                  },
                  "params": [
                    {
                      "textRaw": "`exception` {Object}",
                      "name": "exception",
                      "type": "Object",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Ensures that no more I/O activity happens on this socket. Only necessary in\ncase of errors (parse error or so).</p>\n<p>If <code>exception</code> is specified, an <a href=\"#net_event_error_1\"><code>'error'</code></a> event will be emitted and any\nlisteners for that event will receive <code>exception</code> as an argument.</p>"
            },
            {
              "textRaw": "socket.end([data[, encoding]][, callback])",
              "type": "method",
              "name": "end",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": [
                    {
                      "textRaw": "`data` {string|Buffer|Uint8Array}",
                      "name": "data",
                      "type": "string|Buffer|Uint8Array",
                      "optional": true
                    },
                    {
                      "textRaw": "`encoding` {string} Only used when data is `string`. **Default:** `'utf8'`.",
                      "name": "encoding",
                      "type": "string",
                      "default": "`'utf8'`",
                      "desc": "Only used when data is `string`.",
                      "optional": true
                    },
                    {
                      "textRaw": "`callback` {Function} Optional callback for when the socket is finished.",
                      "name": "callback",
                      "type": "Function",
                      "desc": "Optional callback for when the socket is finished.",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Half-closes the socket. i.e., it sends a FIN packet. It is possible the\nserver will still send some data.</p>\n<p>If <code>data</code> is specified, it is equivalent to calling\n<code>socket.write(data, encoding)</code> followed by <a href=\"#net_socket_end_data_encoding_callback\"><code>socket.end()</code></a>.</p>"
            },
            {
              "textRaw": "socket.pause()",
              "type": "method",
              "name": "pause",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": []
                }
              ],
              "desc": "<p>Pauses the reading of data. That is, <a href=\"#net_event_data\"><code>'data'</code></a> events will not be emitted.\nUseful to throttle back an upload.</p>"
            },
            {
              "textRaw": "socket.ref()",
              "type": "method",
              "name": "ref",
              "meta": {
                "added": [
                  "v0.9.1"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": []
                }
              ],
              "desc": "<p>Opposite of <code>unref()</code>, calling <code>ref()</code> on a previously <code>unref</code>ed socket will\n<em>not</em> let the program exit if it's the only socket left (the default behavior).\nIf the socket is <code>ref</code>ed calling <code>ref</code> again will have no effect.</p>"
            },
            {
              "textRaw": "socket.resume()",
              "type": "method",
              "name": "resume",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": []
                }
              ],
              "desc": "<p>Resumes reading after a call to <a href=\"#net_socket_pause\"><code>socket.pause()</code></a>.</p>"
            },
            {
              "textRaw": "socket.setEncoding([encoding])",
              "type": "method",
              "name": "setEncoding",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": [
                    {
                      "textRaw": "`encoding` {string}",
                      "name": "encoding",
                      "type": "string",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Set the encoding for the socket as a <a href=\"stream.html#stream_class_stream_readable\">Readable Stream</a>. See\n<a href=\"stream.html#stream_readable_setencoding_encoding\"><code>readable.setEncoding()</code></a> for more information.</p>"
            },
            {
              "textRaw": "socket.setKeepAlive([enable][, initialDelay])",
              "type": "method",
              "name": "setKeepAlive",
              "meta": {
                "added": [
                  "v0.1.92"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": [
                    {
                      "textRaw": "`enable` {boolean} **Default:** `false`",
                      "name": "enable",
                      "type": "boolean",
                      "default": "`false`",
                      "optional": true
                    },
                    {
                      "textRaw": "`initialDelay` {number} **Default:** `0`",
                      "name": "initialDelay",
                      "type": "number",
                      "default": "`0`",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Enable/disable keep-alive functionality, and optionally set the initial\ndelay before the first keepalive probe is sent on an idle socket.</p>\n<p>Set <code>initialDelay</code> (in milliseconds) to set the delay between the last\ndata packet received and the first keepalive probe. Setting <code>0</code> for\n<code>initialDelay</code> will leave the value unchanged from the default\n(or previous) setting.</p>"
            },
            {
              "textRaw": "socket.setNoDelay([noDelay])",
              "type": "method",
              "name": "setNoDelay",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": [
                    {
                      "textRaw": "`noDelay` {boolean} **Default:** `true`",
                      "name": "noDelay",
                      "type": "boolean",
                      "default": "`true`",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Disables the Nagle algorithm. By default TCP connections use the Nagle\nalgorithm, they buffer data before sending it off. Setting <code>true</code> for\n<code>noDelay</code> will immediately fire off data each time <code>socket.write()</code> is called.</p>"
            },
            {
              "textRaw": "socket.setTimeout(timeout[, callback])",
              "type": "method",
              "name": "setTimeout",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": [
                    {
                      "textRaw": "`timeout` {number}",
                      "name": "timeout",
                      "type": "number"
                    },
                    {
                      "textRaw": "`callback` {Function}",
                      "name": "callback",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Sets the socket to timeout after <code>timeout</code> milliseconds of inactivity on\nthe socket. By default <code>net.Socket</code> do not have a timeout.</p>\n<p>When an idle timeout is triggered the socket will receive a <a href=\"#net_event_timeout\"><code>'timeout'</code></a>\nevent but the connection will not be severed. The user must manually call\n<a href=\"#net_socket_end_data_encoding_callback\"><code>socket.end()</code></a> or <a href=\"#net_socket_destroy_exception\"><code>socket.destroy()</code></a> to end the connection.</p>\n<pre><code class=\"language-js\">socket.setTimeout(3000);\nsocket.on('timeout', () => {\n  console.log('socket timeout');\n  socket.end();\n});\n</code></pre>\n<p>If <code>timeout</code> is 0, then the existing idle timeout is disabled.</p>\n<p>The optional <code>callback</code> parameter will be added as a one-time listener for the\n<a href=\"#net_event_timeout\"><code>'timeout'</code></a> event.</p>"
            },
            {
              "textRaw": "socket.unref()",
              "type": "method",
              "name": "unref",
              "meta": {
                "added": [
                  "v0.9.1"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The socket itself.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The socket itself."
                  },
                  "params": []
                }
              ],
              "desc": "<p>Calling <code>unref()</code> on a socket will allow the program to exit if this is the only\nactive socket in the event system. If the socket is already <code>unref</code>ed calling\n<code>unref()</code> again will have no effect.</p>"
            },
            {
              "textRaw": "socket.write(data[, encoding][, callback])",
              "type": "method",
              "name": "write",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {boolean}",
                    "name": "return",
                    "type": "boolean"
                  },
                  "params": [
                    {
                      "textRaw": "`data` {string|Buffer|Uint8Array}",
                      "name": "data",
                      "type": "string|Buffer|Uint8Array"
                    },
                    {
                      "textRaw": "`encoding` {string} Only used when data is `string`. **Default:** `utf8`.",
                      "name": "encoding",
                      "type": "string",
                      "default": "`utf8`",
                      "desc": "Only used when data is `string`.",
                      "optional": true
                    },
                    {
                      "textRaw": "`callback` {Function}",
                      "name": "callback",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Sends data on the socket. The second parameter specifies the encoding in the\ncase of a string — it defaults to UTF8 encoding.</p>\n<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel\nbuffer. Returns <code>false</code> if all or part of the data was queued in user memory.\n<a href=\"#net_event_drain\"><code>'drain'</code></a> will be emitted when the buffer is again free.</p>\n<p>The optional <code>callback</code> parameter will be executed when the data is finally\nwritten out, which may not be immediately.</p>\n<p>See <code>Writable</code> stream <a href=\"stream.html#stream_writable_write_chunk_encoding_callback\"><code>write()</code></a> method for more\ninformation.</p>"
            }
          ],
          "properties": [
            {
              "textRaw": "`bufferSize` {integer}",
              "type": "integer",
              "name": "bufferSize",
              "meta": {
                "added": [
                  "v0.3.8"
                ],
                "changes": []
              },
              "desc": "<p><code>net.Socket</code> has the property that <code>socket.write()</code> always works. This is to\nhelp users get up and running quickly. The computer cannot always keep up\nwith the amount of data that is written to a socket. The network connection\nsimply might be too slow. Node.js will internally queue up the data written to a\nsocket and send it out over the wire when it is possible. (Internally it is\npolling on the socket's file descriptor for being writable).</p>\n<p>The consequence of this internal buffering is that memory may grow. This\nproperty shows the number of characters currently buffered to be written.\n(Number of characters is approximately equal to the number of bytes to be\nwritten, but the buffer may contain strings, and the strings are lazily\nencoded, so the exact number of bytes is not known.)</p>\n<p>Users who experience large or growing <code>bufferSize</code> should attempt to\n\"throttle\" the data flows in their program with\n<a href=\"#net_socket_pause\"><code>socket.pause()</code></a> and <a href=\"#net_socket_resume\"><code>socket.resume()</code></a>.</p>"
            },
            {
              "textRaw": "`bytesRead` {integer}",
              "type": "integer",
              "name": "bytesRead",
              "meta": {
                "added": [
                  "v0.5.3"
                ],
                "changes": []
              },
              "desc": "<p>The amount of received bytes.</p>"
            },
            {
              "textRaw": "`bytesWritten` {integer}",
              "type": "integer",
              "name": "bytesWritten",
              "meta": {
                "added": [
                  "v0.5.3"
                ],
                "changes": []
              },
              "desc": "<p>The amount of bytes sent.</p>"
            },
            {
              "textRaw": "`connecting` {boolean}",
              "type": "boolean",
              "name": "connecting",
              "meta": {
                "added": [
                  "v6.1.0"
                ],
                "changes": []
              },
              "desc": "<p>If <code>true</code>,\n<a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a> was\ncalled and has not yet finished. It will stay <code>true</code> until the socket becomes\nconnected, then it is set to <code>false</code> and the <code>'connect'</code> event is emitted.  Note\nthat the\n<a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a>\ncallback is a listener for the <code>'connect'</code> event.</p>"
            },
            {
              "textRaw": "`destroyed` {boolean} Indicates if the connection is destroyed or not. Once a connection is destroyed no further data can be transferred using it.",
              "type": "boolean",
              "name": "destroyed",
              "desc": "Indicates if the connection is destroyed or not. Once a connection is destroyed no further data can be transferred using it."
            },
            {
              "textRaw": "`localAddress` {string}",
              "type": "string",
              "name": "localAddress",
              "meta": {
                "added": [
                  "v0.9.6"
                ],
                "changes": []
              },
              "desc": "<p>The string representation of the local IP address the remote client is\nconnecting on. For example, in a server listening on <code>'0.0.0.0'</code>, if a client\nconnects on <code>'192.168.1.1'</code>, the value of <code>socket.localAddress</code> would be\n<code>'192.168.1.1'</code>.</p>"
            },
            {
              "textRaw": "`localPort` {integer}",
              "type": "integer",
              "name": "localPort",
              "meta": {
                "added": [
                  "v0.9.6"
                ],
                "changes": []
              },
              "desc": "<p>The numeric representation of the local port. For example, <code>80</code> or <code>21</code>.</p>"
            },
            {
              "textRaw": "`pending` {boolean}",
              "type": "boolean",
              "name": "pending",
              "meta": {
                "added": [
                  "v11.2.0"
                ],
                "changes": []
              },
              "desc": "<p>This is <code>true</code> if the socket is not connected yet, either because <code>.connect()</code>\nhas not yet been called or because it is still in the process of connecting\n(see <a href=\"#net_socket_connecting\"><code>socket.connecting</code></a>).</p>"
            },
            {
              "textRaw": "`remoteAddress` {string}",
              "type": "string",
              "name": "remoteAddress",
              "meta": {
                "added": [
                  "v0.5.10"
                ],
                "changes": []
              },
              "desc": "<p>The string representation of the remote IP address. For example,\n<code>'74.125.127.100'</code> or <code>'2001:4860:a005::68'</code>. Value may be <code>undefined</code> if\nthe socket is destroyed (for example, if the client disconnected).</p>"
            },
            {
              "textRaw": "`remoteFamily` {string}",
              "type": "string",
              "name": "remoteFamily",
              "meta": {
                "added": [
                  "v0.11.14"
                ],
                "changes": []
              },
              "desc": "<p>The string representation of the remote IP family. <code>'IPv4'</code> or <code>'IPv6'</code>.</p>"
            },
            {
              "textRaw": "`remotePort` {integer}",
              "type": "integer",
              "name": "remotePort",
              "meta": {
                "added": [
                  "v0.5.10"
                ],
                "changes": []
              },
              "desc": "<p>The numeric representation of the remote port. For example, <code>80</code> or <code>21</code>.</p>"
            }
          ],
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {net.Socket}",
                "name": "return",
                "type": "net.Socket"
              },
              "params": [
                {
                  "textRaw": "`options` {Object} Available options are:",
                  "name": "options",
                  "type": "Object",
                  "desc": "Available options are:",
                  "options": [
                    {
                      "textRaw": "`fd` {number} If specified, wrap around an existing socket with the given file descriptor, otherwise a new socket will be created.",
                      "name": "fd",
                      "type": "number",
                      "desc": "If specified, wrap around an existing socket with the given file descriptor, otherwise a new socket will be created."
                    },
                    {
                      "textRaw": "`allowHalfOpen` {boolean} Indicates whether half-opened TCP connections are allowed. See [`net.createServer()`][] and the [`'end'`][] event for details. **Default:** `false`.",
                      "name": "allowHalfOpen",
                      "type": "boolean",
                      "default": "`false`",
                      "desc": "Indicates whether half-opened TCP connections are allowed. See [`net.createServer()`][] and the [`'end'`][] event for details."
                    },
                    {
                      "textRaw": "`readable` {boolean} Allow reads on the socket when an `fd` is passed, otherwise ignored. **Default:** `false`.",
                      "name": "readable",
                      "type": "boolean",
                      "default": "`false`",
                      "desc": "Allow reads on the socket when an `fd` is passed, otherwise ignored."
                    },
                    {
                      "textRaw": "`writable` {boolean} Allow writes on the socket when an `fd` is passed, otherwise ignored. **Default:** `false`.",
                      "name": "writable",
                      "type": "boolean",
                      "default": "`false`",
                      "desc": "Allow writes on the socket when an `fd` is passed, otherwise ignored."
                    }
                  ],
                  "optional": true
                }
              ],
              "desc": "<p>Creates a new socket object.</p>\n<p>The newly created socket can be either a TCP socket or a streaming <a href=\"#net_ipc_support\">IPC</a>\nendpoint, depending on what it <a href=\"#net_socket_connect\"><code>connect()</code></a> to.</p>"
            }
          ]
        }
      ],
      "methods": [
        {
          "textRaw": "net.connect()",
          "type": "method",
          "name": "connect",
          "signatures": [
            {
              "params": []
            }
          ],
          "desc": "<p>Aliases to\n<a href=\"#net_net_createconnection\"><code>net.createConnection()</code></a>.</p>\n<p>Possible signatures:</p>\n<ul>\n<li><a href=\"#net_net_connect_options_connectlistener\"><code>net.connect(options[, connectListener])</code></a></li>\n<li><a href=\"#net_net_connect_path_connectlistener\"><code>net.connect(path[, connectListener])</code></a> for <a href=\"#net_ipc_support\">IPC</a>\nconnections.</li>\n<li><a href=\"#net_net_connect_port_host_connectlistener\"><code>net.connect(port[, host][, connectListener])</code></a>\nfor TCP connections.</li>\n</ul>",
          "methods": [
            {
              "textRaw": "net.connect(options[, connectListener])",
              "type": "method",
              "name": "connect",
              "meta": {
                "added": [
                  "v0.7.0"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket}",
                    "name": "return",
                    "type": "net.Socket"
                  },
                  "params": [
                    {
                      "textRaw": "`options` {Object}",
                      "name": "options",
                      "type": "Object"
                    },
                    {
                      "textRaw": "`connectListener` {Function}",
                      "name": "connectListener",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Alias to\n<a href=\"#net_net_createconnection_options_connectlistener\"><code>net.createConnection(options[, connectListener])</code></a>.</p>"
            },
            {
              "textRaw": "net.connect(path[, connectListener])",
              "type": "method",
              "name": "connect",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket}",
                    "name": "return",
                    "type": "net.Socket"
                  },
                  "params": [
                    {
                      "textRaw": "`path` {string}",
                      "name": "path",
                      "type": "string"
                    },
                    {
                      "textRaw": "`connectListener` {Function}",
                      "name": "connectListener",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Alias to\n<a href=\"#net_net_createconnection_path_connectlistener\"><code>net.createConnection(path[, connectListener])</code></a>.</p>"
            },
            {
              "textRaw": "net.connect(port[, host][, connectListener])",
              "type": "method",
              "name": "connect",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket}",
                    "name": "return",
                    "type": "net.Socket"
                  },
                  "params": [
                    {
                      "textRaw": "`port` {number}",
                      "name": "port",
                      "type": "number"
                    },
                    {
                      "textRaw": "`host` {string}",
                      "name": "host",
                      "type": "string",
                      "optional": true
                    },
                    {
                      "textRaw": "`connectListener` {Function}",
                      "name": "connectListener",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Alias to\n<a href=\"#net_net_createconnection_port_host_connectlistener\"><code>net.createConnection(port[, host][, connectListener])</code></a>.</p>"
            }
          ]
        },
        {
          "textRaw": "net.createConnection()",
          "type": "method",
          "name": "createConnection",
          "signatures": [
            {
              "params": []
            }
          ],
          "desc": "<p>A factory function, which creates a new <a href=\"#net_class_net_socket\"><code>net.Socket</code></a>,\nimmediately initiates connection with <a href=\"#net_socket_connect\"><code>socket.connect()</code></a>,\nthen returns the <code>net.Socket</code> that starts the connection.</p>\n<p>When the connection is established, a <a href=\"#net_event_connect\"><code>'connect'</code></a> event will be emitted\non the returned socket. The last parameter <code>connectListener</code>, if supplied,\nwill be added as a listener for the <a href=\"#net_event_connect\"><code>'connect'</code></a> event <strong>once</strong>.</p>\n<p>Possible signatures:</p>\n<ul>\n<li><a href=\"#net_net_createconnection_options_connectlistener\"><code>net.createConnection(options[, connectListener])</code></a></li>\n<li><a href=\"#net_net_createconnection_path_connectlistener\"><code>net.createConnection(path[, connectListener])</code></a>\nfor <a href=\"#net_ipc_support\">IPC</a> connections.</li>\n<li><a href=\"#net_net_createconnection_port_host_connectlistener\"><code>net.createConnection(port[, host][, connectListener])</code></a>\nfor TCP connections.</li>\n</ul>\n<p>The <a href=\"#net_net_connect\"><code>net.connect()</code></a> function is an alias to this function.</p>",
          "methods": [
            {
              "textRaw": "net.createConnection(options[, connectListener])",
              "type": "method",
              "name": "createConnection",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The newly created socket used to start the connection.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The newly created socket used to start the connection."
                  },
                  "params": [
                    {
                      "textRaw": "`options` {Object} Required. Will be passed to both the [`new net.Socket([options])`][`new net.Socket(options)`] call and the [`socket.connect(options[, connectListener])`][`socket.connect(options)`] method.",
                      "name": "options",
                      "type": "Object",
                      "desc": "Required. Will be passed to both the [`new net.Socket([options])`][`new net.Socket(options)`] call and the [`socket.connect(options[, connectListener])`][`socket.connect(options)`] method."
                    },
                    {
                      "textRaw": "`connectListener` {Function} Common parameter of the [`net.createConnection()`][] functions. If supplied, will be added as a listener for the [`'connect'`][] event on the returned socket once.",
                      "name": "connectListener",
                      "type": "Function",
                      "desc": "Common parameter of the [`net.createConnection()`][] functions. If supplied, will be added as a listener for the [`'connect'`][] event on the returned socket once.",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>For available options, see\n<a href=\"#net_new_net_socket_options\"><code>new net.Socket([options])</code></a>\nand <a href=\"#net_socket_connect_options_connectlistener\"><code>socket.connect(options[, connectListener])</code></a>.</p>\n<p>Additional options:</p>\n<ul>\n<li><code>timeout</code> <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\" class=\"type\">&lt;number&gt;</a> If set, will be used to call\n<a href=\"#net_socket_settimeout_timeout_callback\"><code>socket.setTimeout(timeout)</code></a> after the socket is created, but before\nit starts the connection.</li>\n</ul>\n<p>Following is an example of a client of the echo server described\nin the <a href=\"#net_net_createserver_options_connectionlistener\"><code>net.createServer()</code></a> section:</p>\n<pre><code class=\"language-js\">const net = require('net');\nconst client = net.createConnection({ port: 8124 }, () => {\n  // 'connect' listener.\n  console.log('connected to server!');\n  client.write('world!\\r\\n');\n});\nclient.on('data', (data) => {\n  console.log(data.toString());\n  client.end();\n});\nclient.on('end', () => {\n  console.log('disconnected from server');\n});\n</code></pre>\n<p>To connect on the socket <code>/tmp/echo.sock</code> the second line would just be\nchanged to:</p>\n<pre><code class=\"language-js\">const client = net.createConnection({ path: '/tmp/echo.sock' });\n</code></pre>"
            },
            {
              "textRaw": "net.createConnection(path[, connectListener])",
              "type": "method",
              "name": "createConnection",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The newly created socket used to start the connection.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The newly created socket used to start the connection."
                  },
                  "params": [
                    {
                      "textRaw": "`path` {string} Path the socket should connect to. Will be passed to [`socket.connect(path[, connectListener])`][`socket.connect(path)`]. See [Identifying paths for IPC connections][].",
                      "name": "path",
                      "type": "string",
                      "desc": "Path the socket should connect to. Will be passed to [`socket.connect(path[, connectListener])`][`socket.connect(path)`]. See [Identifying paths for IPC connections][]."
                    },
                    {
                      "textRaw": "`connectListener` {Function} Common parameter of the [`net.createConnection()`][] functions, an \"once\" listener for the `'connect'` event on the initiating socket. Will be passed to [`socket.connect(path[, connectListener])`][`socket.connect(path)`].",
                      "name": "connectListener",
                      "type": "Function",
                      "desc": "Common parameter of the [`net.createConnection()`][] functions, an \"once\" listener for the `'connect'` event on the initiating socket. Will be passed to [`socket.connect(path[, connectListener])`][`socket.connect(path)`].",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Initiates an <a href=\"#net_ipc_support\">IPC</a> connection.</p>\n<p>This function creates a new <a href=\"#net_class_net_socket\"><code>net.Socket</code></a> with all options set to default,\nimmediately initiates connection with\n<a href=\"#net_socket_connect_path_connectlistener\"><code>socket.connect(path[, connectListener])</code></a>,\nthen returns the <code>net.Socket</code> that starts the connection.</p>"
            },
            {
              "textRaw": "net.createConnection(port[, host][, connectListener])",
              "type": "method",
              "name": "createConnection",
              "meta": {
                "added": [
                  "v0.1.90"
                ],
                "changes": []
              },
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {net.Socket} The newly created socket used to start the connection.",
                    "name": "return",
                    "type": "net.Socket",
                    "desc": "The newly created socket used to start the connection."
                  },
                  "params": [
                    {
                      "textRaw": "`port` {number} Port the socket should connect to. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`].",
                      "name": "port",
                      "type": "number",
                      "desc": "Port the socket should connect to. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`]."
                    },
                    {
                      "textRaw": "`host` {string} Host the socket should connect to. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`]. **Default:** `'localhost'`.",
                      "name": "host",
                      "type": "string",
                      "default": "`'localhost'`",
                      "desc": "Host the socket should connect to. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`].",
                      "optional": true
                    },
                    {
                      "textRaw": "`connectListener` {Function} Common parameter of the [`net.createConnection()`][] functions, an \"once\" listener for the `'connect'` event on the initiating socket. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`].",
                      "name": "connectListener",
                      "type": "Function",
                      "desc": "Common parameter of the [`net.createConnection()`][] functions, an \"once\" listener for the `'connect'` event on the initiating socket. Will be passed to [`socket.connect(port[, host][, connectListener])`][`socket.connect(port, host)`].",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Initiates a TCP connection.</p>\n<p>This function creates a new <a href=\"#net_class_net_socket\"><code>net.Socket</code></a> with all options set to default,\nimmediately initiates connection with\n<a href=\"#net_socket_connect_port_host_connectlistener\"><code>socket.connect(port[, host][, connectListener])</code></a>,\nthen returns the <code>net.Socket</code> that starts the connection.</p>"
            }
          ]
        },
        {
          "textRaw": "net.createServer([options][, connectionListener])",
          "type": "method",
          "name": "createServer",
          "meta": {
            "added": [
              "v0.5.0"
            ],
            "changes": []
          },
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {net.Server}",
                "name": "return",
                "type": "net.Server"
              },
              "params": [
                {
                  "textRaw": "`options` {Object}",
                  "name": "options",
                  "type": "Object",
                  "options": [
                    {
                      "textRaw": "`allowHalfOpen` {boolean} Indicates whether half-opened TCP connections are allowed. **Default:** `false`.",
                      "name": "allowHalfOpen",
                      "type": "boolean",
                      "default": "`false`",
                      "desc": "Indicates whether half-opened TCP connections are allowed."
                    },
                    {
                      "textRaw": "`pauseOnConnect` {boolean} Indicates whether the socket should be paused on incoming connections. **Default:** `false`.",
                      "name": "pauseOnConnect",
                      "type": "boolean",
                      "default": "`false`",
                      "desc": "Indicates whether the socket should be paused on incoming connections."
                    }
                  ],
                  "optional": true
                },
                {
                  "textRaw": "`connectionListener` {Function} Automatically set as a listener for the [`'connection'`][] event.",
                  "name": "connectionListener",
                  "type": "Function",
                  "desc": "Automatically set as a listener for the [`'connection'`][] event.",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>Creates a new TCP or <a href=\"#net_ipc_support\">IPC</a> server.</p>\n<p>If <code>allowHalfOpen</code> is set to <code>true</code>, when the other end of the socket\nsends a FIN packet, the server will only send a FIN packet back when\n<a href=\"#net_socket_end_data_encoding_callback\"><code>socket.end()</code></a> is explicitly called, until then the connection is\nhalf-closed (non-readable but still writable). See <a href=\"#net_event_end\"><code>'end'</code></a> event\nand <a href=\"https://tools.ietf.org/html/rfc1122\">RFC 1122</a> (section 4.2.2.13) for more information.</p>\n<p>If <code>pauseOnConnect</code> is set to <code>true</code>, then the socket associated with each\nincoming connection will be paused, and no data will be read from its handle.\nThis allows connections to be passed between processes without any data being\nread by the original process. To begin reading data from a paused socket, call\n<a href=\"#net_socket_resume\"><code>socket.resume()</code></a>.</p>\n<p>The server can be a TCP server or an <a href=\"#net_ipc_support\">IPC</a> server, depending on what it\n<a href=\"#net_server_listen\"><code>listen()</code></a> to.</p>\n<p>Here is an example of an TCP echo server which listens for connections\non port 8124:</p>\n<pre><code class=\"language-js\">const net = require('net');\nconst server = net.createServer((c) => {\n  // 'connection' listener.\n  console.log('client connected');\n  c.on('end', () => {\n    console.log('client disconnected');\n  });\n  c.write('hello\\r\\n');\n  c.pipe(c);\n});\nserver.on('error', (err) => {\n  throw err;\n});\nserver.listen(8124, () => {\n  console.log('server bound');\n});\n</code></pre>\n<p>Test this by using <code>telnet</code>:</p>\n<pre><code class=\"language-console\">$ telnet localhost 8124\n</code></pre>\n<p>To listen on the socket <code>/tmp/echo.sock</code> the third line from the last would\njust be changed to:</p>\n<pre><code class=\"language-js\">server.listen('/tmp/echo.sock', () => {\n  console.log('server bound');\n});\n</code></pre>\n<p>Use <code>nc</code> to connect to a Unix domain socket server:</p>\n<pre><code class=\"language-console\">$ nc -U /tmp/echo.sock\n</code></pre>"
        },
        {
          "textRaw": "net.isIP(input)",
          "type": "method",
          "name": "isIP",
          "meta": {
            "added": [
              "v0.3.0"
            ],
            "changes": []
          },
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {integer}",
                "name": "return",
                "type": "integer"
              },
              "params": [
                {
                  "textRaw": "`input` {string}",
                  "name": "input",
                  "type": "string"
                }
              ]
            }
          ],
          "desc": "<p>Tests if input is an IP address. Returns <code>0</code> for invalid strings,\nreturns <code>4</code> for IP version 4 addresses, and returns <code>6</code> for IP version 6\naddresses.</p>"
        },
        {
          "textRaw": "net.isIPv4(input)",
          "type": "method",
          "name": "isIPv4",
          "meta": {
            "added": [
              "v0.3.0"
            ],
            "changes": []
          },
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {boolean}",
                "name": "return",
                "type": "boolean"
              },
              "params": [
                {
                  "textRaw": "`input` {string}",
                  "name": "input",
                  "type": "string"
                }
              ]
            }
          ],
          "desc": "<p>Returns <code>true</code> if input is a version 4 IP address, otherwise returns <code>false</code>.</p>"
        },
        {
          "textRaw": "net.isIPv6(input)",
          "type": "method",
          "name": "isIPv6",
          "meta": {
            "added": [
              "v0.3.0"
            ],
            "changes": []
          },
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: {boolean}",
                "name": "return",
                "type": "boolean"
              },
              "params": [
                {
                  "textRaw": "`input` {string}",
                  "name": "input",
                  "type": "string"
                }
              ]
            }
          ],
          "desc": "<p>Returns <code>true</code> if input is a version 6 IP address, otherwise returns <code>false</code>.</p>"
        }
      ],
      "type": "module",
      "displayName": "Net"
    }
  ]
}