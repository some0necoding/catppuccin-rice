-- init.lua

-- options
require('vimoptions')

-- autocmds
require('autocmds')

-- color mode
require('theme').set('dark')

-- plugins
require('plugins')

-- setup plugins
require('plugins-setup/alpha-setup')
require('plugins-setup/pets-setup')
require('plugins-setup/nvim-tree-setup')
require('plugins-setup/nvim-autopairs-setup')
require('plugins-setup/nvim-ts-autotag-setup')
require('plugins-setup/nvim-lsp-setup')
require('plugins-setup/nvim-cmp-setup')
require('plugins-setup/lualine-setup')
require('plugins-setup/colorschemes-setup')

-- colorscheme
require('colorscheme').set('catppuccin-mocha')

-- keybindings
local key = require('key')

-- move line or visually selected block - ALT+j/k
key.map("n", "<A-j>", ":m .+1<CR>")
key.map("n", "<A-k>", ":m .-2<CR>")

-- telescope search
key.map("n", '<A-f>', ':Telescope find_files<CR>')
key.map("n", '<A-g>', ':Telescope live_grep<CR>')
