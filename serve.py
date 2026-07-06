# Dev server mimicking GitHub Pages extensionless URLs: /veera -> veera.html
import http.server
import os


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        if not os.path.exists(p) and os.path.exists(p + ".html"):
            return p + ".html"
        return p


PORT = 8462

if __name__ == "__main__":
    print(f"http://localhost:{PORT}", flush=True)
    http.server.test(HandlerClass=Handler, port=PORT)
