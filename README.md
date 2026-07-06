# Website of Veepu

<https://veeramaria.fi>

## Development

Static site, no build step. Start the dev server:

```bash
make
```

Serves <http://localhost:8080> via `serve.py`, which mimics GitHub Pages
extensionless URLs (`/veera` → `veera.html`).

By default the server listens on 127.0.0.1 only. To make it reachable from
other devices on the network (e.g. a phone), bind to all interfaces:

```bash
make BIND=0.0.0.0
```