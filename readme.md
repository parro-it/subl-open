# subl-open

## Installation

```bash
npm install -g subl-open
```

## How it works

It simply create an http server that
for each request received span
a `subl req.url` process.

The server is listening on 31337 port on localhost.

This is really useful because allow me to put
link to this localhost server in my stacktraces
and I can open files in sublime simply clicking them.
Awesome!



## Usage

```bash
  subl-open --user=you --pwd=yourpassword
```

## License

The MIT License (MIT)
Copyright (c) 2015 Andrea Parodi



