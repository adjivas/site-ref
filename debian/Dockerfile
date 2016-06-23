FROM debian:jessie
LABEL name="debianrails"
MAINTAINER adjivas <adjivas@users.noreply.github.com>

ENV USER adjivas
ENV LANG en_US.UTF-8
ENV TERM xterm-256color
ENV EDITOR nano
ENV HOME /home/$USER

RUN apt-get update
RUN apt-get install -y emacs ;
RUN apt-get install -y vim ;
RUN apt-get install -y ruby ;
RUN apt-get install -y nodejs ;
RUN apt-get install -y rails ;
RUN apt-get install -y libpq-dev ;
RUN apt-get install -y postgresql ;
RUN apt-get install -y libsqlite3-dev ;
RUN apt-get install -y curl ;
RUN apt-get install -y man ;
RUN apt-get install -y git ;
RUN apt-get install -y tmux ;
RUN apt-get install -y links ;

RUN apt-get install -y locales
RUN dpkg-reconfigure locales && \
    locale-gen C.UTF-8 && \
    /usr/sbin/update-locale LANG=C.UTF-8
RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && \
    locale-gen
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN apt-get -y install sudo ;
RUN echo "$USER ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers ;
RUN adduser $USER ;
RUN gpasswd --add $USER sudo ;
RUN git clone https://github.com/adjivas/site-ref.git $HOME/ref ;
RUN chown $USER -R $HOME/ref
USER $USER

# Heroku

RUN curl -L https://toolbelt.heroku.com/install.sh | sh

# Configuration *Ruby on Rails*

ENV GEM_HOME="\$(ruby -e 'print Gem.user_dir')"
ENV GEM_PATH="$GEM_HOME"

RUN echo "gem: --no-document" >> $HOME/.gemrc ;
RUN echo "export GEM_HOME=\"$GEM_HOME\"" >> $HOME/.bashrc ;
RUN echo "export GEM_PATH=\"$GEM_HOME\"" >> $HOME/.bashrc ;
RUN echo "export PATH=\"$GEM_HOME/bin:\$PATH\"" >> $HOME/.bashrc ;
RUN echo "\n\
if [[ \"\$SHLVL\" == \"2\" ]];then\\n\
	git config --global user.email \"\$USER@users.noreply.github.com\" \\n\
	git config --global user.name "\$USER" \\n\
	gem install bundler\\n\
	gem install rails\\n\
	gem update\\n\
 	gem install rails -v 4.2.2\\n\
	gem install gmaps4rails\\n\
	gem install postgresql\\n\
	gem install sqlite3\\n\
fi" >> $HOME/.bashrc ;
RUN echo "export PATH=\"/usr/local/heroku/bin:\$PATH\"" >> $HOME/.bashrc ;

# Perso
RUN echo "alias gpush=\"git push origin master\"" >> $HOME/.bashrc ;
RUN echo "alias hpush=\"git push heroku master\"" >> $HOME/.bashrc ;
RUN echo "git config --global user.email \"$USER@users.noreply.github.com\"" >> $HOME/.bashrc ;
RUN echo "git config --global user.name \"$USER\"" >> $HOME/.bashrc ;
RUN echo "git config --global credential.helper \"cache --timeout 7200\"" >> $HOME/.bashrc ;

RUN echo ":syntax on" >> $HOME/.vimrc ;
RUN echo ":set number" >> $HOME/.vimrc ;

# Main

ENTRYPOINT tmux
WORKDIR $HOME/ref
