# Dev server mimicking GitHub Pages extensionless URLs: /veera -> veera.html
import http.server
import os
import socket
import sys


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        if not os.path.exists(p) and os.path.exists(p + ".html"):
            return p + ".html"
        return p


if __name__ == "__main__":
    bind = sys.argv[1] if len(sys.argv) > 1 else "127.0.0.1"
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 8080
    print(f"http://localhost:{port}", flush=True)
    if bind == "0.0.0.0":
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            try:
                s.connect(("192.0.2.1", 1))  # no packets sent; just picks the outbound interface
                print(f"http://{s.getsockname()[0]}:{port}", flush=True)
            except OSError:
                pass
    http.server.test(HandlerClass=Handler, port=port, bind=bind)
