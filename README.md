# Flying Samaritans CSULB Website (Legacy)

This repository contains the previous Svelte-based website for the Flying Samaritans CSULB chapter.

## Status

This site is no longer actively maintained.

The official club website has been migrated to Google Sites for simpler long-term management by non-technical officers.

The domain is still owned and managed by the current GitHub account holder.

## Official Website

Primary domain:
[https://flyingsamscsulb.com](https://flyingsamscsulb.com)

Google Sites URL:
[https://sites.google.com/view/flyingsamscsulb](https://sites.google.com/view/flyingsamscsulb)

---

## Reason for Migration

The previous site was built using:

* Svelte
* GitHub
* Vercel

While fully functional, it required technical knowledge for:

* Code updates
* Deployment management
* DNS configuration
* Hosting platform maintenance

To ensure continuity across future club leadership transitions, the website was moved to Google Sites.

---

## DNS Configuration Overview

The domain is managed through Vercel DNS.

Current active DNS entries:

* **CNAME (www)** → `ghs.googlehosted.com`

  * This points the public domain to Google Sites hosting.

* **TXT (google-site-verification)**

  * Used to verify domain ownership with Google.

* **CAA records**

  * Restrict which certificate authorities can issue SSL certificates for the domain.

Vercel’s default ALIAS records remain visible because Vercel controls the nameservers. However, the custom CNAME record for `www` overrides the default hosting behavior. The domain now resolves to Google Sites rather than Vercel.

No application hosting is currently performed on Vercel.

---

## Archive Purpose

This repository is retained for:

* Historical reference
* Backup of previous design and content
* Potential future redevelopment

