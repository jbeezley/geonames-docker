Geonames docker service
=======================

This repository defines a docker container that serves the geonames
database as a postgis service.  There are two volumes defined by this
container:

* `/var/lib/postgresql/data` where the database is stored
* `/geonames` where temporary files are stored while populating the database

On first invocation (on a new database volume), the postgres database will
be initialized and the data downloaded and ingested.  This is a time consuming
process that should be completed prior to deployment.  The volume created by
this initial import can be backed up and migrated as described in Docker's
[documentation](https://docs.docker.com/engine/tutorials/dockervolumes/).

This container is a thin layer on top of [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/)
and [postgres](https://hub.docker.com/_/postgres/).  See those descriptions
for details in how to customize the start up and configuration.

Currently, the geonames database is always installed as the admin user (`postgres`)
and no other database users or roles are initialized.
