FROM ponylang/ponyc:latest

RUN  apt-get update && \
  apt-get -y --force-yes install \
  curl \
  git \
  jq \
  python \
  python-dev \
  python-pip \
  vim \
  wget \
  libpcre2-dev \
  libssl-dev

RUN curl -O 'https://dl.cloudsmith.io/public/main-pony/pony-nightlies/raw/versions/latest/stable-x86-64-unknown-linux.tar.gz' \
&& tar xvf stable* \
&& cp nightly-*/bin/stable /usr/local/bin/ \
&& rm -rf nightly-* *.tar.gz

RUN curl -O 'https://dl.cloudsmith.io/public/main-pony/pony-nightlies/raw/versions/latest/corral-x86-64-unknown-linux.tar.gz' \
&& tar xvf corral* \
&& cp nightly-*/bin/corral /usr/local/bin \
&& rm -rf nightly-* *.tar.gz

RUN pip install --upgrade pip
RUN pip install mkdocs
RUN pip install mkdocs mkdocs-ponylang
