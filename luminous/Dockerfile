FROM searxng/searxng:latest

# Copy custom theme files
COPY files/templates/ /usr/local/searxng/searx/templates/
COPY files/static/ /usr/local/searxng/searx/static/
COPY files/config/settings.yml /etc/searxng/settings.yml

# Set proper permissions
RUN chown -R searxng:searxng /usr/local/searxng/searx/templates/ && \
    chown -R searxng:searxng /usr/local/searxng/searx/static/ && \
    chown searxng:searxng /etc/searxng/settings.yml

EXPOSE 8080

CMD ["/usr/local/searxng/dockerfiles/docker-entrypoint.sh"]
