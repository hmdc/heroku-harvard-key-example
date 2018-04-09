# heroku-harvard-key-example

This is a simple NodeJS Express app which serves static text behind a Harvard Key wall provided by our Apache buildpack.

# Setup
Use the following buildpack:
```https://github.com/hmdc/heroku-buildpack-apache```

Make sure that your actual app is in the first buildpack slot and the apache buildpack is in the second buildpack slot.

Create a Procfile as shown in your repo

```
web: bash ./boot.sh npm start
```

For Shiny, you'll need to replace the above with the following
```
web: bash ./boot.sh fakechroot fakeroot chroot /app/.root /bin/sh -c 'cd /app && /usr/bin/R -f /app/run.R --gui-none --no-save'
```

You will also **need** to set the following Heroku environment variable

```
CAS_HOSTNAME
```

This is the hostname which will be forwarded to Harvard Key, so, if your primary hostname is vpal.hmdc.harvard.edu, you will
need to set the heroku environment variable CAS_HOSTNAME as follows

```
heroku config:set CAS_HOSTNAME=vpal.hmdc.harvard.edu
```

You will also need to change the hostname in the Heroku app's settings to the above hostname
under the Domains and certificates section.

To test locally, you can edit your /etc/hosts and alias vpal.hmdc.harvard.edu to the IP address of your Heroku DNS target.
