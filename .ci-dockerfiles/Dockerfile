FROM ponylang/changelog-tool:0.3.0 AS changelog-tool

FROM ponylang/ponyc:latest

COPY --from=changelog-tool /usr/local/bin/changelog-tool /usr/local/bin/changelog-tool

RUN  apt-get update && \
  apt-get -y install \
  curl \
  git \
  jq \
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
