FROM ponylang/ponyc:latest

RUN  apt-get update && \
  apt-get -y --force-yes install curl \
  git \
  jq \
  python \
  python-dev \
  python-pip \
  vim \
  wget

RUN pip install --upgrade pip
RUN pip install mkdocs
RUN pip install mkdocs mkdocs-ponylang
