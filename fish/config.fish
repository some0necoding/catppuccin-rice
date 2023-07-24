if status is-interactive
	set -gx PF_ASCII "Catppuccin"
	set -gx XCURSOR_THEME "Breeze_Default"
	set -gx XCURSOR_SIZE 24
    set -gx XDG_PICTURES_DIR ~/Pictures

    umask 077
    export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock
end

alias ls="lsd"

fish_add_path /home/marco/.spicetify
fish_add_path /usr/lib/jvm
