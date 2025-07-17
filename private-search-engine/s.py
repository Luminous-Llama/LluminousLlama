import time
import webbrowser
import yaml
import os
import re

def get_port_from_compose():
    try:
        with open("docker-compose.yml", "r") as f:
            data = yaml.safe_load(f)
            ports = data["services"]["searxng"]["ports"]
            port = int(re.findall(r"(\d+):8080", ports[0])[0])
            return port
    except Exception as e:
        print(f"⚠️  Couldn't read port from docker-compose.yml: {e}")
        return 9999

def wait_and_open(port):
    print(f"⏳ Waiting for SearXNG to start on http://localhost:{port} ...")
    time.sleep(5)
    print("🌐 Opening in browser...")
    webbrowser.open(f"http://localhost:{port}")

if __name__ == "__main__":
    port = get_port_from_compose()
    wait_and_open(port)
