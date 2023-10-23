-- vimoptions.lua

local set = vim.opt

set.hlsearch = true				                    -- highlight search
set.incsearch = true			                    -- incremental search
set.expandtab = true			                    -- use spaces instead of tabs
set.tabstop = 4					                    -- tab width
set.softtabstop = 4				                    -- see multiple spaces as tabstops so <BS> does the right thing
set.shiftwidth = 4				                    -- width for autoindents
set.autoindent = true			                    -- indent a new line the same amount as the line just typed
set.relativenumber = true				            -- add relative line numbers
set.number = true				                    -- add line numbers (this overwrites the relative line number 0 
                                                    --   on the current line with the actual line number)
set.wildmode = "longest,list"	                    -- get bash-like tab completions
set.guicursor = "i:block"		                    -- set cursor to block also in insert mode
set.cursorline = true			                    -- show line number on which the cursor is
set.clipboard = "unnamedplus"	                    -- using system clipboard
set.ttyfast = true				                    -- speed up scrolling in vim
set.completeopt = "menu,menuone,noselect"
set.foldmethod = "manual"
set.signcolumn = "yes"                              -- enable signal column to display signals before line numbers

-- open new split panes to right and below
set.splitright = true
set.splitbelow = true
