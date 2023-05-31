from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        print(f"{self.client_address[0]} wrote:")

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    HOST, PORT = "localhost", 8086
    with TCPServer((HOST, PORT), TCPHandler) as server:
        print("Olá, cliente")
        server.serve_forever()
