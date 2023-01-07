# linkerd lab

## Intro
The aim of this lab is trying [`linkerd`](https://linkerd.io/). \
In this lab I spin up a simple architecture compose by 7 distinct application:
* `countries`
* `capitals`
* `languages`
* `currencies`
* `currencies-code`
* `currencies-name`
* `currencies-symbol`

## Prerequisites
1. [`docker`](https://www.docker.com/)
2. [`kubectl`](https://kubernetes.io/docs/tasks/tools/)
3. [`kind`](https://kind.sigs.k8s.io/)
4. [`yq`](https://github.com/mikefarah/yq)
5. [`jq`](https://stedolan.github.io/jq/download/)
6. [`linkerd cli`](https://linkerd.io/2.12/getting-started/#step-1-install-the-cli)

## Architecture diagram
![`image_001`](./diagrams_and_images/image_001.png)

## Repository structure
```text
├── Makefile
├── Readme.md
├── containers
│   ├── capitals
│   ├── countries
│   ├── currencies
│   ├── currenciescode
│   ├── currenciesname
│   ├── currenciessymbol
│   └── languages
├── diagrams_and_images
├── infra
└── utils
    └── configApp.sh
```

* `Makefile`: make file to automate all the architectural parts deployment
* `containers/capitals`: application to fetch for a certain country its capital
* `containers/countries`: application to fetch the country list ***(exposed via ingress)***
* `containers/currencies`: application to fetch for a certain country its currency data
* `containers/currenciescode`: application to fetch for a certain country its currency code
* `containers/currenciesname`: application to fetch for a certain country its currency name
* `containers/currenciessymbol`: application to fetch for a certain country its currency symbol
* `containers/languages`: application to fetch for a certain country its official language
* `infra`: folder containing additional resources necessary to run the architecture
* `utils`: folder containing some shell scripts to handle the installation

## Main make file target
```bash
make all # deploy the whole stack
```

```bash
make clean_up # destroy the clusters
```

## Install
```bash
make all
```
---
***Notes:***
Once the installation is over let's portforward the dashboard in order to access to its [`UI`](http://localhost:50750/)
```bash
linkerd viz dashboard &
```

---

## Let's start invoking the country service exposed via ingress
```bash
watch -n 1 curl -I http://localhost:80/countries
```
![`image_002`](./diagrams_and_images/image_002.png)




