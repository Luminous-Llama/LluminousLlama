How to Use
----------

1. Make sure you're on a Unix-based system (Linux, macOS, or WSL).(If ur on windows, just download oracle virtual box, and run a kali OS through it)
Just clone the repo, or even easier, make files with same names and copy paste the content. After ur done with downloading and setting it up, do the following:
2. Open a terminal and run the following:
   
   chmod +x script.sh
   ./script.sh

3. When prompted, enter your desired port number (e.g., 9999).
4. Your browser will launch with the search engine ready to use at:
   http://localhost:<your_port>

Optional:
- If prompted to install Docker or Python packages, the script will handle it automatically.

How to Stop or Remove the Setup
-------------------------------

To stop the search engine:

   docker-compose down

To remove everything (containers, images, network):

   docker-compose down --rmi all --volumes --remove-orphans

If you want to uninstall Docker completely:

Ubuntu/Debian:
   sudo apt remove docker docker-engine docker.io containerd runc
   sudo apt purge docker-ce
   sudo rm -rf /var/lib/docker

macOS (Homebrew):
   brew uninstall --cask docker

Note: Files created by Docker won't be deleted automatically. Run:
   sudo rm -rf ~/docker1 or your project directory

