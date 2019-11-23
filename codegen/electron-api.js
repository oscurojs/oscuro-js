module.exports = [
  {
    "name": "clipboard",
    "description": "Perform copy and paste operations on the system clipboard.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Module",
    "slug": "clipboard",
    "websiteUrl": "http://electron.atom.io/docs/api/clipboard",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/clipboard.md",
    "methods": [
      {
        "name": "readText",
        "signature": "([type])",
        "platforms": [],
        "description": "Returns the content in the clipboard as plain text.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "writeText",
        "signature": "(text[, type])",
        "platforms": [],
        "description": "Writes the text into the clipboard as plain text.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "readHTML",
        "signature": "([type])",
        "platforms": [],
        "description": "Returns the content in the clipboard as markup.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "writeHTML",
        "signature": "(markup[, type])",
        "platforms": [],
        "description": "Writes markup to the clipboard.",
        "parameters": [
          {
            "name": "markup",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "readImage",
        "signature": "([type])",
        "platforms": [],
        "description": "Returns the content in the clipboard as a NativeImage.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "writeImage",
        "signature": "(image[, type])",
        "platforms": [],
        "description": "Writes image to the clipboard.",
        "parameters": [
          {
            "name": "image",
            "type": "NativeImage"
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "readRTF",
        "signature": "([type])",
        "platforms": [],
        "description": "Returns the content in the clipboard as RTF.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "writeRTF",
        "signature": "(text[, type])",
        "platforms": [],
        "description": "Writes the text into the clipboard in RTF.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "readBookmark",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns an Object containing title and url keys representing the bookmark in the clipboard. The title and url values will be empty strings when the bookmark is unavailable.",
        "parameters": []
      },
      {
        "name": "writeBookmark",
        "signature": "(title, url[, type])",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Writes the title and url into the clipboard as a bookmark. Note: Most apps on Windows don't support pasting bookmarks into them so you can use clipboard.write to write both a bookmark and fallback text to the clipboard.",
        "parameters": [
          {
            "name": "title",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "clear",
        "signature": "([type])",
        "platforms": [],
        "description": "Clears the clipboard content.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "availableFormats",
        "signature": "([type])",
        "platforms": [],
        "description": "Returns an array of supported formats for the clipboard type.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "has",
        "signature": "(data[, type])",
        "platforms": [
          "Experimental"
        ],
        "description": "Returns whether the clipboard supports the format of specified data.",
        "parameters": [
          {
            "name": "data",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "read",
        "signature": "(data[, type])",
        "platforms": [
          "Experimental"
        ],
        "description": "Reads data from the clipboard.",
        "parameters": [
          {
            "name": "data",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "write",
        "signature": "(data[, type])",
        "platforms": [],
        "description": "Writes data to the clipboard.",
        "parameters": [
          {
            "name": "data",
            "type": "Object",
            "properties": [
              {
                "name": "text",
                "type": "String",
                "description": ""
              },
              {
                "name": "html",
                "type": "String",
                "description": ""
              },
              {
                "name": "image",
                "type": "NativeImage",
                "description": ""
              },
              {
                "name": "rtf",
                "type": "String",
                "description": ""
              },
              {
                "name": "bookmark",
                "type": "String",
                "description": "The title of the url at <code>text</code>."
              }
            ]
          },
          {
            "name": "type",
            "type": "String",
            "description": "(optional)",
            "possibleValues": []
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "crashReporter",
    "description": "Submit crash reports to a remote server.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Module",
    "slug": "crash-reporter",
    "websiteUrl": "http://electron.atom.io/docs/api/crash-reporter",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/crash-reporter.md",
    "methods": [
      {
        "name": "start",
        "signature": "(options)",
        "platforms": [],
        "description": "You are required to call this method before using other crashReporter APIs. Note: On macOS, Electron uses a new crashpad client, which is different from breakpad on Windows and Linux. To enable the crash collection feature, you are required to call the crashReporter.start API to initialize crashpad in the main process and in each renderer process from which you wish to collect crash reports.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "companyName",
                "type": "String",
                "description": ""
              },
              {
                "name": "submitURL",
                "type": "String",
                "description": "URL that crash reports will be sent to as POST."
              },
              {
                "name": "productName",
                "type": "String",
                "description": " (optional) - Defaults to <code>app.getName()</code>."
              },
              {
                "name": "autoSubmit",
                "type": "Boolean",
                "description": "Send the crash report without user interaction."
              },
              {
                "name": "ignoreSystemCrashHandler",
                "type": "Boolean",
                "description": "Default is <code>false</code>."
              },
              {
                "name": "extra",
                "type": "Object",
                "description": "An object you can define that will be sent along with the"
              }
            ]
          }
        ]
      },
      {
        "name": "getLastCrashReport",
        "signature": "()",
        "platforms": [],
        "description": "Returns the date and ID of the last crash report. If no crash reports have been sent or the crash reporter has not been started, null is returned.",
        "parameters": []
      },
      {
        "name": "getUploadedReports",
        "signature": "()",
        "platforms": [],
        "description": "Returns all uploaded crash reports. Each report contains the date and uploaded ID.",
        "parameters": []
      }
    ],
    "events": []
  },
  {
    "name": "nativeImage",
    "description": "Create tray, dock, and application icons using PNG or JPG files.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Module",
    "slug": "native-image",
    "websiteUrl": "http://electron.atom.io/docs/api/native-image",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/native-image.md",
    "methods": [
      {
        "name": "createEmpty",
        "signature": "()",
        "platforms": [],
        "description": "Creates an empty NativeImage instance.",
        "parameters": []
      },
      {
        "name": "createFromPath",
        "signature": "(path)",
        "platforms": [],
        "description": "Creates a new NativeImage instance from a file located at path. This method returns an empty image if the path does not exist, cannot be read, or is not a valid image.",
        "parameters": [
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "createFromBuffer",
        "signature": "(buffer[, scaleFactor])",
        "platforms": [],
        "description": "Creates a new NativeImage instance from buffer. The default scaleFactor is 1.0.",
        "parameters": [
          {
            "name": "buffer",
            "type": "Buffer"
          },
          {
            "name": "scaleFactor",
            "type": "Double",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "createFromDataURL",
        "signature": "(dataURL)",
        "platforms": [],
        "description": "Creates a new NativeImage instance from dataURL.",
        "parameters": [
          {
            "name": "dataURL",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "NativeImage",
    "description": "Natively wrap images such as tray, dock, and application icons.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Class",
    "slug": "native-image",
    "websiteUrl": "http://electron.atom.io/docs/api/native-image",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/native-image.md",
    "staticMethods": [],
    "instanceName": "image",
    "instanceMethods": [
      {
        "name": "toPNG",
        "signature": "()",
        "platforms": [],
        "description": "Returns a Buffer that contains the image's PNG encoded data.",
        "parameters": []
      },
      {
        "name": "toJPEG",
        "signature": "(quality)",
        "platforms": [],
        "description": "Returns a Buffer that contains the image's JPEG encoded data.",
        "parameters": [
          {
            "name": "quality",
            "type": "Integer",
            "description": "(required) - Between 0 - 100."
          }
        ]
      },
      {
        "name": "toBitmap",
        "signature": "()",
        "platforms": [],
        "description": "Returns a Buffer that contains a copy of the image's raw bitmap pixel data.",
        "parameters": []
      },
      {
        "name": "toDataURL",
        "signature": "()",
        "platforms": [],
        "description": "Returns the data URL of the image.",
        "parameters": []
      },
      {
        "name": "getBitmap",
        "signature": "()",
        "platforms": [],
        "description": "Returns a Buffer that contains the image's raw bitmap pixel data. The difference between getBitmap() and toBitmap() is, getBitmap() does not copy the bitmap data, so you have to use the returned Buffer immediately in current event loop tick, otherwise the data might be changed or destroyed.",
        "parameters": []
      },
      {
        "name": "getNativeHandle",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns a Buffer that stores C pointer to underlying native handle of the image. On macOS, a pointer to NSImage instance would be returned. Notice that the returned pointer is a weak pointer to the underlying native image instead of a copy, so you must ensure that the associated nativeImage instance is kept around.",
        "parameters": []
      },
      {
        "name": "isEmpty",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean whether the image is empty.",
        "parameters": []
      },
      {
        "name": "getSize",
        "signature": "()",
        "platforms": [],
        "description": "Returns the size of the image.",
        "parameters": []
      },
      {
        "name": "setTemplateImage",
        "signature": "(option)",
        "platforms": [],
        "description": "Marks the image as a template image.",
        "parameters": [
          {
            "name": "option",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isTemplateImage",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean whether the image is a template image.",
        "parameters": []
      }
    ],
    "instanceProperties": [],
    "instanceEvents": []
  },
  {
    "name": "shell",
    "description": "Manage files and URLs using their default applications.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Module",
    "slug": "shell",
    "websiteUrl": "http://electron.atom.io/docs/api/shell",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/shell.md",
    "methods": [
      {
        "name": "showItemInFolder",
        "signature": "(fullPath)",
        "platforms": [],
        "description": "Show the given file in a file manager. If possible, select the file. Returns true if the item was successfully shown, false otherwise.",
        "parameters": [
          {
            "name": "fullPath",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "openItem",
        "signature": "(fullPath)",
        "platforms": [],
        "description": "Open the given file in the desktop's default manner. Returns true if the item was successfully opened, false otherwise.",
        "parameters": [
          {
            "name": "fullPath",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "openExternal",
        "signature": "(url[, options])",
        "platforms": [],
        "description": "Open the given external protocol URL in the desktop's default manner. (For example, mailto: URLs in the user's default mail agent.) Returns true if an application was available to open the URL, false otherwise.",
        "parameters": [
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "options",
            "type": "Object",
            "description": "(optional) macOS",
            "properties": [
              {
                "name": "activate",
                "type": "Boolean",
                "description": "<code>true</code> to bring the opened application to the"
              }
            ]
          }
        ]
      },
      {
        "name": "moveItemToTrash",
        "signature": "(fullPath)",
        "platforms": [],
        "description": "Move the given file to trash and returns a boolean status for the operation. Returns true if the item was successfully moved to the trash, false otherwise.",
        "parameters": [
          {
            "name": "fullPath",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "beep",
        "signature": "()",
        "platforms": [],
        "description": "Play the beep sound.",
        "parameters": []
      },
      {
        "name": "writeShortcutLink",
        "signature": "(shortcutPath[, operation], options)",
        "platforms": [
          "Windows"
        ],
        "description": "Creates or updates a shortcut link at shortcutPath. On success true is returned, otherwise false is returned.",
        "parameters": [
          {
            "name": "shortcutPath",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "operation",
            "type": "String",
            "description": "(optional) - Default is `create`, can be one of followings:",
            "possibleValues": [
              {
                "value": "create",
                "description": "Creates a new shortcut, overwriting if necessary."
              },
              {
                "value": "update",
                "description": "Updates specified properties only on an existing shortcut."
              },
              {
                "value": "replace",
                "description": "Overwrites an existing shortcut, fails if the shortcut doesn&apos;t"
              }
            ]
          },
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "target",
                "type": "String",
                "description": "The target to launch from this shortcut."
              },
              {
                "name": "cwd",
                "type": "String",
                "description": " (optional) - The working directory. Default"
              },
              {
                "name": "args",
                "type": "String",
                "description": " (optional) - The arguments to be applied to <code>target</code> when"
              },
              {
                "name": "description",
                "type": "String",
                "description": " (optional) - The description of the shortcut. Default"
              },
              {
                "name": "icon",
                "type": "String",
                "description": " (optional) - The path to the icon, can be a DLL or EXE. <code>icon</code>"
              },
              {
                "name": "iconIndex",
                "type": "Integer",
                "description": " (optional) - The resource ID of icon when <code>icon</code> is a"
              },
              {
                "name": "appUserModelId",
                "type": "String",
                "description": " (optional) - The Application User Model ID. Default"
              }
            ]
          }
        ]
      },
      {
        "name": "readShortcutLink",
        "signature": "(shortcutPath)",
        "platforms": [
          "Windows"
        ],
        "description": "Resolves the shortcut link at shortcutPath. An object is returned with the fields described in the options of shell.writeShortcutLink. An exception will be thrown when any error happens.",
        "parameters": [
          {
            "name": "shortcutPath",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "app",
    "description": "Control your application's event lifecycle.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "app",
    "websiteUrl": "http://electron.atom.io/docs/api/app",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/app.md",
    "methods": [
      {
        "name": "quit",
        "signature": "()",
        "platforms": [],
        "description": "Try to close all windows. The before-quit event will be emitted first. If all windows are successfully closed, the will-quit event will be emitted and by default the application will terminate. This method guarantees that all beforeunload and unload event handlers are correctly executed. It is possible that a window cancels the quitting by returning false in the beforeunload event handler.",
        "parameters": []
      },
      {
        "name": "exit",
        "signature": "([exitCode])",
        "platforms": [],
        "description": "Exits immediately with exitCode.  exitCode defaults to 0. All windows will be closed immediately without asking user and the before-quit and will-quit events will not be emitted.",
        "parameters": [
          {
            "name": "exitCode",
            "type": "Integer",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "relaunch",
        "signature": "([options])",
        "platforms": [],
        "description": "Relaunches the app when current instance exits. By default the new instance will use the same working directory and command line arguments with current instance. When args is specified, the args will be passed as command line arguments instead. When execPath is specified, the execPath will be executed for relaunch instead of current app. Note that this method does not quit the app when executed, you have to call app.quit or app.exit after calling app.relaunch to make the app restart. When app.relaunch is called for multiple times, multiple instances will be started after current instance exited. An example of restarting current instance immediately and adding a new command line argument to the new instance:",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "args",
                "type": "Array",
                "description": " (optional)"
              },
              {
                "name": "execPath",
                "type": "String",
                "description": " (optional)"
              }
            ]
          }
        ]
      },
      {
        "name": "isReady",
        "signature": "()",
        "platforms": [],
        "description": "Returns true if Electron has finished initializing, false otherwise.",
        "parameters": []
      },
      {
        "name": "focus",
        "signature": "()",
        "platforms": [],
        "description": "On Linux, focuses on the first visible window. On macOS, makes the application the active app. On Windows, focuses on the application's first window.",
        "parameters": []
      },
      {
        "name": "hide",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Hides all application windows without minimizing them.",
        "parameters": []
      },
      {
        "name": "show",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Shows application windows after they were hidden. Does not automatically focus them.",
        "parameters": []
      },
      {
        "name": "getAppPath",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current application directory.",
        "parameters": []
      },
      {
        "name": "getPath",
        "signature": "(name)",
        "platforms": [],
        "description": "Retrieves a path to a special directory or file associated with name. On failure an Error is thrown. You can request the following paths by the name:",
        "parameters": [
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "setPath",
        "signature": "(name, path)",
        "platforms": [],
        "description": "Overrides the path to a special directory or file associated with name. If the path specifies a directory that does not exist, the directory will be created by this method. On failure an Error is thrown. You can only override paths of a name defined in app.getPath. By default, web pages' cookies and caches will be stored under the userData directory. If you want to change this location, you have to override the userData path before the ready event of the app module is emitted.",
        "parameters": [
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getVersion",
        "signature": "()",
        "platforms": [],
        "description": "Returns the version of the loaded application. If no version is found in the application's package.json file, the version of the current bundle or executable is returned.",
        "parameters": []
      },
      {
        "name": "getName",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current application's name, which is the name in the application's package.json file. Usually the name field of package.json is a short lowercased name, according to the npm modules spec. You should usually also specify a productName field, which is your application's full capitalized name, and which will be preferred over name by Electron.",
        "parameters": []
      },
      {
        "name": "setName",
        "signature": "(name)",
        "platforms": [],
        "description": "Overrides the current application's name.",
        "parameters": [
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getLocale",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current application locale. Possible return values are documented here. Note: When distributing your packaged app, you have to also ship the locales folder. Note: On Windows you have to call it after the ready events gets emitted.",
        "parameters": []
      },
      {
        "name": "addRecentDocument",
        "signature": "(path)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Adds path to the recent documents list. This list is managed by the OS. On Windows you can visit the list from the task bar, and on macOS you can visit it from dock menu.",
        "parameters": [
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "clearRecentDocuments",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Clears the recent documents list.",
        "parameters": []
      },
      {
        "name": "setAsDefaultProtocolClient",
        "signature": "(protocol[, path, args])",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "This method sets the current executable as the default handler for a protocol (aka URI scheme). It allows you to integrate your app deeper into the operating system. Once registered, all links with your-protocol:// will be opened with the current executable. The whole link, including protocol, will be passed to your application as a parameter. On Windows you can provide optional parameters path, the path to your executable, and args, an array of arguments to be passed to your executable when it launches. Returns true when the call succeeded, otherwise returns false. Note: On macOS, you can only register protocols that have been added to your app's info.plist, which can not be modified at runtime. You can however change the file with a simple text editor or script during build time. Please refer to Apple's documentation for details. The API uses the Windows Registry and LSSetDefaultHandlerForURLScheme internally.",
        "parameters": [
          {
            "name": "protocol",
            "type": "String",
            "description": "The name of your protocol, without `://`. If you want your",
            "possibleValues": []
          },
          {
            "name": "path",
            "type": "String",
            "description": "(optional) Windows - Defaults to `process.execPath`",
            "possibleValues": []
          },
          {
            "name": "args",
            "type": "Array",
            "description": "(optional) Windows - Defaults to an empty array"
          }
        ]
      },
      {
        "name": "removeAsDefaultProtocolClient",
        "signature": "(protocol[, path, args])",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "This method checks if the current executable as the default handler for a protocol (aka URI scheme). If so, it will remove the app as the default handler. Returns true when the call succeeded, otherwise returns false.",
        "parameters": [
          {
            "name": "protocol",
            "type": "String",
            "description": "The name of your protocol, without `://`.",
            "possibleValues": []
          },
          {
            "name": "path",
            "type": "String",
            "description": "(optional) Windows - Defaults to `process.execPath`",
            "possibleValues": []
          },
          {
            "name": "args",
            "type": "Array",
            "description": "(optional) Windows - Defaults to an empty array"
          }
        ]
      },
      {
        "name": "isDefaultProtocolClient",
        "signature": "(protocol[, path, args])",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "This method checks if the current executable is the default handler for a protocol (aka URI scheme). If so, it will return true. Otherwise, it will return false. Note: On macOS, you can use this method to check if the app has been registered as the default protocol handler for a protocol. You can also verify this by checking ~/Library/Preferences/com.apple.LaunchServices.plist on the macOS machine. Please refer to Apple's documentation for details. The API uses the Windows Registry and LSCopyDefaultHandlerForURLScheme internally.",
        "parameters": [
          {
            "name": "protocol",
            "type": "String",
            "description": "The name of your protocol, without `://`.",
            "possibleValues": []
          },
          {
            "name": "path",
            "type": "String",
            "description": "(optional) Windows - Defaults to `process.execPath`",
            "possibleValues": []
          },
          {
            "name": "args",
            "type": "Array",
            "description": "(optional) Windows - Defaults to an empty array"
          }
        ]
      },
      {
        "name": "setUserTasks",
        "signature": "(tasks)",
        "platforms": [
          "Windows"
        ],
        "description": "Adds tasks to the Tasks category of the JumpList on Windows. tasks is an array of Task objects in the following format: Task Object: Returns true when the call succeeded, otherwise returns false. Note: If you'd like to customize the Jump List even more use app.setJumpList(categories) instead.",
        "parameters": [
          {
            "name": "tasks",
            "type": "Array",
            "description": "Array of `Task` objects"
          }
        ]
      },
      {
        "name": "getJumpListSettings",
        "signature": "()",
        "platforms": [
          "Windows"
        ],
        "description": "Returns an Object with the following properties:",
        "parameters": [
          {
            "name": "minItems",
            "type": "Integer",
            "description": "The minimum number of items that will be shown in the"
          },
          {
            "name": "removedItems",
            "type": "Array",
            "description": "Array of `JumpListItem` objects that correspond to"
          }
        ]
      },
      {
        "name": "setJumpList",
        "signature": "(categories)",
        "platforms": [
          "Windows"
        ],
        "description": "Sets or removes a custom Jump List for the application, and returns one of the following strings: If categories is null the previously set custom Jump List (if any) will be replaced by the standard Jump List for the app (managed by Windows). JumpListCategory objects should have the following properties: Note: If a JumpListCategory object has neither the type nor the name property set then its type is assumed to be tasks. If the name property is set but the type property is omitted then the type is assumed to be custom. Note: Users can remove items from custom categories, and Windows will not allow a removed item to be added back into a custom category until after the next successful call to app.setJumpList(categories). Any attempt to re-add a removed item to a custom category earlier than that will result in the entire custom category being omitted from the Jump List. The list of removed items can be obtained using app.getJumpListSettings(). JumpListItem objects should have the following properties: Here's a very simple example of creating a custom Jump List:",
        "parameters": [
          {
            "name": "categories",
            "type": "Array",
            "description": "or `null` - Array of `JumpListCategory` objects."
          }
        ]
      },
      {
        "name": "makeSingleInstance",
        "signature": "(callback)",
        "platforms": [],
        "description": "This method makes your application a Single Instance Application - instead of allowing multiple instances of your app to run, this will ensure that only a single instance of your app is running, and other instances signal this instance and exit. callback will be called with callback(argv, workingDirectory) when a second instance has been executed. argv is an Array of the second instance's command line arguments, and workingDirectory is its current working directory. Usually applications respond to this by making their primary window focused and non-minimized. The callback is guaranteed to be executed after the ready event of app gets emitted. This method returns false if your process is the primary instance of the application and your app should continue loading. And returns true if your process has sent its parameters to another instance, and you should immediately quit. On macOS the system enforces single instance automatically when users try to open a second instance of your app in Finder, and the open-file and open-url events will be emitted for that. However when users start your app in command line the system's single instance mechanism will be bypassed and you have to use this method to ensure single instance. An example of activating the window of primary instance when a second instance starts:",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "releaseSingleInstance",
        "signature": "()",
        "platforms": [],
        "description": "Releases all locks that were created by makeSingleInstance. This will allow multiple instances of the application to once again run side by side.",
        "parameters": []
      },
      {
        "name": "setUserActivity",
        "signature": "(type, userInfo[, webpageURL])",
        "platforms": [
          "macOS"
        ],
        "description": "Creates an NSUserActivity and sets it as the current activity. The activity is eligible for Handoff to another device afterward.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "Uniquely identifies the activity. Maps to",
            "possibleValues": []
          },
          {
            "name": "userInfo",
            "type": "Object",
            "description": "App-specific state to store for use by another device.",
            "properties": []
          },
          {
            "name": "webpageURL",
            "type": "String",
            "description": "The webpage to load in a browser if no suitable app is",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getCurrentActivityType",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns the type of the currently running activity.",
        "parameters": []
      },
      {
        "name": "setAppUserModelId",
        "signature": "(id)",
        "platforms": [
          "Windows"
        ],
        "description": "Changes the Application User Model ID to id.",
        "parameters": [
          {
            "name": "id",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "importCertificate",
        "signature": "(options, callback)",
        "platforms": [
          "LINUX"
        ],
        "description": "Imports the certificate in pkcs12 format into the platform certificate store. callback is called with the result of import operation, a value of 0 indicates success while any other value indicates failure according to chromium net_error_list.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "certificate",
                "type": "String",
                "description": "Path for the pkcs12 file."
              },
              {
                "name": "password",
                "type": "String",
                "description": "Passphrase for the certificate."
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "disableHardwareAcceleration",
        "signature": "()",
        "platforms": [],
        "description": "Disables hardware acceleration for current app. This method can only be called before app is ready.",
        "parameters": []
      },
      {
        "name": "setBadgeCount",
        "signature": "(count)",
        "platforms": [
          "Linux",
          "macOS"
        ],
        "description": "Sets the counter badge for current app. Setting the count to 0 will hide the badge. Returns true when the call succeeded, otherwise returns false. On macOS it shows on the dock icon. On Linux it only works for Unity launcher, Note: Unity launcher requires the exsistence of a .desktop file to work, for more information please read Desktop Environment Integration.",
        "parameters": [
          {
            "name": "count",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getBadgeCount",
        "signature": "()",
        "platforms": [
          "Linux",
          "macOS"
        ],
        "description": "Returns the current value displayed in the counter badge.",
        "parameters": []
      },
      {
        "name": "isUnityRunning",
        "signature": "()",
        "platforms": [
          "Linux"
        ],
        "description": "Returns whether current desktop environment is Unity launcher.",
        "parameters": []
      },
      {
        "name": "getLoginItemSettings",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Return an Object with the login item settings of the app.",
        "parameters": [
          {
            "name": "openAtLogin",
            "type": "Boolean",
            "description": "`true` if the app is set to open at login."
          },
          {
            "name": "openAsHidden",
            "type": "Boolean",
            "description": "`true` if the app is set to open as hidden at login."
          },
          {
            "name": "wasOpenedAtLogin",
            "type": "Boolean",
            "description": "`true` if the app was opened at login"
          },
          {
            "name": "wasOpenedAsHidden",
            "type": "Boolean",
            "description": "`true` if the app was opened as a hidden login"
          },
          {
            "name": "restoreState",
            "type": "Boolean",
            "description": "`true` if the app was opened as a login item that"
          }
        ]
      },
      {
        "name": "setLoginItemSettings",
        "signature": "(settings)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Set the app's login item settings.",
        "parameters": [
          {
            "name": "settings",
            "type": "Object",
            "properties": [
              {
                "name": "openAtLogin",
                "type": "Boolean",
                "description": "<code>true</code> to open the app at login, <code>false</code> to remove"
              },
              {
                "name": "openAsHidden",
                "type": "Boolean",
                "description": "<code>true</code> to open the app as hidden. Defaults to"
              }
            ]
          }
        ]
      },
      {
        "name": "isAccessibilitySupportEnabled",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns a Boolean, true if Chrome's accessibility support is enabled, false otherwise. This API will return true if the use of assistive technologies, such as screen readers, has been detected. See https://www.chromium.org/developers/design-documents/accessibility for more details.",
        "parameters": []
      },
      {
        "name": "appendSwitch",
        "signature": "(switch[, value])",
        "platforms": [],
        "description": "Append a switch (with optional value) to Chromium's command line. Note: This will not affect process.argv, and is mainly used by developers to control some low-level Chromium behaviors.",
        "parameters": [
          {
            "name": "switch",
            "type": "String",
            "description": "A command-line switch",
            "possibleValues": []
          },
          {
            "name": "value",
            "type": "String",
            "description": "(optional) - A value for the given switch",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "appendArgument",
        "signature": "(value)",
        "platforms": [],
        "description": "Append an argument to Chromium's command line. The argument will be quoted correctly. Note: This will not affect process.argv.",
        "parameters": [
          {
            "name": "value",
            "type": "String",
            "description": "The argument to append to the command line",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "bounce",
        "signature": "([type])",
        "platforms": [
          "macOS"
        ],
        "description": "When critical is passed, the dock icon will bounce until either the application becomes active or the request is canceled. When informational is passed, the dock icon will bounce for one second. However, the request remains active until either the application becomes active or the request is canceled. Returns an ID representing the request.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "(optional) - Can be `critical` or `informational`. The default is",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "cancelBounce",
        "signature": "(id)",
        "platforms": [
          "macOS"
        ],
        "description": "Cancel the bounce of id.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "downloadFinished",
        "signature": "(filePath)",
        "platforms": [
          "macOS"
        ],
        "description": "Bounces the Downloads stack if the filePath is inside the Downloads folder.",
        "parameters": [
          {
            "name": "filePath",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "setBadge",
        "signature": "(text)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the string to be displayed in the dock’s badging area.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getBadge",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns the badge string of the dock.",
        "parameters": []
      },
      {
        "name": "hide",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Hides the dock icon.",
        "parameters": []
      },
      {
        "name": "show",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Shows the dock icon.",
        "parameters": []
      },
      {
        "name": "isVisible",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns whether the dock icon is visible. The app.dock.show() call is asynchronous so this method might not return true immediately after that call.",
        "parameters": []
      },
      {
        "name": "setMenu",
        "signature": "(menu)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the application's dock menu.",
        "parameters": [
          {
            "name": "menu",
            "type": "Menu"
          }
        ]
      },
      {
        "name": "setIcon",
        "signature": "(image)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the image associated with this dock icon.",
        "parameters": [
          {
            "name": "image",
            "type": "NativeImage"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "will-finish-launching",
        "description": "Emitted when the application has finished basic startup. On Windows and Linux, the will-finish-launching event is the same as the ready event; on macOS, this event represents the applicationWillFinishLaunching notification of NSApplication. You would usually set up listeners for the open-file and open-url events here, and start the crash reporter and auto updater. In most cases, you should just do everything in the ready event handler.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "ready",
        "description": "Emitted when Electron has finished initializing. On macOS, launchInfo holds the userInfo of the NSUserNotification that was used to open the application, if it was launched from Notification Center. You can call app.isReady() to check if this event has already fired.",
        "platforms": [],
        "returns": [
          {
            "name": "launchInfo",
            "type": "Object",
            "description": "macOS",
            "properties": []
          }
        ]
      },
      {
        "name": "window-all-closed",
        "description": "Emitted when all windows have been closed. If you do not subscribe to this event and all windows are closed, the default behavior is to quit the app; however, if you subscribe, you control whether the app quits or not. If the user pressed Cmd + Q, or the developer called app.quit(), Electron will first try to close all the windows and then emit the will-quit event, and in this case the window-all-closed event would not be emitted.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "before-quit",
        "description": "Emitted before the application starts closing its windows. Calling event.preventDefault() will prevent the default behaviour, which is terminating the application.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          }
        ]
      },
      {
        "name": "will-quit",
        "description": "Emitted when all windows have been closed and the application will quit. Calling event.preventDefault() will prevent the default behaviour, which is terminating the application. See the description of the window-all-closed event for the differences between the will-quit and window-all-closed events.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          }
        ]
      },
      {
        "name": "quit",
        "description": "Emitted when the application is quitting.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "exitCode",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "open-file",
        "description": "Emitted when the user wants to open a file with the application. The open-file event is usually emitted when the application is already open and the OS wants to reuse the application to open the file. open-file is also emitted when a file is dropped onto the dock and the application is not yet running. Make sure to listen for the open-file event very early in your application startup to handle this case (even before the ready event is emitted). You should call event.preventDefault() if you want to handle this event. On Windows, you have to parse process.argv (in the main process) to get the filepath.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "open-url",
        "description": "Emitted when the user wants to open a URL with the application. The URL scheme must be registered to be opened by your application. You should call event.preventDefault() if you want to handle this event.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "activate",
        "description": "Emitted when the application is activated, which usually happens when the user clicks on the application's dock icon.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "hasVisibleWindows",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "continue-activity",
        "description": "Emitted during Handoff when an activity from a different device wants to be resumed. You should call event.preventDefault() if you want to handle this event. A user activity can be continued only in an app that has the same developer Team ID as the activity's source app and that supports the activity's type. Supported activity types are specified in the app's Info.plist under the NSUserActivityTypes key.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "type",
            "type": "String",
            "description": "A string identifying the activity. Maps to",
            "possibleValues": []
          },
          {
            "name": "userInfo",
            "type": "Object",
            "description": "Contains app-specific state stored by the activity on",
            "properties": []
          }
        ]
      },
      {
        "name": "browser-window-blur",
        "description": "Emitted when a browserWindow gets blurred.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "window",
            "type": "BrowserWindow"
          }
        ]
      },
      {
        "name": "browser-window-focus",
        "description": "Emitted when a browserWindow gets focused.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "window",
            "type": "BrowserWindow"
          }
        ]
      },
      {
        "name": "browser-window-created",
        "description": "Emitted when a new browserWindow is created.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "window",
            "type": "BrowserWindow"
          }
        ]
      },
      {
        "name": "web-contents-created",
        "description": "Emitted when a new webContents is created.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "webContents",
            "type": "WebContents"
          }
        ]
      },
      {
        "name": "certificate-error",
        "description": "Emitted when failed to verify the certificate for url, to trust the certificate you should prevent the default behavior with event.preventDefault() and call callback(true).",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "webContents",
            "type": "WebContents"
          },
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "error",
            "type": "String",
            "description": "The error code",
            "possibleValues": []
          },
          {
            "name": "certificate",
            "type": "Object",
            "properties": [
              {
                "name": "data",
                "type": "String",
                "description": "PEM encoded data"
              },
              {
                "name": "issuerName",
                "type": "String",
                "description": "Issuer&apos;s Common Name"
              },
              {
                "name": "subjectName",
                "type": "String",
                "description": "Subject&apos;s Common Name"
              },
              {
                "name": "serialNumber",
                "type": "String",
                "description": "Hex value represented string"
              },
              {
                "name": "validStart",
                "type": "Integer",
                "description": "Start date of the certificate being valid in seconds"
              },
              {
                "name": "validExpiry",
                "type": "Integer",
                "description": "End date of the certificate being valid in seconds"
              },
              {
                "name": "fingerprint",
                "type": "String",
                "description": "Fingerprint of the certificate"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "select-client-certificate",
        "description": "Emitted when a client certificate is requested. The url corresponds to the navigation entry requesting the client certificate and callback needs to be called with an entry filtered from the list. Using event.preventDefault() prevents the application from using the first certificate from the store.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "webContents",
            "type": "WebContents"
          },
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "certificateList",
            "type": "[Objects]"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "login",
        "description": "Emitted when webContents wants to do basic auth. The default behavior is to cancel all authentications, to override this you should prevent the default behavior with event.preventDefault() and call callback(username, password) with the credentials.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "webContents",
            "type": "WebContents"
          },
          {
            "name": "request",
            "type": "Object",
            "properties": [
              {
                "name": "method",
                "type": "String",
                "description": ""
              },
              {
                "name": "url",
                "type": "URL",
                "description": ""
              },
              {
                "name": "referrer",
                "type": "URL",
                "description": ""
              }
            ]
          },
          {
            "name": "authInfo",
            "type": "Object",
            "properties": [
              {
                "name": "isProxy",
                "type": "Boolean",
                "description": ""
              },
              {
                "name": "scheme",
                "type": "String",
                "description": ""
              },
              {
                "name": "host",
                "type": "String",
                "description": ""
              },
              {
                "name": "port",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "realm",
                "type": "String",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "gpu-process-crashed",
        "description": "Emitted when the gpu process crashes or is killed.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "killed",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "accessibility-support-changed",
        "description": "Emitted when Chrome's accessibility support changes. This event fires when assistive technologies, such as screen readers, are enabled or disabled. See https://www.chromium.org/developers/design-documents/accessibility for more details.",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "accessibilitySupportEnabled",
            "type": "Boolean",
            "description": "`true` when Chrome's accessibility"
          }
        ]
      }
    ]
  },
  {
    "name": "autoUpdater",
    "description": "Enable apps to automatically update themselves.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "auto-updater",
    "websiteUrl": "http://electron.atom.io/docs/api/auto-updater",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/auto-updater.md",
    "methods": [
      {
        "name": "setFeedURL",
        "signature": "(url[, requestHeaders])",
        "platforms": [],
        "description": "Sets the url and initialize the auto updater.",
        "parameters": [
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "requestHeaders",
            "type": "Object",
            "description": "macOS - HTTP request headers.",
            "properties": []
          }
        ]
      },
      {
        "name": "getFeedURL",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current update feed URL.",
        "parameters": []
      },
      {
        "name": "checkForUpdates",
        "signature": "()",
        "platforms": [],
        "description": "Asks the server whether there is an update. You must call setFeedURL before using this API.",
        "parameters": []
      },
      {
        "name": "quitAndInstall",
        "signature": "()",
        "platforms": [],
        "description": "Restarts the app and installs the update after it has been downloaded. It should only be called after update-downloaded has been emitted.",
        "parameters": []
      }
    ],
    "events": [
      {
        "name": "error",
        "description": "Emitted when there is an error while updating.",
        "platforms": [],
        "returns": [
          {
            "name": "error",
            "type": "Error"
          }
        ]
      },
      {
        "name": "checking-for-update",
        "description": "Emitted when checking if an update has started.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "update-available",
        "description": "Emitted when there is an available update. The update is downloaded automatically.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "update-not-available",
        "description": "Emitted when there is no available update.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "update-downloaded",
        "description": "Emitted when an update has been downloaded. On Windows only releaseName is available.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "releaseNotes",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "releaseName",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "releaseDate",
            "type": "Date"
          },
          {
            "name": "updateURL",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ]
  },
  {
    "name": "BrowserWindow",
    "description": "Create and control browser windows.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "browser-window",
    "websiteUrl": "http://electron.atom.io/docs/api/browser-window",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/browser-window.md",
    "staticMethods": [
      {
        "name": "getAllWindows",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array of all opened browser windows.",
        "parameters": []
      },
      {
        "name": "getFocusedWindow",
        "signature": "()",
        "platforms": [],
        "description": "Returns the window that is focused in this application, otherwise returns null.",
        "parameters": []
      },
      {
        "name": "fromWebContents",
        "signature": "(webContents)",
        "platforms": [],
        "description": "Find a window according to the webContents it owns.",
        "parameters": [
          {
            "name": "webContents",
            "type": "WebContents"
          }
        ]
      },
      {
        "name": "fromId",
        "signature": "(id)",
        "platforms": [],
        "description": "Find a window according to its ID.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "addDevToolsExtension",
        "signature": "(path)",
        "platforms": [],
        "description": "Adds DevTools extension located at path, and returns extension's name. The extension will be remembered so you only need to call this API once, this API is not for programming use. If you try to add an extension that has already been loaded, this method will not return and instead log a warning to the console. The method will also not return if the extension's manifest is missing or incomplete. Note: This API cannot be called before the ready event of the app module is emitted.",
        "parameters": [
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "removeDevToolsExtension",
        "signature": "(name)",
        "platforms": [],
        "description": "Remove a DevTools extension by name. Note: This API cannot be called before the ready event of the app module is emitted.",
        "parameters": [
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getDevToolsExtensions",
        "signature": "()",
        "platforms": [],
        "description": "Returns an Object where the keys are the extension names and each value is an Object containing name and version properties. To check if a DevTools extension is installed you can run the following: Note: This API cannot be called before the ready event of the app module is emitted.",
        "parameters": []
      }
    ],
    "constructorMethod": {
      "signature": "([options])",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "properties": [
            {
              "name": "width",
              "type": "Integer",
              "description": "Window&apos;s width in pixels. Default is <code>800</code>."
            },
            {
              "name": "height",
              "type": "Integer",
              "description": "Window&apos;s height in pixels. Default is <code>600</code>."
            },
            {
              "name": "x",
              "type": "Integer",
              "description": " (<strong>required</strong> if y is used) - Window&apos;s left offset from screen."
            },
            {
              "name": "y",
              "type": "Integer",
              "description": " (<strong>required</strong> if x is used) - Window&apos;s top offset from screen."
            },
            {
              "name": "useContentSize",
              "type": "Boolean",
              "description": "The <code>width</code> and <code>height</code> would be used as web"
            },
            {
              "name": "center",
              "type": "Boolean",
              "description": "Show window in the center of the screen."
            },
            {
              "name": "minWidth",
              "type": "Integer",
              "description": "Window&apos;s minimum width. Default is <code>0</code>."
            },
            {
              "name": "minHeight",
              "type": "Integer",
              "description": "Window&apos;s minimum height. Default is <code>0</code>."
            },
            {
              "name": "maxWidth",
              "type": "Integer",
              "description": "Window&apos;s maximum width. Default is no limit."
            },
            {
              "name": "maxHeight",
              "type": "Integer",
              "description": "Window&apos;s maximum height. Default is no limit."
            },
            {
              "name": "resizable",
              "type": "Boolean",
              "description": "Whether window is resizable. Default is <code>true</code>."
            },
            {
              "name": "movable",
              "type": "Boolean",
              "description": "Whether window is movable. This is not implemented"
            },
            {
              "name": "minimizable",
              "type": "Boolean",
              "description": "Whether window is minimizable. This is not"
            },
            {
              "name": "maximizable",
              "type": "Boolean",
              "description": "Whether window is maximizable. This is not"
            },
            {
              "name": "closable",
              "type": "Boolean",
              "description": "Whether window is closable. This is not implemented"
            },
            {
              "name": "focusable",
              "type": "Boolean",
              "description": "Whether the window can be focused. Default is"
            },
            {
              "name": "alwaysOnTop",
              "type": "Boolean",
              "description": "Whether the window should always stay on top of"
            },
            {
              "name": "fullscreen",
              "type": "Boolean",
              "description": "Whether the window should show in fullscreen. When"
            },
            {
              "name": "fullscreenable",
              "type": "Boolean",
              "description": "Whether the window can be put into fullscreen"
            },
            {
              "name": "skipTaskbar",
              "type": "Boolean",
              "description": "Whether to show the window in taskbar. Default is"
            },
            {
              "name": "kiosk",
              "type": "Boolean",
              "description": "The kiosk mode. Default is <code>false</code>."
            },
            {
              "name": "title",
              "type": "String",
              "description": "Default window title. Default is <code>&quot;Electron&quot;</code>."
            },
            {
              "name": "icon",
              "type": "NativeImage",
              "description": "The window icon. On Windows it is"
            },
            {
              "name": "show",
              "type": "Boolean",
              "description": "Whether window should be shown when created. Default is"
            },
            {
              "name": "frame",
              "type": "Boolean",
              "description": "Specify <code>false</code> to create a"
            },
            {
              "name": "parent",
              "type": "BrowserWindow",
              "description": "Specify parent window. Default is <code>null</code>."
            },
            {
              "name": "modal",
              "type": "Boolean",
              "description": "Whether this is a modal window. This only works when the"
            },
            {
              "name": "acceptFirstMouse",
              "type": "Boolean",
              "description": "Whether the web view accepts a single"
            },
            {
              "name": "disableAutoHideCursor",
              "type": "Boolean",
              "description": "Whether to hide cursor when typing."
            },
            {
              "name": "autoHideMenuBar",
              "type": "Boolean",
              "description": "Auto hide the menu bar unless the <code>Alt</code>"
            },
            {
              "name": "enableLargerThanScreen",
              "type": "Boolean",
              "description": "Enable the window to be resized larger"
            },
            {
              "name": "backgroundColor",
              "type": "String",
              "description": "Window&apos;s background color as Hexadecimal value,"
            },
            {
              "name": "hasShadow",
              "type": "Boolean",
              "description": "Whether window should have a shadow. This is only"
            },
            {
              "name": "darkTheme",
              "type": "Boolean",
              "description": "Forces using dark theme for the window, only works on"
            },
            {
              "name": "transparent",
              "type": "Boolean",
              "description": "Makes the window <a href=\"frameless-window.md\">transparent</a>."
            },
            {
              "name": "type",
              "type": "String",
              "description": "The type of window, default is normal window. See more about"
            },
            {
              "name": "titleBarStyle",
              "type": "String",
              "description": "The style of window title bar. See more about this"
            },
            {
              "name": "thickFrame",
              "type": "Boolean",
              "description": "Use <code>WS_THICKFRAME</code> style for frameless windows on"
            },
            {
              "name": "webPreferences",
              "type": "Object",
              "description": "Settings of web page&apos;s features. See more about"
            }
          ]
        }
      ]
    },
    "instanceName": "win",
    "instanceMethods": [
      {
        "name": "destroy",
        "signature": "()",
        "platforms": [],
        "description": "Force closing the window, the unload and beforeunload event won't be emitted for the web page, and close event will also not be emitted for this window, but it guarantees the closed event will be emitted.",
        "parameters": []
      },
      {
        "name": "close",
        "signature": "()",
        "platforms": [],
        "description": "Try to close the window. This has the same effect as a user manually clicking the close button of the window. The web page may cancel the close though. See the close event.",
        "parameters": []
      },
      {
        "name": "focus",
        "signature": "()",
        "platforms": [],
        "description": "Focuses on the window.",
        "parameters": []
      },
      {
        "name": "blur",
        "signature": "()",
        "platforms": [],
        "description": "Removes focus from the window.",
        "parameters": []
      },
      {
        "name": "isFocused",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is focused.",
        "parameters": []
      },
      {
        "name": "isDestroyed",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is destroyed.",
        "parameters": []
      },
      {
        "name": "show",
        "signature": "()",
        "platforms": [],
        "description": "Shows and gives focus to the window.",
        "parameters": []
      },
      {
        "name": "showInactive",
        "signature": "()",
        "platforms": [],
        "description": "Shows the window but doesn't focus on it.",
        "parameters": []
      },
      {
        "name": "hide",
        "signature": "()",
        "platforms": [],
        "description": "Hides the window.",
        "parameters": []
      },
      {
        "name": "isVisible",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is visible to the user.",
        "parameters": []
      },
      {
        "name": "isModal",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether current window is a modal window.",
        "parameters": []
      },
      {
        "name": "maximize",
        "signature": "()",
        "platforms": [],
        "description": "Maximizes the window.",
        "parameters": []
      },
      {
        "name": "unmaximize",
        "signature": "()",
        "platforms": [],
        "description": "Unmaximizes the window.",
        "parameters": []
      },
      {
        "name": "isMaximized",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is maximized.",
        "parameters": []
      },
      {
        "name": "minimize",
        "signature": "()",
        "platforms": [],
        "description": "Minimizes the window. On some platforms the minimized window will be shown in the Dock.",
        "parameters": []
      },
      {
        "name": "restore",
        "signature": "()",
        "platforms": [],
        "description": "Restores the window from minimized state to its previous state.",
        "parameters": []
      },
      {
        "name": "isMinimized",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is minimized.",
        "parameters": []
      },
      {
        "name": "setFullScreen",
        "signature": "(flag)",
        "platforms": [],
        "description": "Sets whether the window should be in fullscreen mode.",
        "parameters": [
          {
            "name": "flag",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isFullScreen",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean, whether the window is in fullscreen mode.",
        "parameters": []
      },
      {
        "name": "setAspectRatio",
        "signature": "(aspectRatio[, extraSize])",
        "platforms": [
          "macOS"
        ],
        "description": "This will make a window maintain an aspect ratio. The extra size allows a developer to have space, specified in pixels, not included within the aspect ratio calculations. This API already takes into account the difference between a window's size and its content size. Consider a normal window with an HD video player and associated controls. Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls on the right edge and 50 pixels of controls below the player. In order to maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within the player itself we would call this function with arguments of 16/9 and [ 40, 50 ]. The second argument doesn't care where the extra width and height are within the content view--only that they exist. Just sum any extra width and height areas you have within the overall content view.",
        "parameters": [
          {
            "name": "aspectRatio",
            "type": "Float",
            "description": "The aspect ratio to maintain for some portion of the"
          },
          {
            "name": "extraSize",
            "type": "Object",
            "description": "(optional) - The extra size not to be included while",
            "properties": [
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "setBounds",
        "signature": "(options[, animate])",
        "platforms": [],
        "description": "Resizes and moves the window to width, height, x, y.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          },
          {
            "name": "animate",
            "type": "Boolean",
            "description": "(optional) macOS"
          }
        ]
      },
      {
        "name": "getBounds",
        "signature": "()",
        "platforms": [],
        "description": "Returns an object that contains window's width, height, x and y values.",
        "parameters": []
      },
      {
        "name": "setContentBounds",
        "signature": "(options[, animate])",
        "platforms": [],
        "description": "Resizes and moves the window's client area (e.g. the web page) to width, height, x, y.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          },
          {
            "name": "animate",
            "type": "Boolean",
            "description": "(optional) macOS"
          }
        ]
      },
      {
        "name": "getContentBounds",
        "signature": "()",
        "platforms": [],
        "description": "Returns an object that contains the window's client area (e.g. the web page) width, height, x and y values.",
        "parameters": []
      },
      {
        "name": "setSize",
        "signature": "(width, height[, animate])",
        "platforms": [],
        "description": "Resizes the window to width and height.",
        "parameters": [
          {
            "name": "width",
            "type": "Integer"
          },
          {
            "name": "height",
            "type": "Integer"
          },
          {
            "name": "animate",
            "type": "Boolean",
            "description": "(optional) macOS"
          }
        ]
      },
      {
        "name": "getSize",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array that contains window's width and height.",
        "parameters": []
      },
      {
        "name": "setContentSize",
        "signature": "(width, height[, animate])",
        "platforms": [],
        "description": "Resizes the window's client area (e.g. the web page) to width and height.",
        "parameters": [
          {
            "name": "width",
            "type": "Integer"
          },
          {
            "name": "height",
            "type": "Integer"
          },
          {
            "name": "animate",
            "type": "Boolean",
            "description": "(optional) macOS"
          }
        ]
      },
      {
        "name": "getContentSize",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array that contains window's client area's width and height.",
        "parameters": []
      },
      {
        "name": "setMinimumSize",
        "signature": "(width, height)",
        "platforms": [],
        "description": "Sets the minimum size of window to width and height.",
        "parameters": [
          {
            "name": "width",
            "type": "Integer"
          },
          {
            "name": "height",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getMinimumSize",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array that contains window's minimum width and height.",
        "parameters": []
      },
      {
        "name": "setMaximumSize",
        "signature": "(width, height)",
        "platforms": [],
        "description": "Sets the maximum size of window to width and height.",
        "parameters": [
          {
            "name": "width",
            "type": "Integer"
          },
          {
            "name": "height",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getMaximumSize",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array that contains window's maximum width and height.",
        "parameters": []
      },
      {
        "name": "setResizable",
        "signature": "(resizable)",
        "platforms": [],
        "description": "Sets whether the window can be manually resized by user.",
        "parameters": [
          {
            "name": "resizable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isResizable",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the window can be manually resized by user.",
        "parameters": []
      },
      {
        "name": "setMovable",
        "signature": "(movable)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Sets whether the window can be moved by user. On Linux does nothing.",
        "parameters": [
          {
            "name": "movable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isMovable",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns whether the window can be moved by user. On Linux always returns true.",
        "parameters": []
      },
      {
        "name": "setMinimizable",
        "signature": "(minimizable)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Sets whether the window can be manually minimized by user. On Linux does nothing.",
        "parameters": [
          {
            "name": "minimizable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isMinimizable",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns whether the window can be manually minimized by user. On Linux always returns true.",
        "parameters": []
      },
      {
        "name": "setMaximizable",
        "signature": "(maximizable)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Sets whether the window can be manually maximized by user. On Linux does nothing.",
        "parameters": [
          {
            "name": "maximizable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isMaximizable",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns whether the window can be manually maximized by user. On Linux always returns true.",
        "parameters": []
      },
      {
        "name": "setFullScreenable",
        "signature": "(fullscreenable)",
        "platforms": [],
        "description": "Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.",
        "parameters": [
          {
            "name": "fullscreenable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isFullScreenable",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.",
        "parameters": []
      },
      {
        "name": "setClosable",
        "signature": "(closable)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Sets whether the window can be manually closed by user. On Linux does nothing.",
        "parameters": [
          {
            "name": "closable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isClosable",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns whether the window can be manually closed by user. On Linux always returns true.",
        "parameters": []
      },
      {
        "name": "setAlwaysOnTop",
        "signature": "(flag)",
        "platforms": [],
        "description": "Sets whether the window should show always on top of other windows. After setting this, the window is still a normal window, not a toolbox window which can not be focused on.",
        "parameters": [
          {
            "name": "flag",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isAlwaysOnTop",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the window is always on top of other windows.",
        "parameters": []
      },
      {
        "name": "center",
        "signature": "()",
        "platforms": [],
        "description": "Moves window to the center of the screen.",
        "parameters": []
      },
      {
        "name": "setPosition",
        "signature": "(x, y[, animate])",
        "platforms": [],
        "description": "Moves window to x and y.",
        "parameters": [
          {
            "name": "x",
            "type": "Integer"
          },
          {
            "name": "y",
            "type": "Integer"
          },
          {
            "name": "animate",
            "type": "Boolean",
            "description": "(optional) macOS"
          }
        ]
      },
      {
        "name": "getPosition",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array that contains window's current position.",
        "parameters": []
      },
      {
        "name": "setTitle",
        "signature": "(title)",
        "platforms": [],
        "description": "Changes the title of native window to title.",
        "parameters": [
          {
            "name": "title",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getTitle",
        "signature": "()",
        "platforms": [],
        "description": "Returns the title of the native window. Note: The title of web page can be different from the title of the native window.",
        "parameters": []
      },
      {
        "name": "setSheetOffset",
        "signature": "(offsetY[, offsetX])",
        "platforms": [
          "macOS"
        ],
        "description": "Changes the attachment point for sheets on macOS. By default, sheets are attached just below the window frame, but you may want to display them beneath a HTML-rendered toolbar. For example:",
        "parameters": [
          {
            "name": "offsetY",
            "type": "Float"
          },
          {
            "name": "offsetX",
            "type": "Float",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "flashFrame",
        "signature": "(flag)",
        "platforms": [],
        "description": "Starts or stops flashing the window to attract user's attention.",
        "parameters": [
          {
            "name": "flag",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "setSkipTaskbar",
        "signature": "(skip)",
        "platforms": [],
        "description": "Makes the window not show in the taskbar.",
        "parameters": [
          {
            "name": "skip",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "setKiosk",
        "signature": "(flag)",
        "platforms": [],
        "description": "Enters or leaves the kiosk mode.",
        "parameters": [
          {
            "name": "flag",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isKiosk",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the window is in kiosk mode.",
        "parameters": []
      },
      {
        "name": "getNativeWindowHandle",
        "signature": "()",
        "platforms": [],
        "description": "Returns the platform-specific handle of the window as Buffer. The native type of the handle is HWND on Windows, NSView* on macOS, and Window (unsigned long) on Linux.",
        "parameters": []
      },
      {
        "name": "hookWindowMessage",
        "signature": "(message, callback)",
        "platforms": [
          "Windows"
        ],
        "description": "Hooks a windows message. The callback is called when the message is received in the WndProc.",
        "parameters": [
          {
            "name": "message",
            "type": "Integer"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "isWindowMessageHooked",
        "signature": "(message)",
        "platforms": [
          "Windows"
        ],
        "description": "Returns true or false depending on whether the message is hooked.",
        "parameters": [
          {
            "name": "message",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "unhookWindowMessage",
        "signature": "(message)",
        "platforms": [
          "Windows"
        ],
        "description": "Unhook the window message.",
        "parameters": [
          {
            "name": "message",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "unhookAllWindowMessages",
        "signature": "()",
        "platforms": [
          "Windows"
        ],
        "description": "Unhooks all of the window messages.",
        "parameters": []
      },
      {
        "name": "setRepresentedFilename",
        "signature": "(filename)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the pathname of the file the window represents, and the icon of the file will show in window's title bar.",
        "parameters": [
          {
            "name": "filename",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getRepresentedFilename",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns the pathname of the file the window represents.",
        "parameters": []
      },
      {
        "name": "setDocumentEdited",
        "signature": "(edited)",
        "platforms": [
          "macOS"
        ],
        "description": "Specifies whether the window’s document has been edited, and the icon in title bar will become gray when set to true.",
        "parameters": [
          {
            "name": "edited",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isDocumentEdited",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Whether the window's document has been edited.",
        "parameters": []
      },
      {
        "name": "focusOnWebView",
        "signature": "()",
        "platforms": [],
        "parameters": []
      },
      {
        "name": "blurWebView",
        "signature": "()",
        "platforms": [],
        "parameters": []
      },
      {
        "name": "capturePage",
        "signature": "([rect, ]callback)",
        "platforms": [],
        "description": "Same as webContents.capturePage([rect, ]callback).",
        "parameters": [
          {
            "name": "rect",
            "type": "Object",
            "description": "(optional) - The area of the page to be captured",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "loadURL",
        "signature": "(url[, options])",
        "platforms": [],
        "description": "Same as webContents.loadURL(url[, options]). The url can be a remote address (e.g. http://) or a path to a local HTML file using the file:// protocol. To ensure that file URLs are properly formatted, it is recommended to use Node's url.format method:",
        "parameters": [
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "httpReferrer",
                "type": "String",
                "description": "A HTTP Referrer url."
              },
              {
                "name": "userAgent",
                "type": "String",
                "description": "A user agent originating the request."
              },
              {
                "name": "extraHeaders",
                "type": "String",
                "description": "Extra headers separated by &quot;\\n&quot;"
              }
            ]
          }
        ]
      },
      {
        "name": "reload",
        "signature": "()",
        "platforms": [],
        "description": "Same as webContents.reload.",
        "parameters": []
      },
      {
        "name": "setMenu",
        "signature": "(menu)",
        "platforms": [
          "Linux",
          "Windows"
        ],
        "description": "Sets the menu as the window's menu bar, setting it to null will remove the menu bar.",
        "parameters": [
          {
            "name": "menu",
            "type": "Menu"
          }
        ]
      },
      {
        "name": "setProgressBar",
        "signature": "(progress[, options])",
        "platforms": [],
        "description": "Sets progress value in progress bar. Valid range is [0, 1.0]. Remove progress bar when progress < 0; Change to indeterminate mode when progress > 1. On Linux platform, only supports Unity desktop environment, you need to specify the *.desktop file name to desktopName field in package.json. By default, it will assume app.getName().desktop. On Windows, a mode can be passed. Accepted values are none, normal, indeterminate, error, and paused. If you call setProgressBar without a mode set (but with a value within the valid range), normal will be assumed.",
        "parameters": [
          {
            "name": "progress",
            "type": "Double"
          },
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "mode",
                "type": "String",
                "description": " <em>Windows</em> - Mode for the progress bar (<code>none</code>, <code>normal</code>, <code>indeterminate</code>, <code>error</code>, or <code>paused</code>)"
              }
            ]
          }
        ]
      },
      {
        "name": "setOverlayIcon",
        "signature": "(overlay, description)",
        "platforms": [
          "Windows"
        ],
        "description": "Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to convey some sort of application status or to passively notify the user.",
        "parameters": [
          {
            "name": "overlay",
            "type": "NativeImage",
            "description": "the icon to display on the bottom"
          },
          {
            "name": "description",
            "type": "String",
            "description": "a description that will be provided to Accessibility",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "setHasShadow",
        "signature": "(hasShadow)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets whether the window should have a shadow. On Windows and Linux does nothing.",
        "parameters": [
          {
            "name": "hasShadow",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "hasShadow",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Returns whether the window has a shadow. On Windows and Linux always returns true.",
        "parameters": []
      },
      {
        "name": "setThumbarButtons",
        "signature": "(buttons)",
        "platforms": [
          "Windows"
        ],
        "description": "Add a thumbnail toolbar with a specified set of buttons to the thumbnail image of a window in a taskbar button layout. Returns a Boolean object indicates whether the thumbnail has been added successfully. The number of buttons in thumbnail toolbar should be no greater than 7 due to the limited room. Once you setup the thumbnail toolbar, the toolbar cannot be removed due to the platform's limitation. But you can call the API with an empty array to clean the buttons. The buttons is an array of Button objects: The flags is an array that can include following Strings:",
        "parameters": [
          {
            "name": "buttons",
            "type": "Array"
          }
        ]
      },
      {
        "name": "setThumbnailClip",
        "signature": "(region)",
        "platforms": [
          "Windows"
        ],
        "description": "Sets the region of the window to show as the thumbnail image displayed when hovering over the window in the taskbar. You can reset the thumbnail to be the entire window by specifying an empty region: {x: 0, y: 0, width: 0, height: 0}.",
        "parameters": [
          {
            "name": "region",
            "type": "Object",
            "description": "Region of the window",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": "x-position of region"
              },
              {
                "name": "y",
                "type": "Integer",
                "description": "y-position of region"
              },
              {
                "name": "width",
                "type": "Integer",
                "description": "width of region"
              },
              {
                "name": "height",
                "type": "Integer",
                "description": "height of region"
              }
            ]
          }
        ]
      },
      {
        "name": "setThumbnailToolTip",
        "signature": "(toolTip)",
        "platforms": [
          "Windows"
        ],
        "description": "Sets the toolTip that is displayed when hovering over the window thumbnail in the taskbar.",
        "parameters": [
          {
            "name": "toolTip",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "showDefinitionForSelection",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Same as webContents.showDefinitionForSelection().",
        "parameters": []
      },
      {
        "name": "setIcon",
        "signature": "(icon)",
        "platforms": [
          "Windows",
          "Linux"
        ],
        "description": "Changes window icon.",
        "parameters": [
          {
            "name": "icon",
            "type": "NativeImage"
          }
        ]
      },
      {
        "name": "setAutoHideMenuBar",
        "signature": "(hide)",
        "platforms": [],
        "description": "Sets whether the window menu bar should hide itself automatically. Once set the menu bar will only show when users press the single Alt key. If the menu bar is already visible, calling setAutoHideMenuBar(true) won't hide it immediately.",
        "parameters": [
          {
            "name": "hide",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isMenuBarAutoHide",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether menu bar automatically hides itself.",
        "parameters": []
      },
      {
        "name": "setMenuBarVisibility",
        "signature": "(visible)",
        "platforms": [],
        "description": "Sets whether the menu bar should be visible. If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single Alt key.",
        "parameters": [
          {
            "name": "visible",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isMenuBarVisible",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the menu bar is visible.",
        "parameters": []
      },
      {
        "name": "setVisibleOnAllWorkspaces",
        "signature": "(visible)",
        "platforms": [],
        "description": "Sets whether the window should be visible on all workspaces. Note: This API does nothing on Windows.",
        "parameters": [
          {
            "name": "visible",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isVisibleOnAllWorkspaces",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the window is visible on all workspaces. Note: This API always returns false on Windows.",
        "parameters": []
      },
      {
        "name": "setIgnoreMouseEvents",
        "signature": "(ignore)",
        "platforms": [],
        "description": "Makes the window ignore all mouse events. All mouse events happened in this window will be passed to the window below this window, but if this window has focus, it will still receive keyboard events.",
        "parameters": [
          {
            "name": "ignore",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "setContentProtection",
        "signature": "(enable)",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Prevents the window contents from being captured by other apps. On macOS it sets the NSWindow's sharingType to NSWindowSharingNone. On Windows it calls SetWindowDisplayAffinity with WDA_MONITOR.",
        "parameters": [
          {
            "name": "enable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "setFocusable",
        "signature": "(focusable)",
        "platforms": [
          "Windows"
        ],
        "description": "Changes whether the window can be focused.",
        "parameters": [
          {
            "name": "focusable",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "setParentWindow",
        "signature": "(parent)",
        "platforms": [
          "Linux",
          "macOS"
        ],
        "description": "Sets parent as current window's parent window, passing null will turn current window into a top-level window.",
        "parameters": [
          {
            "name": "parent",
            "type": "BrowserWindow"
          }
        ]
      },
      {
        "name": "getParentWindow",
        "signature": "()",
        "platforms": [],
        "description": "Returns the parent window.",
        "parameters": []
      },
      {
        "name": "getChildWindows",
        "signature": "()",
        "platforms": [],
        "description": "Returns all child windows.",
        "parameters": []
      }
    ],
    "instanceProperties": [
      {
        "name": "webContents",
        "description": "The WebContents object this window owns. All web page related events and operations will be done via it. See the webContents documentation for its methods and events."
      },
      {
        "name": "id",
        "description": "The unique ID of the window."
      }
    ],
    "instanceEvents": [
      {
        "name": "page-title-updated",
        "description": "Emitted when the document changed its title, calling event.preventDefault() will prevent the native window's title from changing.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "title",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "close",
        "description": "Emitted when the window is going to be closed. It's emitted before the beforeunload and unload event of the DOM. Calling event.preventDefault() will cancel the close. Usually you would want to use the beforeunload handler to decide whether the window should be closed, which will also be called when the window is reloaded. In Electron, returning any value other than undefined would cancel the close. For example:",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          }
        ]
      },
      {
        "name": "closed",
        "description": "Emitted when the window is closed. After you have received this event you should remove the reference to the window and avoid using it any more.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "unresponsive",
        "description": "Emitted when the web page becomes unresponsive.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "responsive",
        "description": "Emitted when the unresponsive web page becomes responsive again.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "blur",
        "description": "Emitted when the window loses focus.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "focus",
        "description": "Emitted when the window gains focus.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "show",
        "description": "Emitted when the window is shown.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "hide",
        "description": "Emitted when the window is hidden.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "ready-to-show",
        "description": "Emitted when the web page has been rendered and window can be displayed without a visual flash.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "maximize",
        "description": "Emitted when window is maximized.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "unmaximize",
        "description": "Emitted when the window exits from a maximized state.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "minimize",
        "description": "Emitted when the window is minimized.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "restore",
        "description": "Emitted when the window is restored from a minimized state.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "resize",
        "description": "Emitted when the window is being resized.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "move",
        "description": "Emitted when the window is being moved to a new position. Note: On macOS this event is just an alias of moved.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "moved",
        "description": "Emitted once when the window is moved to a new position.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "enter-full-screen",
        "description": "Emitted when the window enters a full-screen state.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "leave-full-screen",
        "description": "Emitted when the window leaves a full-screen state.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "enter-html-full-screen",
        "description": "Emitted when the window enters a full-screen state triggered by HTML API.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "leave-html-full-screen",
        "description": "Emitted when the window leaves a full-screen state triggered by HTML API.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "app-command",
        "description": "Emitted when an App Command is invoked. These are typically related to keyboard media keys or browser commands, as well as the \"Back\" button built into some mice on Windows. Commands are lowercased, underscores are replaced with hyphens, and the APPCOMMAND_ prefix is stripped off. e.g. APPCOMMAND_BROWSER_BACKWARD is emitted as browser-backward.",
        "platforms": [
          "Windows"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "command",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "scroll-touch-begin",
        "description": "Emitted when scroll wheel event phase has begun.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "scroll-touch-end",
        "description": "Emitted when scroll wheel event phase has ended.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "scroll-touch-edge",
        "description": "Emitted when scroll wheel event phase filed upon reaching the edge of element.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "swipe",
        "description": "Emitted on 3-finger swipe. Possible directions are up, right, down, left.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "direction",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ]
  },
  {
    "name": "contentTracing",
    "description": "Collect tracing data from Chromium's content module for finding performance\nbottlenecks and slow operations.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "content-tracing",
    "websiteUrl": "http://electron.atom.io/docs/api/content-tracing",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/content-tracing.md",
    "methods": [
      {
        "name": "getCategories",
        "signature": "(callback)",
        "platforms": [],
        "description": "Get a set of category groups. The category groups can change as new code paths are reached. Once all child processes have acknowledged the getCategories request the callback is invoked with an array of category groups.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "startRecording",
        "signature": "(options, callback)",
        "platforms": [],
        "description": "Start recording on all processes. Recording begins immediately locally and asynchronously on child processes as soon as they receive the EnableRecording request. The callback will be called once all child processes have acknowledged the startRecording request. categoryFilter is a filter to control what category groups should be traced. A filter can have an optional - prefix to exclude category groups that contain a matching category. Having both included and excluded category patterns in the same list is not supported. Examples: traceOptions controls what kind of tracing is enabled, it is a comma-delimited list. Possible options are: The first 3 options are trace recoding modes and hence mutually exclusive. If more than one trace recording modes appear in the traceOptions string, the last one takes precedence. If none of the trace recording modes are specified, recording mode is record-until-full. The trace option will first be reset to the default option (record_mode set to record-until-full, enable_sampling and enable_systrace set to false) before options parsed from traceOptions are applied on it.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "categoryFilter",
                "type": "String",
                "description": ""
              },
              {
                "name": "traceOptions",
                "type": "String",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "stopRecording",
        "signature": "(resultFilePath, callback)",
        "platforms": [],
        "description": "Stop recording on all processes. Child processes typically cache trace data and only rarely flush and send trace data back to the main process. This helps to minimize the runtime overhead of tracing since sending trace data over IPC can be an expensive operation. So, to end tracing, we must asynchronously ask all child processes to flush any pending trace data. Once all child processes have acknowledged the stopRecording request, callback will be called with a file that contains the traced data. Trace data will be written into resultFilePath if it is not empty or into a temporary file. The actual file path will be passed to callback if it's not null.",
        "parameters": [
          {
            "name": "resultFilePath",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "startMonitoring",
        "signature": "(options, callback)",
        "platforms": [],
        "description": "Start monitoring on all processes. Monitoring begins immediately locally and asynchronously on child processes as soon as they receive the startMonitoring request. Once all child processes have acknowledged the startMonitoring request the callback will be called.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "categoryFilter",
                "type": "String",
                "description": ""
              },
              {
                "name": "traceOptions",
                "type": "String",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "stopMonitoring",
        "signature": "(callback)",
        "platforms": [],
        "description": "Stop monitoring on all processes. Once all child processes have acknowledged the stopMonitoring request the callback is called.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "captureMonitoringSnapshot",
        "signature": "(resultFilePath, callback)",
        "platforms": [],
        "description": "Get the current monitoring traced data. Child processes typically cache trace data and only rarely flush and send trace data back to the main process. This is because it may be an expensive operation to send the trace data over IPC and we would like to avoid unneeded runtime overhead from tracing. So, to end tracing, we must asynchronously ask all child processes to flush any pending trace data. Once all child processes have acknowledged the captureMonitoringSnapshot request the callback will be called with a file that contains the traced data.",
        "parameters": [
          {
            "name": "resultFilePath",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "getTraceBufferUsage",
        "signature": "(callback)",
        "platforms": [],
        "description": "Get the maximum usage across processes of trace buffer as a percentage of the full state. When the TraceBufferUsage value is determined the callback is called.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "setWatchEvent",
        "signature": "(categoryName, eventName, callback)",
        "platforms": [],
        "description": "callback will be called every time the given event occurs on any process.",
        "parameters": [
          {
            "name": "categoryName",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "eventName",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "cancelWatchEvent",
        "signature": "()",
        "platforms": [],
        "description": "Cancel the watch event. This may lead to a race condition with the watch event callback if tracing is enabled.",
        "parameters": []
      }
    ],
    "events": []
  },
  {
    "name": "dialog",
    "description": "Display native system dialogs for opening and saving files, alerting, etc.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "dialog",
    "websiteUrl": "http://electron.atom.io/docs/api/dialog",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/dialog.md",
    "methods": [
      {
        "name": "showOpenDialog",
        "signature": "([browserWindow, ]options[, callback])",
        "platforms": [],
        "description": "On success this method returns an array of file paths chosen by the user, otherwise it returns undefined. The filters specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type. For example: The extensions array should contain extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad). To show all files, use the '*' wildcard (no other wildcard is supported). If a callback is passed, the API call will be asynchronous and the result will be passed via callback(filenames) Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector, so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.",
        "parameters": [
          {
            "name": "browserWindow",
            "type": "BrowserWindow",
            "description": "(optional)"
          },
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "title",
                "type": "String",
                "description": ""
              },
              {
                "name": "defaultPath",
                "type": "String",
                "description": ""
              },
              {
                "name": "buttonLabel",
                "type": "String",
                "description": "Custom label for the confirmation button, when"
              },
              {
                "name": "filters",
                "type": "Array",
                "description": ""
              },
              {
                "name": "properties",
                "type": "Array",
                "description": "Contains which features the dialog should use, can"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "showSaveDialog",
        "signature": "([browserWindow, ]options[, callback])",
        "platforms": [],
        "description": "On success this method returns the path of the file chosen by the user, otherwise it returns undefined. The filters specifies an array of file types that can be displayed, see dialog.showOpenDialog for an example. If a callback is passed, the API call will be asynchronous and the result will be passed via callback(filename)",
        "parameters": [
          {
            "name": "browserWindow",
            "type": "BrowserWindow",
            "description": "(optional)"
          },
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "title",
                "type": "String",
                "description": ""
              },
              {
                "name": "defaultPath",
                "type": "String",
                "description": ""
              },
              {
                "name": "buttonLabel",
                "type": "String",
                "description": "Custom label for the confirmation button, when"
              },
              {
                "name": "filters",
                "type": "Array",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "showMessageBox",
        "signature": "([browserWindow, ]options[, callback])",
        "platforms": [],
        "description": "Shows a message box, it will block the process until the message box is closed. It returns the index of the clicked button. If a callback is passed, the API call will be asynchronous and the result will be passed via callback(response).",
        "parameters": [
          {
            "name": "browserWindow",
            "type": "BrowserWindow",
            "description": "(optional)"
          },
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "type",
                "type": "String",
                "description": "Can be <code>&quot;none&quot;</code>, <code>&quot;info&quot;</code>, <code>&quot;error&quot;</code>, <code>&quot;question&quot;</code> or"
              },
              {
                "name": "buttons",
                "type": "Array",
                "description": "Array of texts for buttons. On Windows, an empty array"
              },
              {
                "name": "defaultId",
                "type": "Integer",
                "description": "Index of the button in the buttons array which will"
              },
              {
                "name": "title",
                "type": "String",
                "description": "Title of the message box, some platforms will not show it."
              },
              {
                "name": "message",
                "type": "String",
                "description": "Content of the message box."
              },
              {
                "name": "detail",
                "type": "String",
                "description": "Extra information of the message."
              },
              {
                "name": "icon",
                "type": "NativeImage",
                "description": ""
              },
              {
                "name": "cancelId",
                "type": "Integer",
                "description": "The value will be returned when user cancels the dialog"
              },
              {
                "name": "noLink",
                "type": "Boolean",
                "description": "On Windows Electron will try to figure out which one of"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "showErrorBox",
        "signature": "(title, content)",
        "platforms": [],
        "description": "Displays a modal dialog that shows an error message. This API can be called safely before the ready event the app module emits, it is usually used to report errors in early stage of startup.  If called before the app readyevent on Linux, the message will be emitted to stderr, and no GUI dialog will appear.",
        "parameters": [
          {
            "name": "title",
            "type": "String",
            "description": "The title to display in the error box",
            "possibleValues": []
          },
          {
            "name": "content",
            "type": "String",
            "description": "The text content to display in the error box",
            "possibleValues": []
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "ipcMain",
    "description": "Communicate asynchronously from the main process to renderer processes.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "ipc-main",
    "websiteUrl": "http://electron.atom.io/docs/api/ipc-main",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/ipc-main.md",
    "methods": [],
    "events": []
  },
  {
    "name": "globalShortcut",
    "description": "Detect keyboard events when the application does not have keyboard focus.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "global-shortcut",
    "websiteUrl": "http://electron.atom.io/docs/api/global-shortcut",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/global-shortcut.md",
    "methods": [
      {
        "name": "register",
        "signature": "(accelerator, callback)",
        "platforms": [],
        "description": "Registers a global shortcut of accelerator. The callback is called when the registered shortcut is pressed by the user. When the accelerator is already taken by other applications, this call will silently fail. This behavior is intended by operating systems, since they don't want applications to fight for global shortcuts.",
        "parameters": [
          {
            "name": "accelerator",
            "type": "Accelerator"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "isRegistered",
        "signature": "(accelerator)",
        "platforms": [],
        "description": "Returns whether this application has registered accelerator. When the accelerator is already taken by other applications, this call will still return false. This behavior is intended by operating systems, since they don't want applications to fight for global shortcuts.",
        "parameters": [
          {
            "name": "accelerator",
            "type": "Accelerator"
          }
        ]
      },
      {
        "name": "unregister",
        "signature": "(accelerator)",
        "platforms": [],
        "description": "Unregisters the global shortcut of accelerator.",
        "parameters": [
          {
            "name": "accelerator",
            "type": "Accelerator"
          }
        ]
      },
      {
        "name": "unregisterAll",
        "signature": "()",
        "platforms": [],
        "description": "Unregisters all of the global shortcuts.",
        "parameters": []
      }
    ],
    "events": []
  },
  {
    "name": "Menu",
    "description": "Create native application menus and context menus.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "menu",
    "websiteUrl": "http://electron.atom.io/docs/api/menu",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/menu.md",
    "staticMethods": [
      {
        "name": "setApplicationMenu",
        "signature": "(menu)",
        "platforms": [],
        "description": "Sets menu as the application menu on macOS. On Windows and Linux, the menu will be set as each window's top menu. Note: This API has to be called after the ready event of app module.",
        "parameters": [
          {
            "name": "menu",
            "type": "Menu"
          }
        ]
      },
      {
        "name": "getApplicationMenu",
        "signature": "()",
        "platforms": [],
        "description": "Returns the application menu (an instance of Menu), if set, or null, if not set.",
        "parameters": []
      },
      {
        "name": "sendActionToFirstResponder",
        "signature": "(action)",
        "platforms": [
          "macOS"
        ],
        "description": "Sends the action to the first responder of application. This is used for emulating default Cocoa menu behaviors, usually you would just use the role property of MenuItem. See the macOS Cocoa Event Handling Guide for more information on macOS' native actions.",
        "parameters": [
          {
            "name": "action",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "buildFromTemplate",
        "signature": "(template)",
        "platforms": [],
        "description": "Generally, the template is just an array of options for constructing a MenuItem. The usage can be referenced above. You can also attach other fields to the element of the template and they will become properties of the constructed menu items.",
        "parameters": [
          {
            "name": "template",
            "type": "Array"
          }
        ]
      }
    ],
    "constructorMethod": {
      "signature": "()",
      "parameters": []
    },
    "instanceName": "menu",
    "instanceMethods": [
      {
        "name": "popup",
        "signature": "([browserWindow, x, y, positioningItem])",
        "platforms": [],
        "description": "Pops up this menu as a context menu in the browserWindow.",
        "parameters": [
          {
            "name": "browserWindow",
            "type": "BrowserWindow",
            "description": "(optional) - Default is `BrowserWindow.getFocusedWindow()`."
          },
          {
            "name": "x",
            "type": "Number",
            "description": "(optional) - Default is the current mouse cursor position."
          },
          {
            "name": "y",
            "type": "Number",
            "description": "(required if `x` is used) - Default is the current mouse cursor position."
          },
          {
            "name": "positioningItem",
            "type": "Number",
            "description": "(optional) macOS - The index of the menu item to"
          }
        ]
      },
      {
        "name": "append",
        "signature": "(menuItem)",
        "platforms": [],
        "description": "Appends the menuItem to the menu.",
        "parameters": [
          {
            "name": "menuItem",
            "type": "MenuItem"
          }
        ]
      },
      {
        "name": "insert",
        "signature": "(pos, menuItem)",
        "platforms": [],
        "description": "Inserts the menuItem to the pos position of the menu.",
        "parameters": [
          {
            "name": "pos",
            "type": "Integer"
          },
          {
            "name": "menuItem",
            "type": "MenuItem"
          }
        ]
      }
    ],
    "instanceProperties": [
      {
        "name": "items",
        "description": "Get an array containing the menu's items."
      }
    ],
    "instanceEvents": []
  },
  {
    "name": "MenuItem",
    "description": "Add items to native application menus and context menus.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "menu-item",
    "websiteUrl": "http://electron.atom.io/docs/api/menu-item",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/menu-item.md",
    "staticMethods": [],
    "constructorMethod": {
      "signature": "(options)",
      "parameters": [
        {
          "name": "options",
          "type": "Object",
          "properties": [
            {
              "name": "click",
              "type": "Function",
              "description": "Will be called with"
            },
            {
              "name": "role",
              "type": "String",
              "description": "Define the action of the menu item, when specified the"
            },
            {
              "name": "type",
              "type": "String",
              "description": "Can be <code>normal</code>, <code>separator</code>, <code>submenu</code>, <code>checkbox</code> or"
            },
            {
              "name": "label",
              "type": "String",
              "description": ""
            },
            {
              "name": "sublabel",
              "type": "String",
              "description": ""
            },
            {
              "name": "accelerator",
              "type": "Accelerator",
              "description": ""
            },
            {
              "name": "icon",
              "type": "NativeImage",
              "description": ""
            },
            {
              "name": "enabled",
              "type": "Boolean",
              "description": "If false, the menu item will be greyed out and"
            },
            {
              "name": "visible",
              "type": "Boolean",
              "description": "If false, the menu item will be entirely hidden."
            },
            {
              "name": "checked",
              "type": "Boolean",
              "description": "Should only be specified for <code>checkbox</code> or <code>radio</code> type"
            },
            {
              "name": "submenu",
              "type": "Menu",
              "description": "Should be specified for <code>submenu</code> type menu items. If"
            },
            {
              "name": "id",
              "type": "String",
              "description": "Unique within a single menu. If defined then it can be used"
            },
            {
              "name": "position",
              "type": "String",
              "description": "This field allows fine-grained definition of the"
            }
          ]
        }
      ]
    },
    "instanceName": "menuItem",
    "instanceMethods": [],
    "instanceProperties": [
      {
        "name": "enabled",
        "description": "A Boolean indicating whether the item is enabled, this property can be dynamically changed."
      },
      {
        "name": "visible",
        "description": "A Boolean indicating whether the item is visible, this property can be dynamically changed."
      },
      {
        "name": "checked",
        "description": "A Boolean indicating whether the item is checked, this property can be dynamically changed. A checkbox menu item will toggle the checked property on and off when selected. A radio menu item will turn on its checked property when clicked, and will turn off that property for all adjacent items in the same menu. You can add a click function for additional behavior."
      }
    ],
    "instanceEvents": []
  },
  {
    "name": "powerMonitor",
    "description": "Monitor power state changes.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "power-monitor",
    "websiteUrl": "http://electron.atom.io/docs/api/power-monitor",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/power-monitor.md",
    "methods": [],
    "events": [
      {
        "name": "suspend",
        "description": "Emitted when the system is suspending.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "resume",
        "description": "Emitted when system is resuming.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "on-ac",
        "description": "Emitted when the system changes to AC power.",
        "platforms": [
          "Windows"
        ],
        "returns": []
      },
      {
        "name": "on-battery",
        "description": "Emitted when system changes to battery power.",
        "platforms": [
          "Windows"
        ],
        "returns": []
      }
    ]
  },
  {
    "name": "powerSaveBlocker",
    "description": "Block the system from entering low-power (sleep) mode.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "power-save-blocker",
    "websiteUrl": "http://electron.atom.io/docs/api/power-save-blocker",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/power-save-blocker.md",
    "methods": [
      {
        "name": "start",
        "signature": "(type)",
        "platforms": [],
        "description": "Starts preventing the system from entering lower-power mode. Returns an integer identifying the power save blocker. Note: prevent-display-sleep has higher precedence over prevent-app-suspension. Only the highest precedence type takes effect. In other words, prevent-display-sleep always takes precedence over prevent-app-suspension. For example, an API calling A requests for prevent-app-suspension, and another calling B requests for prevent-display-sleep. prevent-display-sleep will be used until B stops its request. After that, prevent-app-suspension is used.",
        "parameters": [
          {
            "name": "type",
            "type": "String",
            "description": "Power save blocker type.",
            "possibleValues": [
              {
                "value": "prevent-app-suspension",
                "description": "Prevent the application from being suspended."
              },
              {
                "value": "prevent-display-sleep",
                "description": "Prevent the display from going to sleep. Keeps"
              }
            ]
          }
        ]
      },
      {
        "name": "stop",
        "signature": "(id)",
        "platforms": [],
        "description": "Stops the specified power save blocker.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer",
            "description": "The power save blocker id returned by `powerSaveBlocker.start`."
          }
        ]
      },
      {
        "name": "isStarted",
        "signature": "(id)",
        "platforms": [],
        "description": "Returns a boolean whether the corresponding powerSaveBlocker has started.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer",
            "description": "The power save blocker id returned by `powerSaveBlocker.start`."
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "protocol",
    "description": "Register a custom protocol and intercept existing protocol requests.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "protocol",
    "websiteUrl": "http://electron.atom.io/docs/api/protocol",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/protocol.md",
    "methods": [
      {
        "name": "registerStandardSchemes",
        "signature": "(schemes)",
        "platforms": [],
        "description": "A standard scheme adheres to what RFC 3986 calls generic URI syntax. For example http and https are standard schemes, while file is not. Registering a scheme as standard, will allow relative and absolute resources to be resolved correctly when served. Otherwise the scheme will behave like the file protocol, but without the ability to resolve relative URLs. For example when you load following page with custom protocol without registering it as standard scheme, the image will not be loaded because non-standard schemes can not recognize relative URLs: Registering a scheme as standard will allow access to files through the FileSystem API. Otherwise the renderer will throw a security error for the scheme. So in general if you want to register a custom protocol to replace the http protocol, you have to register it as a standard scheme: Note: This method can only be used before the ready event of the app module gets emitted.",
        "parameters": [
          {
            "name": "schemes",
            "type": "Array",
            "description": "Custom schemes to be registered as standard schemes."
          }
        ]
      },
      {
        "name": "registerServiceWorkerSchemes",
        "signature": "(schemes)",
        "platforms": [],
        "parameters": [
          {
            "name": "schemes",
            "type": "Array",
            "description": "Custom schemes to be registered to handle service workers."
          }
        ]
      },
      {
        "name": "registerFileProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Registers a protocol of scheme that will send the file as a response. The handler will be called with handler(request, callback) when a request is going to be created with scheme. completion will be called with completion(null) when scheme is successfully registered or completion(error) when failed. The uploadData is an array of data objects: To handle the request, the callback should be called with either the file's path or an object that has a path property, e.g. callback(filePath) or callback({path: filePath}). When callback is called with nothing, a number, or an object that has an error property, the request will fail with the error number you specified. For the available error numbers you can use, please see the net error list. By default the scheme is treated like http:, which is parsed differently than protocols that follow the \"generic URI syntax\" like file:, so you probably want to call protocol.registerStandardSchemes to have your scheme treated as a standard scheme.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "registerBufferProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Registers a protocol of scheme that will send a Buffer as a response. The usage is the same with registerFileProtocol, except that the callback should be called with either a Buffer object or an object that has the data, mimeType, and charset properties. Example:",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "registerStringProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Registers a protocol of scheme that will send a String as a response. The usage is the same with registerFileProtocol, except that the callback should be called with either a String or an object that has the data, mimeType, and charset properties.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "registerHttpProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Registers a protocol of scheme that will send an HTTP request as a response. The usage is the same with registerFileProtocol, except that the callback should be called with a redirectRequest object that has the url, method, referrer, uploadData and session properties. By default the HTTP request will reuse the current session. If you want the request to have a different session you should set session to null. For POST requests the uploadData object must be provided.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "unregisterProtocol",
        "signature": "(scheme[, completion])",
        "platforms": [],
        "description": "Unregisters the custom protocol of scheme.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "isProtocolHandled",
        "signature": "(scheme, callback)",
        "platforms": [],
        "description": "The callback will be called with a boolean that indicates whether there is already a handler for scheme.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "interceptFileProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Intercepts scheme protocol and uses handler as the protocol's new handler which sends a file as a response.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "interceptStringProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Intercepts scheme protocol and uses handler as the protocol's new handler which sends a String as a response.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "interceptBufferProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Intercepts scheme protocol and uses handler as the protocol's new handler which sends a Buffer as a response.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "interceptHttpProtocol",
        "signature": "(scheme, handler[, completion])",
        "platforms": [],
        "description": "Intercepts scheme protocol and uses handler as the protocol's new handler which sends a new HTTP request as a response.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "handler",
            "type": "Function"
          },
          {
            "name": "completion",
            "type": "Function",
            "description": "(optional)"
          }
        ]
      },
      {
        "name": "uninterceptProtocol",
        "signature": "(scheme[, completion])",
        "platforms": [],
        "description": "Remove the interceptor installed for scheme and restore its original handler.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "completion",
            "type": "Function"
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "screen",
    "description": "Retrieve information about screen size, displays, cursor position, etc.",
    "process": {
      "main": true,
      "renderer": true
    },
    "type": "Module",
    "slug": "screen",
    "websiteUrl": "http://electron.atom.io/docs/api/screen",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/screen.md",
    "methods": [
      {
        "name": "getCursorScreenPoint",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current absolute position of the mouse pointer.",
        "parameters": []
      },
      {
        "name": "getPrimaryDisplay",
        "signature": "()",
        "platforms": [],
        "description": "Returns the primary display.",
        "parameters": []
      },
      {
        "name": "getAllDisplays",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array of displays that are currently available.",
        "parameters": []
      },
      {
        "name": "getDisplayNearestPoint",
        "signature": "(point)",
        "platforms": [],
        "description": "Returns the display nearest the specified point.",
        "parameters": [
          {
            "name": "point",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "getDisplayMatching",
        "signature": "(rect)",
        "platforms": [],
        "description": "Returns the display that most closely intersects the provided bounds.",
        "parameters": [
          {
            "name": "rect",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "display-added",
        "description": "Emitted when newDisplay has been added.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "newDisplay",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "display-removed",
        "description": "Emitted when oldDisplay has been removed.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "oldDisplay",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "display-metrics-changed",
        "description": "Emitted when one or more metrics change in a display. The changedMetrics is an array of strings that describe the changes. Possible changes are bounds, workArea, scaleFactor and rotation.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "display",
            "type": "Object",
            "properties": []
          },
          {
            "name": "changedMetrics",
            "type": "Array"
          }
        ]
      }
    ]
  },
  {
    "name": "session",
    "description": "Manage browser sessions, cookies, cache, proxy settings, etc.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "session",
    "websiteUrl": "http://electron.atom.io/docs/api/session",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/session.md",
    "methods": [
      {
        "name": "fromPartition",
        "signature": "(partition[, options])",
        "platforms": [],
        "description": "Returns a Session instance from partition string. When there is an existing Session with the same partition, it will be returned; othewise a new Session instance will be created with options. If partition starts with persist:, the page will use a persistent session available to all pages in the app with the same partition. if there is no persist: prefix, the page will use an in-memory session. If the partition is empty then default session of the app will be returned. To create a Session with options, you have to ensure the Session with the partition has never been used before. There is no way to change the options of an existing Session object.",
        "parameters": [
          {
            "name": "partition",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "cache",
                "type": "Boolean",
                "description": "Whether to enable cache."
              }
            ]
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "Session",
    "description": "Get and set properties of a session.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "session",
    "websiteUrl": "http://electron.atom.io/docs/api/session",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/session.md",
    "staticMethods": [],
    "instanceName": "ses",
    "instanceMethods": [
      {
        "name": "getCacheSize",
        "signature": "(callback)",
        "platforms": [],
        "description": "Returns the session's current cache size.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "clearCache",
        "signature": "(callback)",
        "platforms": [],
        "description": "Clears the session’s HTTP cache.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function",
            "description": "Called when operation is done"
          }
        ]
      },
      {
        "name": "clearStorageData",
        "signature": "([options, callback])",
        "platforms": [],
        "description": "Clears the data of web storages.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "origin",
                "type": "String",
                "description": "Should follow <code>window.location.origin</code>&#x2019;s representation"
              },
              {
                "name": "storages",
                "type": "Array",
                "description": "The types of storages to clear, can contain:"
              },
              {
                "name": "quotas",
                "type": "Array",
                "description": "The types of quotas to clear, can contain:"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "(optional) - Called when operation is done."
          }
        ]
      },
      {
        "name": "flushStorageData",
        "signature": "()",
        "platforms": [],
        "description": "Writes any unwritten DOMStorage data to disk.",
        "parameters": []
      },
      {
        "name": "setProxy",
        "signature": "(config, callback)",
        "platforms": [],
        "description": "Sets the proxy settings. When pacScript and proxyRules are provided together, the proxyRules option is ignored and pacScript configuration is applied. The proxyRules has to follow the rules below: For example: The proxyBypassRules is a comma separated list of rules described below:",
        "parameters": [
          {
            "name": "config",
            "type": "Object",
            "properties": [
              {
                "name": "pacScript",
                "type": "String",
                "description": "The URL associated with the PAC file."
              },
              {
                "name": "proxyRules",
                "type": "String",
                "description": "Rules indicating which proxies to use."
              },
              {
                "name": "proxyBypassRules",
                "type": "String",
                "description": "Rules indicating which URLs should"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "Called when operation is done."
          }
        ]
      }
    ],
    "instanceProperties": [
      {
        "name": "cookies",
        "description": "Returns an instance of Cookies class for this session."
      },
      {
        "name": "webRequest",
        "description": "Returns an instance of WebRequest class for this session."
      },
      {
        "name": "protocol",
        "description": "Returns an instance of protocol module for this session."
      }
    ],
    "instanceEvents": [
      {
        "name": "will-download",
        "description": "Emitted when Electron is about to download item in webContents. Calling event.preventDefault() will cancel the download and item will not be available from next tick of the process.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "item",
            "type": "DownloadItem"
          },
          {
            "name": "webContents",
            "type": "WebContents"
          }
        ]
      }
    ]
  },
  {
    "name": "Cookies",
    "description": "Query and modify a session's cookies.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "cookies",
    "websiteUrl": "http://electron.atom.io/docs/api/cookies",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/cookies.md",
    "staticMethods": [],
    "instanceName": "cookies",
    "instanceMethods": [
      {
        "name": "get",
        "signature": "(filter, callback)",
        "platforms": [],
        "description": "Sends a request to get all cookies matching details, callback will be called with callback(error, cookies) on complete. cookies is an Array of cookie objects.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": [
              {
                "name": "url",
                "type": "String",
                "description": " (optional) - Retrieves cookies which are associated with"
              },
              {
                "name": "name",
                "type": "String",
                "description": " (optional) - Filters cookies by name."
              },
              {
                "name": "domain",
                "type": "String",
                "description": " (optional) - Retrieves cookies whose domains match or are"
              },
              {
                "name": "path",
                "type": "String",
                "description": " (optional) - Retrieves cookies whose path matches <code>path</code>."
              },
              {
                "name": "secure",
                "type": "Boolean",
                "description": " (optional) - Filters cookies by their Secure property."
              },
              {
                "name": "session",
                "type": "Boolean",
                "description": " (optional) - Filters out session or persistent cookies."
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "set",
        "signature": "(details, callback)",
        "platforms": [],
        "description": "Sets a cookie with details, callback will be called with callback(error) on complete.",
        "parameters": [
          {
            "name": "details",
            "type": "Object",
            "properties": [
              {
                "name": "url",
                "type": "String",
                "description": "The url to associate the cookie with."
              },
              {
                "name": "name",
                "type": "String",
                "description": "The name of the cookie. Empty by default if omitted."
              },
              {
                "name": "value",
                "type": "String",
                "description": "The value of the cookie. Empty by default if omitted."
              },
              {
                "name": "domain",
                "type": "String",
                "description": "The domain of the cookie. Empty by default if omitted."
              },
              {
                "name": "path",
                "type": "String",
                "description": "The path of the cookie. Empty by default if omitted."
              },
              {
                "name": "secure",
                "type": "Boolean",
                "description": "Whether the cookie should be marked as Secure. Defaults to"
              },
              {
                "name": "httpOnly",
                "type": "Boolean",
                "description": "Whether the cookie should be marked as HTTP only."
              },
              {
                "name": "expirationDate",
                "type": "Double",
                "description": " -\tThe expiration date of the cookie as the number of"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "remove",
        "signature": "(url, name, callback)",
        "platforms": [],
        "description": "Removes the cookies matching url and name, callback will called with callback() on complete.",
        "parameters": [
          {
            "name": "url",
            "type": "String",
            "description": "The URL associated with the cookie.",
            "possibleValues": []
          },
          {
            "name": "name",
            "type": "String",
            "description": "The name of cookie to remove.",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      }
    ],
    "instanceProperties": [],
    "instanceEvents": []
  },
  {
    "name": "WebRequest",
    "description": "Intercept and modify the contents of a request at various stages of its lifetime.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "web-request",
    "websiteUrl": "http://electron.atom.io/docs/api/web-request",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/web-request.md",
    "staticMethods": [],
    "instanceName": "webRequest",
    "instanceMethods": [
      {
        "name": "onBeforeRequest",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details, callback) when a request is about to occur. The uploadData is an array of data objects: The callback has to be called with an response object:",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onBeforeSendHeaders",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details, callback) before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any http data is sent. The callback has to be called with an response object:",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onSendHeaders",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details) just before a request is going to be sent to the server, modifications of previous onBeforeSendHeaders response are visible by the time this listener is fired.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onHeadersReceived",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details, callback) when HTTP response headers of a request have been received. The callback has to be called with an response object:",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onResponseStarted",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details) when first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onBeforeRedirect",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details) when a server initiated redirect is about to occur.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onCompleted",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details) when a request is completed.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      },
      {
        "name": "onErrorOccurred",
        "signature": "([filter, ]listener)",
        "platforms": [],
        "description": "The listener will be called with listener(details) when an error occurs.",
        "parameters": [
          {
            "name": "filter",
            "type": "Object",
            "properties": []
          },
          {
            "name": "listener",
            "type": "Function"
          }
        ]
      }
    ],
    "instanceProperties": [],
    "instanceEvents": []
  },
  {
    "name": "systemPreferences",
    "description": "Get system preferences.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "system-preferences",
    "websiteUrl": "http://electron.atom.io/docs/api/system-preferences",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/system-preferences.md",
    "methods": [
      {
        "name": "isDarkMode",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "This method returns true if the system is in Dark Mode, and false otherwise.",
        "parameters": []
      },
      {
        "name": "isSwipeTrackingFromScrollEventsEnabled",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "This method returns true if the Swipe between pages setting is on, and false otherwise.",
        "parameters": []
      },
      {
        "name": "postNotification",
        "signature": "(event, userInfo)",
        "platforms": [
          "macOS"
        ],
        "description": "Posts event as native notifications of macOS. The userInfo is an Object that contains the user information dictionary sent along with the notification.",
        "parameters": [
          {
            "name": "event",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "userInfo",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "postLocalNotification",
        "signature": "(event, userInfo)",
        "platforms": [
          "macOS"
        ],
        "description": "Posts event as native notifications of macOS. The userInfo is an Object that contains the user information dictionary sent along with the notification.",
        "parameters": [
          {
            "name": "event",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "userInfo",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "subscribeNotification",
        "signature": "(event, callback)",
        "platforms": [
          "macOS"
        ],
        "description": "Subscribes to native notifications of macOS, callback will be called with callback(event, userInfo) when the corresponding event happens. The userInfo is an Object that contains the user information dictionary sent along with the notification. The id of the subscriber is returned, which can be used to unsubscribe the event. Under the hood this API subscribes to NSDistributedNotificationCenter, example values of event are:",
        "parameters": [
          {
            "name": "event",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "unsubscribeNotification",
        "signature": "(id)",
        "platforms": [
          "macOS"
        ],
        "description": "Removes the subscriber with id.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "subscribeLocalNotification",
        "signature": "(event, callback)",
        "platforms": [
          "macOS"
        ],
        "description": "Same as subscribeNotification, but uses NSNotificationCenter for local defaults. This is necessary for events such as NSUserDefaultsDidChangeNotification",
        "parameters": [
          {
            "name": "event",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "unsubscribeLocalNotification",
        "signature": "(id)",
        "platforms": [
          "macOS"
        ],
        "description": "Same as unsubscribeNotification, but removes the subscriber from NSNotificationCenter.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getUserDefault",
        "signature": "(key, type)",
        "platforms": [
          "macOS"
        ],
        "description": "Get the value of key in system preferences. This API reads from NSUserDefaults on macOS, some popular key and types are:",
        "parameters": [
          {
            "name": "key",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "type",
            "type": "String",
            "description": "Can be `string`, `boolean`, `integer`, `float`, `double`,",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "isAeroGlassEnabled",
        "signature": "()",
        "platforms": [
          "Windows"
        ],
        "description": "This method returns true if DWM composition (Aero Glass) is enabled, and false otherwise. An example of using it to determine if you should create a transparent window or not (transparent windows won't work correctly when DWM composition is disabled):",
        "parameters": []
      },
      {
        "name": "getAccentColor",
        "signature": "()",
        "platforms": [
          "Windows"
        ],
        "description": "Returns the users current system wide color preference in the form of an RGBA hexadecimal string.",
        "parameters": []
      }
    ],
    "events": [
      {
        "name": "accent-color-changed",
        "platforms": [
          "Windows"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "newColor",
            "type": "String",
            "description": "The new RGBA color the user assigned to be there system",
            "possibleValues": []
          }
        ]
      }
    ]
  },
  {
    "name": "Tray",
    "description": "Add icons and context menus to the system's notification area.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "tray",
    "websiteUrl": "http://electron.atom.io/docs/api/tray",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/tray.md",
    "staticMethods": [],
    "constructorMethod": {
      "signature": "(image)",
      "parameters": [
        {
          "name": "image",
          "type": "NativeImage"
        }
      ]
    },
    "instanceName": "tray",
    "instanceMethods": [
      {
        "name": "destroy",
        "signature": "()",
        "platforms": [],
        "description": "Destroys the tray icon immediately.",
        "parameters": []
      },
      {
        "name": "setImage",
        "signature": "(image)",
        "platforms": [],
        "description": "Sets the image associated with this tray icon.",
        "parameters": [
          {
            "name": "image",
            "type": "NativeImage"
          }
        ]
      },
      {
        "name": "setPressedImage",
        "signature": "(image)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the image associated with this tray icon when pressed on macOS.",
        "parameters": [
          {
            "name": "image",
            "type": "NativeImage"
          }
        ]
      },
      {
        "name": "setToolTip",
        "signature": "(toolTip)",
        "platforms": [],
        "description": "Sets the hover text for this tray icon.",
        "parameters": [
          {
            "name": "toolTip",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "setTitle",
        "signature": "(title)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets the title displayed aside of the tray icon in the status bar.",
        "parameters": [
          {
            "name": "title",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "setHighlightMode",
        "signature": "(mode)",
        "platforms": [
          "macOS"
        ],
        "description": "Sets when the tray's icon background becomes highlighted (in blue). Note: You can use highlightMode with a BrowserWindow by toggling between 'never' and 'always' modes when the window visibility changes.",
        "parameters": [
          {
            "name": "mode",
            "type": "String",
            "description": "Highlight mode with one of the following values:",
            "possibleValues": [
              {
                "value": "selection",
                "description": "Highlight the tray icon when it is clicked and also when"
              },
              {
                "value": "always",
                "description": "Always highlight the tray icon."
              },
              {
                "value": "never",
                "description": "Never highlight the tray icon."
              }
            ]
          }
        ]
      },
      {
        "name": "displayBalloon",
        "signature": "(options)",
        "platforms": [
          "Windows"
        ],
        "description": "Displays a tray balloon.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "icon",
                "type": "NativeImage",
                "description": ""
              },
              {
                "name": "title",
                "type": "String",
                "description": ""
              },
              {
                "name": "content",
                "type": "String",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "popUpContextMenu",
        "signature": "([menu, position])",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Pops up the context menu of the tray icon. When menu is passed, the menu will be shown instead of the tray icon's context menu. The position is only available on Windows, and it is (0, 0) by default.",
        "parameters": [
          {
            "name": "menu",
            "type": "Menu",
            "description": "(optional)"
          },
          {
            "name": "position",
            "type": "Object",
            "description": "(optional) - The pop up position.",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "setContextMenu",
        "signature": "(menu)",
        "platforms": [],
        "description": "Sets the context menu for this icon.",
        "parameters": [
          {
            "name": "menu",
            "type": "Menu"
          }
        ]
      },
      {
        "name": "getBounds",
        "signature": "()",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "description": "Returns the bounds of this tray icon as Object.",
        "parameters": [
          {
            "name": "bounds",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      }
    ],
    "instanceProperties": [],
    "instanceEvents": [
      {
        "name": "click",
        "description": "Emitted when the tray icon is clicked.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "bounds",
            "type": "Object",
            "description": "macOS Windows - the bounds of tray icon.",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "right-click",
        "description": "Emitted when the tray icon is right clicked.",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "bounds",
            "type": "Object",
            "description": "the bounds of tray icon.",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "double-click",
        "description": "Emitted when the tray icon is double clicked.",
        "platforms": [
          "macOS",
          "Windows"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "bounds",
            "type": "Object",
            "description": "the bounds of tray icon",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "balloon-show",
        "description": "Emitted when the tray balloon shows.",
        "platforms": [
          "Windows"
        ],
        "returns": []
      },
      {
        "name": "balloon-click",
        "description": "Emitted when the tray balloon is clicked.",
        "platforms": [
          "Windows"
        ],
        "returns": []
      },
      {
        "name": "balloon-closed",
        "description": "Emitted when the tray balloon is closed because of timeout or user manually closes it.",
        "platforms": [
          "Windows"
        ],
        "returns": []
      },
      {
        "name": "drop",
        "description": "Emitted when any dragged items are dropped on the tray icon.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "drop-files",
        "description": "Emitted when dragged files are dropped in the tray icon.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "files",
            "type": "Array",
            "description": "the file path of dropped files."
          }
        ]
      },
      {
        "name": "drop-text",
        "description": "Emitted when dragged text is dropped in the tray icon.",
        "platforms": [
          "macOS"
        ],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "text",
            "type": "String",
            "description": "the dropped text string",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "drag-enter",
        "description": "Emitted when a drag operation enters the tray icon.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "drag-leave",
        "description": "Emitted when a drag operation exits the tray icon.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      },
      {
        "name": "drag-end",
        "description": "Emitted when a drag operation ends on the tray or ends at another location.",
        "platforms": [
          "macOS"
        ],
        "returns": []
      }
    ]
  },
  {
    "name": "webContents",
    "description": "Render and control web pages.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "web-contents",
    "websiteUrl": "http://electron.atom.io/docs/api/web-contents",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/web-contents.md",
    "methods": [
      {
        "name": "getAllWebContents",
        "signature": "()",
        "platforms": [],
        "description": "Returns an array of all WebContents instances. This will contain web contents for all windows, webviews, opened devtools, and devtools extension background pages.",
        "parameters": []
      },
      {
        "name": "getFocusedWebContents",
        "signature": "()",
        "platforms": [],
        "description": "Returns the web contents that is focused in this application, otherwise returns null.",
        "parameters": []
      },
      {
        "name": "fromId",
        "signature": "(id)",
        "platforms": [],
        "description": "Find a WebContents instance according to its ID.",
        "parameters": [
          {
            "name": "id",
            "type": "Integer"
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "WebContents",
    "description": "Render and control the contents of a BrowserWindow instance.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "web-contents",
    "websiteUrl": "http://electron.atom.io/docs/api/web-contents",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/web-contents.md",
    "staticMethods": [],
    "instanceName": "contents",
    "instanceMethods": [
      {
        "name": "loadURL",
        "signature": "(url[, options])",
        "platforms": [],
        "description": "Loads the url in the window. The url must contain the protocol prefix, e.g. the http:// or file://. If the load should bypass http cache then use the pragma header to achieve it.",
        "parameters": [
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "httpReferrer",
                "type": "String",
                "description": "A HTTP Referrer url."
              },
              {
                "name": "userAgent",
                "type": "String",
                "description": "A user agent originating the request."
              },
              {
                "name": "extraHeaders",
                "type": "String",
                "description": "Extra headers separated by &quot;\\n&quot;"
              }
            ]
          }
        ]
      },
      {
        "name": "downloadURL",
        "signature": "(url)",
        "platforms": [],
        "description": "Initiates a download of the resource at url without navigating. The will-download event of session will be triggered.",
        "parameters": [
          {
            "name": "url",
            "type": "URL"
          }
        ]
      },
      {
        "name": "getURL",
        "signature": "()",
        "platforms": [],
        "description": "Returns URL of the current web page.",
        "parameters": []
      },
      {
        "name": "getTitle",
        "signature": "()",
        "platforms": [],
        "description": "Returns the title of the current web page.",
        "parameters": []
      },
      {
        "name": "isDestroyed",
        "signature": "()",
        "platforms": [],
        "description": "Returns a Boolean, whether the web page is destroyed.",
        "parameters": []
      },
      {
        "name": "isFocused",
        "signature": "()",
        "platforms": [],
        "description": "Returns a Boolean, whether the web page is focused.",
        "parameters": []
      },
      {
        "name": "isLoading",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether web page is still loading resources.",
        "parameters": []
      },
      {
        "name": "isLoadingMainFrame",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the main frame (and not just iframes or frames within it) is still loading.",
        "parameters": []
      },
      {
        "name": "isWaitingForResponse",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the web page is waiting for a first-response from the main resource of the page.",
        "parameters": []
      },
      {
        "name": "stop",
        "signature": "()",
        "platforms": [],
        "description": "Stops any pending navigation.",
        "parameters": []
      },
      {
        "name": "reload",
        "signature": "()",
        "platforms": [],
        "description": "Reloads the current web page.",
        "parameters": []
      },
      {
        "name": "reloadIgnoringCache",
        "signature": "()",
        "platforms": [],
        "description": "Reloads current page and ignores cache.",
        "parameters": []
      },
      {
        "name": "canGoBack",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the browser can go back to previous web page.",
        "parameters": []
      },
      {
        "name": "canGoForward",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the browser can go forward to next web page.",
        "parameters": []
      },
      {
        "name": "canGoToOffset",
        "signature": "(offset)",
        "platforms": [],
        "description": "Returns whether the web page can go to offset.",
        "parameters": [
          {
            "name": "offset",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "clearHistory",
        "signature": "()",
        "platforms": [],
        "description": "Clears the navigation history.",
        "parameters": []
      },
      {
        "name": "goBack",
        "signature": "()",
        "platforms": [],
        "description": "Makes the browser go back a web page.",
        "parameters": []
      },
      {
        "name": "goForward",
        "signature": "()",
        "platforms": [],
        "description": "Makes the browser go forward a web page.",
        "parameters": []
      },
      {
        "name": "goToIndex",
        "signature": "(index)",
        "platforms": [],
        "description": "Navigates browser to the specified absolute web page index.",
        "parameters": [
          {
            "name": "index",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "goToOffset",
        "signature": "(offset)",
        "platforms": [],
        "description": "Navigates to the specified offset from the \"current entry\".",
        "parameters": [
          {
            "name": "offset",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "isCrashed",
        "signature": "()",
        "platforms": [],
        "description": "Whether the renderer process has crashed.",
        "parameters": []
      },
      {
        "name": "setUserAgent",
        "signature": "(userAgent)",
        "platforms": [],
        "description": "Overrides the user agent for this web page.",
        "parameters": [
          {
            "name": "userAgent",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getUserAgent",
        "signature": "()",
        "platforms": [],
        "description": "Returns a String representing the user agent for this web page.",
        "parameters": []
      },
      {
        "name": "insertCSS",
        "signature": "(css)",
        "platforms": [],
        "description": "Injects CSS into the current web page.",
        "parameters": [
          {
            "name": "css",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "executeJavaScript",
        "signature": "(code[, userGesture, callback])",
        "platforms": [],
        "description": "Evaluates code in page. In the browser window some HTML APIs like requestFullScreen can only be invoked by a gesture from the user. Setting userGesture to true will remove this limitation.",
        "parameters": [
          {
            "name": "code",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "userGesture",
            "type": "Boolean",
            "description": "(optional)"
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "(optional) - Called after script has been executed."
          }
        ]
      },
      {
        "name": "setAudioMuted",
        "signature": "(muted)",
        "platforms": [],
        "description": "Mute the audio on the current web page.",
        "parameters": [
          {
            "name": "muted",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "isAudioMuted",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether this page has been muted.",
        "parameters": []
      },
      {
        "name": "setZoomFactor",
        "signature": "(factor)",
        "platforms": [],
        "description": "Changes the zoom factor to the specified factor. Zoom factor is zoom percent divided by 100, so 300% = 3.0.",
        "parameters": [
          {
            "name": "factor",
            "type": "Number",
            "description": "Zoom factor."
          }
        ]
      },
      {
        "name": "getZoomFactor",
        "signature": "(callback)",
        "platforms": [],
        "description": "Sends a request to get current zoom factor, the callback will be called with callback(zoomFactor).",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "setZoomLevel",
        "signature": "(level)",
        "platforms": [],
        "description": "Changes the zoom level to the specified level. The original size is 0 and each increment above or below represents zooming 20% larger or smaller to default limits of 300% and 50% of original size, respectively.",
        "parameters": [
          {
            "name": "level",
            "type": "Number",
            "description": "Zoom level"
          }
        ]
      },
      {
        "name": "getZoomLevel",
        "signature": "(callback)",
        "platforms": [],
        "description": "Sends a request to get current zoom level, the callback will be called with callback(zoomLevel).",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "setZoomLevelLimits",
        "signature": "(minimumLevel, maximumLevel)",
        "platforms": [],
        "description": "Sets the maximum and minimum zoom level.",
        "parameters": [
          {
            "name": "minimumLevel",
            "type": "Number"
          },
          {
            "name": "maximumLevel",
            "type": "Number"
          }
        ]
      },
      {
        "name": "undo",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command undo in web page.",
        "parameters": []
      },
      {
        "name": "redo",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command redo in web page.",
        "parameters": []
      },
      {
        "name": "cut",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command cut in web page.",
        "parameters": []
      },
      {
        "name": "copy",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command copy in web page.",
        "parameters": []
      },
      {
        "name": "copyImageAt",
        "signature": "(x, y)",
        "platforms": [],
        "description": "Copy the image at the given position to the clipboard.",
        "parameters": [
          {
            "name": "x",
            "type": "Integer"
          },
          {
            "name": "y",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "paste",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command paste in web page.",
        "parameters": []
      },
      {
        "name": "pasteAndMatchStyle",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command pasteAndMatchStyle in web page.",
        "parameters": []
      },
      {
        "name": "delete",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command delete in web page.",
        "parameters": []
      },
      {
        "name": "selectAll",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command selectAll in web page.",
        "parameters": []
      },
      {
        "name": "unselect",
        "signature": "()",
        "platforms": [],
        "description": "Executes the editing command unselect in web page.",
        "parameters": []
      },
      {
        "name": "replace",
        "signature": "(text)",
        "platforms": [],
        "description": "Executes the editing command replace in web page.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "replaceMisspelling",
        "signature": "(text)",
        "platforms": [],
        "description": "Executes the editing command replaceMisspelling in web page.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "insertText",
        "signature": "(text)",
        "platforms": [],
        "description": "Inserts text to the focused element.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "findInPage",
        "signature": "(text[, options])",
        "platforms": [],
        "description": "Starts a request to find all matches for the text in the web page and returns an Integer representing the request id used for the request. The result of the request can be obtained by subscribing to found-in-page event.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "description": "Content to be searched, must not be empty.",
            "possibleValues": []
          },
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "forward",
                "type": "Boolean",
                "description": "Whether to search forward or backward, defaults to <code>true</code>."
              },
              {
                "name": "findNext",
                "type": "Boolean",
                "description": "Whether the operation is first request or a follow up,"
              },
              {
                "name": "matchCase",
                "type": "Boolean",
                "description": "Whether search should be case-sensitive,"
              },
              {
                "name": "wordStart",
                "type": "Boolean",
                "description": "Whether to look only at the start of words."
              },
              {
                "name": "medialCapitalAsWordStart",
                "type": "Boolean",
                "description": "When combined with <code>wordStart</code>,"
              }
            ]
          }
        ]
      },
      {
        "name": "stopFindInPage",
        "signature": "(action)",
        "platforms": [],
        "description": "Stops any findInPage request for the webContents with the provided action.",
        "parameters": [
          {
            "name": "action",
            "type": "String",
            "description": "Specifies the action to take place when ending",
            "possibleValues": [
              {
                "value": "clearSelection",
                "description": "Clear the selection."
              },
              {
                "value": "keepSelection",
                "description": "Translate the selection into a normal selection."
              },
              {
                "value": "activateSelection",
                "description": "Focus and click the selection node."
              }
            ]
          }
        ]
      },
      {
        "name": "capturePage",
        "signature": "([rect, ]callback)",
        "platforms": [],
        "description": "Captures a snapshot of the page within rect. Upon completion callback will be called with callback(image). The image is an instance of NativeImage that stores data of the snapshot. Omitting rect will capture the whole visible page.",
        "parameters": [
          {
            "name": "rect",
            "type": "Object",
            "description": "(optional) - The area of the page to be captured",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "y",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "hasServiceWorker",
        "signature": "(callback)",
        "platforms": [],
        "description": "Checks if any ServiceWorker is registered and returns a boolean as response to callback.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "unregisterServiceWorker",
        "signature": "(callback)",
        "platforms": [],
        "description": "Unregisters any ServiceWorker if present and returns a boolean as response to callback when the JS promise is fulfilled or false when the JS promise is rejected.",
        "parameters": [
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "print",
        "signature": "([options])",
        "platforms": [],
        "description": "Prints window's web page. When silent is set to true, Electron will pick up system's default printer and default settings for printing. Calling window.print() in web page is equivalent to calling webContents.print({silent: false, printBackground: false}). Use page-break-before: always; CSS style to force to print to a new page.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "silent",
                "type": "Boolean",
                "description": "Don&apos;t ask user for print settings. Default is <code>false</code>."
              },
              {
                "name": "printBackground",
                "type": "Boolean",
                "description": "Also prints the background color and image of"
              }
            ]
          }
        ]
      },
      {
        "name": "printToPDF",
        "signature": "(options, callback)",
        "platforms": [],
        "description": "Prints window's web page as PDF with Chromium's preview printing custom settings. The callback will be called with callback(error, data) on completion. The data is a Buffer that contains the generated PDF data. By default, an empty options will be regarded as: Use page-break-before: always; CSS style to force to print to a new page. An example of webContents.printToPDF:",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "marginsType",
                "type": "Integer",
                "description": "Specifies the type of margins to use. Uses 0 for"
              },
              {
                "name": "pageSize",
                "type": "String",
                "description": "Specify page size of the generated PDF. Can be <code>A3</code>,"
              },
              {
                "name": "printBackground",
                "type": "Boolean",
                "description": "Whether to print CSS backgrounds."
              },
              {
                "name": "printSelectionOnly",
                "type": "Boolean",
                "description": "Whether to print selection only."
              },
              {
                "name": "landscape",
                "type": "Boolean",
                "description": "<code>true</code> for landscape, <code>false</code> for portrait."
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "addWorkSpace",
        "signature": "(path)",
        "platforms": [],
        "description": "Adds the specified path to DevTools workspace. Must be used after DevTools creation:",
        "parameters": [
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "removeWorkSpace",
        "signature": "(path)",
        "platforms": [],
        "description": "Removes the specified path from DevTools workspace.",
        "parameters": [
          {
            "name": "path",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "openDevTools",
        "signature": "([options])",
        "platforms": [],
        "description": "Opens the devtools.",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "description": "(optional)",
            "properties": [
              {
                "name": "mode",
                "type": "String",
                "description": "Opens the devtools with specified dock state, can be"
              }
            ]
          }
        ]
      },
      {
        "name": "closeDevTools",
        "signature": "()",
        "platforms": [],
        "description": "Closes the devtools.",
        "parameters": []
      },
      {
        "name": "isDevToolsOpened",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the devtools is opened.",
        "parameters": []
      },
      {
        "name": "isDevToolsFocused",
        "signature": "()",
        "platforms": [],
        "description": "Returns whether the devtools view is focused .",
        "parameters": []
      },
      {
        "name": "toggleDevTools",
        "signature": "()",
        "platforms": [],
        "description": "Toggles the developer tools.",
        "parameters": []
      },
      {
        "name": "inspectElement",
        "signature": "(x, y)",
        "platforms": [],
        "description": "Starts inspecting element at position (x, y).",
        "parameters": [
          {
            "name": "x",
            "type": "Integer"
          },
          {
            "name": "y",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "inspectServiceWorker",
        "signature": "()",
        "platforms": [],
        "description": "Opens the developer tools for the service worker context.",
        "parameters": []
      },
      {
        "name": "send",
        "signature": "(channel[, arg1][, arg2][, ...])",
        "platforms": [],
        "description": "Send an asynchronous message to renderer process via channel, you can also send arbitrary arguments. Arguments will be serialized in JSON internally and hence no functions or prototype chain will be included. The renderer process can handle the message by listening to channel with the ipcRenderer module. An example of sending messages from the main process to the renderer process:",
        "parameters": [
          {
            "name": "channel",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "enableDeviceEmulation",
        "signature": "(parameters)",
        "platforms": [],
        "description": "Enable device emulation with the given parameters.",
        "parameters": [
          {
            "name": "parameters",
            "type": "Object",
            "properties": [
              {
                "name": "screenPosition",
                "type": "String",
                "description": "Specify the screen type to emulate"
              },
              {
                "name": "desktop",
                "type": "String",
                "description": "Desktop screen type"
              },
              {
                "name": "mobile",
                "type": "String",
                "description": "Mobile screen type"
              },
              {
                "name": "screenSize",
                "type": "Object",
                "description": "Set the emulated screen size (screenPosition == mobile)"
              },
              {
                "name": "width",
                "type": "Integer",
                "description": "Set the emulated screen width"
              },
              {
                "name": "height",
                "type": "Integer",
                "description": "Set the emulated screen height"
              },
              {
                "name": "viewPosition",
                "type": "Object",
                "description": "Position the view on the screen"
              },
              {
                "name": "x",
                "type": "Integer",
                "description": "Set the x axis offset from top left corner"
              },
              {
                "name": "y",
                "type": "Integer",
                "description": "Set the y axis offset from top left corner"
              },
              {
                "name": "deviceScaleFactor",
                "type": "Integer",
                "description": "Set the device scale factor (if zero defaults to"
              },
              {
                "name": "viewSize",
                "type": "Object",
                "description": "Set the emulated view size (empty means no override)"
              },
              {
                "name": "width",
                "type": "Integer",
                "description": "Set the emulated view width"
              },
              {
                "name": "height",
                "type": "Integer",
                "description": "Set the emulated view height"
              },
              {
                "name": "fitToView",
                "type": "Boolean",
                "description": "Whether emulated view should be scaled down if"
              },
              {
                "name": "offset",
                "type": "Object",
                "description": "Offset of the emulated view inside available space (not in"
              },
              {
                "name": "x",
                "type": "Float",
                "description": "Set the x axis offset from top left corner"
              },
              {
                "name": "y",
                "type": "Float",
                "description": "Set the y axis offset from top left corner"
              },
              {
                "name": "scale",
                "type": "Float",
                "description": "Scale of emulated view inside available space (not in fit to"
              }
            ]
          }
        ]
      },
      {
        "name": "disableDeviceEmulation",
        "signature": "()",
        "platforms": [],
        "description": "Disable device emulation enabled by webContents.enableDeviceEmulation.",
        "parameters": []
      },
      {
        "name": "sendInputEvent",
        "signature": "(event)",
        "platforms": [],
        "description": "Sends an input event to the page. For keyboard events, the event object also have following properties: For mouse events, the event object also have following properties: For the mouseWheel event, the event object also have following properties:",
        "parameters": [
          {
            "name": "event",
            "type": "Object",
            "properties": [
              {
                "name": "type",
                "type": "String",
                "description": " (<strong>required</strong>) - The type of the event, can be <code>mouseDown</code>,"
              },
              {
                "name": "modifiers",
                "type": "Array",
                "description": "An array of modifiers of the event, can"
              }
            ]
          }
        ]
      },
      {
        "name": "beginFrameSubscription",
        "signature": "([onlyDirty ,]callback)",
        "platforms": [],
        "description": "Begin subscribing for presentation events and captured frames, the callback will be called with callback(frameBuffer, dirtyRect) when there is a presentation event. The frameBuffer is a Buffer that contains raw pixel data. On most machines, the pixel data is effectively stored in 32bit BGRA format, but the actual representation depends on the endianness of the processor (most modern processors are little-endian, on machines with big-endian processors the data is in 32bit ARGB format). The dirtyRect is an object with x, y, width, height properties that describes which part of the page was repainted. If onlyDirty is set to true, frameBuffer will only contain the repainted area. onlyDirty defaults to false.",
        "parameters": [
          {
            "name": "onlyDirty",
            "type": "Boolean",
            "description": "(optional) - Defaults to `false`"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "endFrameSubscription",
        "signature": "()",
        "platforms": [],
        "description": "End subscribing for frame presentation events.",
        "parameters": []
      },
      {
        "name": "startDrag",
        "signature": "(item)",
        "platforms": [],
        "description": "Sets the item as dragging item for current drag-drop operation, file is the absolute path of the file to be dragged, and icon is the image showing under the cursor when dragging.",
        "parameters": [
          {
            "name": "item",
            "type": "object"
          }
        ]
      },
      {
        "name": "savePage",
        "signature": "(fullPath, saveType, callback)",
        "platforms": [],
        "description": "Returns true if the process of saving page has been initiated successfully.",
        "parameters": [
          {
            "name": "fullPath",
            "type": "String",
            "description": "The full file path.",
            "possibleValues": []
          },
          {
            "name": "saveType",
            "type": "String",
            "description": "Specify the save type.",
            "possibleValues": [
              {
                "value": "HTMLOnly",
                "description": "Save only the HTML of the page."
              },
              {
                "value": "HTMLComplete",
                "description": "Save complete-html page."
              },
              {
                "value": "MHTML",
                "description": "Save complete-html page as MHTML."
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "`(error) => {}`."
          }
        ]
      },
      {
        "name": "showDefinitionForSelection",
        "signature": "()",
        "platforms": [
          "macOS"
        ],
        "description": "Shows pop-up dictionary that searches the selected word on the page.",
        "parameters": []
      },
      {
        "name": "isOffscreen",
        "signature": "()",
        "platforms": [],
        "description": "Indicates whether offscreen rendering is enabled.",
        "parameters": []
      },
      {
        "name": "startPainting",
        "signature": "()",
        "platforms": [],
        "description": "If offscreen rendering is enabled and not painting, start painting.",
        "parameters": []
      },
      {
        "name": "stopPainting",
        "signature": "()",
        "platforms": [],
        "description": "If offscreen rendering is enabled and painting, stop painting.",
        "parameters": []
      },
      {
        "name": "isPainting",
        "signature": "()",
        "platforms": [],
        "description": "If offscreen rendering is enabled returns whether it is currently painting.",
        "parameters": []
      },
      {
        "name": "setFrameRate",
        "signature": "(fps)",
        "platforms": [],
        "description": "If offscreen rendering is enabled sets the frame rate to the specified number. Only values between 1 and 60 are accepted.",
        "parameters": [
          {
            "name": "fps",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getFrameRate",
        "signature": "()",
        "platforms": [],
        "description": "If offscreen rendering is enabled returns the current frame rate.",
        "parameters": []
      },
      {
        "name": "invalidate",
        "signature": "()",
        "platforms": [],
        "description": "If offscreen rendering is enabled invalidates the frame and generates a new one through the 'paint' event.",
        "parameters": []
      }
    ],
    "instanceProperties": [
      {
        "name": "id",
        "description": "The unique ID of this WebContents."
      },
      {
        "name": "session",
        "description": "Returns the session object used by this webContents."
      },
      {
        "name": "hostWebContents",
        "description": "Returns the WebContents that might own this WebContents."
      },
      {
        "name": "devToolsWebContents",
        "description": "Get the WebContents of DevTools for this WebContents. Note: Users should never store this object because it may become null when the DevTools has been closed."
      },
      {
        "name": "debugger",
        "description": "Get the debugger instance for this webContents."
      }
    ],
    "instanceEvents": [
      {
        "name": "did-finish-load",
        "description": "Emitted when the navigation is done, i.e. the spinner of the tab has stopped spinning, and the onload event was dispatched.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "did-fail-load",
        "description": "This event is like did-finish-load but emitted when the load failed or was cancelled, e.g. window.stop() is invoked. The full list of error codes and their meaning is available here. Note that redirect responses will emit errorCode -3; you may want to ignore that error explicitly.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "errorCode",
            "type": "Integer"
          },
          {
            "name": "errorDescription",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "validatedURL",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "isMainFrame",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "did-frame-finish-load",
        "description": "Emitted when a frame has done navigation.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "isMainFrame",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "did-start-loading",
        "description": "Corresponds to the points in time when the spinner of the tab started spinning.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "did-stop-loading",
        "description": "Corresponds to the points in time when the spinner of the tab stopped spinning.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "did-get-response-details",
        "description": "Emitted when details regarding a requested resource are available. status indicates the socket connection to download the resource.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "status",
            "type": "Boolean"
          },
          {
            "name": "newURL",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "originalURL",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "httpResponseCode",
            "type": "Integer"
          },
          {
            "name": "requestMethod",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "referrer",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "headers",
            "type": "Object",
            "properties": []
          },
          {
            "name": "resourceType",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "did-get-redirect-request",
        "description": "Emitted when a redirect is received while requesting a resource.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "oldURL",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "newURL",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "isMainFrame",
            "type": "Boolean"
          },
          {
            "name": "httpResponseCode",
            "type": "Integer"
          },
          {
            "name": "requestMethod",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "referrer",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "headers",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "dom-ready",
        "description": "Emitted when the document in the given frame is loaded.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          }
        ]
      },
      {
        "name": "page-favicon-updated",
        "description": "Emitted when page receives favicon urls.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "favicons",
            "type": "Array",
            "description": "Array of URLs"
          }
        ]
      },
      {
        "name": "new-window",
        "description": "Emitted when the page requests to open a new window for a url. It could be requested by window.open or an external link like <a target='_blank'>. By default a new BrowserWindow will be created for the url. Calling event.preventDefault() will prevent creating new windows.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "frameName",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "disposition",
            "type": "String",
            "description": "Can be `default`, `foreground-tab`, `background-tab`,",
            "possibleValues": []
          },
          {
            "name": "options",
            "type": "Object",
            "description": "The options which will be used for creating the new",
            "properties": []
          }
        ]
      },
      {
        "name": "will-navigate",
        "description": "Emitted when a user or the page wants to start navigation. It can happen when the window.location object is changed or a user clicks a link in the page. This event will not emit when the navigation is started programmatically with APIs like webContents.loadURL and webContents.back. It is also not emitted for in-page navigations, such as clicking anchor links or updating the window.location.hash. Use did-navigate-in-page event for this purpose. Calling event.preventDefault() will prevent the navigation.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "did-navigate",
        "description": "Emitted when a navigation is done. This event is not emitted for in-page navigations, such as clicking anchor links or updating the window.location.hash. Use did-navigate-in-page event for this purpose.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "did-navigate-in-page",
        "description": "Emitted when an in-page navigation happened. When in-page navigation happens, the page URL changes but does not cause navigation outside of the page. Examples of this occurring are when anchor links are clicked or when the DOM hashchange event is triggered.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "isMainFrame",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "crashed",
        "description": "Emitted when the renderer process crashes or is killed.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "killed",
            "type": "Boolean"
          }
        ]
      },
      {
        "name": "plugin-crashed",
        "description": "Emitted when a plugin process has crashed.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "version",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "destroyed",
        "description": "Emitted when webContents is destroyed.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "devtools-opened",
        "description": "Emitted when DevTools is opened.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "devtools-closed",
        "description": "Emitted when DevTools is closed.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "devtools-focused",
        "description": "Emitted when DevTools is focused / opened.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "certificate-error",
        "description": "Emitted when failed to verify the certificate for url. The usage is the same with the certificate-error event of app.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "error",
            "type": "String",
            "description": "The error code",
            "possibleValues": []
          },
          {
            "name": "certificate",
            "type": "Object",
            "properties": [
              {
                "name": "data",
                "type": "String",
                "description": "PEM encoded data"
              },
              {
                "name": "issuerName",
                "type": "String",
                "description": "Issuer&apos;s Common Name"
              },
              {
                "name": "subjectName",
                "type": "String",
                "description": "Subject&apos;s Common Name"
              },
              {
                "name": "serialNumber",
                "type": "String",
                "description": "Hex value represented string"
              },
              {
                "name": "validStart",
                "type": "Integer",
                "description": "Start date of the certificate being valid in seconds"
              },
              {
                "name": "validExpiry",
                "type": "Integer",
                "description": "End date of the certificate being valid in seconds"
              },
              {
                "name": "fingerprint",
                "type": "String",
                "description": "Fingerprint of the certificate"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "select-client-certificate",
        "description": "Emitted when a client certificate is requested. The usage is the same with the select-client-certificate event of app.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "URL"
          },
          {
            "name": "certificateList",
            "type": "[Objects]"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "login",
        "description": "Emitted when webContents wants to do basic auth. The usage is the same with the login event of app.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "request",
            "type": "Object",
            "properties": [
              {
                "name": "method",
                "type": "String",
                "description": ""
              },
              {
                "name": "url",
                "type": "URL",
                "description": ""
              },
              {
                "name": "referrer",
                "type": "URL",
                "description": ""
              }
            ]
          },
          {
            "name": "authInfo",
            "type": "Object",
            "properties": [
              {
                "name": "isProxy",
                "type": "Boolean",
                "description": ""
              },
              {
                "name": "scheme",
                "type": "String",
                "description": ""
              },
              {
                "name": "host",
                "type": "String",
                "description": ""
              },
              {
                "name": "port",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "realm",
                "type": "String",
                "description": ""
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "found-in-page",
        "description": "Emitted when a result is available for webContents.findInPage request.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "result",
            "type": "Object",
            "properties": [
              {
                "name": "requestId",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "activeMatchOrdinal",
                "type": "Integer",
                "description": "Position of the active match."
              },
              {
                "name": "matches",
                "type": "Integer",
                "description": "Number of Matches."
              },
              {
                "name": "selectionArea",
                "type": "Object",
                "description": "Coordinates of first match region."
              }
            ]
          }
        ]
      },
      {
        "name": "media-started-playing",
        "description": "Emitted when media starts playing.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "media-paused",
        "description": "Emitted when media is paused or done playing.",
        "platforms": [],
        "returns": []
      },
      {
        "name": "did-change-theme-color",
        "description": "Emitted when a page's theme color changes. This is usually due to encountering a meta tag:",
        "platforms": [],
        "returns": []
      },
      {
        "name": "update-target-url",
        "description": "Emitted when mouse moves over a link or the keyboard moves the focus to a link.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "url",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "cursor-changed",
        "description": "Emitted when the cursor's type changes. The type parameter can be default, crosshair, pointer, text, wait, help, e-resize, n-resize, ne-resize, nw-resize, s-resize, se-resize, sw-resize, w-resize, ns-resize, ew-resize, nesw-resize, nwse-resize, col-resize, row-resize, m-panning, e-panning, n-panning, ne-panning, nw-panning, s-panning, se-panning, sw-panning, w-panning, move, vertical-text, cell, context-menu, alias, progress, nodrop, copy, none, not-allowed, zoom-in, zoom-out, grab, grabbing, custom. If the type parameter is custom, the image parameter will hold the custom cursor image in a NativeImage, and scale, size and hotspot will hold additional information about the custom cursor.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "type",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "image",
            "type": "NativeImage",
            "description": "(optional)"
          },
          {
            "name": "scale",
            "type": "Float",
            "description": "(optional) - scaling factor for the custom cursor"
          },
          {
            "name": "size",
            "type": "Object",
            "description": "(optional) - the size of the `image`",
            "properties": [
              {
                "name": "width",
                "type": "Integer",
                "description": ""
              },
              {
                "name": "height",
                "type": "Integer",
                "description": ""
              }
            ]
          },
          {
            "name": "hotspot",
            "type": "Object",
            "description": "(optional) - coordinates of the custom cursor's hotspot",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": "x coordinate"
              },
              {
                "name": "y",
                "type": "Integer",
                "description": "y coordinate"
              }
            ]
          }
        ]
      },
      {
        "name": "context-menu",
        "description": "The mediaFlags is an object with the following properties: The editFlags is an object with the following properties: Emitted when there is a new context menu that needs to be handled.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "params",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": "x coordinate"
              },
              {
                "name": "y",
                "type": "Integer",
                "description": "y coordinate"
              },
              {
                "name": "linkURL",
                "type": "String",
                "description": "URL of the link that encloses the node the context menu"
              },
              {
                "name": "linkText",
                "type": "String",
                "description": "Text associated with the link. May be an empty"
              },
              {
                "name": "pageURL",
                "type": "String",
                "description": "URL of the top level page that the context menu was"
              },
              {
                "name": "frameURL",
                "type": "String",
                "description": "URL of the subframe that the context menu was invoked"
              },
              {
                "name": "srcURL",
                "type": "String",
                "description": "Source URL for the element that the context menu"
              },
              {
                "name": "mediaType",
                "type": "String",
                "description": "Type of the node the context menu was invoked on. Can"
              },
              {
                "name": "hasImageContents",
                "type": "Boolean",
                "description": "Whether the context menu was invoked on an image"
              },
              {
                "name": "isEditable",
                "type": "Boolean",
                "description": "Whether the context is editable."
              },
              {
                "name": "selectionText",
                "type": "String",
                "description": "Text of the selection that the context menu was"
              },
              {
                "name": "titleText",
                "type": "String",
                "description": "Title or alt text of the selection that the context"
              },
              {
                "name": "misspelledWord",
                "type": "String",
                "description": "The misspelled word under the cursor, if any."
              },
              {
                "name": "frameCharset",
                "type": "String",
                "description": "The character encoding of the frame on which the"
              },
              {
                "name": "inputFieldType",
                "type": "String",
                "description": "If the context menu was invoked on an input"
              },
              {
                "name": "menuSourceType",
                "type": "String",
                "description": "Input source that invoked the context menu."
              },
              {
                "name": "mediaFlags",
                "type": "Object",
                "description": "The flags for the media element the context menu was"
              },
              {
                "name": "editFlags",
                "type": "Object",
                "description": "These flags indicate whether the renderer believes it is"
              }
            ]
          }
        ]
      },
      {
        "name": "select-bluetooth-device",
        "description": "Emitted when bluetooth device needs to be selected on call to navigator.bluetooth.requestDevice. To use navigator.bluetooth api webBluetooth should be enabled.  If event.preventDefault is not called, first available device will be selected. callback should be called with deviceId to be selected, passing empty string to callback will cancel the request.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "devices",
            "type": "[Objects]"
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      },
      {
        "name": "paint",
        "description": "Emitted when a new frame is generated. Only the dirty area is passed in the buffer.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "dirtyRect",
            "type": "Object",
            "properties": [
              {
                "name": "x",
                "type": "Integer",
                "description": "The x coordinate on the image."
              },
              {
                "name": "y",
                "type": "Integer",
                "description": "The y coordinate on the image."
              },
              {
                "name": "width",
                "type": "Integer",
                "description": "The width of the dirty area."
              },
              {
                "name": "height",
                "type": "Integer",
                "description": "The height of the dirty area."
              }
            ]
          },
          {
            "name": "image",
            "type": "NativeImage",
            "description": "The image data of the whole frame."
          }
        ]
      }
    ]
  },
  {
    "name": "Debugger",
    "description": "An alternate transport for Chrome's remote debugging protocol.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Class",
    "slug": "debugger",
    "websiteUrl": "http://electron.atom.io/docs/api/debugger",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/debugger.md",
    "staticMethods": [],
    "instanceName": "debugger",
    "instanceMethods": [
      {
        "name": "attach",
        "signature": "([protocolVersion])",
        "platforms": [],
        "description": "Attaches the debugger to the webContents.",
        "parameters": [
          {
            "name": "protocolVersion",
            "type": "String",
            "description": "(optional) - Requested debugging protocol version.",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "isAttached",
        "signature": "()",
        "platforms": [],
        "description": "Returns a boolean indicating whether a debugger is attached to the webContents.",
        "parameters": []
      },
      {
        "name": "detach",
        "signature": "()",
        "platforms": [],
        "description": "Detaches the debugger from the webContents.",
        "parameters": []
      },
      {
        "name": "sendCommand",
        "signature": "(method[, commandParams, callback])",
        "platforms": [],
        "description": "Send given command to the debugging target.",
        "parameters": [
          {
            "name": "method",
            "type": "String",
            "description": "Method name, should be one of the methods defined by the",
            "possibleValues": []
          },
          {
            "name": "commandParams",
            "type": "Object",
            "description": "(optional) - JSON object with request parameters.",
            "properties": []
          },
          {
            "name": "callback",
            "type": "Function",
            "description": "(optional) - Response"
          }
        ]
      }
    ],
    "instanceProperties": [],
    "instanceEvents": [
      {
        "name": "detach",
        "description": "Emitted when debugging session is terminated. This happens either when webContents is closed or devtools is invoked for the attached webContents.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "reason",
            "type": "String",
            "description": "Reason for detaching debugger.",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "message",
        "description": "Emitted whenever debugging target issues instrumentation event.",
        "platforms": [],
        "returns": [
          {
            "name": "event",
            "type": "Event"
          },
          {
            "name": "method",
            "type": "String",
            "description": "Method name.",
            "possibleValues": []
          },
          {
            "name": "params",
            "type": "Object",
            "description": "Event parameters defined by the 'parameters'",
            "properties": []
          }
        ]
      }
    ]
  },
  {
    "name": "process",
    "description": "Extensions to process object.",
    "process": {
      "main": true,
      "renderer": false
    },
    "type": "Module",
    "slug": "process",
    "websiteUrl": "http://electron.atom.io/docs/api/process",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/process.md",
    "methods": [
      {
        "name": "crash",
        "signature": "()",
        "platforms": [],
        "description": "Causes the main thread of the current process crash.",
        "parameters": []
      },
      {
        "name": "hang",
        "signature": "()",
        "platforms": [],
        "description": "Causes the main thread of the current process hang.",
        "parameters": []
      },
      {
        "name": "setFdLimit",
        "signature": "(maxDescriptors)",
        "platforms": [
          "macOS",
          "Linux"
        ],
        "description": "Sets the file descriptor soft limit to maxDescriptors or the OS hard limit, whichever is lower for the current process.",
        "parameters": [
          {
            "name": "maxDescriptors",
            "type": "Integer"
          }
        ]
      },
      {
        "name": "getProcessMemoryInfo",
        "signature": "()",
        "platforms": [],
        "description": "Returns an object giving memory usage statistics about the current process. Note that all statistics are reported in Kilobytes.",
        "parameters": [
          {
            "name": "workingSetSize",
            "type": "Integer",
            "description": "The amount of memory currently pinned to actual physical"
          },
          {
            "name": "peakWorkingSetSize",
            "type": "Integer",
            "description": "The maximum amount of memory that has ever been pinned"
          },
          {
            "name": "privateBytes",
            "type": "Integer",
            "description": "The amount of memory not shared by other processes, such as"
          },
          {
            "name": "sharedBytes",
            "type": "Integer",
            "description": "The amount of memory shared between processes, typically"
          }
        ]
      },
      {
        "name": "getSystemMemoryInfo",
        "signature": "()",
        "platforms": [],
        "description": "Returns an object giving memory usage statistics about the entire system. Note that all statistics are reported in Kilobytes.",
        "parameters": [
          {
            "name": "total",
            "type": "Integer",
            "description": "The total amount of physical memory in Kilobytes available to the"
          },
          {
            "name": "free",
            "type": "Integer",
            "description": "The total amount of memory not being used by applications or disk"
          },
          {
            "name": "swapTotal",
            "type": "Integer",
            "description": "The total amount of swap memory in Kilobytes available to the"
          },
          {
            "name": "swapFree",
            "type": "Integer",
            "description": "The free amount of swap memory in Kilobytes available to the"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "loaded",
        "description": "Emitted when Electron has loaded its internal initialization script and is beginning to load the web page or the main script. It can be used by the preload script to add removed Node global symbols back to the global scope when node integration is turned off:",
        "platforms": [],
        "returns": []
      }
    ]
  },
  {
    "name": "desktopCapturer",
    "description": "Access information about media sources that can be used to capture audio and\nvideo from the desktop using the navigator.webkitGetUserMedia API.",
    "process": {
      "main": false,
      "renderer": true
    },
    "type": "Module",
    "slug": "desktop-capturer",
    "websiteUrl": "http://electron.atom.io/docs/api/desktop-capturer",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/desktop-capturer.md",
    "methods": [
      {
        "name": "getSources",
        "signature": "(options, callback)",
        "platforms": [],
        "description": "Starts gathering information about all available desktop media sources, and calls callback(error, sources) when finished. sources is an array of Source objects, each Source represents a screen or an individual window that can be captured, and has the following properties:",
        "parameters": [
          {
            "name": "options",
            "type": "Object",
            "properties": [
              {
                "name": "types",
                "type": "Array",
                "description": "An array of String that lists the types of desktop sources"
              },
              {
                "name": "thumbnailSize",
                "type": "Object",
                "description": " (optional) - The suggested size that the media source"
              }
            ]
          },
          {
            "name": "callback",
            "type": "Function"
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "ipcRenderer",
    "description": "Communicate asynchronously from a renderer process to the main process.",
    "process": {
      "main": false,
      "renderer": true
    },
    "type": "Module",
    "slug": "ipc-renderer",
    "websiteUrl": "http://electron.atom.io/docs/api/ipc-renderer",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/ipc-renderer.md",
    "methods": [],
    "events": []
  },
  {
    "name": "remote",
    "description": "Use main process modules from the renderer process.",
    "process": {
      "main": false,
      "renderer": true
    },
    "type": "Module",
    "slug": "remote",
    "websiteUrl": "http://electron.atom.io/docs/api/remote",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/remote.md",
    "methods": [
      {
        "name": "require",
        "signature": "(module)",
        "platforms": [],
        "description": "Returns the object returned by require(module) in the main process.",
        "parameters": [
          {
            "name": "module",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "getCurrentWindow",
        "signature": "()",
        "platforms": [],
        "description": "Returns the BrowserWindow object to which this web page belongs.",
        "parameters": []
      },
      {
        "name": "getCurrentWebContents",
        "signature": "()",
        "platforms": [],
        "description": "Returns the WebContents object of this web page.",
        "parameters": []
      },
      {
        "name": "getGlobal",
        "signature": "(name)",
        "platforms": [],
        "description": "Returns the global variable of name (e.g. global[name]) in the main process.",
        "parameters": [
          {
            "name": "name",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ],
    "events": []
  },
  {
    "name": "webFrame",
    "description": "Customize the rendering of the current web page.",
    "process": {
      "main": false,
      "renderer": true
    },
    "type": "Module",
    "slug": "web-frame",
    "websiteUrl": "http://electron.atom.io/docs/api/web-frame",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/web-frame.md",
    "methods": [
      {
        "name": "setZoomFactor",
        "signature": "(factor)",
        "platforms": [],
        "description": "Changes the zoom factor to the specified factor. Zoom factor is zoom percent divided by 100, so 300% = 3.0.",
        "parameters": [
          {
            "name": "factor",
            "type": "Number",
            "description": "Zoom factor."
          }
        ]
      },
      {
        "name": "getZoomFactor",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current zoom factor.",
        "parameters": []
      },
      {
        "name": "setZoomLevel",
        "signature": "(level)",
        "platforms": [],
        "description": "Changes the zoom level to the specified level. The original size is 0 and each increment above or below represents zooming 20% larger or smaller to default limits of 300% and 50% of original size, respectively.",
        "parameters": [
          {
            "name": "level",
            "type": "Number",
            "description": "Zoom level"
          }
        ]
      },
      {
        "name": "getZoomLevel",
        "signature": "()",
        "platforms": [],
        "description": "Returns the current zoom level.",
        "parameters": []
      },
      {
        "name": "setZoomLevelLimits",
        "signature": "(minimumLevel, maximumLevel)",
        "platforms": [],
        "description": "Sets the maximum and minimum zoom level.",
        "parameters": [
          {
            "name": "minimumLevel",
            "type": "Number"
          },
          {
            "name": "maximumLevel",
            "type": "Number"
          }
        ]
      },
      {
        "name": "setSpellCheckProvider",
        "signature": "(language, autoCorrectWord, provider)",
        "platforms": [],
        "description": "Sets a provider for spell checking in input fields and text areas. The provider must be an object that has a spellCheck method that returns whether the word passed is correctly spelled. An example of using node-spellchecker as provider:",
        "parameters": [
          {
            "name": "language",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "autoCorrectWord",
            "type": "Boolean"
          },
          {
            "name": "provider",
            "type": "Object",
            "properties": []
          }
        ]
      },
      {
        "name": "registerURLSchemeAsSecure",
        "signature": "(scheme)",
        "platforms": [],
        "description": "Registers the scheme as secure scheme. Secure schemes do not trigger mixed content warnings. For example, https and data are secure schemes because they cannot be corrupted by active network attackers.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "registerURLSchemeAsBypassingCSP",
        "signature": "(scheme)",
        "platforms": [],
        "description": "Resources will be loaded from this scheme regardless of the current page's Content Security Policy.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "registerURLSchemeAsPrivileged",
        "signature": "(scheme)",
        "platforms": [],
        "description": "Registers the scheme as secure, bypasses content security policy for resources, allows registering ServiceWorker and supports fetch API.",
        "parameters": [
          {
            "name": "scheme",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "insertText",
        "signature": "(text)",
        "platforms": [],
        "description": "Inserts text to the focused element.",
        "parameters": [
          {
            "name": "text",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "executeJavaScript",
        "signature": "(code[, userGesture])",
        "platforms": [],
        "description": "Evaluates code in page. In the browser window some HTML APIs like requestFullScreen can only be invoked by a gesture from the user. Setting userGesture to true will remove this limitation.",
        "parameters": [
          {
            "name": "code",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "userGesture",
            "type": "Boolean",
            "description": "(optional) - Default is `false`."
          }
        ]
      },
      {
        "name": "getResourceUsage",
        "signature": "()",
        "platforms": [],
        "description": "Returns an object describing usage information of Blink's internal memory caches. This will generate:",
        "parameters": []
      },
      {
        "name": "clearCache",
        "signature": "()",
        "platforms": [],
        "description": "Attempts to free memory that is no longer being used (like images from a previous navigation). Note that blindly calling this method probably makes Electron slower since it will have to refill these emptied caches, you should only call it if an event in your app has occurred that makes you think your page is actually using less memory (i.e. you have navigated from a super heavy page to a mostly empty one, and intend to stay there).",
        "parameters": []
      }
    ],
    "events": []
  },
  {
    "name": "BrowserWindowProxy",
    "description": "Manipulate the child browser window",
    "process": {
      "main": false,
      "renderer": true
    },
    "type": "Class",
    "slug": "browser-window-proxy",
    "websiteUrl": "http://electron.atom.io/docs/api/browser-window-proxy",
    "repoUrl": "https://github.com/electron/electron/blob/v1.4.1/docs/api/browser-window-proxy.md",
    "staticMethods": [],
    "instanceName": "win",
    "instanceMethods": [
      {
        "name": "blur",
        "signature": "()",
        "platforms": [],
        "description": "Removes focus from the child window.",
        "parameters": []
      },
      {
        "name": "close",
        "signature": "()",
        "platforms": [],
        "description": "Forcefully closes the child window without calling its unload event.",
        "parameters": []
      },
      {
        "name": "eval",
        "signature": "(code)",
        "platforms": [],
        "description": "Evaluates the code in the child window.",
        "parameters": [
          {
            "name": "code",
            "type": "String",
            "possibleValues": []
          }
        ]
      },
      {
        "name": "focus",
        "signature": "()",
        "platforms": [],
        "description": "Focuses the child window (brings the window to front).",
        "parameters": []
      },
      {
        "name": "print",
        "signature": "()",
        "platforms": [],
        "description": "Invokes the print dialog on the child window.",
        "parameters": []
      },
      {
        "name": "postMessage",
        "signature": "(message, targetOrigin)",
        "platforms": [],
        "description": "Sends a message to the child window with the specified origin or * for no origin preference. In addition to these methods, the child window implements window.opener object with no properties and a single method.",
        "parameters": [
          {
            "name": "message",
            "type": "String",
            "possibleValues": []
          },
          {
            "name": "targetOrigin",
            "type": "String",
            "possibleValues": []
          }
        ]
      }
    ],
    "instanceProperties": [
      {
        "name": "closed",
        "description": "Set to true after the child window gets closed."
      }
    ],
    "instanceEvents": []
  }
]