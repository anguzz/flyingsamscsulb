# Flying Samaritans CSULB Website (Legacy)

This repository contains the previous Svelte-based website for the Flying Samaritans CSULB chapter.

## Status

This site is no longer actively maintained.

The official club website content is now hosted on Google Sites for simpler long-term management by future club officers and other non-technical maintainers.

The domain is still owned and managed by the current GitHub account holder.

## Official Website

Primary domain:  
[https://flyingsamscsulb.com](https://flyingsamscsulb.com)

Canonical website URL:  
[https://www.flyingsamscsulb.com](https://www.flyingsamscsulb.com)

Google Sites URL:  
[https://sites.google.com/view/flyingsamscsulb](https://sites.google.com/view/flyingsamscsulb)

## Reason for Migration

The previous site was built using:

- Svelte
- GitHub
- Vercel

While fully functional, it required technical knowledge for:

- code updates
- deployment management
- DNS configuration
- hosting platform maintenance

To make future maintenance easier for incoming club leadership, the website content was moved to Google Sites.

## Current Hosting and Domain Setup

The current setup separates content hosting from domain redirection:

- `www.flyingsamscsulb.com` serves the live website through Google Sites
- `flyingsamscsulb.com` redirects to `https://www.flyingsamscsulb.com`
- Vercel is used only to handle the root-domain redirect
- Google Sites is used to host the actual website content

This allows both versions of the domain to work while keeping a single canonical public URL.

## DNS Configuration Overview

The domain DNS is managed through Vercel DNS.

### Domain Routing Summary

- `www.flyingsamscsulb.com` → Google Sites
- `flyingsamscsulb.com` → Vercel redirect project → `https://www.flyingsamscsulb.com`

### How the Redirect Works

The root domain (`flyingsamscsulb.com`) is connected to a dedicated Vercel project whose only purpose is to redirect traffic to the `www` version of the site.

That project contains a `vercel.json` file with the redirect rule:

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "https://www.flyingsamscsulb.com/$1",
      "permanent": true
    }
  ]
}
````

When a request comes in for `flyingsamscsulb.com`, DNS sends that traffic to Vercel’s edge network. Because the domain is attached to the redirect project, Vercel applies the redirect rule and forwards the visitor to the canonical `www` address.

In practice, this means:

* `https://flyingsamscsulb.com`
* `https://flyingsamscsulb.com/home`
* `https://flyingsamscsulb.com/contact`

all redirect to the matching path under:

* `https://www.flyingsamscsulb.com`

This redirect is intended to be permanent.

## Active DNS Records

The important records in this setup are:

* **Root / apex domain** → Vercel

  * Used only for redirect handling
* **CNAME (`www`)** → `ghs.googlehosted.com`

  * Points the live website subdomain to Google Sites
* **TXT (`google-site-verification`)**

  * Used to verify ownership with Google
* **CAA records**

  * Restrict which certificate authorities can issue SSL certificates for the domain

## Why This Setup Was Chosen

This architecture keeps content management simple while preserving a clean public-facing domain.

Benefits of this arrangement:

* non-technical club officers can update the website through Google Sites
* visitors can use either the root domain or the `www` domain
* all public traffic is standardized to one canonical URL
* the previous codebase remains archived for reference or future redevelopment

## Archive Purpose

This repository is retained for:

* historical reference
* backup of previous design and content
* potential future redevelopment

## Legacy Stack

The archived version of the site was built with:

* Svelte
* GitHub
* Vercel

## Maintainer Note

This repository is preserved as a legacy codebase and is not the current production source of the club website.

The live site content is managed through Google Sites. Vercel remains part of the setup only for root-domain redirect handling.


