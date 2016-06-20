FROM mdillon/postgis:9.5
MAINTAINER Jonathan Beezley <jonathan.beezley@kitware.com>

VOLUME ["/geonames"]

RUN  apt-get update && apt-get install -y wget unzip && rm -rf /var/lib/apt/lists/*
COPY build_geonames.sh /docker-entrypoint-initdb.d/z_build_geonames.sh
CMD ["-d", "geonames"]
