#!/bin/bash

echo "🚀 SearXNG Setup Script"

# Ask for port
read -p "📦 Enter port to expose SearXNG on (default 9999): " PORT
PORT=${PORT:-9999}

# Install Docker
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    sudo apt update
    sudo apt install -y docker.io
    sudo systemctl enable --now docker
fi

# Install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "🔧 Installing Docker Compose..."
    sudo apt install -y docker-compose
fi

# Create docker-compose.yml
cat > docker-compose.yml <<EOF
services:
  searxng:
    image: searxng/searxng:latest
    ports:
      - "${PORT}:8080"
    restart: unless-stopped
EOF

# Pull latest image
echo "📥 Pulling SearXNG image..."
sudo docker-compose pull

# Start container
echo "🐋 Starting SearXNG..."
sudo docker-compose up -d

# Install Python & pip if needed
if ! command -v python3 &> /dev/null; then
    echo "🐍 Installing Python3..."
    sudo apt install -y python3
fi

if ! command -v pip3 &> /dev/null; then
    echo "📦 Installing pip3..."
    sudo apt install -y python3-pip
fi

# Install Python dependencies
pip3 install -r requirements.txt

# Run Python script
python3 s.py
