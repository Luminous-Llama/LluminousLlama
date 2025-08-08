🌟 Luminous Llama SearxNG Custom Theme
This repository contains the files and instructions to build a custom Docker image for SearxNG, featuring the "Luminous Llama" theme. This theme offers a unique visual experience for your privacy-focused metasearch engine.

✨ Features
Custom Design: A distinct visual style, "Luminous Llama," tailored for SearxNG.

Pre-configured Engines: Includes a selection of popular search engines like DuckDuckGo, Startpage, Bing, Google, Yandex, Yahoo, and Searx itself.

Privacy-Focused Settings: Debugging, stats, privacy policy, donation, and contact URLs are disabled by default for a more private experience.

Secure Setup: Includes a generated secret key for session security.

Organized Structure: Designed for easy integration with Docker.

🛠️ Prerequisites
Before you begin, ensure you have the following installed on your system:

Docker: For building and running the containerized SearxNG instance. You can download it from Docker's official website.

Git: (Optional, but recommended for cloning this repository).

🚀 Setup and Installation
Follow these steps to build and run your custom "Luminous Llama" SearxNG instance:

Step 1: Clone the Repository (or create the directory structure)
If you have cloned a repository containing these files, navigate to the luminous directory. If you are creating the project from scratch, ensure your directory structure matches the one described above.

Step 2: Ensure settings.yml is Correct
Make sure your files/config/settings.yml file is up-to-date with the correct configurations, including the themes section that defines "luminous-llama." The most recently provided settings.yml should work.

Step 3: Update Dockerfile
Ensure your Dockerfile correctly copies your theme files to the designated locations within the SearxNG application. Here's how it should look:

FROM docker.io/searxng/searxng:latest

# Copy your theme's HTML templates to the correct location
COPY files/templates/ /usr/local/searxng/searx/templates/

# Copy your theme's static assets (CSS, JS, images)
COPY files/static/ /usr/local/searxng/searx/static/

# Copy the corrected settings file
COPY files/config/settings.yml /etc/searxng/settings.yml

# Change ownership of the copied files to the searxng user
RUN chown -R searxng:searxng /usr/local/searxng/searx/templates/ && \
    chown -R searxng:searxng /usr/local/searxng/searx/static/ && \
    chown searxng:searxng /etc/searxng/settings.yml

# Default command to run when the container starts
CMD ["/usr/local/searxng/searxng-start.sh"]

Step 4: Build the Docker Image
Navigate to the luminous directory (where your Dockerfile is located) in your terminal and run the build command:

docker build -t luminous .

This command will create a Docker image named luminous with the tag latest.

Step 5: Clean Up Old Containers (Optional but Recommended)
If you have previously run containers with the same name, stop and remove them to avoid conflicts:

docker stop luminous
docker rm luminous

Step 6: Run the Docker Container
Now, run your custom SearxNG image as a Docker container. We'll map host port 9090 to the container's internal port 8080, as configured in your settings.yml:

docker run -d -p 9090:8080 --name luminous luminous

🌐 Accessing SearxNG
Once the container is running, you can access your "Luminous Llama" SearxNG instance by opening your web browser and navigating to:

http://localhost:9090 or http://0.0.0.0:9090

You should see your customized SearxNG interface!

⚠️ Troubleshooting
If you encounter issues, here are some common troubleshooting steps:

Container Exited Immediately:

Check container logs for errors: docker logs luminous

Look for ValidationException related to settings.yml. Ensure all paths and values in your settings.yml are correct and match the expected types (e.g., strings for URLs).

"Internal Server Error" or "Connection Refused":

Verify the container is running: docker ps

Ensure port mapping is correct (-p 9090:8080) and matches the port in settings.yml.

Check for any typos in file paths in your Dockerfile or settings.yml.

Theme Not Loading:

Double-check the path and assets entries in the themes section of your settings.yml to ensure they point to the correct locations within the container.

Make sure your theme files (HTML, CSS, JS, images) are actually present in the files/templates/luminous-llama and files/static/themes/luminous-llama directories on your host machine before building th
