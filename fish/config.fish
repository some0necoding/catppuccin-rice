if status is-interactive
    set -gx EDITOR nvim
    set -gx VISUAL nvim
    set -gx SHELL fish
    set -gx BROWSER firefox
	set -gx PF_ASCII "Catppuccin"
	set -gx XCURSOR_THEME "Breeze_Default"
	set -gx XCURSOR_SIZE 24
    set -gx XDG_PICTURES_DIR ~/Pictures
    set -gx XDG_CONFIG_HOME ~/.config
    set -gx GNUPGHOME ~/.gnupg
    set -gx DOCKER_HOST unix://$XDG_RUNTIME_DIR/docker.sock
    set -gx GRIPHOME ~/.config/grip
    set -gx QT_SELECT 6
    set -gx QML_IMPORT_PATH /usr/lib/qt/qml
    set -gx GCM_CREDENTIAL_STORE gpg
    set -gx GPG_TTY $(tty)
end

alias ls="lsd"

fish_add_path /home/marco/.spicetify
fish_add_path /usr/lib/jvm
