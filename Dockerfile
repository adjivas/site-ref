FROM logankoester/archlinux
LABEL name="archonrails"
MAINTAINER adjivas <adjivas@users.noreply.github.com>

ENV USER adjivas
ENV LANG en_US.UTF-8
ENV TERM xterm-256color
ENV EDITOR nano
ENV HOME /home/$USER

RUN pacman -S --needed --noprogressbar --noconfirm base-devel ;
RUN pacman -S --noconfirm emacs ;
RUN pacman -S --noconfirm vim ;
RUN pacman -S --noconfirm ruby ;
RUN pacman -S --noconfirm nodejs ;
RUN pacman -S --noconfirm postgresql ;
RUN pacman -S --noconfirm sqlite ;
RUN pacman -S --noconfirm nginx ;
RUN pacman -S --noconfirm git ;
RUN pacman --noconfirm -S sudo ;
RUN echo "$USER ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers ;
RUN useradd --create-home $USER ;
RUN echo -e "$USER\n$USER" | passwd ;
RUN git clone https://github.com/adjivas/site-ref.git $HOME/ref ;
RUN chown -R $USER $HOME/ref
USER $USER

# Configuration *Ruby on Rails*

ENV GEM_HOME="\$(ruby -e 'print Gem.user_dir')"
ENV GEM_PATH="$GEM_HOME"
RUN echo "gem: --no-document" >> $HOME/.gemrc ;
RUN echo "export GEM_HOME=\"$GEM_HOME\"" >> $HOME/.bashrc ;
RUN echo "export GEM_PATH=\"$GEM_HOME\"" >> $HOME/.bashrc ;
RUN echo "export PATH=\"$GEM_HOME/bin:\$PATH\"" >> $HOME/.bashrc ;
RUN echo -e "\n\
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
	curl -L https://toolbelt.heroku.com/install.sh | sudo sh\\n\
fi" >> $HOME/.bashrc ;
RUN echo "export PATH=\"/usr/local/heroku/bin:\$PATH\"" >> $HOME/.bashrc ;

# Perso
RUN echo "alias gpush=\"git push origin master\"" >> $HOME/.bashrc ;
RUN echo "alias hpush=\"git push heroku master\"" >> $HOME/.bashrc ;
RUN echo ":syntax on" >> $HOME/.vimrc ;
RUN echo ":set number" >> $HOME/.vimrc ;

# Main

ENTRYPOINT bash
WORKDIR $HOME/ref
