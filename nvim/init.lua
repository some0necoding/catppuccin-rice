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
require('alpha-setup')
require('pets-setup')
require('nvim-tree-setup')
require('nvim-autopairs-setup')
require('nvim-ts-autotag-setup')
require('nvim-lsp-setup')
require('nvim-cmp-setup')
require('lualine-setup')
require('colorschemes-setup')

-- colorscheme
require('colorscheme').set('catppuccin-frappe')

-- keybindings
local key = require('key')

-- move line or visually selected block - ALT+j/k
key.map("n", "<A-j>", ":m .+1<CR>")
key.map("n", "<A-k>", ":m .-2<CR>")

-- telescope search
key.map("n", '<A-f>', ':Telescope find_files<CR>')
key.map("n", '<A-g>', ':Telescope live_grep<CR>')
