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
require('plugins-setup/copilot-setup')
require('plugins-setup/gitsigns-setup')

-- colorscheme
require('colorscheme').set('catppuccin-macchiato')

-- keybindings
local key = require('key')

-- move line or visually selected block - ALT+j/k
key.map("n", "<A-j>", ":m .+1<CR>")
key.map("n", "<A-k>", ":m .-2<CR>")

-- telescope search
key.map("n", '<A-f>', ':Telescope find_files<CR>')
key.map("n", '<A-g>', ':Telescope live_grep<CR>')

-- copilot
key.map("i", '<C-J>', 'copilot#Accept("<CR>")', { silent = true, expr = true })

-- gitsigns
key.map("n", 'gb', ':Gitsigns toggle_current_line_blame<CR>')

-- vim tmux navigator
vim.g.tmux_navigator_no_mappings = 1
key.map("n", "<C-w>h", ":<C-U>TmuxNavigateLeft<cr>",     { silent = true })
key.map("n", "<C-w>j", ":<C-U>TmuxNavigateDown<cr>",     { silent = true })
key.map("n", "<C-w>k", ":<C-U>TmuxNavigateUp<cr>",       { silent = true })
key.map("n", "<C-w>l", ":<C-U>TmuxNavigateRight<cr>",    { silent = true })
key.map("n", "<C-w>p", ":<C-U>TmuxNavigatePrevious<cr>", { silent = true })
