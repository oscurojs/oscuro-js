# Oscuro JS

![OscuroJS Logo](oscurojs-logo.svg)

A modern web frontend for each of your pretty applications, without the hastle
of having nine thousand chromium processes.

## The idea

The idea behind this project is to create a modern solution for the cross
platform user interface world, at the desktop. Currently, the cross platform
solutions are or either hard to build, or very heavy (Like running a few
electron processes).
In order to avoid this, all processes can be merged into one, leaving the
business of the app isolated completely from the presentation layer, like a
web page but for desktop.
With this, you can have your app written in whatever platform or language, and
just by passing messages through a socket you can make your UI dance.

The concept can be resumed with this simple example:
```
 [The Backend] C app
       |
       |- socket (Plain text or binary messages)
       |
       V
  [Oscuro JS] One electron instance
       |
 ______|________
|''''''''''''-ox|- Nice UI using web technologies    
| hello world!  |
|_______________|
```

# Oscuro Socket Protocol

The communication between both ends is implemented in plain text, to avoid
endianess problems and message packing problems. Commands are separated
by new line characters (`\n`) and parameters by spaces. Binary and text is
encoded in **base64** to make it newline safe.

The first word is always the command, and positionally, parameters are parsed
depending on the command (Example: `MKWIN` takes two numbers).

Example conversation `<` and `>` represent send and receive, they're not
included in real messages.
```
>MKWIN 800 600
<WIN 770d37a7c9624a0a09436689c13805f883800ff6
>SETTITLE 770d37a7c9624a0a09436689c13805f883800ff6 SGVsbG8gV29ybGQh
<OK SETTITLE 770d37a7c9624a0a09436689c13805f883800ff6
>CLOSEWIN 770d37a7c9624a0a09436689c13805f883800ff6
```
Notes: `770d37a7c9624a0a09436689c13805f883800ff6` is an arbitrary window ID
and `SGVsbG8gV29ybGQh` is `Hello World!` in base64.

The UI can pass messages as-is to the backend, there the implementation can
choose on how to encode messages (Protocol buffers, JSON, XML,
custom binary...).

# Contributing

Build scripts are bundled for Unix and Windows (build.sh and build.ps1).

**All Users**: Run `npm install` before anything to install electron.

**Windows Users**: You will need _java_ installed to run `cljs.jar` (Which
downloads automagically with `build.ps1`).
Also it is possible that the system prevents you from running Powershell scripts
from untrusted sources, you can disable that by running
`Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser` on your
powershell. See [About Execution Policies][about-ps1] for more information.

**Unix Users**: Clojure needs to be installed, as `clj` command is used.

<!-- Links -->
[about-ps1]: https://docs.microsoft.com/es-es/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6
