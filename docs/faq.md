---
sidebar_position: 3
---

# Frequently Asked Questions

### Is it possible to use NOMAD as datastore only without submission portal?

Yes, you can. NOMAD will pick and archive datasets with a name in generic format XXX-XXX-username (for example **$NUMERICDATE-$HOLDER-username**) submitted directly through IconNMR and it will even add user and group into database if they don't exist already (see **[Auto-feed](./getting-started/tips.md/#auto-feed)**) Other formats of dataset names including tagging users using originator items can be easily implemented if you drop us an **[e-mail](mailto:nomad@st-andrews.ac.uk)**. However, this workflow has couple of drawbacks. Firstly, status tables on NOMAD dashboard won't show solvent, submitted at, day/night experiment info. Moreover, there is a possibility that a user chooses a wrong dataset name or originator item and tags data incorrectly. That is possible fault is completely eliminated if NOMAD submission portal is employed. Moreover, submission portal brings quite few handy functions for significantly improved traffic control within the lab.

### Can we trial NOMAD without installing our own server?

Yes, we can grant you admin access to our **[demo server](http://demo.nomad-nmr.uk/)** and then you can connect your instrument to get some hands on experience and try few things out. More detailed instructions can be found **[here](./getting-started/tips.md)**.

### Is it possible to run NOMAD alongside our existing data archiving solution?

In most cases, the short answer is yes but there is one possible exception.

NOMAD creates a copy of data stored by Topspin/IconNMR in the spectrometer PC and sends it to the server. Therefore, there is no need to do any changes to data storage paths settings in IconNMR and thus NOMAD should not interfere with your existing data archiving system. However, NOMAD submission portal creates dataset name in a certain format. Therefore, if you use some more sophisticated archiving system that requires dataset name in a different format then your legacy data archiving system won't work if NOMAD submission portal is used.
