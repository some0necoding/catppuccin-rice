-- init.lua

-- options
require('vimoptions')

-- color mode
require('theme').set('dark')

-- plugins
require('plugins')

-- setup plugins
require('alpha-setup')
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

-- move between panes to left/bottom/top/rigth
key.map("n", "<S-h>", "<C-w>h")
key.map("n", "<S-j>", "<C-w>j")
key.map("n", "<S-k>", "<C-w>k")
key.map("n", "<S-l>", "<C-w>l")

-- tab management
key.map("n", "<C-t>", ":tabnew<CR>")
key.map("n", "<C-l>", ":tabnext<CR>")
key.map("n", "<C-h>", ":tabprev<CR>")
key.map("n", "<C-w>", ":bd<CR>")

-- deleted text is not copied to the clipboard
key.map("n", 'd$', '"_d$')
key.map("n", 'dw', '"_dw')
key.map("n", 'x', '"_x')

-- vim jump to the last position when reopening a file
require('rememberline')
