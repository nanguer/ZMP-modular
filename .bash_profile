# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
        . ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin
BASH_ENV=$HOME/.bashrc
USERNAME=""
APIKEY="AIzaSyDrYK5YivP11MyhTocPzRiu_z_6qYxyX20"

export USERNAME BASH_ENV PATH APIKEY
